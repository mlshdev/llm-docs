> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/future/init(_:)](https://developer.apple.com/documentation/combine/future/init(_:))

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that invokes a promise closure when the publisher emits an element.

## Declaration

```swift
init(_ attemptToFulfill: @escaping (@escaping Future<Output, Failure>.Promise) -> Void)
```

## Parameters

- `attemptToFulfill`: A [Future.Promise](promise.md) that the publisher invokes when the publisher emits an element or terminates with an error.

## See Also

### Creating a future

- [Future.Promise](promise.md): A type that represents a closure to invoke in the future, when an element or error is available.
