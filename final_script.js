// Title IDs for the first table
const firstTableTitleIds = [3123483, 3127027, 538646, 3181897, 3101943];

// Function to fetch title details from the API for the first table
async function fetchFirstTableTitleDetails(titleId) {
  const apiKey = 'fjP0QU24bxEKqoQkvtiEzk7ZcRMSzsxCweYHUdng';
  const apiUrl = `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${apiKey}&append_to_response=sources`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching title details for the first table:', error);
    return null;
  }
}

// Function to handle fetched data and add rows to the first table
function handleFirstTableFetchedData(titleId, data) {
  if (data) {
    const title = data.title || 'Unknown Title';
    const userRating = data.user_rating || 'N/A';
    const relevancePercentile = data.relevance_percentile || 'N/A';
    const criticScore = data.critic_score || 'N/A';

    addRowToFirstTable(title, userRating, relevancePercentile, criticScore);
  } else {
    console.log(`Failed to fetch details for title ID ${titleId} for the first table`);
  }
}

// Loop through firstTableTitleIds and fetch details for each title for the first table
firstTableTitleIds.forEach(async (titleId) => {
  const titleDetails = await fetchFirstTableTitleDetails(titleId);
  handleFirstTableFetchedData(titleId, titleDetails);
});

// Function to add a row to the first table
function addRowToFirstTable(title, userRating, relevancePercentile, criticScore) {
  const tableBody = document.getElementById('insightsTable').getElementsByTagName('tbody')[0];
  const newRow = tableBody.insertRow();

  const titleCell = newRow.insertCell(0);
  const ratingCell = newRow.insertCell(1);
  const relevanceCell = newRow.insertCell(2);
  const criticScoreCell = newRow.insertCell(3);

  titleCell.textContent = title;
  ratingCell.textContent = userRating;
  relevanceCell.textContent = relevancePercentile;
  criticScoreCell.textContent = criticScore;
}

// Title IDs for the second table
const secondTableTitleIds = [3146538, 3112487, 345101, 3171239, 373015];

// Function to fetch title details from the API for the second table
async function fetchSecondTableTitleDetails(titleId) {
  const apiKey = 'fjP0QU24bxEKqoQkvtiEzk7ZcRMSzsxCweYHUdng';
  const apiUrl = `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${apiKey}&append_to_response=sources`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching title details for the second table:', error);
    return null;
  }
}

// Function to handle fetched data and add rows to the second table
function handleSecondTableFetchedData(titleId, data) {
  if (data) {
    const title = data.title || 'Unknown Title';
    const userRating = data.user_rating || 'N/A';
    const relevancePercentile = data.relevance_percentile || 'N/A';
    const criticScore = data.critic_score || 'N/A';

    addRowToSecondTable(title, userRating, relevancePercentile, criticScore);
  } else {
    console.log(`Failed to fetch details for title ID ${titleId} for the second table`);
  }
}

// Loop through secondTableTitleIds and fetch details for each title for the second table
secondTableTitleIds.forEach(async (titleId) => {
  const titleDetails = await fetchSecondTableTitleDetails(titleId);
  handleSecondTableFetchedData(titleId, titleDetails);
});

// Function to add a row to the second table
function addRowToSecondTable(title, userRating, relevancePercentile, criticScore) {
  const tableBody = document.getElementById('insightsTableTwo').getElementsByTagName('tbody')[0];
  const newRow = tableBody.insertRow();

  const titleCell = newRow.insertCell(0);
  const ratingCell = newRow.insertCell(1);
  const relevanceCell = newRow.insertCell(2);
  const criticScoreCell = newRow.insertCell(3);

  titleCell.textContent = title;
  ratingCell.textContent = userRating;
  relevanceCell.textContent = relevancePercentile;
  criticScoreCell.textContent = criticScore;
}

// Title IDs for the third table
const thirdTableTitleIds = [3135512, 345534, 3125033, 3131293, 3143011];

// Function to fetch title details from the API for the third table
async function fetchThirdTableTitleDetails(titleId) {
  const apiKey = 'fjP0QU24bxEKqoQkvtiEzk7ZcRMSzsxCweYHUdng';
  const apiUrl = `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${apiKey}&append_to_response=sources`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching title details for the third table:', error);
    return null;
  }
}

// Function to handle fetched data and add rows to the third table
function handleThirdTableFetchedData(titleId, data) {
  if (data) {
    const title = data.title || 'Unknown Title';
    const userRating = data.user_rating || 'N/A';
    const relevancePercentile = data.relevance_percentile || 'N/A';
    const criticScore = data.critic_score || 'N/A';

    addRowToThirdTable(title, userRating, relevancePercentile, criticScore);
  } else {
    console.log(`Failed to fetch details for title ID ${titleId} for the third table`);
  }
}

// Loop through thirdTableTitleIds and fetch details for each title for the third table
thirdTableTitleIds.forEach(async (titleId) => {
  const titleDetails = await fetchThirdTableTitleDetails(titleId);
  handleThirdTableFetchedData(titleId, titleDetails);
});

// Function to add a row to the third table
function addRowToThirdTable(title, userRating, relevancePercentile, criticScore) {
  const tableBody = document.getElementById('insightsTableThree').getElementsByTagName('tbody')[0];
  const newRow = tableBody.insertRow();

  const titleCell = newRow.insertCell(0);
  const ratingCell = newRow.insertCell(1);
  const relevanceCell = newRow.insertCell(2);
  const criticScoreCell = newRow.insertCell(3);

  titleCell.textContent = title;
  ratingCell.textContent = userRating;
  relevanceCell.textContent = relevancePercentile;
  criticScoreCell.textContent = criticScore;
}