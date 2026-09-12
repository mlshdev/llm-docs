> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/init(id:image:)](https://developer.apple.com/documentation/realitykit/photogrammetrysample/init(id:image:))

# init(id:image:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a new sample.

## Declaration

```swift
init(id: Int, image: CVPixelBuffer)
```

## Parameters

- `id`: A unique identifier for the sample.  This `id` *must* be in the domain \[0, 2147483647\].
- `image`: The image data in one of the following formats:

  - [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md)

    - [kCVPixelFormatType_32ARGB](../../corevideo/kcvpixelformattype_32argb.md)
