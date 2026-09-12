> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trymap/init(upstream:transform:)](https://developer.apple.com/documentation/combine/publishers/trymap/init(upstream:transform:))

# init(upstream:transform:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that transforms all elements from the upstream publisher with a provided error-throwing closure.

## Declaration

```swift
init(upstream: Upstream, transform: @escaping (Upstream.Output) throws -> Output)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `transform`: The error-throwing closure that transforms elements from the upstream publisher.
