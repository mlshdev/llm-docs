> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/trycompactmap(_:)](https://developer.apple.com/documentation/combine/publisher/trycompactmap(_:))

# tryCompactMap(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calls an error-throwing closure with each received element and publishes any returned optional that has a value.

## Declaration

```swift
func tryCompactMap<T>(_ transform: @escaping (Self.Output) throws -> T?) -> Publishers.TryCompactMap<Self, T>
```

## Parameters

- `transform`: An error-throwing closure that receives a value and returns an optional value.

<a id="return-value"></a>

## Return Value

Any non-`nil` optional results of calling the supplied closure.

<a id="discussion"></a>

## Discussion

Use [tryCompactMap(\_:)](trycompactmap%28__%29.md) to remove `nil` elements from a publisher’s stream based on an error-throwing closure you provide. If the closure throws an error, the publisher cancels the upstream publisher and sends the thrown error to the downstream subscriber as a [Failure](failure.md).

The following example uses an array of numbers as the source for a collection-based publisher. A [tryCompactMap(\_:)](trycompactmap%28__%29.md) operator consumes each integer from the publisher and uses a dictionary to transform the numbers from its Arabic to Roman numerals, as an optional [String](https://developer.apple.com/documentation/swift/string).

If the closure called by [tryCompactMap(\_:)](trycompactmap%28__%29.md) fails to look up a Roman numeral, it returns the optional String `(unknown)`.

If the closure called by [tryCompactMap(\_:)](trycompactmap%28__%29.md) determines the input is `0`, it throws an error. The [tryCompactMap(\_:)](trycompactmap%28__%29.md) operator catches this error and stops publishing, sending a [Subscribers.Completion.failure(\_:)](../subscribers/completion/failure%28__%29.md) that wraps the error.

```swift
struct ParseError: Error {}
func romanNumeral(from: Int) throws -> String? {
    let romanNumeralDict: [Int : String] =
        [1: "I", 2: "II", 3: "III", 4: "IV", 5: "V"]
    guard from != 0 else { throw ParseError() }
    return romanNumeralDict[from]
}
let numbers = [6, 5, 4, 3, 2, 1, 0]
cancellable = numbers.publisher
    .tryCompactMap { try romanNumeral(from: $0) }
    .sink(
          receiveCompletion: { print ("\($0)") },
          receiveValue: { print ("\($0)", terminator: " ") }
     )

// Prints: "(Unknown) V IV III II I failure(ParseError())"
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Republishes all elements that match a provided closure.
- [tryFilter(\_:)](tryfilter%28__%29.md): Republishes all elements that match a provided error-throwing closure.
- [compactMap(\_:)](compactmap%28__%29.md): Calls a closure with each received element and publishes any returned optional that has a value.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`. Publishes only elements that don’t match the previous element.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided closure.
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [replaceEmpty(with:)](replaceempty%28with_%29.md): Replaces an empty stream with the provided element.
- [replaceError(with:)](replaceerror%28with_%29.md): Replaces any errors in the stream with the provided element.
