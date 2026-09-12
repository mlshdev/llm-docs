> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/artworkrepresentation/init(cgimage:)](https://developer.apple.com/documentation/nowplaying/artworkrepresentation/init(cgimage:))

# init(cgImage:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an [ArtworkRepresentation](../artworkrepresentation.md) from a `CGImage` instance.

## Declaration

```swift
init(cgImage: CGImage) throws
```

## Parameters

- `cgImage`: The `CGImage` that represents the artwork.

<a id="discussion"></a>

## Discussion

If the provided image uses an unsupported format, this initializer returns `nil`.
