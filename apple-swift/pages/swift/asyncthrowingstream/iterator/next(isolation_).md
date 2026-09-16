> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingstream/iterator/next(isolation:)

# next(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The next value from the asynchronous stream.

## Declaration

```swift
mutating func next(isolation actor: isolated (any Actor)?) async throws(Failure) -> Element?
```

<a id="discussion"></a>

## Discussion

When `next()` returns `nil`, this signifies the end of the `AsyncThrowingStream`.

It is a programmer error to invoke `next()` from a concurrent context that contends with another such call, which results in a call to `fatalError()`.

If you cancel the task this iterator is running in while `next()` is awaiting a value, the `AsyncThrowingStream` terminates. In this case, `next()` may return `nil` immediately, or else return `nil` on subsequent calls.
