> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtaggedbuffer/init(tags:buffer:)

# init(tags:buffer:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tagged buffer from tags and an existing media buffer.

## Declaration

```swift
init(tags: [CMTag], buffer: CMTaggedBuffer.Buffer)
```

## Parameters

- `tags`: The tags to assign to the buffer.
- `buffer`: The buffer, wrapped as a [CMTaggedBuffer.Buffer](buffer-swift.enum.md), to associate with the tags.

## See Also

### Creating Tagged Buffers

- [init(tags:sampleBuffer:)](init%28tags_samplebuffer_%29.md): Creates a new tagged buffer from tags and an existing sample buffer.
- [init(tags:pixelBuffer:)](init%28tags_pixelbuffer_%29.md): Creates a new tagged buffer from tags and an existing pixel buffer.
