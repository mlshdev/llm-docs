> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/output(at:)](https://developer.apple.com/documentation/combine/publisher/output(at:))

# output(at:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes a specific element, indicated by its index in the sequence of published elements.

## Declaration

```swift
func output(at index: Int) -> Publishers.Output<Self>
```

## Parameters

- `index`: The index that indicates the element to publish.

<a id="return-value"></a>

## Return Value

A publisher that publishes a specific indexed element.

<a id="discussion"></a>

## Discussion

Use [output(at:)](output%28at_%29.md) when you need to republish a specific element specified by its position in the stream. If the publisher completes normally or with an error before publishing the specified element, then the publisher doesn’t produce any elements.

In the example below, the array publisher emits the fifth element in the sequence of published elements:

```swift
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.publisher
    .output(at: 5)
    .sink { print("\($0)") }

// Prints: "6"
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Publishes the first element of a stream, then finishes.
- [first(where:)](first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [tryFirst(where:)](tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last()](last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [last(where:)](last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [tryLast(where:)](trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
