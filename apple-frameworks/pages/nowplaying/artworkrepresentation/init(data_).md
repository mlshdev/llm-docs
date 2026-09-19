> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/artworkrepresentation/init(data:)

# init(data:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an [ArtworkRepresentation](../artworkrepresentation.md) from image data.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: The encoded image data.

<a id="discussion"></a>

## Discussion

> **Throws**

> [ArtworkRepresentation.ArtworkRepresentationError.noRepresentationAvailable](artworkrepresentationerror/norepresentationavailable.md) if the data doesn’t represent a valid image or uses an unsupported format.
