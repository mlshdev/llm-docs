> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/contenttype-swift.enum](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/contenttype-swift.enum)

# CMSampleBuffer.ContentType

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes the type of content carried by a sample buffer instance.

## Declaration

```swift
enum ContentType
```

## Topics

### Enumeration Cases

- [CMSampleBuffer.ContentType.dataBuffer](contenttype-swift.enum/databuffer.md): Sample buffer is carrying a block buffer containing bytes.
- [CMSampleBuffer.ContentType.markerOnly](contenttype-swift.enum/markeronly.md): Marker sample buffers have neither data nor format description. These buffers are used for signaling events via the attachments when sample buffer content is not available.
- [CMSampleBuffer.ContentType.pixelBuffer](contenttype-swift.enum/pixelbuffer.md): Sample buffer is carrying a CoreVideo pixel buffer.
- [CMSampleBuffer.ContentType.sampleReference](contenttype-swift.enum/samplereference.md): Sample buffer references sample data at a URL.
- [CMSampleBuffer.ContentType.taggedBuffers](contenttype-swift.enum/taggedbuffers.md): Sample buffer is carrying a group of tagged buffers.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
