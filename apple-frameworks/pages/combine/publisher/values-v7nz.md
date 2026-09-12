> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/values-v7nz](https://developer.apple.com/documentation/combine/publisher/values-v7nz)

# values

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The elements produced by the publisher, as a throwing asynchronous sequence.

## Declaration

```swift
var values: AsyncThrowingPublisher<Self> { get }
```

<a id="discussion"></a>

## Discussion

This property provides an [AsyncThrowingPublisher](../asyncthrowingpublisher.md), which allows you to use the Swift `async`-`await` syntax to receive the publisher’s elements. Because [AsyncPublisher](../asyncpublisher.md) conforms to [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), you iterate over its elements with a `for`-`await`-`in` loop, rather than attaching a subscriber. If the publisher terminates with an error, the awaiting caller receives the error as a `throw`.

The following example shows how to use the `values` property to receive elements asynchronously. The example adapts a code snippet from the [tryFilter(\_:)](tryfilter%28__%29.md) operator’s documentation, which filters a sequence to only emit even integers, and terminate with an error on a `0`. This example replaces the [Subscribers.Sink](../subscribers/sink.md) subscriber with a `for`-`await`-`in` loop that iterates over the [AsyncPublisher](../asyncpublisher.md) provided by the `values` property. With this approach, the error handling previously provided in the sink subscriber’s [receiveCompletion](../subscribers/sink/receivecompletion.md) closure goes instead in a `catch` block.

```swift
let numbers: [Int] = [1, 2, 3, 4, 0, 5]
let filterPublisher = numbers.publisher
    .tryFilter{
        if $0 == 0 {
            throw ZeroError()
        } else {
            return $0 % 2 == 0
        }
    }

do {
    for try await number in filterPublisher.values {
        print ("\(number)", terminator: " ")
    }
} catch {
    print ("\(error)")
}
```

## See Also

### Accessing elements asynchronously

- [values](values-1dm9r.md): Conforms when `Failure` is `Never`. The elements produced by the publisher, as an asynchronous sequence.
