> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/comparison/init(upstream:areinincreasingorder:)](https://developer.apple.com/documentation/combine/publishers/comparison/init(upstream:areinincreasingorder:))

# init(upstream:areInIncreasingOrder:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that republishes items from another publisher only if each new item is in increasing order from the previously-published item.

## Declaration

```swift
init(upstream: Upstream, areInIncreasingOrder: @escaping (Upstream.Output, Upstream.Output) -> Bool)
```

## Parameters

- `upstream`: The publisher from which this publisher receives its elements.
- `areInIncreasingOrder`: A closure that receives two elements and returns true if they are in increasing order.
