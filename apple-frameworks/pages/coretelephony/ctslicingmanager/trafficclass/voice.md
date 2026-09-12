> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/trafficclass/voice](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/trafficclass/voice)

# CTSlicingManager.TrafficClass.voice

**Framework:** Core Telephony  
**Kind:** Case  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A traffic class for voice communication with highest priority and lowest latency.

## Declaration

```swift
case voice
```

<a id="discussion"></a>

## Discussion

The voice traffic class provides the highest priority and lowest latency for real-time voice communication, such as phone calls and VoIP.

## See Also

### Traffic classes

- [CTSlicingManager.TrafficClass.any](any.md): A traffic class for general-purpose network traffic without specific QoS requirements.
- [CTSlicingManager.TrafficClass.background](background.md): A traffic class for non-urgent background data transfers.
- [CTSlicingManager.TrafficClass.responsiveData](responsivedata.md): A traffic class for interactive data that requires quick response times.
- [CTSlicingManager.TrafficClass.avStreaming](avstreaming.md): A traffic class for audio and video streaming.
- [CTSlicingManager.TrafficClass.responsiveAV](responsiveav.md): A traffic class for real-time audio and video communication.
- [CTSlicingManager.TrafficClass.video](video.md): A traffic class for video data transmission.
- [CTSlicingManager.TrafficClass.signaling](signaling.md): A traffic class for network signaling and control messages.
