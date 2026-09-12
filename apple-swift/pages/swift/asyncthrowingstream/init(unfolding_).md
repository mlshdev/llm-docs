> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/init(unfolding:)](https://developer.apple.com/documentation/swift/asyncthrowingstream/init(unfolding:))

# init(unfolding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constructs an asynchronous throwing stream from a given element-producing closure.

## Declaration

```swift
@preconcurrency init(unfolding produce: @escaping @Sendable () async throws -> Element?) where Failure == any Error
```

## Parameters

- `produce`: A closure that asynchronously produces elements for the stream.

<a id="discussion"></a>

## Discussion

Use this convenience initializer when you have an asynchronous function that can produce elements for the stream, and don’t want to invoke a continuation manually. This initializer “unfolds” your closure into a full-blown asynchronous stream. The created stream handles adherence to the `AsyncSequence` protocol automatically. To terminate the stream with an error, throw the error from your closure.

The following example shows an `AsyncThrowingStream` created with this initializer that produces random numbers on a one-second interval. If the random number is divisible by 5 with no remainder, the stream throws a `MyRandomNumberError`.

```swift
let stream = AsyncThrowingStream<Int, Error> {
    await Task.sleep(1 * 1_000_000_000)
    let random = Int.random(in: 1...10)
    if random % 5 == 0 {
        throw MyRandomNumberError()
    }
    return random
}

// Call point:
do {
    for try await random in stream {
        print(random)
    }
} catch {
    print(error)
}
```
