> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvreadonlypixelbuffer](https://developer.apple.com/documentation/corevideo/cvreadonlypixelbuffer)

# CVReadOnlyPixelBuffer

**Framework:** Core Video  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.

## Declaration

```swift
final class CVReadOnlyPixelBuffer
```

## Topics

### Initializers

- [init(\_:)](cvreadonlypixelbuffer/init%28__%29.md): Initialize a read-only pixel buffer by consuming a mutable pixel buffer value.
- [init(unsafeBuffer:)](cvreadonlypixelbuffer/init%28unsafebuffer_%29.md): Initialize a read-only pixel buffer by transferring existing CVPixelBuffer value.

### Instance Methods

- [withUnsafeBuffer(\_:)](cvreadonlypixelbuffer/withunsafebuffer%28__%29.md)

## Relationships

### Conforms To

- [CMSampleBuffer.Content](../coremedia/cmsamplebuffer/content.md)
- [CMSampleBuffer.ContentWithFormatDescription](../coremedia/cmsamplebuffer/contentwithformatdescription.md)
- [CVBufferRepresentable](cvbufferrepresentable.md)
- [CVImageBufferRepresentable](cvimagebufferrepresentable.md)
- [CVPixelBufferRepresentable](cvpixelbufferrepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InferenceValue.ViewRepresentable](../coreai/inferencevalue/viewrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift overlay types

- [CVMutablePixelBuffer](cvmutablepixelbuffer.md): CVMutablePixelBuffer provides read-write access to the pixel data and attachments.
- [CVPixelBufferAttributes](cvpixelbufferattributes.md): A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVPixelBufferCreationAttributes](cvpixelbuffercreationattributes.md): Attributes needed for creating a pixel buffer.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.
