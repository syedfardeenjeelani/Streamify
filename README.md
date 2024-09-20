# Streamify - Music Streaming Analytics Dashboard

## Overview
Streamify is a single-page application (SPA) designed to provide analytics insights for a fictional music streaming service. The dashboard presents key metrics and data visualizations to help management understand user activity, revenue sources, and content performance.

## Features
- **Key Metrics Display:**
  - Total Users: Displays the total number of registered users.
  - Active Users: Shows the number of users who have streamed at least one song in the last 30 days.
  - Total Streams: The total number of song streams on the platform.
  - Revenue: Total revenue generated from subscriptions and advertisements.
  - Top Artist: Displays the artist with the most streams in the past 30 days.

- **Data Visualization:**
  - **User Growth Chart:** A line chart illustrating the growth in total users and active users over the past 12 months.
  - **Revenue Distribution Chart:** A pie chart showing revenue breakdown from different sources (e.g., Subscriptions, Ads).
  - **Top 5 Streamed Songs:** A bar chart displaying the top 5 most-streamed songs in the past 30 days.

- **Data Table:**
  - Lists detailed information about recent streams, including:
    - Song Name
    - Artist
    - Date Streamed
    - Stream Count
    - User ID

- **Bonus Features:**
  - **Pagination:** Implemented pagination for the data table to enhance user experience.

## Technical Details
- Built using **React** for a modular and component-based architecture.
- State management handled using **React's Context API**.
- Data  can be easily adapted for real-world applications.
- Responsive design using **Tailwind CSS** for modern aesthetics.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <https://github.com/syedfardeenjeelani/Streamify>
   cd Streamify
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## Deployment
The application is hosted on [Vercel](<your-vercel-link>).



## Contributing
If you would like to contribute to this project, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
