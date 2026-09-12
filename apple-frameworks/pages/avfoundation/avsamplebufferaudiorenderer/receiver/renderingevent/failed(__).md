> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver/renderingevent/failed(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/renderingevent/failed(_:))

# AVSampleBufferAudioRenderer.Receiver.RenderingEvent.failed(\_:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that the receiver cannot currently enqueue or render sample buffers because of the associated error.

## Declaration

```swift
case failed(any Error)
```

## See Also

### Rendering events

- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.outputConfigurationChanged](outputconfigurationchanged.md): Indicates that the audio output configuration has changed.
- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.wasFlushedAutomatically(at:)](wasflushedautomatically%28at_%29.md): The enqueued media data has been flushed for a reason other than a call to the `flush()` method.
