> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/asyncpublisher/init(_:)](https://developer.apple.com/documentation/combine/asyncpublisher/init(_:))

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a publisher that exposes elements received from an upstream publisher as an asynchronous sequence.

## Declaration

```swift
init(_ publisher: P)
```

## Parameters

- `publisher`: An upstream publisher. The asynchronous publisher converts elements received from this publisher into an asynchronous sequence.
