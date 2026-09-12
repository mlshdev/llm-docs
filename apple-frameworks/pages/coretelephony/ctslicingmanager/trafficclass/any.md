> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/trafficclass/any](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/trafficclass/any)

# CTSlicingManager.TrafficClass.any

**Framework:** Core Telephony  
**Kind:** Case  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A traffic class for general-purpose network traffic without specific QoS requirements.

## Declaration

```swift
case any
```

<a id="discussion"></a>

## Discussion

This traffic class doesn’t specify particular quality-of-service requirements, so you can use it for general-purpose network traffic. Network slices that don’t have specific traffic class restrictions return this value for their [trafficClass](../slice/trafficclass.md) property.

## See Also

### Traffic classes

- [CTSlicingManager.TrafficClass.background](background.md): A traffic class for non-urgent background data transfers.
- [CTSlicingManager.TrafficClass.responsiveData](responsivedata.md): A traffic class for interactive data that requires quick response times.
- [CTSlicingManager.TrafficClass.avStreaming](avstreaming.md): A traffic class for audio and video streaming.
- [CTSlicingManager.TrafficClass.responsiveAV](responsiveav.md): A traffic class for real-time audio and video communication.
- [CTSlicingManager.TrafficClass.video](video.md): A traffic class for video data transmission.
- [CTSlicingManager.TrafficClass.voice](voice.md): A traffic class for voice communication with highest priority and lowest latency.
- [CTSlicingManager.TrafficClass.signaling](signaling.md): A traffic class for network signaling and control messages.
