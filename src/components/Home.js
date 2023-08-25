import React from 'react'

const Home = () => {
  return (
    <div>

      <section  className="text-gray-600 body-font">
        <div  className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div  className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1  className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Online CV Builder With Creative Templates.
            </h1>
            <p  className="mb-8 leading-relaxed">Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>

          </div>
          <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img  className="object-cover object-center rounded" alt="hero" src="https://www.paradigmyouthnetwork.org/img/core-img/banner2.png" />
          </div>
        </div>
      </section>

      {/* Area of content  */}
      <section  className="text-gray-600 body-font">
        <div  className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div  className="flex mx-auto flex-wrap mb-20"></div>
          <img  className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://codequotient.com/blog/wp-content/uploads/2022/05/10-Python-Coding-Questions-To-Practice-and-Enhance-Logical-Thinking.jpg" />
          <div  className="flex flex-col text-center w-full">
            <h1  className="text-5xl font-medium title-font mb-4 text-gray-900">Why Choose Our Platform?</h1>
            <br />
            <br />
            <p  className="lg:w-2/3 mx-auto leading-relaxed text-base">Most recruiters and hiring managers today utilize Applicant Tracking Systems (ATS), to more quickly and efficiently evaluate candidate applications and eliminate under-qualified jobseekers. The software imports, scans, and ranks resumes based on how well the candidate’s qualifications match the job description.</p>
            <br />
            <br />
            <p>Our resume builder works hard to format resumes in a way that makes it easy for an ATS to read and match the content. We also offer 1,000s of pre-written bullet points that can be used in your resume. These are optimized to match the most common job descriptions in the market today. Building an ATS-ready resume has never been easier!</p>
          </div>
        </div>
      </section>

      {/* basic-content  */}

      <section  className="text-gray-600 body-font">
        <h1  className="text-center text-4xl font-bold mt-2 mb-3">Build your job-winning resume  in 5  simple steps</h1>
        <div  className="container px-5 py-24 mx-auto flex flex-wrap">
          <div  className="flex flex-wrap w-full">
            <div  className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div  className="flex relative pb-12">
                <div  className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div  className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>

                <div  className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div  className="flex-grow pl-4">
                  <p  className="leading-relaxed">Choose one of our professionally designed resumes.</p>
                </div>
              </div>
              <div  className="flex relative pb-12">
                <div  className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div  className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div  className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div  className="flex-grow pl-4">
                  <p  className="leading-relaxed">Fill in your details using our simple prompts.</p>
                </div>
              </div>
              <div  className="flex relative pb-12">
                <div  className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div  className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div  className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div  className="flex-grow pl-4">
                  <p  className="leading-relaxed">
                    Explore and fill the necessary details</p>
                </div>
              </div>
              <div  className="flex relative pb-12">
                <div  className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div  className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div  className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div  className="flex-grow pl-4">
                  <p  className="leading-relaxed">Download & start applying for jobs today!</p>
                </div>
              </div>
              <div  className="flex relative">
                <div  className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div  className="flex-grow pl-4">
                  <p  className="leading-relaxed">Finish</p>
                </div>
              </div>
            </div>
            <img  className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://img.freepik.com/premium-vector/coder-developer-concentrated-working-project-developing-programming-coding-technologies_569013-336.jpg?w=740" alt="step" />
          </div>
        </div>
      </section>

      {/* Top -recruters    */}

      <section  className="text-gray-600 body-font">
        <div  className="container px-5 py-24 mx-auto flex flex-wrap">
          <div  className="flex w-full mb-20 flex-wrap">
            <h1  className=" text-center text-7xl font-bold ">Our Top Recruiters :</h1>
          </div>
          <div  className="flex flex-wrap md:-m-2 -m-1">
            <div  className="flex flex-wrap w-1/2">
              <div  className="md:p-2 p-1 w-1/2">
                <img alt="gallery"  className="w-full object-cover h-full object-center block" src="https://assets.turbologo.com/blog/en/2020/01/19084713/levis-cover-958x575.png" />
              </div>
              <div  className="md:p-2 p-1 w-1/2">
                <img alt="gallery"  className="w-full object-cover h-full object-center block" src="https://logohistory.net/wp-content/uploads/2023/05/Coca-Cola-Logo.png" />
              </div>
              <div  className="md:p-2 p-1 w-full">
                <img alt="gallery"  className="w-full h-full object-cover object-center block" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cJUVJJSWPj9WFIJlvf7dKg.jpeg" />
              </div>
            </div>
            <div  className="flex flex-wrap w-1/2">
              <div  className="md:p-2 p-1 w-full">
                <img alt="gallery"  className="w-full h-full object-cover object-center block" src="http://blog.logomyway.com/wp-content/uploads/2018/09/versace1970logo.jpg" />
              </div>
              <div  className="md:p-2 p-1 w-1/2">
                <img alt="gallery"  className="w-full object-cover h-full object-center block" src="https://logowik.com/content/uploads/images/nivia-official3484.logowik.com.webp" />
              </div>
              <div  className="md:p-2 p-1 w-1/2">
                <img alt="gallery"  className="w-full object-cover h-full object-center block" src="https://logowik.com/content/uploads/images/lenskart9649.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}

      <footer  className="text-gray-200 h-6 bg-black bg-gray-100 py-0.1">
        <div  className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a to="" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span  className="ml-3 text-xl">RB</span>
          </a>
          <p  className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© Resume_Builder —
            <a to="https://twitter.com/knyttneve"  className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </p>
          <span  className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a  className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a  className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a  className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"  className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home

