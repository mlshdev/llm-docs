> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/iterator/next()](https://developer.apple.com/documentation/swift/asyncstream/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The next value from the asynchronous stream.

## Declaration

```swift
mutating func next() async -> Element?
```

<a id="discussion"></a>

## Discussion

When `next()` returns `nil`, this signifies the end of the `AsyncStream`.

It is a programmer error to invoke `next()` from a concurrent context that contends with another such call, which results in a call to `fatalError()`.

If you cancel the task this iterator is running in while `next()` is awaiting a value, the `AsyncStream` terminates. In this case, `next()` might return `nil` immediately, or return `nil` on subsequent calls.
