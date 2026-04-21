interface MusicPlayerProps {
  url: string;
  playing: boolean;
}

export default function MusicPlayer({ url, playing }: MusicPlayerProps) {
  if (!playing) return null;

  // Extract ID from the short or long youtube URL
  let videoId = "";
  if (url.includes("v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }

  if (!videoId) return null;

  // Most standard YouTube embed URL for autoplay
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${videoId}`;

  return (
    <div 
      className="fixed bottom-0 left-0 w-[1px] h-[1px] opacity-[0.01] pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    >
      <iframe
        width="64"
        height="64"
        src={embedUrl}
        allow="autoplay; encrypted-media"
        frameBorder="0"
        title="Background Music"
      />
    </div>
  )
}
