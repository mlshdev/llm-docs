> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/map(_:)-99evh](https://developer.apple.com/documentation/combine/publisher/map(_:)-99evh)

# map(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Transforms all elements from the upstream publisher with a provided closure.

## Declaration

```swift
func map<T>(_ transform: @escaping (Self.Output) -> T) -> Publishers.Map<Self, T>
```

## Parameters

- `transform`: A closure that takes one element as its parameter and returns a new element.

<a id="return-value"></a>

## Return Value

A publisher that uses the provided closure to map elements from the upstream publisher to new elements that it then publishes.

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)

<a id="discussion"></a>

## Discussion

Combine’s [map(\_:)](map%28__%29-99evh.md) operator performs a function similar to that of [map(\_:)](https://developer.apple.com/documentation/swift/sequence/map%28_:%29) in the Swift standard library: it uses a closure to transform each element it receives from the upstream publisher. You use [map(\_:)](map%28__%29-99evh.md) to transform from one kind of element to another.

The following example uses an array of numbers as the source for a collection based publisher. A [map(\_:)](map%28__%29-99evh.md) operator consumes each integer from the publisher and uses a dictionary to transform it from its Arabic numeral to a Roman equivalent, as a [String](https://developer.apple.com/documentation/swift/string). If the [map(\_:)](map%28__%29-99evh.md)’s closure fails to look up a Roman numeral, it returns the string `(unknown)`.

```swift
let numbers = [5, 4, 3, 2, 1, 0]
let romanNumeralDict: [Int : String] =
   [1:"I", 2:"II", 3:"III", 4:"IV", 5:"V"]
cancellable = numbers.publisher
    .map { romanNumeralDict[$0] ?? "(unknown)" }
    .sink { print("\($0)", terminator: " ") }

// Prints: "V IV III II I (unknown)"
```

If your closure can throw an error, use Combine’s [tryMap(\_:)](trymap%28__%29.md) operator instead.

## See Also

### Mapping elements

- [tryMap(\_:)](trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [mapError(\_:)](maperror%28__%29.md): Converts any failure from the upstream publisher into a new error.
- [replaceNil(with:)](replacenil%28with_%29.md): Replaces nil elements in the stream with the provided element.
- [scan(\_:\_:)](scan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [tryScan(\_:\_:)](tryscan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`. Changes the failure type declared by the upstream publisher.
