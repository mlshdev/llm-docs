> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver/renderingevent](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/renderingevent)

# AVSampleBufferAudioRenderer.Receiver.RenderingEvent

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Events that might require intervention after there are no more samples to enqueue, but before rendering has finished.

## Declaration

```swift
enum RenderingEvent
```

## Topics

### Rendering events

- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.outputConfigurationChanged](renderingevent/outputconfigurationchanged.md): Indicates that the audio output configuration has changed.
- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.wasFlushedAutomatically(at:)](renderingevent/wasflushedautomatically%28at_%29.md): The enqueued media data has been flushed for a reason other than a call to the `flush()` method.
- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.failed(\_:)](renderingevent/failed%28__%29.md): Indicates that the receiver cannot currently enqueue or render sample buffers because of the associated error.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing rendering events

- [renderingEventsAfterFinishedEnqueuing](renderingeventsafterfinishedenqueuing.md): A sequence of events that may occur when rendering after enqueuing samples has finished.
