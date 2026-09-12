> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/animatedartwork](https://developer.apple.com/documentation/nowplaying/animatedartwork)

# AnimatedArtwork

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Animated artwork for the media item with video and preview support.

## Declaration

```swift
struct AnimatedArtwork
```

<a id="overview"></a>

## Overview

The following example shows how to attach animated artwork to a content value:

```swift
let content = MusicContent(
    id: track.id,
    songTitle: track.title,
    artistName: track.artist,
    albumName: track.album,
    type: .audio,
    duration: .finite(track.duration),
    artwork: Artwork(id: track.artworkID) { size in
        let data = await loadArtworkData(size: size)
        return try ArtworkRepresentation(data: data)
    },
    animatedArtwork: AnimatedArtwork(
        id: "animated-789",
        supportedAspectRatios: [.square, .tall],
        preview: { size, ratio in
            let data = await loadPreviewData(size: size, ratio: ratio)
            return try ArtworkRepresentation(data: data)
        },
        video: { size, ratio in
            await loadVideoURL(size: size, ratio: ratio)
        }
    )
)
```

## Topics

### Initializers

- [init(id:supportedAspectRatios:preview:video:)](animatedartwork/init%28id_supportedaspectratios_preview_video_%29.md): Creates an animated artwork whose preview and video assets load on demand.

### Instance Properties

- [id](animatedartwork/id.md): A unique identifier for this animated artwork asset.
- [supportedAspectRatios](animatedartwork/supportedaspectratios.md): The aspect ratios this artwork supports.

### Type Properties

- [compatibleAspectRatios](animatedartwork/compatibleaspectratios.md): The aspect ratios compatible with the current device.

### Enumerations

- [AnimatedArtwork.AspectRatio](animatedartwork/aspectratio.md): The aspect ratio of the animated artwork.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Displaying artwork

- [Artwork](artwork.md): Artwork for a media item that can be requested at a specified size.
- [ArtworkRepresentation](artworkrepresentation.md): An artwork image representation, such as music album cover art, associated with a media item.
