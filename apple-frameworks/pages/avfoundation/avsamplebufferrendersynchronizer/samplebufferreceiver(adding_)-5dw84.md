> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/samplebufferreceiver(adding:)-5dw84](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/samplebufferreceiver(adding:)-5dw84)

# sampleBufferReceiver(adding:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds a renderer to the list of renderers under the synchronizer’s control and returns a sample buffer receiver to enqueue samples.

## Declaration

```swift
func sampleBufferReceiver(adding renderer: AVSampleBufferAudioRenderer) -> sending AVSampleBufferAudioRenderer.Receiver
```

## Parameters

- `renderer`: The render to be added.

<a id="return-value"></a>

## Return Value

A sample buffer receiver to enqueue samples asynchronously in a detached Task
