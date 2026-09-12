> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbufferrepresentable](https://developer.apple.com/documentation/corevideo/cvbufferrepresentable)

# CVBufferRepresentable

**Framework:** Core Video  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

CVBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVBuffer type.

## Declaration

```swift
protocol CVBufferRepresentable<Buffer> : ~Copyable
```

## Topics

### Associated Types

- [Buffer](cvbufferrepresentable/buffer.md)

### Instance Methods

- [withUnsafeBuffer(\_:)](cvbufferrepresentable/withunsafebuffer%28__%29.md): Access the underlying `Buffer` object. This function should be used to bridge existing code that uses the Buffer type.

## Relationships

### Inherited By

- [CVImageBufferRepresentable](cvimagebufferrepresentable.md)
- [CVPixelBufferRepresentable](cvpixelbufferrepresentable.md)

### Conforming Types

- [CVMutablePixelBuffer](cvmutablepixelbuffer.md)
- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md)

## See Also

### Protocols

- [CVAttachmentKeyDefinitions](cvattachmentkeydefinitions.md): Marks a type as a collection of attachment keys for an attachment bearer.
- [CVAttachmentModePreference](cvattachmentmodepreference.md): Defines preferred mode for an attachment key.
- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md): Allows Swift types to be used as buffer attachment value.
