
// import Link from 'next/link';
// import Image from 'next/image'; // Import Image component

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-sm z-50">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center space-x-4">
//             {/* Profile Picture */}
//             <Image
//               src="/profile.jpg" // Replace with the path to your profile picture
//               alt="Profile Picture"
//               width={40} // Adjust width as needed
//               height={40} // Adjust height as needed
//               className="rounded-full" // Makes the image circular
//             />
//             {/* Name/Logo */}
//             <Link href="/" className="text-xl font-bold text-gray-800">
//               Harisa Saeed
//             </Link>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
//               Home
//             </Link>
//             <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
//               About
//             </Link>
//             <Link href="/projects" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
//               Projects
//             </Link>
//             <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black to-gray-400 shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            <Image
              src="/profile.jpg" // Replace with the path to your profile picture
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            {/* Name/Logo */}
            <Link href="/" className="text-xl font-bold text-white">
              Harisa Saeed
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
