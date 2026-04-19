//Unique tasks ID generator
const uid = () => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36
  const randomNum = Math.random().toString(36).slice(2, 7); // Generate a random string
  return `${timestamp}-${randomNum}`; // Combine timestamp and random string
};

export default uid;