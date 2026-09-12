> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/throttle/interval](https://developer.apple.com/documentation/combine/publishers/throttle/interval)

# interval

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The interval in which to find and emit the most recent element.

## Declaration

```swift
let interval: Context.SchedulerTimeType.Stride
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [scheduler](scheduler.md): The scheduler on which to publish elements.
- [latest](latest.md): A Boolean value indicating whether to publish the most recent element.
