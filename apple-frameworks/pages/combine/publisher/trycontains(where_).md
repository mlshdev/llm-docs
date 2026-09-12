> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/trycontains(where:)](https://developer.apple.com/documentation/combine/publisher/trycontains(where:))

# tryContains(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes a Boolean value upon receiving an element that satisfies the throwing predicate closure.

## Declaration

```swift
func tryContains(where predicate: @escaping (Self.Output) throws -> Bool) -> Publishers.TryContainsWhere<Self>
```

## Parameters

- `predicate`: A closure that takes an element as its parameter and returns a Boolean value that indicates whether the element satisfies the closure’s comparison logic.

<a id="return-value"></a>

## Return Value

A publisher that emits the Boolean value `true` when the upstream publisher emits a matching value.

<a id="discussion"></a>

## Discussion

Use [tryContains(where:)](trycontains%28where_%29.md) to find the first element in an upstream that satisfies the error-throwing closure you provide.

This operator consumes elements produced from the upstream publisher until the upstream publisher either:

- Produces a matching element, after which it emits `true` and the publisher finishes normally.
- Emits `false` if no matching element is found and the publisher finishes normally.

If the predicate throws an error, the publisher fails, passing the error to its downstream.

In the example below, the [tryContains(where:)](trycontains%28where_%29.md) operator tests values to find an element less than `10`; when the closure finds an odd number, like `3`, the publisher terminates with an `IllegalValueError`.

```swift
struct IllegalValueError: Error {}

let numbers = [3, 2, 10, 5, 0, 9]
numbers.publisher
    .tryContains {
        if ($0 % 2 != 0) {
            throw IllegalValueError()
        }
       return $0 < 10
    }
    .sink(
        receiveCompletion: { print ("completion: \($0)") },
        receiveValue: { print ("value: \($0)") }
    )

// Prints: "completion: failure(IllegalValueError())"
```

## See Also

### Applying matching criteria to elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Output` conforms to `Equatable`. Publishes a Boolean value upon receiving an element equal to the argument.
- [contains(where:)](contains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the predicate closure.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given predicate.
- [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.
