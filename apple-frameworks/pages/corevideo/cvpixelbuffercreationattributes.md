> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffercreationattributes](https://developer.apple.com/documentation/corevideo/cvpixelbuffercreationattributes)

# CVPixelBufferCreationAttributes

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Attributes needed for creating a pixel buffer.

## Declaration

```swift
struct CVPixelBufferCreationAttributes
```

## Topics

### Initializers

- [init(\_:)](cvpixelbuffercreationattributes/init%28__%29.md): Convert Attributes to CreationAttributes. This init will fail if [pixelFormatType](cvpixelbuffercreationattributes/pixelformattype.md) or [size](cvpixelbuffercreationattributes/size.md) properties are absent.
- [init(pixelFormatType:size:compatibility:bytesPerRowAlignment:planeAlignment:extendedPixels:)](cvpixelbuffercreationattributes/init%28pixelformattype_size_compatibility_bytesperrowalignment_planealignment_extendedpixels_%29.md)
- [init(pixelFormatType:size:compatibility:bytesPerRowAlignment:planeAlignment:extendedPixels:attachments:)](cvpixelbuffercreationattributes/init%28pixelformattype_size_compatibility_bytesperrowalignment_planealignment_extendedpixels_attachments_%29.md)

### Instance Properties

- [attachments](cvpixelbuffercreationattributes/attachments.md): Attachments to set on the pixel buffer.
- [backing](cvpixelbuffercreationattributes/backing-swift.property.md): Defines how the memory for the pixel buffer backing is allocated. IOSurface backed pixel buffers can be shared between CPU and GPU also across process boundaries. Defaults to `Backing.ioSurface`.
- [bytesPerRowAlignment](cvpixelbuffercreationattributes/bytesperrowalignment.md): The number of bytes per row in the pixel buffer must be a multiple of this number.
- [compatibility](cvpixelbuffercreationattributes/compatibility.md): Defines interoperability of pixel buffers with other frameworks
- [extendedPixels](cvpixelbuffercreationattributes/extendedpixels.md): Sets the amount of extended pixel padding in the pixel buffer.
- [pixelFormatType](cvpixelbuffercreationattributes/pixelformattype.md): Format of the pixel buffer bytes
- [planeAlignment](cvpixelbuffercreationattributes/planealignment.md): Planes start on a byte number that’s a multiple of this value.
- [size](cvpixelbuffercreationattributes/size.md): Size of the buffer in pixels

### Enumerations

- [CVPixelBufferCreationAttributes.Backing](cvpixelbuffercreationattributes/backing-swift.enum.md): Type of backing storage used by the pixel buffer

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift overlay types

- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md): CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.
- [CVMutablePixelBuffer](cvmutablepixelbuffer.md): CVMutablePixelBuffer provides read-write access to the pixel data and attachments.
- [CVPixelBufferAttributes](cvpixelbufferattributes.md): A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.
