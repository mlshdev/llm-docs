> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/buffer/whenfull](https://developer.apple.com/documentation/combine/publishers/buffer/whenfull)

# whenFull

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The action to take when the buffer becomes full.

## Declaration

```swift
let whenFull: Publishers.BufferingStrategy<Publishers.Buffer<Upstream>.Failure>
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [size](size.md): The maximum number of elements to store.
- [prefetch](prefetch.md): The strategy for initially populating the buffer.
