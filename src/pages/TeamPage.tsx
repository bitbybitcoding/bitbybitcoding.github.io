import { MentorsSection } from '@/sections/MentorsSection';

export function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-12">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bit-dark dark:text-white mb-3">
            Meet the Team
          </h1>
          <p className="text-bit-dark/70 dark:text-gray-300 max-w-2xl mx-auto">
            Our volunteer tutors, mentors, and builders working to democratise coding education.
          </p>
        </div>
        <MentorsSection />
      </main>
    </div>
  );
}
