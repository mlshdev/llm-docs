> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffer/creationattributes](https://developer.apple.com/documentation/corevideo/cvbuffer/creationattributes)

# CVBuffer.CreationAttributes

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Attributes needed for creating a pixel buffer.

## Declaration

```swift
struct CreationAttributes
```

## Topics

### Initializers

- [init(\_:)](creationattributes/init%28__%29.md): Deprecated. Convert Attributes to CreationAttributes. This init will fail if [pixelFormatType](creationattributes/pixelformattype.md) or [size](creationattributes/size.md) properties are absent.
- [init(pixelFormatType:size:compatibility:bytesPerRowAlignment:planeAlignment:extendedPixels:)](creationattributes/init%28pixelformattype_size_compatibility_bytesperrowalignment_planealignment_extendedpixels_%29.md): Deprecated.

### Instance Properties

- [backing](creationattributes/backing-swift.property.md): Deprecated. Defines how the memory for the pixel buffer backing is allocated. IOSurface backed pixel buffers can be shared between CPU and GPU also across process boundaries. Defaults to `Backing.ioSurface`.
- [bytesPerRowAlignment](creationattributes/bytesperrowalignment.md): Deprecated. The number of bytes per row in the pixel buffer must be a multiple of this number.
- [compatibility](creationattributes/compatibility.md): Deprecated. Defines interoperability of pixel buffers with other frameworks
- [extendedPixels](creationattributes/extendedpixels.md): Deprecated. Sets the amount of extended pixel padding in the pixel buffer.
- [pixelFormatType](creationattributes/pixelformattype.md): Deprecated. Format of the pixel buffer bytes
- [planeAlignment](creationattributes/planealignment.md): Deprecated. Planes start on a byte number that’s a multiple of this value.
- [size](creationattributes/size.md): Deprecated. Size of the buffer in pixels

### Enumerations

- [CVBuffer.CreationAttributes.Backing](creationattributes/backing-swift.enum.md): Deprecated. Type of backing storage used by the pixel buffer

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
