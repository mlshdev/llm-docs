> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/imageattachment/pixelbuffer(resolution:pixelformat:)](https://developer.apple.com/documentation/foundationmodels/transcript/imageattachment/pixelbuffer(resolution:pixelformat:))

# pixelBuffer(resolution:pixelFormat:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the image as a pixel buffer, optionally resampled to a given resolution and pixel format.

## Declaration

```swift
func pixelBuffer(resolution: CGSize? = nil, pixelFormat: OSType? = nil) throws -> CVReadOnlyPixelBuffer
```

## Parameters

- `resolution`: The desired resolution of the pixel buffer. Defaults to the image’s original resolution.
- `pixelFormat`: The pixel format of the pixel buffer. Defaults to `kCVPixelFormatType_32BGRA`.
