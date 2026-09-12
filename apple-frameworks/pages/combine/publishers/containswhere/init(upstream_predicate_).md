> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/containswhere/init(upstream:predicate:)](https://developer.apple.com/documentation/combine/publishers/containswhere/init(upstream:predicate:))

# init(upstream:predicate:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that emits a Boolean value upon receiving an element that satisfies the predicate closure.

## Declaration

```swift
init(upstream: Upstream, predicate: @escaping (Upstream.Output) -> Bool)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `predicate`: The closure that determines whether the publisher should consider an element as a match.
