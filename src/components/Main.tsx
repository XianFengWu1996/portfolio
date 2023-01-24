import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p>Let&apos;s Build Something Together</p>

          <h1 className="py-2 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Shawn</span>
          </h1>

          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam
            alias magni doloremque, commodi iure veniam labore harum ullam,
            possimus illo eum voluptatum nemo sed voluptas eveniet quaerat?
            Deserunt praesentium deleniti optio facilis ab recusandae quam magni
            nemo asperiores, tenetur libero obcaecati itaque nesciunt
            accusantium enim velit? Odit, vitae repellat?
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaLinkedinIn />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaGithub />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500">
              <AiOutlineMail />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
