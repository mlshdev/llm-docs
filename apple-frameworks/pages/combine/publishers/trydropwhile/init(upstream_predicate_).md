> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trydropwhile/init(upstream:predicate:)](https://developer.apple.com/documentation/combine/publishers/trydropwhile/init(upstream:predicate:))

# init(upstream:predicate:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that omits elements from an upstream publisher until a given error-throwing closure returns false.

## Declaration

```swift
init(upstream: Upstream, predicate: @escaping (Publishers.TryDropWhile<Upstream>.Output) throws -> Bool)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `predicate`: The error-throwing closure that indicates whether to drop the element.
