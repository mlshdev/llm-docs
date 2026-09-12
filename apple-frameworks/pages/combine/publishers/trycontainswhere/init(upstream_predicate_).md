> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trycontainswhere/init(upstream:predicate:)](https://developer.apple.com/documentation/combine/publishers/trycontainswhere/init(upstream:predicate:))

# init(upstream:predicate:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that emits a Boolean value upon receiving an element that satisfies the throwing predicate closure.

## Declaration

```swift
init(upstream: Upstream, predicate: @escaping (Upstream.Output) throws -> Bool)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `predicate`: The error-throwing closure that determines whether this publisher should emit a Boolean true element.
