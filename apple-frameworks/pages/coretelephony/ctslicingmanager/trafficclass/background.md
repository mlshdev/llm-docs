> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/trafficclass/background](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/trafficclass/background)

# CTSlicingManager.TrafficClass.background

**Framework:** Core Telephony  
**Kind:** Case  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A traffic class for non-urgent background data transfers.

## Declaration

```swift
case background
```

<a id="discussion"></a>

## Discussion

Use the background traffic class for data that doesn’t require immediate delivery, such as backups, synchronization, and content prefetching. This traffic has lower priority and may experience higher latency.

## See Also

### Traffic classes

- [CTSlicingManager.TrafficClass.any](any.md): A traffic class for general-purpose network traffic without specific QoS requirements.
- [CTSlicingManager.TrafficClass.responsiveData](responsivedata.md): A traffic class for interactive data that requires quick response times.
- [CTSlicingManager.TrafficClass.avStreaming](avstreaming.md): A traffic class for audio and video streaming.
- [CTSlicingManager.TrafficClass.responsiveAV](responsiveav.md): A traffic class for real-time audio and video communication.
- [CTSlicingManager.TrafficClass.video](video.md): A traffic class for video data transmission.
- [CTSlicingManager.TrafficClass.voice](voice.md): A traffic class for voice communication with highest priority and lowest latency.
- [CTSlicingManager.TrafficClass.signaling](signaling.md): A traffic class for network signaling and control messages.
