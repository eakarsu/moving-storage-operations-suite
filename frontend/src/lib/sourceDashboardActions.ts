export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "moving-company",
    "label": "Moving Company",
    "description": "Open Moving Company workflows elevated from movingCompany.",
    "href": "/moving-estimates",
    "sourceProjects": [
      "movingCompany"
    ],
    "examples": [
      "Moving Estimates",
      "Crew/Truck Scheduling",
      "Move Day Exceptions"
    ],
    "count": 1
  }
];
