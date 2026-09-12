> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/autoconnect/init(upstream:)](https://developer.apple.com/documentation/combine/publishers/autoconnect/init(upstream:))

# init(upstream:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that automatically connects to an upstream connectable publisher.

## Declaration

```swift
init(upstream: Upstream)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
