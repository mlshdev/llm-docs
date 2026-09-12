> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/buffer](https://developer.apple.com/documentation/combine/publishers/buffer)

# Publishers.Buffer

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that buffers elements from an upstream publisher.

## Declaration

```swift
struct Buffer<Upstream> where Upstream : Publisher
```

## Topics

### Creating a buffer publisher

- [init(upstream:size:prefetch:whenFull:)](buffer/init%28upstream_size_prefetch_whenfull_%29.md): Creates a publisher that buffers elements received from an upstream publisher.

### Declaring supporting types

- [Publishers.Buffer.Output](buffer/output.md): The kind of values published by this publisher.
- [Publishers.Buffer.Failure](buffer/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](buffer/upstream.md): The publisher from which this publisher receives elements.
- [size](buffer/size.md): The maximum number of elements to store.
- [prefetch](buffer/prefetch.md): The strategy for initially populating the buffer.
- [whenFull](buffer/whenfull.md): The action to take when the buffer becomes full.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Buffering elements

- [Publishers.BufferingStrategy](bufferingstrategy.md): A strategy that handles exhaustion of a buffer’s capacity.
- [Publishers.PrefetchStrategy](prefetchstrategy.md): A strategy for filling a buffer.
