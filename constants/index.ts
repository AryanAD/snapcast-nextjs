export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/streamcast-bcavi",
  CDN_URL: "https://streamcast-bcavi.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-b4147449-4b5.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    views: 100,
    username: "Jason",
    duration: 156,
    visibility: "public",
    createdAt: new Date("2025-12-01"),
    userImg: "/assets/images/jason.png",
    title: "StreamCast Message",
    thumbnail: "/assets/samples/thumbnail1.png",
  },
  {
    id: "2",
    views: 250,
    username: "Alex",
    duration: 342,
    visibility: "public",
    createdAt: new Date("2025-11-28"),
    userImg: "/assets/images/alex.png",
    title: "Web Development Tips",
    thumbnail: "/assets/samples/thumbnail2.png",
  },
  {
    id: "3",
    views: 180,
    username: "Emily",
    duration: 210,
    visibility: "private",
    createdAt: new Date("2025-11-25"),
    userImg: "/assets/images/emily.png",
    title: "React Hooks Tutorial",
    thumbnail: "/assets/samples/thumbnail3.png",
  },
  {
    id: "4",
    views: 520,
    username: "David",
    duration: 428,
    visibility: "public",
    createdAt: new Date("2025-11-20"),
    userImg: "/assets/images/david.png",
    title: "Next.js 15 Features",
    thumbnail: "/assets/samples/thumbnail4.png",
  },
  {
    id: "5",
    views: 145,
    username: "Jessica",
    duration: 189,
    visibility: "public",
    createdAt: new Date("2025-11-18"),
    userImg: "/assets/images/jessica.png",
    title: "TypeScript Best Practices",
    thumbnail: "/assets/samples/thumbnail5.png",
  },
  {
    id: "6",
    views: 380,
    username: "Sarah",
    duration: 275,
    visibility: "public",
    createdAt: new Date("2025-11-15"),
    userImg: "/assets/images/sarah.png",
    title: "UI/UX Design Guide",
    thumbnail: "/assets/samples/thumbnail6.png",
  },
  {
    id: "7",
    views: 210,
    username: "Michael",
    duration: 198,
    visibility: "private",
    createdAt: new Date("2025-11-12"),
    userImg: "/assets/images/michael.png",
    title: "Database Optimization",
    thumbnail: "/assets/samples/thumbnail7.png",
  },
  {
    id: "8",
    views: 465,
    username: "Lisa",
    duration: 356,
    visibility: "public",
    createdAt: new Date("2025-11-10"),
    userImg: "/assets/images/lisa.png",
    title: "Cloud Deployment Strategies",
    thumbnail: "/assets/samples/thumbnail8.png",
  },
];
