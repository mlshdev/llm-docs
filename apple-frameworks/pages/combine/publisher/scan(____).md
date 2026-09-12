> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/scan(_:_:)](https://developer.apple.com/documentation/combine/publisher/scan(_:_:))

# scan(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.

## Declaration

```swift
func scan<T>(_ initialResult: T, _ nextPartialResult: @escaping (T, Self.Output) -> T) -> Publishers.Scan<Self, T>
```

## Parameters

- `initialResult`: The previous result returned by the `nextPartialResult` closure.
- `nextPartialResult`: A closure that takes as its arguments the previous value returned by the closure and the next element emitted from the upstream publisher.

<a id="return-value"></a>

## Return Value

A publisher that transforms elements by applying a closure that receives its previous return value and the next element from the upstream publisher.

<a id="discussion"></a>

## Discussion

Use [scan(\_:\_:)](scan%28____%29.md) to accumulate all previously-published values into a single value, which you then combine with each newly-published value.

The following example logs a running total of all values received from the sequence publisher.

```swift
let range = (0...5)
cancellable = range.publisher
    .scan(0) { return $0 + $1 }
    .sink { print ("\($0)", terminator: " ") }
 // Prints: "0 1 3 6 10 15 ".
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29-99evh.md): Transforms all elements from the upstream publisher with a provided closure.
- [tryMap(\_:)](trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [mapError(\_:)](maperror%28__%29.md): Converts any failure from the upstream publisher into a new error.
- [replaceNil(with:)](replacenil%28with_%29.md): Replaces nil elements in the stream with the provided element.
- [tryScan(\_:\_:)](tryscan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`. Changes the failure type declared by the upstream publisher.
