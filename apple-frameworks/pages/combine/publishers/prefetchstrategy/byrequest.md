> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/prefetchstrategy/byrequest](https://developer.apple.com/documentation/combine/publishers/prefetchstrategy/byrequest)

# Publishers.PrefetchStrategy.byRequest

**Framework:** Combine  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A strategy that avoids prefetching and instead performs requests on demand.

## Declaration

```swift
case byRequest
```

<a id="discussion"></a>

## Discussion

This strategy just forwards the downstream’s requests to the upstream publisher.

## See Also

### Prefetching strategies

- [Publishers.PrefetchStrategy.keepFull](keepfull.md): A strategy to fill the buffer at subscription time, and keep it full thereafter.
