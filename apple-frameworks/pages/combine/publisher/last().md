> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/last()](https://developer.apple.com/documentation/combine/publisher/last())

# last()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the last element of a stream, after the stream finishes.

## Declaration

```swift
func last() -> Publishers.Last<Self>
```

<a id="return-value"></a>

## Return Value

A publisher that only publishes the last element of a stream.

<a id="discussion"></a>

## Discussion

Use [last()](last%28%29.md) when you need to emit only the last element from an upstream publisher.

In the example below, the range publisher only emits the last element from the sequence publisher, `10`, then finishes normally.

```swift
let numbers = (-10...10)
cancellable = numbers.publisher
    .last()
    .sink { print("\($0)") }

// Prints: "10"
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Publishes the first element of a stream, then finishes.
- [first(where:)](first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [tryFirst(where:)](tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last(where:)](last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [tryLast(where:)](trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(at:)](output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
