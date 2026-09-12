> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/timeout/customerror](https://developer.apple.com/documentation/combine/publishers/timeout/customerror)

# customError

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that executes if the publisher times out. The publisher sends the failure returned by this closure to the subscriber as the reason for termination.

## Declaration

```swift
let customError: (() -> Publishers.Timeout<Upstream, Context>.Failure)?
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [interval](interval.md): The maximum time interval the publisher can go without emitting an element, expressed in the time system of the scheduler.
- [scheduler](scheduler.md): The scheduler on which to deliver events.
- [options](options.md): Scheduler options that customize the delivery of elements.
