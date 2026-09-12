> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/timeout/interval](https://developer.apple.com/documentation/combine/publishers/timeout/interval)

# interval

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum time interval the publisher can go without emitting an element, expressed in the time system of the scheduler.

## Declaration

```swift
let interval: Context.SchedulerTimeType.Stride
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [scheduler](scheduler.md): The scheduler on which to deliver events.
- [options](options.md): Scheduler options that customize the delivery of elements.
- [customError](customerror.md): A closure that executes if the publisher times out. The publisher sends the failure returned by this closure to the subscriber as the reason for termination.
