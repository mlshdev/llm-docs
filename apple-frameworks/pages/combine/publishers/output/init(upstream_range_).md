> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/output/init(upstream:range:)](https://developer.apple.com/documentation/combine/publishers/output/init(upstream:range:))

# init(upstream:range:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that publishes elements specified by a range.

## Declaration

```swift
init(upstream: Upstream, range: CountableRange<Int>)
```

## Parameters

- `upstream`: The publisher from which this publisher receives its elements.
- `range`: The range of elements to publish.
