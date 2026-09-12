> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/prefetchstrategy/keepfull](https://developer.apple.com/documentation/combine/publishers/prefetchstrategy/keepfull)

# Publishers.PrefetchStrategy.keepFull

**Framework:** Combine  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A strategy to fill the buffer at subscription time, and keep it full thereafter.

## Declaration

```swift
case keepFull
```

<a id="discussion"></a>

## Discussion

This strategy starts by making a demand equal to the buffer’s size from the upstream when the subscriber first connects. Afterwards, it continues to demand elements from the upstream to try to keep the buffer full.

## See Also

### Prefetching strategies

- [Publishers.PrefetchStrategy.byRequest](byrequest.md): A strategy that avoids prefetching and instead performs requests on demand.
