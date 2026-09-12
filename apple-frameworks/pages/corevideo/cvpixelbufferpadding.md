> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpadding](https://developer.apple.com/documentation/corevideo/cvpixelbufferpadding)

# CVPixelBufferPadding

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Padding pixels around the CVPixelBuffer

## Declaration

```swift
@frozen struct CVPixelBufferPadding
```

## Topics

### Initializers

- [init(left:right:top:bottom:)](cvpixelbufferpadding/init%28left_right_top_bottom_%29.md)

### Instance Properties

- [bottom](cvpixelbufferpadding/bottom.md): Pixel row padding at the bottom
- [left](cvpixelbufferpadding/left.md): Pixel column padding to the left
- [right](cvpixelbufferpadding/right.md): Pixel column padding to the right
- [top](cvpixelbufferpadding/top.md): Pixel row padding at the top

### Type Properties

- [zero](cvpixelbufferpadding/zero.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
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
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.
