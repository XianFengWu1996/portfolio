import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            aut?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse
            amet incidunt, enim fuga mollitia architecto quod facere adipisci
            fugiat sapiente inventore reiciendis rem magni, nobis eos, illo
            obcaecati perferendis doloremque iste libero quisquam blanditiis
            ipsum! Nemo repellat earum recusandae voluptatibus assumenda
            repudiandae, sunt aliquid repellendus in doloribus beatae deleniti
            quaerat, vitae placeat quam rerum officiis ab? Neque, possimus
            veritatis explicabo vel minus provident cupiditate temporibus
            corrupti nostrum tempore magnam quos ipsam, in ipsum dolore sed,
            esse quasi doloremque asperiores tempora nesciunt quas dicta commodi
            error? Porro, magnam. Esse deleniti hic numquam optio consequatur
            similique molestias id quos, blanditiis sed!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 round-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <Image
            className="rounded-xl"
            src="/assets/images/about.jpg"
            alt="about image"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
