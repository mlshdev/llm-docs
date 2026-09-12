> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/buffer(size:prefetch:whenfull:)](https://developer.apple.com/documentation/combine/publisher/buffer(size:prefetch:whenfull:))

# buffer(size:prefetch:whenFull:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Buffers elements received from an upstream publisher.

## Declaration

```swift
func buffer(size: Int, prefetch: Publishers.PrefetchStrategy, whenFull: Publishers.BufferingStrategy<Self.Failure>) -> Publishers.Buffer<Self>
```

## Parameters

- `size`: The maximum number of elements to store.
- `prefetch`: The strategy to initially populate the buffer.
- `whenFull`: The action to take when the buffer becomes full.

<a id="return-value"></a>

## Return Value

A publisher that buffers elements received from an upstream publisher.

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

<a id="discussion"></a>

## Discussion

Use [buffer(size:prefetch:whenFull:)](buffer%28size_prefetch_whenfull_%29.md) to collect a specific number of elements from an upstream publisher before republishing them to the downstream subscriber according to the [Publishers.BufferingStrategy](../publishers/bufferingstrategy.md) and [Publishers.PrefetchStrategy](../publishers/prefetchstrategy.md) strategy you specify.

If the publisher completes before reaching the `size` threshold, it buffers the elements and publishes them downstream prior to completion.

## See Also

### Buffering elements

- [Publishers.PrefetchStrategy](../publishers/prefetchstrategy.md): A strategy for filling a buffer.
- [Publishers.BufferingStrategy](../publishers/bufferingstrategy.md): A strategy that handles exhaustion of a buffer’s capacity.
