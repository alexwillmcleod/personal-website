export default interface Experience {
  id: number;
  attributes: {
    role: string;
    location: string;
    work_type: 'Full-Time' | 'Part-Time' | 'Casual' | 'Contract';
    location_type: 'On-Site' | 'Hybrid' | 'Remote';
    skills: string[];
    summary: string;
    article?: string;
    publishedAt: string;
    duration: {
      start: string;
      end?: string;
    };
    organisation: {
      name: string;
      logo: {
        data: {
          id: number;
          attributes: {
            name: string;
            width: number;
            height: number;
            url: string;
          };
        };
      };
    };
  };
}
