> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/min(by:)](https://developer.apple.com/documentation/combine/publisher/min(by:))

# min(by:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the minimum value received from the upstream publisher, after it finishes.

## Declaration

```swift
func min(by areInIncreasingOrder: @escaping (Self.Output, Self.Output) -> Bool) -> Publishers.Comparison<Self>
```

## Parameters

- `areInIncreasingOrder`: A closure that receives two elements and returns true if they’re in increasing order.

<a id="return-value"></a>

## Return Value

A publisher that publishes the minimum value received from the upstream publisher, after the upstream publisher finishes.

<a id="discussion"></a>

## Discussion

Use [min(by:)](min%28by_%29.md) to determine the minimum value in the stream of elements from an upstream publisher using a comparison operation you specify.

This operator is useful when the value received from the upstream publisher isn’t [Comparable](https://developer.apple.com/documentation/swift/comparable).

In the example below an array publishes enumeration elements representing playing card ranks. The [min(by:)](min%28by_%29.md) operator compares the current and next elements using the `rawValue` property of each enumeration value in the user supplied closure and prints the minimum value found after publishing all of the elements.

```swift
enum Rank: Int {
    case ace = 1, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king
}

let cards: [Rank] = [.five, .queen, .ace, .eight, .king]
cancellable = cards.publisher
    .min {
        return  $0.rawValue < $1.rawValue
    }
    .sink { print("\($0)") }

// Prints: "ace"
```

After this publisher receives a request for more than 0 items, it requests unlimited items from its upstream publisher.

## See Also

### Applying mathematical operations on elements

- [count()](count%28%29.md): Publishes the number of elements received from the upstream publisher.
- [max()](max%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the maximum value received from the upstream publisher, after it finishes.
- [max(by:)](max%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided ordering closure.
- [tryMax(by:)](trymax%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided error-throwing closure to order the items.
- [min()](min%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the minimum value received from the upstream publisher, after it finishes.
- [tryMin(by:)](trymin%28by_%29.md): Publishes the minimum value received from the upstream publisher, using the provided error-throwing closure to order the items.
