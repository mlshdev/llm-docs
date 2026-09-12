> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggeddynamicbuffer](https://developer.apple.com/documentation/coremedia/cmtaggeddynamicbuffer)

# CMTaggedDynamicBuffer

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Contains a collection of tags associated with a read-only media buffer.

## Declaration

```swift
struct CMTaggedDynamicBuffer
```

## Topics

### Initializers

- [init(tags:content:)](cmtaggeddynamicbuffer/init%28tags_content_%29-1hscu.md)
- [init(tags:content:)](cmtaggeddynamicbuffer/init%28tags_content_%29-1ttie.md)
- [init(tags:content:)](cmtaggeddynamicbuffer/init%28tags_content_%29-5jtjt.md)
- [init(tags:content:)](cmtaggeddynamicbuffer/init%28tags_content_%29-5xcim.md)
- [init(unsafeBuffer:)](cmtaggeddynamicbuffer/init%28unsafebuffer_%29.md)

### Instance Properties

- [content](cmtaggeddynamicbuffer/content-swift.property.md): Buffer containing media.
- [tags](cmtaggeddynamicbuffer/tags.md): Tags associated with the content.

### Instance Methods

- [withUnsafeTaggedBuffer(\_:)](cmtaggeddynamicbuffer/withunsafetaggedbuffer%28__%29.md)

### Enumerations

- [CMTaggedDynamicBuffer.Content](cmtaggeddynamicbuffer/content-swift.enum.md): A read-only buffer associated with the tags.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
