> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/switchtolatest/init(upstream:)](https://developer.apple.com/documentation/combine/publishers/switchtolatest/init(upstream:))

# init(upstream:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that “flattens” nested publishers.

## Declaration

```swift
init(upstream: Upstream)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
