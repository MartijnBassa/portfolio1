// Skills Icons
import unityIcon from "./images/unity.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedInIcon from "./images/linkedin.svg"


export default {
  //   Header Details ---------------------
  name: "Martijn Bassa",
  headerTagline: [
    //Line 1 For Header
    "Building",
    //Line 2 For Header
    "games and other products,",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "martijnbassa2009@hotmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One", //Project Title - Add Your Project Title Here
      para:
        "The first game i've worked on.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/JKRQZSS/game.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://fontys-gdt.itch.io/group-16",
    },
    {
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a game-design student, in my second year.",
  aboutParaTwo:
    "Creating game mechanics and experiences.",
  aboutParaThree:
    "I'm still starting out but I'm always looking for new experiences.",
  aboutImage:
    "https://i.imgur.com/RNDhOjY.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: unityIcon,
      para:
        "",
    },
    
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "",
  promotionPara:
    "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Contact me to start creating your own game",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/martijnbassa" },
    { img: linkedInIcon, url: "https://www.linkedin.com/in/martijn-bassa-8b38b5189/"},
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
