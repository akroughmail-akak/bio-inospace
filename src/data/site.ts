/**
 * All site content for Bio Innospace, transcribed from the source document
 * (website_details.docx). Every section of the document is represented here.
 */

export const org = {
  name: "Bio Innospace",
  tagline: "Biotechnology Innovation & Incubation",
  about:
    "Bio Innospace is a biotechnology innovation and incubation initiative under the collaboration of RGU and AIC RAISE, bridging scientific research with real-world applications. It focuses on biotechnology, nanotechnology, healthcare, pharmaceuticals, agriculture, environmental sustainability, and advanced materials. Through research support, technical guidance, mentorship, and industry-academia collaboration, Bio Innospace empowers researchers, students, innovators, and startups to transform scientific ideas into innovative products, technologies, and sustainable solutions.",
  mission:
    "Our mission is to turn lab research into commercial innovation through top facilities, expert support, and strong industry-academia partnerships, fostering creativity and collaboration for societal impact.",
  vision:
    "Bio Innospace aims to be a leading hub leveraging nanoscience and biotechnology to address societal challenges, advance science, and develop innovative technologies.",
};

export const team = [
  { name: "Dr. R. Manickam", role: "CEO of Rathinam Group" },
  {
    name: "Dr. S. P. Suriyaraj",
    role: "Dean - School of Applied Biosciences, Rathinam Global Deemed to be University",
  },
  { name: "Ms. Swathi", role: "Project Manager" },
  { name: "Ms. Nagadharshini R", role: "Junior Scientist" },
  { name: "Mr. Sivakumaran", role: "Technical Assistant" },
  { name: "Ms. Jothi", role: "Finance and Accounts" },
];

export const researchInterns = [
  "Ms. Kiruthika",
  "Mr. Niranjan C",
  "Mr. Kameshwaran",
  "Mr. Santhosh",
  "Ms. Nishara",
  "Ms. Asmitha",
];

export const focusAreas = [
  "Nanotechnology and Composite Materials",
  "Nanobiotechnology and Advanced Formulations",
  "Healthcare and Biomedical Innovation",
  "Pharmaceutical and Nutraceutical Biotechnology",
  "Agricultural and Environmental Biotechnology",
  "Herbal and Natural Product Innovation",
  "Sustainable Materials and Green Technologies",
];

export const services = [
  "Advanced labs, Equipments and R&D support",
  "Business strategy & Financial planning",
  "Seed funding & Investor connections",
  "Product testing, Clinical trials & Market insights",
  "Mentorship & training",
];

export type Startup = {
  name: string;
  virtual?: boolean;
  tag?: string;
};

export const startups: Startup[] = [
  { name: "NANOSPARK INNOVATIONS INDIA PVT LTD" },
  { name: "ATOM6 INOVATIONS PVT LTD" },
  { name: "RMCSLLP" },
  { name: "CHRISSRON BIOMASS SOLUTION" },
  { name: "PRASANTH" },
  { name: "BACKERO PVT LTD" },
  { name: "YAAZHNUTRICO PVT LTD" },
  { name: "PARISTHI PROTECH PVT LTD" },
  { name: "RAIDEN ENTERPRISES", virtual: true },
  { name: "SPRANO BIO INNOVATIONS PVT LTD", virtual: true },
  { name: "LA ATHULYAM FOODS" },
  { name: "CRAZY NUTRITION" },
  { name: "U-WE" },
  { name: "BIOCREED CHEMICALS PVT LTD", virtual: true },
  { name: "SAMITHRA LIFESTYLE PVT LTD", virtual: true },
  { name: "VISHACATECH ENGINEERS" },
  { name: "H & H Enterprises", virtual: true },
  { name: "KALYAN - SEATER" },
  { name: "RANK YOU HIGHER", tag: "Co-Working" },
  { name: "DREG4M" },
  { name: "QUOOKOO TECHNOLOGIES", virtual: true },
  { name: "Rajapreerthi", tag: "Innovator" },
  { name: "MRocket", tag: "Where Innovation Meets Automation" },
  { name: "WARAAH GREEN TECHNOLOGIES PVT LTD" },
  { name: "YOURNIX" },
  { name: "NANOENRICH" },
  { name: "Boldsip" },
  { name: "Zekatix Technologies Private Limited" },
  { name: "SAROJ TINY TECH PRIVATE LIMITED" },
  { name: "PATTUTHADAM PVT LTD" },
  { name: "PROTEOGENIE BIOTECH LLP" },
  { name: "DEEPAM INDUSTRIES" },
];

export const advisors = [
  { name: "Dr. Chandraraj", org: "Indian Institute of Technology, Madras" },
  { name: "Dr. R. Selvakumar", org: "PSG Institute of Advanced Studies, Coimbatore" },
  { name: "Dr. Roberta Maia Sabino", org: "University of Wyoming, United States" },
  {
    name: "Dr. K. Ruckmani",
    org: "Director, National Institute of Pharmaceutical Education and Research (NIPER) Hajipur",
  },
  { name: "Dr. Sayantan Sinha", org: "Medical College of Wisconsin, USA" },
  { name: "Dr. N. Ponpandian", org: "MRCN Bharathiar University, Coimbatore" },
  { name: "Dr. D. Ravi Shankaran", org: "University of Madras, Chennai" },
  { name: "Dr. Karthik L", org: "Salem Microbes Pvt Ltd., Salem" },
  { name: "Dr. Ramarao Golime", org: "Central University of TN, Thiruvarur" },
  { name: "Dr. Saravana Kumar", org: "Anna University, Coimbatore" },
  { name: "Dr. A. Manisekaran", org: "Pollution Control Board Coimbatore, Anna University" },
  { name: "Dr. P. Renuka Devi", org: "Anna University, Coimbatore" },
];

export const stats = [
  { value: "32", label: "Startups incubated" },
  { value: "7", label: "Focus areas" },
  { value: "12", label: "Expert advisors" },
  { value: "6", label: "Research interns" },
];
