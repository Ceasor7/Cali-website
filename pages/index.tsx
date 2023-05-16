import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import TeamCard from 'components/molecules/Card/TeamCard'
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - Cali">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center screen-75-vh justify-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Building a sustainable future for the arts."
              description="Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact."
              badge="CREATIVE ARTS LEADERSHIP INSTITUTE"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        
        {/* Logo List */}
        <LogoList />
        {/* description */}
        <section id="description" className="grid grid-cols-1 gap-6 screen-75-vh sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/write.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              //title="Everything is well planned, well designed and developed wholeheartedly"
              paragraph="CALI is a non-profit organization that focuses on promoting arts management in the country. It provides research, training, education, and resources to empower individuals and organizations working in the arts sector. Their aim is to create a more vibrant and sustainable arts sector in Kenya by undertaking research and increasing access to resources, funding, and growth opportunities."
              badge="Description"
            />
          </aside>
        </section>
        {/* Vision */}
        <section id="vision" className="grid grid-cols-1 gap-6 screen-75-vh sm:gap-8 place-items-center lg:grid-cols-2">
        <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                //title="We're a team of designers, engineers and analysts"
                paragraph="CALI's vision is to create a dynamic and inclusive arts sector that promotes creativity, cultural diversity, and social and economic development. We envision a future in which the arts are valued and supported as a vital component of Kenyan society, and in which individuals and organizations working in the arts sector have the skills, resources, and support they need to achieve their full potential.
                "
                badge="VISION"
              />
             
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/vision.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        {/* Vision */}

        {/* mission */}
        <section id="mission" className="grid grid-cols-1 gap-6 screen-75-vh sm:gap-8 place-items-center lg:grid-cols-2">
        <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/mission.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                //title="We're a team of designers, engineers and analysts"
                paragraph="CALI's mission is to support and empower individuals and organizations working in the arts sector by providing research, training, education, and resources to help build their capacity and effectiveness. We believe that a vibrant and sustainable arts sector is essential to Kenya's social and economic development, and we are committed to helping the sector thrive.
                ."
                badge="MISSION"
              />
            </div>
          </aside>         
        </section>

          
        <LineDivider />
        {/* Our team */}
        <section id="team" className="grid place-items-center gap-16">
  <div
    className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
    data-aos="zoom-in-up"
  >
    <SectionSentence
      badge="OUR TEAMS"
      title="Meet the team! All creative people are here"
    />
  </div>
  <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <div >
      <TeamCard
        imageSrc="/images/profileicon.webp"
        job="Chief Executive Officer"
        name="Kevin Kimani Kahuro"
      />
    </div>
    <div >
      <TeamCard
        imageSrc="/images/profileicon.webp"
        job=" Research and Training"
        name="Dr. Emmanuel Shikuku"
      />
    </div>
    <div >
      <TeamCard
        imageSrc="/images/profileicon.webp"
        job="Legal and advocacy"
        name="Faith Mwende"
      />
    </div>
    <div>
      <TeamCard
        imageSrc="/images/profileicon.webp"
        job=" Admin & Research Officer"
        name="Olwal Dickens"
      />
    </div>
  </div>
</section>



        {/* program details */}
        <section id="program" className="flex flex-col gap-16 items-center min-h-screen">
        <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              //title="Building a sustainable future for the arts."
              description="CALI offers several programs to support the development of the arts sector in Kenya. These programs include training workshops, leadership development programs, mentorship and coaching, advocacy and awareness-raising initiatives, and a research program. ."
              badge="PROGRAMS"
            />
          </div>
  <div className="w-full grid gap-10">
    <div >
      <PricingCard
        features={[
          'CALI research program aims to support evidence-based decision-making and contribute to the knowledge and understanding of the arts sector in Kenya.',
         
        ]}
      />
    </div>
    <div data-aos="fade-up" data-aos-delay="50">
      <PricingCard
        features={[
          'CALI training workshops focus on building skills in areas such as arts management, fundraising, marketing and audience development, financial management, and strategic planning.',
        ]}
      />
    </div>
    <div data-aos="fade-up-left">
      <PricingCard
        features={[
          'CALI leadership development programs aim to help emerging and established arts leaders build their skills and knowledge, deepen their understanding of the arts sector, and develop networks and connections with other arts professionals.',
          
        ]}
      />
    </div>
    <div data-aos="fade-up-right">
      <PricingCard
        features={[
          'CALI mentorship and coaching programs pair emerging arts leaders with experienced mentors in the arts sector, providing one-on-one guidance and support to help emerging arts leaders develop their skills, build their networks, and navigate the challenges of working in the arts sector.',
          
        ]}
      />
    </div>
    <div data-aos="fade-up" data-aos-delay="50">
      <PricingCard
        features={[
          'CALI advocacy and awareness-raising initiatives aim to raise public awareness of the importance of the arts and culture in Kenya, advocate for policies and funding that support the arts, and build partnerships and collaborations across sectors to support the growth and development of the arts sector. ',
        ]}
      />
    </div>
  </div>
</section>

        
      </PageTemplate>
    </>
  )
}

export default Home
