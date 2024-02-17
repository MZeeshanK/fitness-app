import Logo from "/assets/Logo.png";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex ">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            deserunt iure, neque aliquam numquam debitis laborum fugit odit
            distinctio, tempore veniam provident. Ab facilis nesciunt quis
            voluptate excepturi non nam deserunt labore ex. Beatae accusamus
          </p>
          <p>&copy; EvoGym All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>+91 90239 57023</p>
        </div>
      </div>
    </footer>
  );
}
