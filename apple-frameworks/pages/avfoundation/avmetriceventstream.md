> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetriceventstream](https://developer.apple.com/documentation/avfoundation/avmetriceventstream)

# AVMetricEventStream

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An object that allows clients to add publishers and then subscribe to specific metric event classes from those publishers.

## Declaration

```objectivec
@interface AVMetricEventStream : NSObject
```

<a id="overview"></a>

## Overview

Publishers are [AVFoundation](../avfoundation.md) types that adopt [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md). The protocol allows clients to receive metric events with a subscriber delegate which adopts the [AVMetricEventStreamSubscriber](avmetriceventstreamsubscriber.md) protocol.

## Topics

### Getting the event stream

- [eventStream](avmetriceventstream/eventstream.md)

### Adding a publisher

- [addPublisher:](avmetriceventstream/addpublisher_.md)

### Subscribing to events

- [subscribeToAllMetricEvents](avmetriceventstream/subscribetoallmetricevents.md)
- [subscribeToMetricEvent:](avmetriceventstream/subscribetometricevent_.md)
- [subscribeToMetricEvents:](avmetriceventstream/subscribetometricevents_.md)

### Setting a subscriber

- [setSubscriber:queue:](avmetriceventstream/setsubscriber_queue_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metrics

- [AVVideoPerformanceMetrics](avvideoperformancemetrics.md): An object that provides metrics related to video playback quality.
- [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md): A type for objects that publish metric events to the event stream.
- [AVMetricEventStreamSubscriber](avmetriceventstreamsubscriber.md): A type for objects that receive metric events.
- [AVMetricEvent](avmetricevent.md): A base class that represents a metric event.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)
