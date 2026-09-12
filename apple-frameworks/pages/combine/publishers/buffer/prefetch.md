> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/buffer/prefetch](https://developer.apple.com/documentation/combine/publishers/buffer/prefetch)

# prefetch

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The strategy for initially populating the buffer.

## Declaration

```swift
let prefetch: Publishers.PrefetchStrategy
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [size](size.md): The maximum number of elements to store.
- [whenFull](whenfull.md): The action to take when the buffer becomes full.
