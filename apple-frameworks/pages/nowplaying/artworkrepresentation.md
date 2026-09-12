> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/artworkrepresentation](https://developer.apple.com/documentation/nowplaying/artworkrepresentation)

# ArtworkRepresentation

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An artwork image representation, such as music album cover art, associated with a media item.

## Declaration

```swift
struct ArtworkRepresentation
```

<a id="overview"></a>

## Overview

The system may display this artwork on the Lock Screen, in Control Center, and on connected accessories.

## Topics

### Initializers

- [init(cgImage:)](artworkrepresentation/init%28cgimage_%29.md): Creates an [ArtworkRepresentation](artworkrepresentation.md) from a `CGImage` instance.
- [init(data:)](artworkrepresentation/init%28data_%29.md): Creates an [ArtworkRepresentation](artworkrepresentation.md) from image data.

### Enumerations

- [ArtworkRepresentation.ArtworkRepresentationError](artworkrepresentation/artworkrepresentationerror.md): Errors that can occur when creating an [ArtworkRepresentation](artworkrepresentation.md).

## See Also

### Displaying artwork

- [Artwork](artwork.md): Artwork for a media item that can be requested at a specified size.
- [AnimatedArtwork](animatedartwork.md): Animated artwork for the media item with video and preview support.
