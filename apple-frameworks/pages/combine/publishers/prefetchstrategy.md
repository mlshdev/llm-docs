> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/prefetchstrategy](https://developer.apple.com/documentation/combine/publishers/prefetchstrategy)

# Publishers.PrefetchStrategy

**Framework:** Combine  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A strategy for filling a buffer.

## Declaration

```swift
enum PrefetchStrategy
```

## Topics

### Prefetching strategies

- [Publishers.PrefetchStrategy.byRequest](prefetchstrategy/byrequest.md): A strategy that avoids prefetching and instead performs requests on demand.
- [Publishers.PrefetchStrategy.keepFull](prefetchstrategy/keepfull.md): A strategy to fill the buffer at subscription time, and keep it full thereafter.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Buffering elements

- [buffer(size:prefetch:whenFull:)](../publisher/buffer%28size_prefetch_whenfull_%29.md): Buffers elements received from an upstream publisher.
- [Publishers.BufferingStrategy](bufferingstrategy.md): A strategy that handles exhaustion of a buffer’s capacity.
