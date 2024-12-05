/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Perpetual Hill Studios',
    position: 'Co-founder & CEO',
    url: 'TBD',
    startDate: '2024-10-06',
    summary: 'Perpetual Hill Studios is a team of likeminded members working to better the game industry.',
    highlights: [
      'Built and scaled video game development and assets',
      'Established key partnerships with members of the communtiy and forged strong bonds',
    ],
  },
  {
    name: 'Toronto Film School Students Association',
    position: 'Game Designer',
    url: 'TBD',
    startDate: '2022-01-01',
    endDate: '2024-07-01',
    summary: `As a major member of the student association at the Toronto Film School, 
    I contributed extensively to game design projects, blending creative vision with 
    technical expertise to deliver compelling gameplay experiences. My role encompassed 
    a wide range of responsibilities, including:`,
    highlights: [
      'Character Ability Design: Developed and balanced diverse character abilities to ensure engaging and strategic gameplay, focusing on player choice and unique mechanics.',
      'Gameplay Mechanics: Designed core game systems and mechanics, including progression, combat, and level interactions, with an emphasis on player engagement and replayability.',
      'Art Style and Documentation: Collaborated with artists to define cohesive visual styles and ensure alignment with the games themes. Created comprehensive design documents to communicate vision and technical requirements to the team.',
      'Team Management and Organization: Led cross-functional teams by organizing workflows, setting priorities, and fostering collaboration between designers, artists, and developers. Utilized project management tools to ensure deadlines were consistently met.',
      'Collaboration: Worked closely with peers to implement feedback loops and iterate on prototypes, refining the game’s core concepts and overall polish.',
    ],
  },
  {
    name: 'Toronto Film School Grand Kapstone',
    position: 'Lead Producer',
    url: 'TBD',
    startDate: '2024-04-01',
    summary: `As the Lead Producer for a large-scale capstone project with 50 contributors, 
    I managed the production pipeline, ensuring smooth collaboration and timely delivery 
    of assets across multiple teams. My responsibilities included:`,
    highlights: [
      'Meeting Organization: Coordinated and facilitated cross-team meetings, ensuring clear communication and alignment on project goals between art, design, and development teams.',
      'Asset Management: Organized and maintained comprehensive asset lists, streamlining their creation and usage across departments to support efficient workflows.',
      'Motion Capture Direction: Directed motion capture sessions, overseeing both the creative and technical aspects to ensure high-quality recordings that met the project’s requirements.',
      'Art Direction Oversight: Supervised the development of 3D models and overall art direction, ensuring visual consistency and alignment with the game’s vision.',
    ],
  },
  {
    name: 'Freelance Work',
    position: 'Freelance and Contracted 3D Modeling',
    url: 'TBD',
    startDate: '2022-01-01',
    endDate: '2024-01-01',
    summary: `As a Freelance 3D Modeler, I provided professional-grade 3D modeling and texturing services for clients, 
    including members of the Toronto Film School and various indie game studios. My work focused on delivering high-quality, 
    game-ready assets tailored to the specific needs of each project. Key responsibilities included:`,
    highlights: [
      '3D Modeling and Texturing: Designed and textured optimized, game-ready 3D assets for use in diverse projects, ensuring visual fidelity and adherence to performance requirements.',
      'Tutorials and Documentation: Created detailed tutorials and instructional videos to demonstrate my workflow, enabling clients and collaborators to better understand and replicate my processes.',
      'Client Collaboration: Worked closely with clients to understand their project goals, providing regular updates and feedback to ensure satisfaction with the final deliverables.',
    ],
  },
];

export default work;
