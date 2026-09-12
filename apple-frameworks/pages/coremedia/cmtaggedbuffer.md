> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffer](https://developer.apple.com/documentation/coremedia/cmtaggedbuffer)

# CMTaggedBuffer

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An instance of a media buffer containing metadata tags.

## Declaration

```swift
struct CMTaggedBuffer
```

## Topics

### Creating Tagged Buffers

- [init(tags:buffer:)](cmtaggedbuffer/init%28tags_buffer_%29.md): Creates a new tagged buffer from tags and an existing media buffer.
- [init(tags:sampleBuffer:)](cmtaggedbuffer/init%28tags_samplebuffer_%29.md): Creates a new tagged buffer from tags and an existing sample buffer.
- [init(tags:pixelBuffer:)](cmtaggedbuffer/init%28tags_pixelbuffer_%29.md): Creates a new tagged buffer from tags and an existing pixel buffer.

### Inspecting Data

- [tags](cmtaggedbuffer/tags.md): The tags for this buffer.
- [buffer](cmtaggedbuffer/buffer-swift.property.md): The underlying buffer containing media data.

### Buffer Wrappers

- [CMTaggedBuffer.Buffer](cmtaggedbuffer/buffer-swift.enum.md): A wrapper type for the underlying buffer of a tagged buffer.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.
