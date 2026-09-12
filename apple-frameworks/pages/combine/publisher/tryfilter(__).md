> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/tryfilter(_:)](https://developer.apple.com/documentation/combine/publisher/tryfilter(_:))

# tryFilter(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Republishes all elements that match a provided error-throwing closure.

## Declaration

```swift
func tryFilter(_ isIncluded: @escaping (Self.Output) throws -> Bool) -> Publishers.TryFilter<Self>
```

## Parameters

- `isIncluded`: A closure that takes one element and returns a Boolean value that indicated whether to republish the element or throws an error.

<a id="return-value"></a>

## Return Value

A publisher that republishes all elements that satisfy the closure.

<a id="discussion"></a>

## Discussion

Use [tryFilter(\_:)](tryfilter%28__%29.md) to filter elements evaluated in an error-throwing closure. If the `isIncluded` closure throws an error, the publisher fails with that error.

In the example below, [tryFilter(\_:)](tryfilter%28__%29.md) checks to see if the element provided by the publisher is zero, and throws a `ZeroError` before terminating the publisher with the thrown error. Otherwise, it republishes the element only if it’s even:

```swift
struct ZeroError: Error {}

let numbers: [Int] = [1, 2, 3, 4, 0, 5]
cancellable = numbers.publisher
    .tryFilter{
        if $0 == 0 {
            throw ZeroError()
        } else {
            return $0 % 2 == 0
        }
    }
    .sink(
        receiveCompletion: { print ("\($0)") },
        receiveValue: { print ("\($0)", terminator: " ") }
     )

// Prints: "2 4 failure(DivisionByZeroError())".
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Republishes all elements that match a provided closure.
- [compactMap(\_:)](compactmap%28__%29.md): Calls a closure with each received element and publishes any returned optional that has a value.
- [tryCompactMap(\_:)](trycompactmap%28__%29.md): Calls an error-throwing closure with each received element and publishes any returned optional that has a value.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`. Publishes only elements that don’t match the previous element.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided closure.
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [replaceEmpty(with:)](replaceempty%28with_%29.md): Replaces an empty stream with the provided element.
- [replaceError(with:)](replaceerror%28with_%29.md): Replaces any errors in the stream with the provided element.
