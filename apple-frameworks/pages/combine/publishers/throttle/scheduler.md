> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/throttle/scheduler](https://developer.apple.com/documentation/combine/publishers/throttle/scheduler)

# scheduler

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The scheduler on which to publish elements.

## Declaration

```swift
let scheduler: Context
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [interval](interval.md): The interval in which to find and emit the most recent element.
- [latest](latest.md): A Boolean value indicating whether to publish the most recent element.
