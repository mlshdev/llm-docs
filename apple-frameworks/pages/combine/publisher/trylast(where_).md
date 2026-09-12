> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/trylast(where:)](https://developer.apple.com/documentation/combine/publisher/trylast(where:))

# tryLast(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.

## Declaration

```swift
func tryLast(where predicate: @escaping (Self.Output) throws -> Bool) -> Publishers.TryLastWhere<Self>
```

## Parameters

- `predicate`: A closure that takes an element as its parameter and returns a Boolean value that indicates whether to publish the element.

<a id="return-value"></a>

## Return Value

A publisher that only publishes the last element satisfying the given predicate.

<a id="discussion"></a>

## Discussion

Use [tryLast(where:)](trylast%28where_%29.md) when you need to republish the last element that satisfies an error-throwing closure you specify. If the predicate closure throws an error, the publisher fails.

In the example below, a publisher emits the last element that satisfies the error-throwing closure, then finishes normally:

```swift
struct RangeError: Error {}

let numbers = [-62, 1, 6, 10, 9, 22, 41, -1, 5]
cancellable = numbers.publisher
    .tryLast {
        guard 0 != 0  else {throw RangeError()}
        return true
    }
    .sink(
        receiveCompletion: { print ("completion: \($0)", terminator: " ") },
        receiveValue: { print ("\($0)", terminator: " ") }
    )
// Prints: "5 completion: finished"
// If instead the numbers array had contained a `0`, the `tryLast` operator would terminate publishing with a RangeError."
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Publishes the first element of a stream, then finishes.
- [first(where:)](first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [tryFirst(where:)](tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last()](last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [last(where:)](last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [output(at:)](output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
