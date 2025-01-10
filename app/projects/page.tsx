import Image from 'next/image';
import Link from 'next/link';

const projects = [
 
  {
    title: 'Resume Builder',
    description: 'Easy way to build your resume',
    image: '/project1.png',
    link: 'https://milestone-05-smoky.vercel.app/', // Add the link here
  },
  {
    title: 'Blog Website',
    description: 'A Responsive Blog web',
    image: '/project2.png',
    link: 'https://milestone-3-blog-website-bay.vercel.app/', // Add the link here
  },
  {
    title: 'E-Commerce Website',
    description: 'A responsive website built with Next.js',
    image: '/project3.png',
    link: 'https://milestone03-e-commerce-website-five.vercel.app/', // Add the link here
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-24 bg-gray-600">
      <h1 className="text-4xl font-bold text-white mb-12">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">





<Link href={project.link} target="_blank" rel="noopener noreferrer">
              
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="project-image"
              />
             
            
          </Link>
           
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}