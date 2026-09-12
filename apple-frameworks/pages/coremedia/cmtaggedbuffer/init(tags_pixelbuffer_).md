> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffer/init(tags:pixelbuffer:)](https://developer.apple.com/documentation/coremedia/cmtaggedbuffer/init(tags:pixelbuffer:))

# init(tags:pixelBuffer:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tagged buffer from tags and an existing pixel buffer.

## Declaration

```swift
init(tags: [CMTag], pixelBuffer: CVPixelBuffer)
```

## Parameters

- `tags`: The tags to assign to the buffer.
- `pixelBuffer`: A pixel buffer containing image-based media to associate with the tags.

## See Also

### Creating Tagged Buffers

- [init(tags:buffer:)](init%28tags_buffer_%29.md): Creates a new tagged buffer from tags and an existing media buffer.
- [init(tags:sampleBuffer:)](init%28tags_samplebuffer_%29.md): Creates a new tagged buffer from tags and an existing sample buffer.
