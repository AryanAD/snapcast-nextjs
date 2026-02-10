"use client";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import {
  getThumbnailUploadUrl,
  getVideoUploadUrl,
  saveVideoDetails,
} from "@/lib/actions/video";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type FormData = {
  title: string;
  description: string;
  visibility: "public" | "private";
};

const uploadFileToBunny = (
  file: File,
  uploadUrl: string,
  accessKey: string,
): Promise<void> => {
  return fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
      AccessKey: accessKey,
    },
    body: file,
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to upload file.");
    }
  });
};

const Page = () => {
  const router = useRouter();

  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const [error, setError] = useState<string | null>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    visibility: "public",
  });

  useEffect(() => {
    if (video.duration !== null || 0) setVideoDuration(video.duration);
  }, [video.duration]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (!video.file || !thumbnail.file) {
        setError("Please upload a video and thumbnail file.");
        return;
      }

      if (!formData.title || !formData.description) {
        setError("Please fill in all the fields.");

        return;
      }

      // 1. Get Upload URL and upload video to Bunny
      const {
        videoId,
        uploadUrl: videoUploadUrl,
        accessKey: videoAccessKey,
      } = await getVideoUploadUrl();

      if (!videoUploadUrl || !videoAccessKey)
        throw new Error("Failed to get video upload credentials.");

      await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey);

      // 2. Get Upload URL and upload thumbnail to Bunny

      const {
        accessKey: thumbnailAccessKey,
        uploadUrl: thumbnailUploadUrl,
        cdnUrl: thumbnailCdnUrl,
      } = await getThumbnailUploadUrl(videoId);

      if (!thumbnailUploadUrl || !thumbnailCdnUrl || !thumbnailAccessKey)
        throw new Error("Failed to get thumbnail upload credentials.");

      await uploadFileToBunny(
        thumbnail.file,
        thumbnailUploadUrl,
        thumbnailAccessKey,
      );

      await saveVideoDetails({
        videoId,
        thumbnailUrl: thumbnailCdnUrl,
        ...formData,
        duration: videoDuration,
      });

      router.push(`/video/${videoId}`);
    } catch (error) {
      console.log("error submitting the form: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>

      {error && <div className="error-field">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a video title"
        />

        <FormField
          as="textarea"
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your video"
        />

        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />

        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FormField
          as="select"
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />

        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
};

export default Page;
