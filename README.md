# 🐢 Turtle Timer

A beautiful React timer that shows how much time has passed since March 23, 2025. Features a modern, responsive design with smooth animations.

## Features

- ⏰ Real-time countdown timer
- 📱 Responsive design for all devices
- 🎨 Modern glassmorphism UI
- 🌈 Beautiful gradient background
- ⚡ Smooth animations and hover effects

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/turtle-timer.git
cd turtle-timer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://yourusername.github.io/turtle-timer"
```

2. Install gh-pages if not already installed:
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Go to your GitHub repository settings and enable GitHub Pages from the `gh-pages` branch.

## Technologies Used

- React 18
- CSS3 with modern features (backdrop-filter, grid, animations)
- GitHub Pages for deployment

## Project Structure

```
turtle-timer/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main timer component
│   ├── App.css         # Timer styles
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Customization

To change the start date, modify the `startDate` variable in `src/App.js`:

```javascript
const startDate = new Date('2025-03-23T00:00:00');
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ and React 