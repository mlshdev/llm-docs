> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/delay](https://developer.apple.com/documentation/combine/publishers/delay)

# Publishers.Delay

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that delays delivery of elements and completion to the downstream receiver.

## Declaration

```swift
struct Delay<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a delay publisher

- [init(upstream:interval:tolerance:scheduler:options:)](delay/init%28upstream_interval_tolerance_scheduler_options_%29.md): Creates a publisher that delays delivery of elements and completion to the downstream receiver.

### Declaring supporting types

- [Publishers.Delay.Output](delay/output.md): The kind of values published by this publisher.
- [Publishers.Delay.Failure](delay/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](delay/upstream.md): The publisher from which this publisher receives its elements.
- [interval](delay/interval.md): The amount of time to delay.
- [tolerance](delay/tolerance.md): The allowed tolerance in firing delayed events.
- [scheduler](delay/scheduler.md): The scheduler to deliver the delayed events.
- [options](delay/options.md): Options relevant to the scheduler’s behavior.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Controlling timing

- [Publishers.MeasureInterval](measureinterval.md): A publisher that measures and emits the time interval between events received from an upstream publisher.
- [Publishers.Debounce](debounce.md): A publisher that publishes elements only after a specified time interval elapses between events.
- [Publishers.Throttle](throttle.md): A publisher that publishes either the most-recent or first element published by the upstream publisher in a specified time interval.
- [Publishers.Timeout](timeout.md): A publisher that terminates publishing if the upstream publisher exceeds a specified time interval without producing an element.
