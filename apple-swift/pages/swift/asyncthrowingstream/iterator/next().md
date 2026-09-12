> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/iterator/next()](https://developer.apple.com/documentation/swift/asyncthrowingstream/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The next value from the asynchronous stream.

## Declaration

```swift
mutating func next() async throws -> Element?
```

<a id="discussion"></a>

## Discussion

When `next()` returns `nil`, this signifies the end of the `AsyncThrowingStream`.

It is a programmer error to invoke `next()` from a concurrent context that contends with another such call, which results in a call to `fatalError()`.

If you cancel the task this iterator is running in while `next()` is awaiting a value, the `AsyncThrowingStream` terminates. In this case, `next()` may return `nil` immediately, or else return `nil` on subsequent calls.
