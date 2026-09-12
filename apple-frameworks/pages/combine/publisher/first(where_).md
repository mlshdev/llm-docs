> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/first(where:)](https://developer.apple.com/documentation/combine/publisher/first(where:))

# first(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.

## Declaration

```swift
func first(where predicate: @escaping (Self.Output) -> Bool) -> Publishers.FirstWhere<Self>
```

## Parameters

- `predicate`: A closure that takes an element as a parameter and returns a Boolean value that indicates whether to publish the element.

<a id="return-value"></a>

## Return Value

A publisher that only publishes the first element of a stream that satisfies the predicate.

<a id="discussion"></a>

## Discussion

Use [first(where:)](first%28where_%29.md) to republish only the first element of a stream that satisfies a closure you specify. The publisher ignores all elements after the first element that satisfies the closure and finishes normally. If this publisher doesn’t receive any elements, it finishes without publishing.

In the example below, the provided closure causes the [Publishers.FirstWhere](../publishers/firstwhere.md) publisher to republish the first received element that’s greater than `0`, then finishes normally.

```swift
let numbers = (-10...10)
cancellable = numbers.publisher
    .first { $0 > 0 }
    .sink { print("\($0)") }

// Prints: "1"
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Publishes the first element of a stream, then finishes.
- [tryFirst(where:)](tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last()](last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [last(where:)](last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [tryLast(where:)](trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(at:)](output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
