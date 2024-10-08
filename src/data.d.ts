export interface Space {
  destinations: Destination[];
  crew:         Crew[];
  technology:   Technology[];
}

export interface Crew {
  name:   string;
  images?: CrewImages;
  role:   string;
  bio:    string;
}

export interface CrewImages {
  png:  string;
  webp: string;
}

export interface Destination {
  name:        string;
  images:      CrewImages;
  description: string;
  distance:    string;
  travel:      string;
}

export interface Technology {
  name:        string;
  images:      TechnologyImages;
  description: string;
}

export interface TechnologyImages {
  portrait:  string;
  landscape: string;
}