> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetriceventstreamsubscriber/publisher:didreceiveevent:](https://developer.apple.com/documentation/avfoundation/avmetriceventstreamsubscriber/publisher:didreceiveevent:)

# publisher:didReceiveEvent:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Tells the subscriber that the publisher produced a metric event.

## Declaration

```objectivec
- (void) publisher:(id<AVMetricEventStreamPublisher>) publisher didReceiveEvent:(AVMetricEvent *) event;
```

## Parameters

- `publisher`: The publisher.
- `event`: The metric.
