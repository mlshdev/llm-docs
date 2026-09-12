> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetriceventstreampublisher](https://developer.apple.com/documentation/avfoundation/avmetriceventstreampublisher)

# AVMetricEventStreamPublisher (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type for objects that publish metric events to the event stream.

## Declaration

```swift
protocol AVMetricEventStreamPublisher
```

## Topics

### Getting the metrics

- [allMetrics()](avmetriceventstreampublisher/allmetrics%28%29.md)
- [metrics(forType:)](avmetriceventstreampublisher/metrics%28fortype_%29.md)

## Relationships

### Conforming Types

- [AVPlayerItem](avplayeritem.md)

## See Also

### Metrics

- [AVMetrics](avmetrics.md): An asynchronous stream of metric information.
- [AVMergedMetrics](avmergedmetrics.md): An asynchronous stream of metric information from different publishers.
- [AVVideoPerformanceMetrics](avvideoperformancemetrics.md): An object that provides metrics related to video playback quality.
- [AVMetricEvent](avmetricevent.md): A base class that represents a metric event.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)

# AVMetricEventStreamPublisher (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type for objects that publish metric events to the event stream.

## Declaration

```objectivec
@protocol AVMetricEventStreamPublisher
```

## Relationships

### Conforming Types

- [AVPlayerItem](avplayeritem.md)

## See Also

### Metrics

- [AVVideoPerformanceMetrics](avvideoperformancemetrics.md): An object that provides metrics related to video playback quality.
- [AVMetricEventStream](avmetriceventstream.md): An object that allows clients to add publishers and then subscribe to specific metric event classes from those publishers.
- [AVMetricEventStreamSubscriber](avmetriceventstreamsubscriber.md): A type for objects that receive metric events.
- [AVMetricEvent](avmetricevent.md): A base class that represents a metric event.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)
