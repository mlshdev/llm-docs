> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/receiver/renderingevent](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/receiver/renderingevent)

# AVSampleBufferVideoRenderer.Receiver.RenderingEvent

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Events that might require intervention after there are no more samples to enqueue, but before rendering has finished.

## Declaration

```swift
enum RenderingEvent
```

## Topics

### Rendering events

- [AVSampleBufferVideoRenderer.Receiver.RenderingEvent.didFailToDecode(\_:)](renderingevent/didfailtodecode%28__%29.md): Indicates that the renderer failed to decode one or more previously enqueued sample buffers.
- [AVSampleBufferVideoRenderer.Receiver.RenderingEvent.requiresFlushToResumeDecoding(\_:)](renderingevent/requiresflushtoresumedecoding%28__%29.md): The Receiver requires a flush to continue enqueuing samples.
- [AVSampleBufferVideoRenderer.Receiver.RenderingEvent.failed(\_:)](renderingevent/failed%28__%29.md): Indicates that the receiver cannot currently enqueue or render sample buffers because of the associated error.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing rendering events

- [renderingEventsAfterFinishedEnqueuing](renderingeventsafterfinishedenqueuing.md): A sequence of events that may occur when rendering after enqueuing samples has finished.
