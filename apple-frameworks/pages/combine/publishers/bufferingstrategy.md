> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/bufferingstrategy](https://developer.apple.com/documentation/combine/publishers/bufferingstrategy)

# Publishers.BufferingStrategy

**Framework:** Combine  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A strategy that handles exhaustion of a buffer’s capacity.

## Declaration

```swift
enum BufferingStrategy<Failure> where Failure : Error
```

## Topics

### Buffering strategies

- [Publishers.BufferingStrategy.dropNewest](bufferingstrategy/dropnewest.md): When the buffer is full, discard the newly received element.
- [Publishers.BufferingStrategy.dropOldest](bufferingstrategy/dropoldest.md): When the buffer is full, discard the oldest element in the buffer.
- [Publishers.BufferingStrategy.customError(\_:)](bufferingstrategy/customerror%28__%29.md): When the buffer is full, execute the closure to provide a custom error.

## See Also

### Buffering elements

- [buffer(size:prefetch:whenFull:)](../publisher/buffer%28size_prefetch_whenfull_%29.md): Buffers elements received from an upstream publisher.
- [Publishers.PrefetchStrategy](prefetchstrategy.md): A strategy for filling a buffer.
