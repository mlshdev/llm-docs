> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferplaneproperties](https://developer.apple.com/documentation/corevideo/cvpixelbufferplaneproperties)

# CVPixelBufferPlaneProperties

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Properties of a plane of pixels in pixel buffer

## Declaration

```swift
@frozen struct CVPixelBufferPlaneProperties
```

## Topics

### Initializers

- [init(size:bytesPerRow:)](cvpixelbufferplaneproperties/init%28size_bytesperrow_%29.md)

### Instance Properties

- [bytesPerRow](cvpixelbufferplaneproperties/bytesperrow.md): Number of bytes in each row of the plane. Note that this may be greater than the number of bytes required for all pixels in the row.
- [size](cvpixelbufferplaneproperties/size.md): Size of the plane in pixels

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift overlay types

- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md): CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.
- [CVMutablePixelBuffer](cvmutablepixelbuffer.md): CVMutablePixelBuffer provides read-write access to the pixel data and attachments.
- [CVPixelBufferAttributes](cvpixelbufferattributes.md): A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVPixelBufferCreationAttributes](cvpixelbuffercreationattributes.md): Attributes needed for creating a pixel buffer.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.
