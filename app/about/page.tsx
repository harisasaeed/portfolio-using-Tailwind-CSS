import React from 'react';
import Image from 'next/image';


export default function About() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
          <p className="text-gray-600 mb-4">
            I am a passionate developer with expertise in modern web technologies.
            With years of experience in building responsive and user-friendly
            applications, I strive to create impactful digital solutions.
          </p>
          <p className="text-gray-600">
            My journey in web development started 3 years ago, and since then,
            I have worked with various technologies including React, Next.js, Node.js,
            and many more.
          </p>
        </div>
        <div className="relative h-[500px] w-full">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}