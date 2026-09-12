> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/contains(where:)](https://developer.apple.com/documentation/combine/publisher/contains(where:))

# contains(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes a Boolean value upon receiving an element that satisfies the predicate closure.

## Declaration

```swift
func contains(where predicate: @escaping (Self.Output) -> Bool) -> Publishers.ContainsWhere<Self>
```

## Parameters

- `predicate`: A closure that takes an element as its parameter and returns a Boolean value that indicates whether the element satisfies the closure’s comparison logic.

<a id="return-value"></a>

## Return Value

A publisher that emits the Boolean value `true` when the upstream  publisher emits a matching value.

<a id="discussion"></a>

## Discussion

Use [contains(where:)](contains%28where_%29.md) to find the first element in an upstream that satisfies the closure you provide. This operator consumes elements produced from the upstream publisher until the upstream publisher produces a matching element.

This operator is useful when the upstream publisher produces elements that don’t conform to `Equatable`.

In the example below, the [contains(where:)](contains%28where_%29.md) operator tests elements against the supplied closure and emits `true` for the first elements that’s greater than `4`, and then finishes normally.

```swift
let numbers = [-1, 0, 10, 5]
numbers.publisher
    .contains {$0 > 4}
    .sink { print("\($0)") }

// Prints: "true"
```

## See Also

### Applying matching criteria to elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Output` conforms to `Equatable`. Publishes a Boolean value upon receiving an element equal to the argument.
- [tryContains(where:)](trycontains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given predicate.
- [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.
