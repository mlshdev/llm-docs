> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/future/promise](https://developer.apple.com/documentation/combine/future/promise)

# Future.Promise

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents a closure to invoke in the future, when an element or error is available.

## Declaration

```swift
typealias Promise = (Result<Output, Failure>) -> Void
```

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](../using-combine-for-your-app-s-asynchronous-code.md)

<a id="discussion"></a>

## Discussion

The promise closure receives one parameter: a `Result` that contains either a single element published by a [Future](../future.md), or an error.

## See Also

### Creating a future

- [init(\_:)](init%28__%29.md): Creates a publisher that invokes a promise closure when the publisher emits an element.
