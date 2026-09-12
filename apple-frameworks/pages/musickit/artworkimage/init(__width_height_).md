> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/artworkimage/init(_:width:height:)](https://developer.apple.com/documentation/musickit/artworkimage/init(_:width:height:))

# init(\_:width:height:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an instance with a specified width and height.

## Declaration

```swift
nonisolated init(_ artwork: Artwork, width: CGFloat, height: CGFloat)
```

<a id="discussion"></a>

## Discussion

This initializer derives the [URL](../../foundation/url.md) for loading the artwork image from the [Artwork](../artwork.md) instance and the specified sizing parameters, as well as the display scale for the current environment.

The loaded image and placeholder have constrained frames from these sizing parameters.
