> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/timeout](https://developer.apple.com/documentation/combine/publishers/timeout)

# Publishers.Timeout

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that terminates publishing if the upstream publisher exceeds a specified time interval without producing an element.

## Declaration

```swift
struct Timeout<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a timeout publisher

- [init(upstream:interval:scheduler:options:customError:)](timeout/init%28upstream_interval_scheduler_options_customerror_%29.md): Creates a publisher that terminates publishing if the upstream publisher exceeds the specified time interval without producing an element.

### Declaring supporting types

- [Publishers.Timeout.Output](timeout/output.md): The kind of values published by this publisher.
- [Publishers.Timeout.Failure](timeout/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](timeout/upstream.md): The publisher from which this publisher receives elements.
- [interval](timeout/interval.md): The maximum time interval the publisher can go without emitting an element, expressed in the time system of the scheduler.
- [scheduler](timeout/scheduler.md): The scheduler on which to deliver events.
- [options](timeout/options.md): Scheduler options that customize the delivery of elements.
- [customError](timeout/customerror.md): A closure that executes if the publisher times out. The publisher sends the failure returned by this closure to the subscriber as the reason for termination.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Controlling timing

- [Publishers.MeasureInterval](measureinterval.md): A publisher that measures and emits the time interval between events received from an upstream publisher.
- [Publishers.Debounce](debounce.md): A publisher that publishes elements only after a specified time interval elapses between events.
- [Publishers.Delay](delay.md): A publisher that delays delivery of elements and completion to the downstream receiver.
- [Publishers.Throttle](throttle.md): A publisher that publishes either the most-recent or first element published by the upstream publisher in a specified time interval.
