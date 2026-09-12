> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/last(where:)](https://developer.apple.com/documentation/combine/publisher/last(where:))

# last(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.

## Declaration

```swift
func last(where predicate: @escaping (Self.Output) -> Bool) -> Publishers.LastWhere<Self>
```

## Parameters

- `predicate`: A closure that takes an element as its parameter and returns a Boolean value that indicates whether to publish the element.

<a id="return-value"></a>

## Return Value

A publisher that only publishes the last element satisfying the given predicate.

<a id="discussion"></a>

## Discussion

Use [last(where:)](last%28where_%29.md) when you need to republish only the last element of a stream that satisfies a closure you specify.

In the example below, a range publisher emits the last element that satisfies the closure’s criteria, then finishes normally:

```swift
let numbers = (-10...10)
cancellable = numbers.publisher
    .last { $0 < 6 }
    .sink { print("\($0)") }

// Prints: "5"
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Publishes the first element of a stream, then finishes.
- [first(where:)](first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [tryFirst(where:)](tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last()](last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [tryLast(where:)](trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(at:)](output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.
