> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/min()](https://developer.apple.com/documentation/combine/publisher/min())

# min()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the minimum value received from the upstream publisher, after it finishes.

## Declaration

```swift
func min() -> Publishers.Comparison<Self>
```

<a id="return-value"></a>

## Return Value

A publisher that publishes the minimum value received from the upstream publisher, after the upstream publisher finishes.

<a id="discussion"></a>

## Discussion

Use [min(by:)](min%28by_%29.md) to find the minimum value in a stream of elements from an upstream publisher.

In the example below, the [min(by:)](min%28by_%29.md) operator emits a value when the publisher finishes, that value is the minimum of the values received from upstream, which is `-1`.

```swift
let numbers = [-1, 0, 10, 5]
numbers.publisher
    .min()
    .sink { print("\($0)") }

// Prints: "-1"
```

After this publisher receives a request for more than 0 items, it requests unlimited items from its upstream publisher.

## See Also

### Applying mathematical operations on elements

- [count()](count%28%29.md): Publishes the number of elements received from the upstream publisher.
- [max()](max%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the maximum value received from the upstream publisher, after it finishes.
- [max(by:)](max%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided ordering closure.
- [tryMax(by:)](trymax%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided error-throwing closure to order the items.
- [min(by:)](min%28by_%29.md): Publishes the minimum value received from the upstream publisher, after it finishes.
- [tryMin(by:)](trymin%28by_%29.md): Publishes the minimum value received from the upstream publisher, using the provided error-throwing closure to order the items.
