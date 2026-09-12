> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/debounce](https://developer.apple.com/documentation/combine/publishers/debounce)

# Publishers.Debounce

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes elements only after a specified time interval elapses between events.

## Declaration

```swift
struct Debounce<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a debounce publisher

- [init(upstream:dueTime:scheduler:options:)](debounce/init%28upstream_duetime_scheduler_options_%29.md): Creates a publisher that publishes elements only after a specified time interval elapses between events.

### Declaring supporting types

- [Publishers.Debounce.Output](debounce/output.md): The kind of values published by this publisher.
- [Publishers.Debounce.Failure](debounce/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](debounce/upstream.md): The publisher from which this publisher receives elements.
- [dueTime](debounce/duetime.md): The amount of time the publisher should wait before publishing an element.
- [scheduler](debounce/scheduler.md): The scheduler on which this publisher delivers elements.
- [options](debounce/options.md): Scheduler options that customize this publisher’s delivery of elements.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Controlling timing

- [Publishers.MeasureInterval](measureinterval.md): A publisher that measures and emits the time interval between events received from an upstream publisher.
- [Publishers.Delay](delay.md): A publisher that delays delivery of elements and completion to the downstream receiver.
- [Publishers.Throttle](throttle.md): A publisher that publishes either the most-recent or first element published by the upstream publisher in a specified time interval.
- [Publishers.Timeout](timeout.md): A publisher that terminates publishing if the upstream publisher exceeds a specified time interval without producing an element.
