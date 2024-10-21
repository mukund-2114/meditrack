// src/data/dummyData.js

export const patients = [
    {
      id: '1',
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      condition: 'Stable',
      description: 'Regular check-up patient',
      photo: 'https://example.com/john-doe.jpg',
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      condition: 'Critical',
      description: 'Recovering from surgery',
      photo: 'https://example.com/jane-smith.jpg',
    },
    // Add more dummy patients...
  ];
  
  export const tests = [
    {
      id: '1',
      patientId: '1',
      name: 'Blood Test',
      date: '2024-10-15',
      result: 'Normal',
      notes: 'All levels within acceptable range',
    },
    {
      id: '2',
      patientId: '2',
      name: 'X-Ray',
      date: '2024-10-18',
      result: 'Abnormal',
      notes: 'Fracture detected in left radius',
    },
    // Add more dummy tests...
  ];