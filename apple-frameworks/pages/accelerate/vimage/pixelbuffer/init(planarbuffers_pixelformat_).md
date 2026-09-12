> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(planarbuffers:pixelformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(planarbuffers:pixelformat:))

# init(planarBuffers:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns an initialized buffer by copying the specified planar buffers.

## Declaration

```swift
init(planarBuffers: [vImage.PixelBuffer<Format.PlanarPixelFormat>], pixelFormat: Format.Type = Format.self)
```

## Parameters

- `planarBuffers`: An array that contains the source planar buffers.
- `pixelFormat`: The pixel format of the initialized buffer.

<a id="Discussion"></a>

## Discussion

> **Note**

>  The number of planar buffers must equal the `Format.planeCount`. All planar buffers must be the same size.
