> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricevent](https://developer.apple.com/documentation/avfoundation/avmetricevent)

# AVMetricEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A base class that represents a metric event.

## Declaration

```swift
class AVMetricEvent
```

## Topics

### Inspecting an event

- [date](avmetricevent/date.md)
- [mediaTime](avmetricevent/mediatime.md)
- [sessionID](avmetricevent/sessionid.md)

### Initializers

- [init(coder:)](avmetricevent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md)
- [AVMetricDownloadSummaryEvent](avmetricdownloadsummaryevent.md)
- [AVMetricErrorEvent](avmetricerrorevent.md)
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md)
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md)
- [AVMetricMediaResourceRequestEvent](avmetricmediaresourcerequestevent.md)
- [AVMetricPlaybackModeSwitchEvent](avmetricplaybackmodeswitchevent.md)
- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md)
- [AVMetricPlayerItemPlaybackSummaryEvent](avmetricplayeritemplaybacksummaryevent.md)
- [AVMetricPlayerItemRateChangeEvent](avmetricplayeritemratechangeevent.md)
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md)
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics

- [AVMetrics](avmetrics.md): An asynchronous stream of metric information.
- [AVMergedMetrics](avmergedmetrics.md): An asynchronous stream of metric information from different publishers.
- [AVVideoPerformanceMetrics](avvideoperformancemetrics.md): An object that provides metrics related to video playback quality.
- [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md): A type for objects that publish metric events to the event stream.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)

# AVMetricEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A base class that represents a metric event.

## Declaration

```objectivec
@interface AVMetricEvent : NSObject
```

## Topics

### Inspecting an event

- [date](avmetricevent/date.md)
- [mediaTime](avmetricevent/mediatime.md)
- [sessionID](avmetricevent/sessionid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md)
- [AVMetricDownloadSummaryEvent](avmetricdownloadsummaryevent.md)
- [AVMetricErrorEvent](avmetricerrorevent.md)
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md)
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md)
- [AVMetricMediaResourceRequestEvent](avmetricmediaresourcerequestevent.md)
- [AVMetricPlaybackModeSwitchEvent](avmetricplaybackmodeswitchevent.md)
- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md)
- [AVMetricPlayerItemPlaybackSummaryEvent](avmetricplayeritemplaybacksummaryevent.md)
- [AVMetricPlayerItemRateChangeEvent](avmetricplayeritemratechangeevent.md)
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md)
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metrics

- [AVVideoPerformanceMetrics](avvideoperformancemetrics.md): An object that provides metrics related to video playback quality.
- [AVMetricEventStream](avmetriceventstream.md): An object that allows clients to add publishers and then subscribe to specific metric event classes from those publishers.
- [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md): A type for objects that publish metric events to the event stream.
- [AVMetricEventStreamSubscriber](avmetriceventstreamsubscriber.md): A type for objects that receive metric events.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)
