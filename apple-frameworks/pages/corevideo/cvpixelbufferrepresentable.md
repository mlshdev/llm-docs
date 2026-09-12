> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferrepresentable](https://developer.apple.com/documentation/corevideo/cvpixelbufferrepresentable)

# CVPixelBufferRepresentable

**Framework:** Core Video  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

CVPixelBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVPixelBuffer type.

## Declaration

```swift
protocol CVPixelBufferRepresentable : CVImageBufferRepresentable, ~Copyable
```

## Topics

### Instance Properties

- [attachments](cvpixelbufferrepresentable/attachments-swift.property.md): Access attachments of this pixel buffer.
- [creationAttributes](cvpixelbufferrepresentable/creationattributes.md): Attributes used for creating this pixel buffer
- [extendedPixels](cvpixelbufferrepresentable/extendedpixels.md): Padding pixels around this pixel buffer
- [isPlanar](cvpixelbufferrepresentable/isplanar.md): True if the buffer was created with support for one or more planes.
- [pixelFormatType](cvpixelbufferrepresentable/pixelformattype.md): Pixel format of this pixel buffer
- [planeCount](cvpixelbufferrepresentable/planecount.md): Number of planes in this pixel buffer. This value will always be greater than 0. `planeCount` is more efficient to access than count property of `planes`. A non-planar pixel buffer implicitly defines a single plane. To check if the pixel buffer was defined with planes use [isPlanar](cvpixelbufferrepresentable/isplanar.md) property.
- [planeProperties](cvpixelbufferrepresentable/planeproperties.md): Properties of all the planes in this pixel buffer. This array will contain at least one element. In case of non-planar pixel buffers, the first value represents the entire pixel data.
- [size](cvpixelbufferrepresentable/size.md): Size of the pixel buffer in pixels

### Instance Methods

- [accessUnsafeRawPlaneBytes(\_:)](cvpixelbufferrepresentable/accessunsaferawplanebytes%28__%29.md): Access the pixels in the planes contained within this buffer. The base address is locked for reading during the execution of the block.
- [isCompatibleWith(\_:)](cvpixelbufferrepresentable/iscompatiblewith%28__%29-9fsoy.md): Returns `true` if the pixel buffer is compatible with the specified attributes.
- [isCompatibleWith(\_:)](cvpixelbufferrepresentable/iscompatiblewith%28__%29-b775.md): Returns `true` if the pixel buffer is compatible with the specified creation attributes.
- [withUnsafeBackingIOSurfaceIfPresent(\_:)](cvpixelbufferrepresentable/withunsafebackingiosurfaceifpresent%28__%29.md): Access the IOSurface backing the pixel buffer if present.

### Type Aliases

- [CVPixelBufferRepresentable.Attachments](cvpixelbufferrepresentable/attachments-swift.typealias.md)

## Relationships

### Inherits From

- [CVBufferRepresentable](cvbufferrepresentable.md)
- [CVImageBufferRepresentable](cvimagebufferrepresentable.md)

### Conforming Types

- [CVMutablePixelBuffer](cvmutablepixelbuffer.md)
- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md)

## See Also

### Protocols

- [CVPixelBufferAttachmentKeyDefinitions](cvpixelbufferattachmentkeydefinitions.md): A namespace for pixel buffer attachment keys.
