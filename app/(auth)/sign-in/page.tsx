import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>StreamCast</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  width={20}
                  height={20}
                  src="/assets/icons/star.svg"
                  alt="review stars"
                />
              ))}
            </figure>
            <p>
              {`StreamCast makes screen recording easy. From quick walkthroughs to
              full presentations, it's fast, smooth and shareable in seconds.`}
            </p>

            <article>
              <Image
                src="/assets/images/jason.png"
                alt="Steve Smith"
                className="rounded-full"
                width={64}
                height={64}
              />
              <div>
                <h2>Steve Smith</h2>
                <p>Product Manager, SolidTech</p>
              </div>
            </article>
          </section>
        </div>
        <p>
          &copy; StreamCast {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            <h1>StreamCast</h1>
          </Link>
          <p>
            Create and share your very first <span>StreamCast video</span> in no
            time.
          </p>
          <button>
            <Image
              src="/assets/icons/google.svg"
              alt="Google Logo"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;
