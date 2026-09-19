> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/receiver/renderingevent/didfailtodecode(_:)

# AVSampleBufferVideoRenderer.Receiver.RenderingEvent.didFailToDecode(\_:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that the renderer failed to decode one or more previously enqueued sample buffers.

## Declaration

```swift
case didFailToDecode([any Error])
```

## See Also

### Rendering events

- [AVSampleBufferVideoRenderer.Receiver.RenderingEvent.requiresFlushToResumeDecoding(\_:)](requiresflushtoresumedecoding%28__%29.md): The Receiver requires a flush to continue enqueuing samples.
- [AVSampleBufferVideoRenderer.Receiver.RenderingEvent.failed(\_:)](failed%28__%29.md): Indicates that the receiver cannot currently enqueue or render sample buffers because of the associated error.
