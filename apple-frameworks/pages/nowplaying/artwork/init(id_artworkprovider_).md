> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/artwork/init(id:artworkprovider:)](https://developer.apple.com/documentation/nowplaying/artwork/init(id:artworkprovider:))

# init(id:artworkProvider:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an artwork whose image data loads on demand at the requested size.

## Declaration

```swift
init(id: String, artworkProvider: @escaping @Sendable (CGSize) async throws -> ArtworkRepresentation)
```

## Parameters

- `id`: A unique identifier for this artwork.
- `artworkProvider`: A handler the system calls to request an [ArtworkRepresentation](../artworkrepresentation.md) for a specified size.

<a id="discussion"></a>

## Discussion

The provider returns artwork that matches the requested size when possible. One dimension may differ if the artwork’s aspect ratio differs from the requested size. If the requested size exceeds the artwork’s maximum available size, the provider returns the artwork at its maximum size without enlarging the image.
