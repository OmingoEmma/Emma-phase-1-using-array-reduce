const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [
    {
      id: 101,
      name: 'Battery A',
      assembled: true,
      quantity: 5
    },
    {
      id: 102,
      name: 'Battery B',
      assembled: false,
      quantity: 10
    },
    {
      id: 103,
      name: 'Battery C',
      assembled: true,
      quantity: 16
    }
  ];
  
  const totalBatteries = batteries.reduce((acc, battery) => {
    if (battery.assembled) {
      return acc + battery.quantity;
    } else {
      return acc;
    }
  }, 0);
  
 