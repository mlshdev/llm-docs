> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/count()](https://developer.apple.com/documentation/combine/publisher/count())

# count()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the number of elements received from the upstream publisher.

## Declaration

```swift
func count() -> Publishers.Count<Self>
```

<a id="return-value"></a>

## Return Value

A publisher that consumes all elements until the upstream publisher finishes, then emits a single value with the total number of elements received.

<a id="discussion"></a>

## Discussion

Use [count()](count%28%29.md) to determine the number of elements received from the upstream publisher before it completes:

```swift
let numbers = (0...10)
cancellable = numbers.publisher
    .count()
    .sink { print("\($0)") }

// Prints: "11"
```

## See Also

### Applying mathematical operations on elements

- [max()](max%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the maximum value received from the upstream publisher, after it finishes.
- [max(by:)](max%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided ordering closure.
- [tryMax(by:)](trymax%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided error-throwing closure to order the items.
- [min()](min%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the minimum value received from the upstream publisher, after it finishes.
- [min(by:)](min%28by_%29.md): Publishes the minimum value received from the upstream publisher, after it finishes.
- [tryMin(by:)](trymin%28by_%29.md): Publishes the minimum value received from the upstream publisher, using the provided error-throwing closure to order the items.
