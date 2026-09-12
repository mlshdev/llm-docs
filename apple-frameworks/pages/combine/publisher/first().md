> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/first()](https://developer.apple.com/documentation/combine/publisher/first())

# first()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the first element of a stream, then finishes.

## Declaration

```swift
func first() -> Publishers.First<Self>
```

<a id="return-value"></a>

## Return Value

A publisher that only publishes the first element of a stream.

<a id="discussion"></a>

## Discussion

Use [first()](first%28%29.md) to publish just the first element from an upstream publisher, then finish normally. The [first()](first%28%29.md) operator requests [unlimited](../subscribers/demand/unlimited.md) from its upstream as soon as downstream requests at least one element. If the upstream completes before [first()](first%28%29.md) receives any elements, it completes without emitting any values.

In this example, the [first()](first%28%29.md) publisher republishes the first element received from the sequence publisher, `-10`, then finishes normally.

```swift
let numbers = (-10...10)
cancellable = numbers.publisher
    .first()
    .sink { print("\($0)") }

// Print: "-10"
```

## See Also

### Selecting specific elements

- [first(where:)](first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [tryFirst(where:)](tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last()](last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [last(where:)](last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [tryLast(where:)](trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(at:)](output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
