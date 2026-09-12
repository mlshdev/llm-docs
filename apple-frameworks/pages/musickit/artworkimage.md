> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/artworkimage](https://developer.apple.com/documentation/musickit/artworkimage)

# ArtworkImage

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A view that displays the image for a music item’s artwork.

## Declaration

```swift
@MainActor @preconcurrency struct ArtworkImage
```

<a id="overview"></a>

## Overview

You can create an artwork image with an instance of [Artwork](artwork.md).

While the artwork’s image data is loading, [ArtworkImage](artworkimage.md) automatically displays a placeholder with a solid color that matches the [backgroundColor](artwork/backgroundcolor.md) property of the artwork to render.

## Topics

### Initializers

- [init(\_:height:)](artworkimage/init%28__height_%29.md): Creates an instance with a specified height.
- [init(\_:width:)](artworkimage/init%28__width_%29.md): Creates an instance with a specified width.
- [init(\_:width:height:)](artworkimage/init%28__width_height_%29.md): Creates an instance with a specified width and height.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Artwork

- [Artwork](artwork.md): An object that represents artwork for a music item.
