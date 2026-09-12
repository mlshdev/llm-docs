> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/tryfirst(where:)](https://developer.apple.com/documentation/combine/publisher/tryfirst(where:))

# tryFirst(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.

## Declaration

```swift
func tryFirst(where predicate: @escaping (Self.Output) throws -> Bool) -> Publishers.TryFirstWhere<Self>
```

## Parameters

- `predicate`: A closure that takes an element as a parameter and returns a Boolean value that indicates whether to publish the element.

<a id="return-value"></a>

## Return Value

A publisher that only publishes the first element of a stream that satisfies the predicate.

<a id="discussion"></a>

## Discussion

Use [tryFirst(where:)](tryfirst%28where_%29.md) when you need to republish only the first element of a stream that satisfies an error-throwing closure you specify. The publisher ignores all elements after the first. If this publisher doesn’t receive any elements, it finishes without publishing. If the predicate closure throws an error, the publisher fails.

In the example below, a range publisher emits the first element in the range then finishes normally:

```swift
let numberRange: ClosedRange<Int> = (-1...50)
numberRange.publisher
    .tryFirst {
        guard $0 < 99 else {throw RangeError()}
        return true
    }
    .sink(
        receiveCompletion: { print ("completion: \($0)", terminator: " ") },
        receiveValue: { print ("\($0)", terminator: " ") }
     )

// Prints: "-1 completion: finished"
// If instead the number range were ClosedRange<Int> = (100...200), the tryFirst operator would terminate publishing with a RangeError.
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Publishes the first element of a stream, then finishes.
- [first(where:)](first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [last()](last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [last(where:)](last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [tryLast(where:)](trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(at:)](output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
