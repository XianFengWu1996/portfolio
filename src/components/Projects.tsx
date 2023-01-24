import propertyImg from 'public/assets/images/projects/property.jpg';
import cryptoImg from 'public/assets/images/projects/crypto.jpg';
import netflixImg from 'public/assets/images/projects/netflix.jpg';
import twitchImg from 'public/assets/images/projects/twitch.jpg';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Project
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            lang="React JS"
            imgSrc={propertyImg}
            link="/"
          />

          <ProjectItem
            title="Crypto App"
            lang="React JS"
            imgSrc={cryptoImg}
            link="/"
          />

          <ProjectItem
            title="Netflix Clone"
            lang="React JS"
            imgSrc={netflixImg}
            link="/"
          />

          <ProjectItem
            title="Twitch Clone"
            lang="React JS"
            imgSrc={twitchImg}
            link="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
