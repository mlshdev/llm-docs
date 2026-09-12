> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryfilter/init(upstream:isincluded:)](https://developer.apple.com/documentation/combine/publishers/tryfilter/init(upstream:isincluded:))

# init(upstream:isIncluded:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that republishes all elements that match a provided error-throwing closure.

## Declaration

```swift
init(upstream: Upstream, isIncluded: @escaping (Upstream.Output) throws -> Bool)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `isIncluded`: An error-throwing closure that indicates whether this filter should republish an element.
