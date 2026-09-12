> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(referencing:planeindex:overridesize:pixelformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(referencing:planeindex:overridesize:pixelformat:))

# init(referencing:planeIndex:overrideSize:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Initializes a pixel buffer by refencing the data from a single plane of a multiplane Core Video pixel buffer.

## Declaration

```swift
init(referencing lockedCVPixelBuffer: CVPixelBuffer, planeIndex: Int, overrideSize: vImage.Size? = nil, pixelFormat: Format.Type = Format.self)
```

## Parameters

- `lockedCVPixelBuffer`: The locked Core Video pixel buffer. Use [CVPixelBufferLockBaseAddress(\_:\_:)](../../../corevideo/cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](../../../corevideo/cvpixelbufferunlockbaseaddress%28____%29.md) to lock and unlock the pixel buffer.
- `planeIndex`: The index of the plane that the function references.
- `overrideSize`: An optional size that overrides the size returned by [CVPixelBufferGetHeightOfPlane(\_:\_:)](../../../corevideo/cvpixelbuffergetheightofplane%28____%29.md) and [CVPixelBufferGetWidthOfPlane(\_:\_:)](../../../corevideo/cvpixelbuffergetwidthofplane%28____%29.md). Use this parameter if you intend to pass the buffer to the any-to-any converter that requires all buffers to be the same size.
- `pixelFormat`: The pixel format of the initialized buffer.

## See Also

### Creating a pixel buffer from a Core Video buffer

- [init(copying:cvImageFormat:cgImageFormat:pixelFormat:)](init%28copying_cvimageformat_cgimageformat_pixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Initializes a pixel buffer by copying the data from a Core Video pixel buffer.
- [init(referencing:converter:destinationPixelFormat:)](init%28referencing_converter_destinationpixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Returns a new pixel buffer that references the specified Core Video pixel buffer and populated converter.
