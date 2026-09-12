> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/measureinterval](https://developer.apple.com/documentation/combine/publishers/measureinterval)

# Publishers.MeasureInterval

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that measures and emits the time interval between events received from an upstream publisher.

## Declaration

```swift
struct MeasureInterval<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a measure interval publisher

- [init(upstream:scheduler:)](measureinterval/init%28upstream_scheduler_%29.md): Creates a publisher that measures and emits the time interval between events received from an upstream publisher.

### Declaring supporting types

- [Publishers.MeasureInterval.Output](measureinterval/output.md): The kind of values published by this publisher.
- [Publishers.MeasureInterval.Failure](measureinterval/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](measureinterval/upstream.md): The publisher from which this publisher receives elements.
- [scheduler](measureinterval/scheduler.md): The scheduler used for tracking the timing of events.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Controlling timing

- [Publishers.Debounce](debounce.md): A publisher that publishes elements only after a specified time interval elapses between events.
- [Publishers.Delay](delay.md): A publisher that delays delivery of elements and completion to the downstream receiver.
- [Publishers.Throttle](throttle.md): A publisher that publishes either the most-recent or first element published by the upstream publisher in a specified time interval.
- [Publishers.Timeout](timeout.md): A publisher that terminates publishing if the upstream publisher exceeds a specified time interval without producing an element.
