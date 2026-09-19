> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/renderingevent/outputconfigurationchanged

# AVSampleBufferAudioRenderer.Receiver.RenderingEvent.outputConfigurationChanged

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that the audio output configuration has changed.

## Declaration

```swift
case outputConfigurationChanged
```

## See Also

### Rendering events

- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.wasFlushedAutomatically(at:)](wasflushedautomatically%28at_%29.md): The enqueued media data has been flushed for a reason other than a call to the `flush()` method.
- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent.failed(\_:)](failed%28__%29.md): Indicates that the receiver cannot currently enqueue or render sample buffers because of the associated error.
