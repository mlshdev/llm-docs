> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/tryscan(_:_:)](https://developer.apple.com/documentation/combine/publisher/tryscan(_:_:))

# tryScan(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.

## Declaration

```swift
func tryScan<T>(_ initialResult: T, _ nextPartialResult: @escaping (T, Self.Output) throws -> T) -> Publishers.TryScan<Self, T>
```

## Parameters

- `initialResult`: The previous result returned by the `nextPartialResult` closure.
- `nextPartialResult`: An error-throwing closure that takes as its arguments the previous value returned by the closure and the next element emitted from the upstream publisher.

<a id="return-value"></a>

## Return Value

A publisher that transforms elements by applying a closure that receives its previous return value and the next element from the upstream publisher.

<a id="discussion"></a>

## Discussion

Use [tryScan(\_:\_:)](tryscan%28____%29.md) to accumulate all previously-published values into a single value, which you then combine with each newly-published value. If your accumulator closure throws an error, the publisher terminates with the error.

In the example below, [tryScan(\_:\_:)](tryscan%28____%29.md) calls a division function on elements of a collection publisher. The [Publishers.TryScan](../publishers/tryscan.md) publisher publishes each result until the function encounters a `DivisionByZeroError`, which terminates the publisher.

```swift
struct DivisionByZeroError: Error {}

/// A function that throws a DivisionByZeroError if `current` provided by the TryScan publisher is zero.
func myThrowingFunction(_ lastValue: Int, _ currentValue: Int) throws -> Int {
    guard currentValue != 0 else { throw DivisionByZeroError() }
    return (lastValue + currentValue) / currentValue
 }

let numbers = [1,2,3,4,5,0,6,7,8,9]
cancellable = numbers.publisher
    .tryScan(10) { try myThrowingFunction($0, $1) }
    .sink(
        receiveCompletion: { print ("\($0)") },
        receiveValue: { print ("\($0)", terminator: " ") }
     )

// Prints: "11 6 3 1 1 -1 failure(DivisionByZeroError())".
```

If the closure throws an error, the publisher fails with the error.

## See Also

### Mapping elements

- [map(\_:)](map%28__%29-99evh.md): Transforms all elements from the upstream publisher with a provided closure.
- [tryMap(\_:)](trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [mapError(\_:)](maperror%28__%29.md): Converts any failure from the upstream publisher into a new error.
- [replaceNil(with:)](replacenil%28with_%29.md): Replaces nil elements in the stream with the provided element.
- [scan(\_:\_:)](scan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`. Changes the failure type declared by the upstream publisher.
