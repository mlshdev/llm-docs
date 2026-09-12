> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/trymax(by:)](https://developer.apple.com/documentation/combine/publisher/trymax(by:))

# tryMax(by:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the maximum value received from the upstream publisher, using the provided error-throwing closure to order the items.

## Declaration

```swift
func tryMax(by areInIncreasingOrder: @escaping (Self.Output, Self.Output) throws -> Bool) -> Publishers.TryComparison<Self>
```

## Parameters

- `areInIncreasingOrder`: A throwing closure that receives two elements and returns `true` if they’re in increasing order. If this closure throws, the publisher terminates with a [Subscribers.Completion.failure(\_:)](../subscribers/completion/failure%28__%29.md).

<a id="return-value"></a>

## Return Value

A publisher that publishes the maximum value received from the upstream publisher, after the upstream publisher finishes.

<a id="discussion"></a>

## Discussion

Use [tryMax(by:)](trymax%28by_%29.md) to determine the maximum value of elements received from the upstream publisher using an error-throwing closure you specify.

In the example below, an array publishes elements. The [tryMax(by:)](trymax%28by_%29.md) operator executes the error-throwing closure that throws when the `first` element is an odd number, terminating the publisher.

```swift
struct IllegalValueError: Error {}

let numbers: [Int]  = [0, 10, 6, 13, 22, 22]
cancellable = numbers.publisher
    .tryMax { first, second -> Bool in
        if (first % 2 != 0) {
            throw IllegalValueError()
        }
        return first > second
    }
    .sink(
        receiveCompletion: { print ("completion: \($0)") },
        receiveValue: { print ("value: \($0)") }
    )

// Prints: completion: failure(IllegalValueError())
```

After this publisher receives a request for more than 0 items, it requests unlimited items from its upstream publisher.

## See Also

### Applying mathematical operations on elements

- [count()](count%28%29.md): Publishes the number of elements received from the upstream publisher.
- [max()](max%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the maximum value received from the upstream publisher, after it finishes.
- [max(by:)](max%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided ordering closure.
- [min()](min%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the minimum value received from the upstream publisher, after it finishes.
- [min(by:)](min%28by_%29.md): Publishes the minimum value received from the upstream publisher, after it finishes.
- [tryMin(by:)](trymin%28by_%29.md): Publishes the minimum value received from the upstream publisher, using the provided error-throwing closure to order the items.
