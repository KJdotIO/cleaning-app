import React from "react";
import Header from "../../components/Header";


const ReviewCard = ({ name, review, rating }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-[30px] max-w-sm w-full">
      <div className="flex items-center">
        <div className="flex-1">
          <h3 className="font-bold">{name}</h3>
          <div className="text-yellow-500">{renderStars()}</div>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{review}</p>
    </div>
  );
};


const ServiceCard = ({ icon, title, description, price, priceType, buttonText }) => {
  // Function to render price tag based on the type
  const renderPrice = () => {
    const priceClass = "bg-[#4E8AFF] text-white text-[13px] px-4 py-2 rounded-full flex items-center justify-center";
    return (
      <>
        {priceType === 'single' && (
          <div className={priceClass}>
            {price}
          </div>
        )}
        {priceType === 'bin' && (
          <div className='flex justify-center flex-wrap gap-[10px]'>
            <div className={`${priceClass}`}>
              Single Clean: <span className="font-bold ml-1">{price.single}</span>
            </div>
            <div className={priceClass}>
              Monthly: <span className="font-bold ml-1">{price.monthly}</span>
            </div>
          </div>
        )}
        {priceType === 'onRequest' && (
          <div className={priceClass}>
            {price}
          </div>
        )}
      </>
    );
  };

  return (
    <div className=" py-[20px] border-[#777777] border-[5px] rounded-xl p-4 shadow-md bg-white flex flex-col items-center max-w-[400px]">
      <div className='flex justify-start'>
        <img src={icon} alt={title} className="h-12 w-12 my-2" />
      </div>
      <div className='text-center'>
        <h2 className="text-xl font-bold my-2">{title}</h2>
        <p className="text-center my-2">{description}</p>
      </div>
      <div className="flex mt-[30px] justify-center gap-2">
        {renderPrice()}
      </div>
      <button className=" bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded  transition duration-300 my-[30px]">
        {buttonText}
      </button>
    </div>
  );
};

// The Home component
export default function Home() {
  // Define the array of service objects
  const services = [
    {
      icon: "/image 1.png", // Replace with actual path to icon
      title: "Window Cleaning",
      description: "Experience clarity with our professional window cleaning service. Our attention to detail ensures spotless results every time.",
      price: "£12.99",
      priceType: 'single',
      buttonText: "Book now"
    },
    {
      icon: "/image 1.png", // Replace with actual path to icon
      title: "Bin Cleaning",
      description: "Our bin cleaning service eliminates bacteria and odors, leaving your bins hygienically clean and fresh.",
      price: { single: "£15", monthly: "£8 per bin" },
      priceType: 'bin',
      buttonText: "Book now"
    },
    {
      icon: "/image 1.png", // Replace with actual path to icon
      title: "Gutter Cleaning",
      description: "Protect your property with our thorough gutter cleaning. Prevent blockages and maintain the integrity of your guttering system.",
      price: "On Request",
      priceType: 'onRequest',
      buttonText: "Book now"
    },
  ];

  const reviews = [
    {
      name: "Alex Johnson",
      review: "The service was exceptional, and the team was professional and thorough. Highly recommend!",
      rating: 5,
    },
    {
      name: "Morgan Smith",
      review: "Incredible attention to detail. My windows have never been cleaner!",
      rating: 5,
    },
    {
      name: "Jamie Lee",
      review: "Fast, efficient, and reliable service every time. They go above and beyond.",
      rating: 4,
    },
  ];
  

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-slate-50">
        <div className="p-5 flex flex-col text-center gap-[15px] mt-[30px]">
          <h6 className='text-[#3EC5FA]'>Making your spaces shine</h6>
          <h1 className="text-4xl font-bold">Reliable Cleaning, Right Next Door</h1>

          <div className='flex justify-center'>
            <div className='max-w-[800px]'>
              <p className="">
                Got a dirty window, a bin that's seen better days, or gutters filled
                to the brim? We're here to handle the mess with a personal touch.
                Our services are just around the corner, ready to bring a sparkle to
                your doorstep.
              </p>
            </div>
          </div>
        </div>
          <div className=" flex mt-[20px] p-[30px] justify-center flex-wrap gap-[60px]">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className='mt-[50px] p-9'>
            <h1 className='text-3xl font-bold text-center text-gray-600'>Dont hear it from us</h1>
            <p className='text-2xl font-bold text-center mt-[20px]'>Here are some testimonials from our happy customers</p>

            <div className='flex justify-center mt-[30px] flex-wrap gap-[40px]'>
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
            </div>
          </div>
      </main>
    </>
  );
}
