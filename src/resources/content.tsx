import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Line, Row, Tag, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Eduard",
  lastName: "Havreliuc",
  name: `Eduard Havreliuc`,
  role: "Full Stack Engineer",
  avatar: "/images/eduard_avatar.jpg",
  email: "havreliuc@gmail.com",
  location: "Europe/Bucharest", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Romanian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/eduard-havreliuc-08040661/",
    essential: true,
  },  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Eduard, a full stack engineer at <Text as="span" size="xl" weight="strong">Havreliuc & Havreliuc SRL Romania</Text>, where I craft advanced <br /> AI projects and solutions.
</>
  ),
};

// Technology stack for the Calosense.com experience, grouped by area
const calosenseStack: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: [
      "Angular",
      "PrimeNG",
      "TanStack Angular Query",
      "ngx-translate (i18n)"
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Node",
      "TypeScript",
      "Prisma",
      "BullMQ (Redis queues)",
      "Firebase Admin",
      "Swagger/OpenAPI",
      "Google Cloud Functions",
    ],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Cloud Firestore", "Redis"],
  },
  {
    category: "AI / Google Cloud",
    items: [
      "Vertex AI (Gemini Flash)",
      "Genkit",
      "Cloud Storage",
      "Storage for Firebase",
      "FCM",
      "reCAPTCHA Enterprise",
    ],
  },
  {
    category: "Integrations",
    items: [
      "Twilio (SMS/voice/video)",
      "Vapi (voice AI)",
      "SignWell (e-sign)",
      "Calendly",
      "Garmin",
      "Withings",
      "FHIR",
      "Cloudflare",
      "AWS S3",
      "Athena/Glue",
    ],
  },
  {
    category: "Infra",
    items: ["Docker", "Google Cloud Build", "Kubernetes (GKE)", "Firebase Hosting"],
  },
];

// AI features built into the Calosense.com platform
const calosenseAiUsage: { area: string; description: string; provider?: string }[] = [
  {
    area: "Vertex AI (Gemini)",
    description: "Core LLM generation across the platform.",
    provider: "gemini-3-flash-preview via Genkit vertexAI()",
  },
  {
    area: "Vapi voice AI",
    description: "AI phone calls and webhooks.",
    provider: "Vapi (VAPI_API_KEY)",
  },
  {
    area: "SMS scheduling intent",
    description: 'Parses patient replies ("accept / different day / reject").',
    provider: "Gemini, gated by GENKIT_API_KEY",
  },
  {
    area: "Campaign bot / WhatsApp auto-reply",
    description: "AI-driven conversational replies and message templates.",
  },
  {
    area: "AI predefined answers",
    description: "Catalog of AI-generated reply suggestions.",
  },
  {
    area: "Prompt-AI",
    description: "Generic LLM prompt execution service.",
  },
  {
    area: "PDF / lab-test analysis",
    description: "OCR and data extraction from uploaded PDFs and images (base64 → Gemini).",
    provider: "Vertex AI",
  },
  {
    area: "PDF / Monthly reports",
    description: "PDF / Monthly reports generation across the platform.",
    provider: "pdf-lib, jsPDF, docxtemplater, Puppeteer",
  },
];

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Eduard is a Bucharest-based full stack engineer with a passion for transforming complex challenges
        intoelegant AI solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of AI and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Startup Experience",
    experiences: [
      {
        company: "Calosense.com",
        link: "https://calosense.com/about",
        timeframe: "2021 - Present",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Redesigned the UI/UX and upgraded the backend platform to the latest technologies, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into backend, frontend and mobile workflows, enabling 
            developers to iterate and build products faster, caregivers to take care of their patients faster
            and improve the mobile experience for patients.
          </>,
          <Column gap="16" fillWidth>
            <Text variant="label-strong-s" onBackground="neutral-strong">
              Tech stack
            </Text>
            {calosenseStack.map((group) => (
              <Column key={group.category} gap="8">
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {group.category}
                </Text>
                <Row wrap gap="8">
                  {group.items.map((item) => (
                    <Tag key={item} size="s">
                      {item}
                    </Tag>
                  ))}
                </Row>
              </Column>
            ))}
          </Column>,
          <Column gap="16" fillWidth>
            <Text variant="label-strong-s" onBackground="neutral-strong">
              AI usage
            </Text>
            {calosenseAiUsage.map((item) => (
              <Column key={item.area} gap="4">
                <Text variant="label-default-s" onBackground="neutral-strong">
                  {item.area}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.description}
                </Text>
                {item.provider && (
                  <Text variant="label-default-xs" onBackground="brand-weak">
                    {item.provider}
                  </Text>
                )}
              </Column>
            ))}
          </Column>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/calosense-01.png",
            alt: "Calosense",
            width: 16,
            height: 9,
          },
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Politehnica of Bucharest",
        description: <>Studied software engineering and computer science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI Integration",
        description: (
          <>Able to integrate AI tools into backend, frontend and mobile workflows.</>
        ),
        tags: [
          {
            name: "MCP",
            icon: "mcp",
          },
          {
            name: "Vertex AI",
            icon: "vertexai",
          },
          {
            name: "Genkit",
            icon: "genkit",
          },
          {
            name: "OpenRouter",
            icon: "openrouter",
          },
        ],
      },
      {
        title: "Frontend",
        description: (
          <>Able to prototype in NestJS with unnatural speed.</>
        ),
        tags: [
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "React Native",
            icon: "react-native",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Angular + PrimeNG + PostgreSQL.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile",
        description: (
          <>Able to prototype in Flutter and React Native .</>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "React Native",
            icon: "react-native",
          },
          {
            name: "Expo",
            icon: "expo",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/calosense-04.png",
            alt: "Project image",
            width: 9,
            height: 18,
          },
          {
            src: "/images/projects/project-01/calosense-06.png",
            alt: "Project image",
            width: 9,
            height: 18,
          },
          {
            src: "/images/projects/project-01/calosense-05.png",
            alt: "Project image",
            width: 9,
            height: 18,
          },
          {
            src: "/images/projects/project-01/calosense-07.png",
            alt: "Project image",
            width: 9,
            height: 18,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
