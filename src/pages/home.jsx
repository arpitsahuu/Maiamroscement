import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        {/* <video className="absolute top-0 left-0 w-full h-full object-cover" src={"/img/mainvideo.mp4"} autoPlay="true" /> */}
        <video
  className="absolute top-0 left-0 w-full h-full object-cover"
  src={"/img/mainvideo.mp4"}
  autoPlay={true}
  controls // Add controls attribute to show playback controls
  muted // Add muted attribute to ensure autoplay works (some browsers require this)
  onError={(e) => console.error("Video Error:", e)} // Add error handling
/>
        {/* <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
      <source src={"/img/mainvideo.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
    {/* <div className="absolute top-[100px] left-0 w-full h-full bg-black opacity-80"></div> */}
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black uppercase"
              >
                maiamros cement
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Empowering Builders Worldwide with Unmatched Strength and Reliability: Maiamros Cement – Crafting Foundations, Building Futures.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold uppercase"
                color="blue-gray"
              >
                maiamros cement
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              At Maiamros Cement, we take pride in our commitment to quality and durability. With a legacy built on innovation and reliability, we understand the importance of strong foundations in every project. Our cement stands as a testament to our dedication, offering unmatched strength and resilience.
              <br /> <br /> Whether it's towering skyscrapers or humble abodes, Maiamros Cement ensures that every structure stands the test of time. With our expertise and unwavering standards, we strive to empower builders and developers to create the foundations of a brighter future. Trust Maiamros Cement to lay the groundwork for success, one solid block at a time."
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              {/* <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card> */}
              <img src="/img/maiamrocement.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[80vh] w-full bg-[url('/img/secondbg.webp')] bg-cover bg-center">
          <div className="flex gap-4 w-full justify-center text-sm uppercase pt-8 text-gray-600 sm:text-xl ">
            <div>
              <h2 className="md:block hidden">All-Weather Endurance</h2>
            </div>
            <div>
              <h2>Unparalleled Strength</h2>
            </div>
            <div>
              <h2 className="md:block hidden">Rust-Free Assurance</h2>
            </div>
            {/* <div className="lg:block hidden">
              <h2>Advanced Durability Formula:</h2>
            </div> */}
          </div>
          <div className="py-20 md:w-[500px] w-full md:mt-1 lg:md-20  text-center md:ms-28">
            <h2 className="text-xl md:text-4xl ">Partnering the building of dream homes</h2>
            <p className="md:pt-10 md:pe-16 text-sm px-6 pt-3 lg:leading-7 text-gray-700 md:leading-1">
Our world-class products and innovative solutions empower homebuilders at every stage of the construction journey, offering unparalleled structural durability and reliability. With a commitment to excellence, we deliver cutting-edge materials and expert guidance, ensuring that your construction projects withstand the test of time with unwavering strength and resilience.</p>
          </div>

        </div>
      </section>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section> */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
