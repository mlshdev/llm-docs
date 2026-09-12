> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/debounce/init(upstream:duetime:scheduler:options:)](https://developer.apple.com/documentation/combine/publishers/debounce/init(upstream:duetime:scheduler:options:))

# init(upstream:dueTime:scheduler:options:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that publishes elements only after a specified time interval elapses between events.

## Declaration

```swift
init(upstream: Upstream, dueTime: Context.SchedulerTimeType.Stride, scheduler: Context, options: Context.SchedulerOptions?)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `dueTime`: The amount of time the publisher should wait before publishing an element.
- `scheduler`: The scheduler on which this publisher delivers elements.
- `options`: Scheduler options that customize this publisher’s delivery of elements.
