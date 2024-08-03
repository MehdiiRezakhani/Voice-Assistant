# Next.js Voice Assistant Project

This project is a voice assistant developed using Next.js with TypeScript. It allows users to interact with the assistant through text or audio responses, leveraging modern web technologies for an engaging user experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Response Mode Selection**: Users can choose between text or audio responses.
- **Voice Recording**: Supports starting and stopping voice recordings.
- **Audio Playback**: Plays the user's recorded voice after a 3-second delay in audio response mode.
- **API Integration**: Calls an external API to fetch and display information in text response mode.
- **Clear Previous Responses**: Clears any previous responses upon each new recording.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` or `yarn`.
4. Start the development server with `npm run dev` or `yarn dev`.

## Usage

After launching the application, select the response mode (audio or text) using the radio buttons. Begin recording by clicking the start button and stop recording with the stop button.

### Audio Response Mode

The system will play back your recorded voice after a 3-second delay if audio response mode is selected.

### Text Response Mode

In text response mode, the application will call an external API to retrieve and display information. Ensure the API endpoint is correctly configured in the project settings.

## Contributing

Contributions to this project are welcome. Please feel free to submit pull requests or open issues for discussion.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
