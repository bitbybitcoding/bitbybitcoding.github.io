export interface Partner {
  name: string;
  description: string;
  logo: string;
  website: string;
  color: string;
}

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets';

export const mainPartner: Partner = {
  name: 'BAGUS Together',
  description:
    'BAGUS Together is a vibrant network of ground-up initiatives empowering communities across Singapore. As our key partner, they provide essential support and resources to help us reach more young learners.',
  logo: `${assetBase}/bagus_together.png`,
  website: 'https://www.bagustogether.sg/about',
  color: 'from-bit-lavender to-bit-red',
};

export const keyPartners: Partner[] = [
  {
    name: 'SGPO',
    description:
      "The Singapore Government Partnerships Office (SGPO) helps every citizen and groundup group play a part in shaping our country's future, providing crucial support for our mission.",
    logo: `${assetBase}/sgpo.jpeg`,
    website: 'https://sgpo.gov.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: '*SCAPE',
    description:
      '*SCAPE is a unique blend of retail and community space, and a vibrant hub where youth gather to create, connect, and grow. As venue partner, they play an important role in the success of our sessions.',
    logo: `${assetBase}/scape.png`,
    website: 'https://www.scape.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Educado SDC',
    description:
      "As a fellow groundup aiming to bring high-quality tuition to all secondary and JC students for free, Educado's mission aligns closely with ours.",
    logo: `${assetBase}/educado.jpeg`,
    website: 'https://sites.google.com/view/project-educado/home?authuser=0',
    color: 'from-bit-lavender to-bit-turquoise',
  },
];

export const supportingPartners: Partner[] = [
  {
    name: 'NVPC',
    description:
      'National Volunteer & Philanthropy Centre champions strategic giving and volunteerism in Singapore, supporting our mission through the BAGUS network.',
    logo: `${assetBase}/nvpc.png`,
    website: 'https://nvpc.org.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Temasek Foundation',
    description:
      'Temasek Foundation supports sustainable and resilient communities. Their backing through BAGUS enables us to scale our impact.',
    logo: `${assetBase}/temasek_foundation.webp`,
    website: 'https://www.temasekfoundation.org.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Tote Board',
    description:
      "As Singapore's primary funding agency for social causes, Tote Board provides crucial support for our educational programmes.",
    logo: `${assetBase}/tote_board.png`,
    website: 'https://www.toteboard.gov.sg',
    color: 'from-bit-lavender to-bit-turquoise',
  },
];

export const governmentPartners: Partner[] = [
  {
    name: 'MCCY',
    description:
      'The Ministry of Culture, Community and the Youth is responsible for the formulation and implementation of policies related to the arts, sports, youth and community in Singapore. They support us through SGPO and *SCAPE.',
    logo: `${assetBase}/MCCY.jpeg`,
    website: 'https://www.mccy.gov.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
];

export const partnerLogoWall = [
  mainPartner,
  ...keyPartners,
  ...supportingPartners,
  ...governmentPartners,
];
