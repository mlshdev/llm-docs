> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/init(pixelbufferattributes:configuration:)](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/init(pixelbufferattributes:configuration:))

# init(pixelBufferAttributes:configuration:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a new pixel buffer pool which creates pixel buffers using `pixelBufferAttributes`.

## Declaration

```swift
init(pixelBufferAttributes attributes: CVPixelBufferCreationAttributes, configuration: CVMutablePixelBuffer.Pool.Configuration = .init()) throws
```

## Parameters

- `configuration`: Change how the pool allocates and reuses pixel buffer backings.
