> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer)

# CVMutablePixelBuffer

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

CVMutablePixelBuffer provides read-write access to the pixel data and attachments.

## Declaration

```swift
struct CVMutablePixelBuffer
```

## Topics

### Classes

- [CVMutablePixelBuffer.Pool](cvmutablepixelbuffer/pool.md): Manage and recycle pixel buffer backings.

### Initializers

- [init(\_:)](cvmutablepixelbuffer/init%28__%29.md): Creates a CVPixelBuffer with given attributes. It allocates the necessary memory based on the dimensions, pixel format and extended pixels described in the `CVPixelBuffer/Attributes`.
- [init(unsafeBacking:matching:)](cvmutablepixelbuffer/init%28unsafebacking_matching_%29.md): Creates a CVPixelBuffer backed by the given `ioSurface`. The CVPixelBuffer will retain the `ioSurface`. **IMPORTANT** If you are using IOSurface to share CVPixelBuffers between processes and those CVPixelBuffers are allocated via a CVPixelBufferPool, it is important that the CVPixelBufferPool does not reuse CVPixelBuffers whose IOSurfaces are still in use in other processes. CoreVideo and IOSurface will take care of this for if you use IOSurfaceCreateMachPort and IOSurfaceLookupFromMachPort, but NOT if you pass IOSurfaceIDs.
- [init(unsafeBuffer:)](cvmutablepixelbuffer/init%28unsafebuffer_%29.md): Initialize a mutable pixel buffer by transferring existing CVPixelBuffer value.

### Instance Properties

- [attachments](cvmutablepixelbuffer/attachments.md): Access attachments of this pixel buffer.

### Instance Methods

- [accessUnsafeMutableRawPlaneBytes(\_:)](cvmutablepixelbuffer/accessunsafemutablerawplanebytes%28__%29.md): Access the pixels in the planes contained within this buffer. The base address is locked for writing during the execution of the block.
- [fillExtendedPixels()](cvmutablepixelbuffer/fillextendedpixels%28%29.md): Fills the extended pixels of the pixel buffer. This method replicates the edge pixels to fill the entire extended region of the image.
- [withUnsafeBuffer(\_:)](cvmutablepixelbuffer/withunsafebuffer%28__%29.md)

## Relationships

### Conforms To

- [CVBufferRepresentable](cvbufferrepresentable.md)
- [CVImageBufferRepresentable](cvimagebufferrepresentable.md)
- [CVPixelBufferRepresentable](cvpixelbufferrepresentable.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InferenceValue.MutableViewRepresentable](../coreai/inferencevalue/mutableviewrepresentable.md)
- [InferenceValue.ViewRepresentable](../coreai/inferencevalue/viewrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift overlay types

- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md): CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.
- [CVPixelBufferAttributes](cvpixelbufferattributes.md): A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVPixelBufferCreationAttributes](cvpixelbuffercreationattributes.md): Attributes needed for creating a pixel buffer.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.
