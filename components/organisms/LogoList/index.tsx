import React from 'react';

const LogoList = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <h2 className="text-3xl text-white font-bold mb-4 px-5" data-aos="fade-left">
          Core Values
        </h2>
        <ul className="flex flex-col gap-4 md:gap-0 border-y border-borderLight">
          <li className="text-white text-xl px-5 list-disc">Excellence</li>
          <li className="text-white text-xl px-5 list-disc">Creativity</li>
          <li className="text-white text-xl px-5 list-disc">Inclusivity</li>
          <li className="text-white text-xl px-5 list-disc">Collaboration</li>
          <li className="text-white text-xl px-5 list-disc">Accountability</li>
          <li className="text-white text-xl px-5 list-disc">Sustainability</li>
        </ul>
        <p className="text-white text-xl px-5 mt-4">
        We strive for excellence in all aspects of our work, encouraging and supporting creative thinking and innovation. We promote diversity, equity, and inclusion in the arts, creating a welcoming and inclusive environment for all participants in our programs and initiatives. CALI believes in the power of collaboration and partnership to achieve common goals, taking responsibility for their actions and decisions and working transparently and accountably. Finally, we recognize the importance of sustainability in the arts sector and promote practices that ensure the long-term viability and resilience of the arts in Kenya.

        </p>
      </div>
    </section>
  );
};

export default LogoList;
