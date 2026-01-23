export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: string;
  publishedDate: string;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-medical-image-analysis',
    title: 'AI-Powered Medical Image Analysis System',
    client: 'Healthcare Provider (USA)',
    industry: 'Healthcare',
    tags: ['Computer Vision', 'Azure AI', 'Medical AI', 'HIPAA Compliance'],
    summary:
      'Developed an AI-powered medical image analysis system for a US healthcare provider to assist radiologists in detecting abnormalities in X-rays and CT scans, reducing diagnosis time by 60%.',
    challenge:
      'The healthcare provider needed to process thousands of medical images daily with limited radiologist availability. Manual review was time-consuming, and there was risk of human error in detecting subtle abnormalities. The solution needed to be HIPAA-compliant and integrate with existing PACS systems.',
    solution:
      'We developed a custom computer vision system using Azure AI and TensorFlow that analyzes medical images, highlights potential abnormalities, and prioritizes cases by urgency. The system was trained on 100,000+ anonymized medical images and integrated seamlessly with their existing infrastructure.',
    results: [
      '60% reduction in initial image review time',
      '95% accuracy in detecting abnormalities',
      '40% increase in radiologist productivity',
      'HIPAA compliance and full audit trail',
      '30% reduction in missed diagnoses',
      'ROI achieved within 8 months'
    ],
    technologies: [
      'Azure Machine Learning',
      'TensorFlow',
      'Python',
      'Azure Cognitive Services',
      'Docker',
      'Kubernetes',
      'DICOM Integration'
    ],
    duration: '5 months',
    teamSize: '6 engineers',
    publishedDate: '2024-10-15',
    featured: true
  },
  {
    slug: 'financial-fraud-detection-system',
    title: 'Real-Time Fraud Detection for Financial Services',
    client: 'FinTech Company (UK)',
    industry: 'Finance & Banking',
    tags: ['Machine Learning', 'Azure AI', 'Fraud Detection', 'Real-time Processing'],
    summary:
      'Built a real-time fraud detection system for a UK FinTech company that analyzes transactions and identifies fraudulent activities with 98% accuracy, preventing $2M+ in fraud losses annually.',
    challenge:
      'The client was experiencing increasing fraud attempts with traditional rule-based systems missing sophisticated fraud patterns. They needed a machine learning solution that could detect fraud in real-time without creating friction for legitimate users.',
    solution:
      'We implemented an ensemble machine learning model using Azure ML that analyzes transaction patterns, user behavior, device fingerprints, and network data in real-time. The system uses anomaly detection and supervised learning to identify fraudulent transactions with minimal false positives.',
    results: [
      '98% fraud detection accuracy',
      '$2M+ annual fraud loss prevention',
      '85% reduction in false positives',
      'Real-time processing (< 100ms)',
      '99.95% system uptime',
      'Compliance with FCA regulations'
    ],
    technologies: [
      'Azure Machine Learning',
      'Azure Stream Analytics',
      'Python',
      'Scikit-learn',
      'XGBoost',
      'Redis',
      'PostgreSQL',
      'Azure Functions'
    ],
    duration: '4 months',
    teamSize: '5 engineers',
    publishedDate: '2024-09-20',
    featured: true
  },
  {
    slug: 'document-processing-automation',
    title: 'Intelligent Document Processing for Legal Firm',
    client: 'Law Firm (Canada)',
    industry: 'Legal Services',
    tags: ['Document AI', 'OCR', 'Azure Form Recognizer', 'Automation'],
    summary:
      'Automated document processing for a Canadian law firm, reducing manual data entry by 90% and processing 10,000+ legal documents monthly with high accuracy.',
    challenge:
      'The law firm manually processed thousands of contracts, court documents, and legal forms monthly. This was time-consuming, expensive, and prone to human error. They needed an AI solution to extract key information accurately while maintaining data security.',
    solution:
      'We built an intelligent document processing system using Azure Form Recognizer and custom NLP models. The system automatically extracts key entities, dates, clauses, and metadata from various document types, validates the information, and integrates with their document management system.',
    results: [
      '90% reduction in manual data entry',
      '10,000+ documents processed monthly',
      '97% extraction accuracy',
      '70% cost savings on document processing',
      '5x faster contract review process',
      'Full audit trail and compliance'
    ],
    technologies: [
      'Azure Form Recognizer',
      'Azure Cognitive Services',
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Azure Blob Storage'
    ],
    duration: '3 months',
    teamSize: '4 engineers',
    publishedDate: '2024-08-10',
    featured: true
  },
  {
    slug: 'ecommerce-personalization-engine',
    title: 'AI-Powered Personalization Engine for E-commerce',
    client: 'E-commerce Platform (UAE)',
    industry: 'E-commerce & Retail',
    tags: ['Recommendation Systems', 'Machine Learning', 'Personalization'],
    summary:
      'Developed a sophisticated product recommendation and personalization engine for a UAE e-commerce platform, increasing conversion rates by 35% and average order value by 28%.',
    challenge:
      'The e-commerce platform had millions of products and users but struggled with low engagement and conversion rates. They needed a personalization system that could provide relevant product recommendations, personalized search results, and dynamic content based on user behavior.',
    solution:
      'We implemented a multi-algorithm recommendation system combining collaborative filtering, content-based filtering, and deep learning models. The system analyzes user behavior, purchase history, browsing patterns, and product attributes to deliver personalized experiences in real-time.',
    results: [
      '35% increase in conversion rate',
      '28% increase in average order value',
      '50% improvement in click-through rate',
      '45% increase in user engagement',
      '2.5x increase in cross-selling success',
      '20% reduction in cart abandonment'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Azure ML',
      'Redis',
      'MongoDB',
      'Node.js',
      'React',
      'GraphQL',
      'Azure Kubernetes Service'
    ],
    duration: '6 months',
    teamSize: '7 engineers',
    publishedDate: '2024-07-05',
    featured: true
  },
  {
    slug: 'supply-chain-optimization',
    title: 'Supply Chain Optimization with AI',
    client: 'Logistics Company (Saudi Arabia)',
    industry: 'Logistics & Supply Chain',
    tags: ['Predictive Analytics', 'Route Optimization', 'Azure AI', 'IoT'],
    summary:
      'Built an AI-powered supply chain optimization system for a Saudi logistics company, reducing delivery times by 25% and operational costs by 30% through intelligent routing and demand forecasting.',
    challenge:
      'The logistics company faced challenges with route optimization, demand forecasting, and inventory management across multiple warehouses. Manual planning was inefficient and couldn\'t adapt quickly to changing conditions like traffic, weather, or demand spikes.',
    solution:
      'We developed a comprehensive AI system that integrates IoT data, historical trends, and real-time information to optimize routes, predict demand, and manage inventory. The system uses machine learning for demand forecasting and optimization algorithms for route planning.',
    results: [
      '25% reduction in delivery times',
      '30% decrease in operational costs',
      '40% improvement in route efficiency',
      '50% better demand forecast accuracy',
      '20% reduction in fuel consumption',
      '35% improvement in warehouse utilization'
    ],
    technologies: [
      'Azure ML',
      'Azure IoT Hub',
      'Python',
      'Optimization Algorithms',
      'Power BI',
      'Azure SQL Database',
      'Azure Functions',
      'React Dashboard'
    ],
    duration: '7 months',
    teamSize: '6 engineers',
    publishedDate: '2024-06-15',
    featured: false
  },
  {
    slug: 'chatbot-customer-service',
    title: 'Intelligent Customer Service Chatbot',
    client: 'Telecom Company (Pakistan)',
    industry: 'Telecommunications',
    tags: ['NLP', 'Chatbot', 'Azure OpenAI', 'Customer Service'],
    summary:
      'Created an intelligent customer service chatbot for a major telecom company in Pakistan, handling 80% of customer queries automatically and reducing support costs by 50%.',
    challenge:
      'The telecom company received thousands of customer service calls daily about billing, technical issues, and account management. Call center costs were high, wait times were long, and customer satisfaction was declining. They needed an AI solution to handle routine queries efficiently.',
    solution:
      'We built an intelligent chatbot using Azure OpenAI Service and custom NLP models. The chatbot understands Urdu and English, handles complex queries, integrates with billing and CRM systems, and seamlessly escalates to human agents when needed. The system includes sentiment analysis for priority routing.',
    results: [
      '80% of queries handled automatically',
      '50% reduction in support costs',
      '70% decrease in average wait time',
      '40% improvement in customer satisfaction',
      '24/7 availability in Urdu and English',
      '90% user satisfaction rating'
    ],
    technologies: [
      'Azure OpenAI Service',
      'Azure Bot Service',
      'Python',
      'Node.js',
      'React',
      'Azure Cognitive Services',
      'Azure SQL Database',
      'Twilio Integration'
    ],
    duration: '4 months',
    teamSize: '5 engineers',
    publishedDate: '2024-05-20',
    featured: false
  }
];

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}


