// // Playlist Array
// const playlist = [
//   { title: "Bnt El Jzrawiye", src: "./assets/audio/BntElJzrawiye.mp3" },
//   { title: "Em El Wafa", src: "./assets/audio/EmElWafa.mp3" },
//   { title: "Mi Togh", src: "./assets/audio/MiTogh.mp3" },
// ];

// let currentTrack = 0; // Index of the current track
// let isPlaying = false;
// let sound = null;

// // Initialize Howler with the current track
// async function initializeSound() {
//   if (sound) sound.unload(); // Unload the previous sound to avoid conflicts
//   sound = new Howl({
//     src: [playlist[currentTrack].src],
//     autoplay: false,
//     loop: false,
//     volume: 0.7,
//     onend: async () => {
//       await nextTrack();
//     },
//   });
// }

// // Update Track Information
// async function updateTrackInfo() {
//   document.getElementById("track-title").textContent =
//     playlist[currentTrack].title;
//   updatePlaylistHighlight();
//   await resetTimeline();
// }

// // Highlight the Current Track in Playlist
// function updatePlaylistHighlight() {
//   const playlistItems = document.querySelectorAll("#playlist li");
//   playlistItems.forEach((item, index) => {
//     item.classList.toggle("active", index === currentTrack);
//   });
// }

// // Populate Playlist
// function populatePlaylist() {
//   const playlistElement = document.getElementById("playlist");
//   playlistElement.innerHTML = ""; // Clear previous playlist

//   playlist.forEach((track, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//         <span>${track.title}</span>
//         <button class="playButton" data-index="${index}">Play</button>
//       `;
//     playlistElement.appendChild(li);
//   });

//   // Add event listeners to playlist buttons
//   playlistElement.querySelectorAll(".playButton").forEach((button) => {
//     button.addEventListener("click", async (e) => {
//       currentTrack = parseInt(button.getAttribute("data-index"), 10);
//       await switchTrack();
//     });
//   });
// }

// // Play or Pause the Current Track
// async function playPause() {
//   if (!sound) await initializeSound();

//   if (isPlaying) {
//     sound.pause();
//     isPlaying = false;
//     document.getElementById("playPauseButton").textContent = "Play";
//   } else {
//     sound.play();
//     isPlaying = true;
//     document.getElementById("playPauseButton").textContent = "Pause";
//     await startTimelineUpdate();
//   }
// }

// // Play the Next Track
// async function nextTrack() {
//   currentTrack = (currentTrack + 1) % playlist.length;
//   await switchTrack();
// }

// // Play the Previous Track
// async function prevTrack() {
//   currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
//   await switchTrack();
// }

// // Switch to a Specific Track
// async function switchTrack() {
//   if (sound) sound.stop();
//   await initializeSound();
//   await updateTrackInfo();
//   sound.play();
//   isPlaying = true;
//   document.getElementById("playPauseButton").textContent = "Pause";
//   await resetTimeline();
// }

// // Reset Timeline When Switching Tracks
// async function resetTimeline() {
//   const seekBar = document.getElementById("seek-bar");
//   seekBar.value = 0; // Reset the seek bar position
// }

// // Start Timeline Updates
// async function startTimelineUpdate() {
//   const seekBar = document.getElementById("seek-bar");

//   const update = () => {
//     if (sound && sound.playing()) {
//       const progress = (sound.seek() / sound.duration()) * 100 || 0;
//       seekBar.value = progress; // Move the seek bar's blue button
//       requestAnimationFrame(update);
//     }
//   };

//   requestAnimationFrame(update);

//   // Allow users to seek within the track
//   seekBar.addEventListener("input", async (e) => {
//     const seekPosition = (e.target.value / 100) * sound.duration();
//     sound.seek(seekPosition);
//   });
// }

// // Event Listeners for Playback Controls
// document.getElementById("playPauseButton").addEventListener("click", playPause);
// document.getElementById("nextButton").addEventListener("click", nextTrack);
// document.getElementById("prevButton").addEventListener("click", prevTrack);

// // Initialize the Player
// (async () => {
//   populatePlaylist();
//   await initializeSound();
//   await updateTrackInfo();
// })();
