> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/implementing-flexible-enhanced-buffering-for-your-content](https://developer.apple.com/documentation/avfoundation/implementing-flexible-enhanced-buffering-for-your-content)

# Implementing flexible enhanced buffering for your content (Swift)

**Framework:** AVFoundation  
**Kind:** Article

Configure your app for flexible enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.

<a id="overview"></a>

## Overview

If you’re working with content that requires flexibility with buffering, use the [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md) and [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md) classes.

To implement flexible enhanced buffering, complete the following steps.

1. Create a serialization queue to perform all playback operations on, and create the audio renderer and the render synchronizer to establish the media timeline.

```swift
let serializationQueue = DispatchQueue(label: "sample.buffer.player.serialization.queue")
let audioRenderer = AVSampleBufferAudioRenderer()
let renderSynchronizer = AVSampleBufferRenderSynchronizer()
```

2. Observe when the renderer has flushed enqueued audio, such as when the rate of playback increases or decreases, and re-enqueue audio data starting from the time the flush occurred.

```swift
automaticFlushObserver = NotificationCenter.default.addObserver(forName: .AVSampleBufferAudioRendererWasFlushedAutomatically,
                                                                object: audioRenderer,
                                                                queue: nil) { [weak self] notification in
    self?.serializationQueue.async { [weak self] in
        guard let self = self else { return } 
        // Restart from the point where the flush interrupts the audio.
        let restartTime = (notification.userInfo?[AVSampleBufferAudioRendererFlushTimeKey] as? NSValue)?.timeValue
        self.autoflushPlayback(restartingAt: restartTime)
    }
}
```

3. Add the audio renderer to the render synchronizer, to tell the audio renderer to follow the media timeline.

```swift
renderSynchronizer.addRenderer(audioRenderer)
```

4. Tell the audio renderer to start processing audio data, and set the render synchronizer’s rate to `1` to start playback.

```swift
serializationQueue.async { [weak self] in
    guard let self = self else { return }
    // Start processing audio data and stop when there's no more data.
    self.audioRenderer.requestMediaDataWhenReady(on: serializationQueue) { [weak self] in
        guard let self = self else { return }
        while self.audioRenderer.isReadyForMoreMediaData {
            let sampleBuffer = self.nextSampleBuffer() // Returns nil at end of data.
            if let sampleBuffer = sampleBuffer {
                self.audioRenderer.enqueue(sampleBuffer)
            } else {
                // Tell the renderer to stop requesting audio data.
                audioRenderer.stopRequestingMediaData()
            }
        }
    }

    // Start playback at the natural rate of the media.
    self.renderSynchronizer.rate = 1.0
}
```

## See Also

### Buffered playback

- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md): Configure your app for simple enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.
- [Integrating AirPlay for long-form video apps](integrating-airplay-for-long-form-video-apps.md): Integrate AirPlay features and implement a dedicated external playback experience by preparing the routing system for long-form video playback.

# Implementing flexible enhanced buffering for your content (Objective-C)

**Framework:** AVFoundation  
**Kind:** Article

Configure your app for flexible enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.

<a id="overview"></a>

## Overview

If you’re working with content that requires flexibility with buffering, use the [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md) and [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md) classes.

To implement flexible enhanced buffering, complete the following steps.

1. Create a serialization queue to perform all playback operations on, and create the audio renderer and the render synchronizer to establish the media timeline.

```swift
let serializationQueue = DispatchQueue(label: "sample.buffer.player.serialization.queue")
let audioRenderer = AVSampleBufferAudioRenderer()
let renderSynchronizer = AVSampleBufferRenderSynchronizer()
```

2. Observe when the renderer has flushed enqueued audio, such as when the rate of playback increases or decreases, and re-enqueue audio data starting from the time the flush occurred.

```swift
automaticFlushObserver = NotificationCenter.default.addObserver(forName: .AVSampleBufferAudioRendererWasFlushedAutomatically,
                                                                object: audioRenderer,
                                                                queue: nil) { [weak self] notification in
    self?.serializationQueue.async { [weak self] in
        guard let self = self else { return } 
        // Restart from the point where the flush interrupts the audio.
        let restartTime = (notification.userInfo?[AVSampleBufferAudioRendererFlushTimeKey] as? NSValue)?.timeValue
        self.autoflushPlayback(restartingAt: restartTime)
    }
}
```

3. Add the audio renderer to the render synchronizer, to tell the audio renderer to follow the media timeline.

```swift
renderSynchronizer.addRenderer(audioRenderer)
```

4. Tell the audio renderer to start processing audio data, and set the render synchronizer’s rate to `1` to start playback.

```swift
serializationQueue.async { [weak self] in
    guard let self = self else { return }
    // Start processing audio data and stop when there's no more data.
    self.audioRenderer.requestMediaDataWhenReady(on: serializationQueue) { [weak self] in
        guard let self = self else { return }
        while self.audioRenderer.isReadyForMoreMediaData {
            let sampleBuffer = self.nextSampleBuffer() // Returns nil at end of data.
            if let sampleBuffer = sampleBuffer {
                self.audioRenderer.enqueue(sampleBuffer)
            } else {
                // Tell the renderer to stop requesting audio data.
                audioRenderer.stopRequestingMediaData()
            }
        }
    }

    // Start playback at the natural rate of the media.
    self.renderSynchronizer.rate = 1.0
}
```

## See Also

### Buffered playback

- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md): Configure your app for simple enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.
