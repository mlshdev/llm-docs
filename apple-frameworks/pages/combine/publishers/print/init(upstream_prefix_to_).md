> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/print/init(upstream:prefix:to:)](https://developer.apple.com/documentation/combine/publishers/print/init(upstream:prefix:to:))

# init(upstream:prefix:to:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that prints log messages for all publishing events.

## Declaration

```swift
init(upstream: Upstream, prefix: String, to stream: (any TextOutputStream)? = nil)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `prefix`: A string with which to prefix all log messages.
