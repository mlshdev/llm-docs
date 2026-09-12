> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/prefixuntiloutput/init(upstream:other:)](https://developer.apple.com/documentation/combine/publishers/prefixuntiloutput/init(upstream:other:))

# init(upstream:other:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that republishes elements until another publisher emits an element.

## Declaration

```swift
init(upstream: Upstream, other: Other)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `other`: Another publisher, the first output from which causes this publisher to finish.
