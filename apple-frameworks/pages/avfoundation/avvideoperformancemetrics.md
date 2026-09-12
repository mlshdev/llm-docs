> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoperformancemetrics](https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics)

# AVVideoPerformanceMetrics (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

An object that provides metrics related to video playback quality.

## Declaration

```swift
class AVVideoPerformanceMetrics
```

## Topics

### Inspecting metrics

- [numberOfCorruptedFrames](avvideoperformancemetrics/numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfDroppedFrames](avvideoperformancemetrics/numberofdroppedframes.md): The total number of frames the system drops prior to decoding or from missing the display deadline.
- [numberOfFramesDisplayedUsingOptimizedCompositing](avvideoperformancemetrics/numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [totalAccumulatedFrameDelay](avvideoperformancemetrics/totalaccumulatedframedelay.md): The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.
- [totalNumberOfFrames](avvideoperformancemetrics/totalnumberofframes.md): The total number of frames that display if no frames drop.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics

- [AVMetrics](avmetrics.md): An asynchronous stream of metric information.
- [AVMergedMetrics](avmergedmetrics.md): An asynchronous stream of metric information from different publishers.
- [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md): A type for objects that publish metric events to the event stream.
- [AVMetricEvent](avmetricevent.md): A base class that represents a metric event.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)

# AVVideoPerformanceMetrics (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

An object that provides metrics related to video playback quality.

## Declaration

```objectivec
@interface AVVideoPerformanceMetrics : NSObject
```

## Topics

### Inspecting metrics

- [numberOfCorruptedFrames](avvideoperformancemetrics/numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfCorruptedVideoFrames](avvideoperformancemetrics/numberofcorruptedvideoframes.md)
- [numberOfDisplayCompositedVideoFrames](avvideoperformancemetrics/numberofdisplaycompositedvideoframes.md)
- [numberOfDroppedFrames](avvideoperformancemetrics/numberofdroppedframes.md): The total number of frames the system drops prior to decoding or from missing the display deadline.
- [numberOfDroppedVideoFrames](avvideoperformancemetrics/numberofdroppedvideoframes.md)
- [numberOfFramesDisplayedUsingOptimizedCompositing](avvideoperformancemetrics/numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [numberOfNonDisplayCompositedVideoFrames](avvideoperformancemetrics/numberofnondisplaycompositedvideoframes.md)
- [totalAccumulatedFrameDelay](avvideoperformancemetrics/totalaccumulatedframedelay.md): The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.
- [totalFrameDelay](avvideoperformancemetrics/totalframedelay.md)
- [totalNumberOfFrames](avvideoperformancemetrics/totalnumberofframes.md): The total number of frames that display if no frames drop.
- [totalNumberOfVideoFrames](avvideoperformancemetrics/totalnumberofvideoframes.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metrics

- [AVMetricEventStream](avmetriceventstream.md): An object that allows clients to add publishers and then subscribe to specific metric event classes from those publishers.
- [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md): A type for objects that publish metric events to the event stream.
- [AVMetricEventStreamSubscriber](avmetriceventstreamsubscriber.md): A type for objects that receive metric events.
- [AVMetricEvent](avmetricevent.md): A base class that represents a metric event.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)
