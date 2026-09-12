> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/maperror(_:)](https://developer.apple.com/documentation/combine/publisher/maperror(_:))

# mapError(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Converts any failure from the upstream publisher into a new error.

## Declaration

```swift
func mapError<E>(_ transform: @escaping (Self.Failure) -> E) -> Publishers.MapError<Self, E> where E : Error
```

## Parameters

- `transform`: A closure that takes the upstream failure as a parameter and returns a new error for the publisher to terminate with.

<a id="return-value"></a>

## Return Value

A publisher that replaces any upstream failure with a new error produced by the `transform` closure.

<a id="discussion"></a>

## Discussion

Use the [mapError(\_:)](maperror%28__%29.md) operator when you need to replace one error type with another, or where a downstream operator needs the error types of its inputs to match.

The following example uses a [tryMap(\_:)](trymap%28__%29.md) operator to divide `1` by each element produced by a sequence publisher. When the publisher produces a `0`, the [tryMap(\_:)](trymap%28__%29.md) fails with a `DivisionByZeroError`. The [mapError(\_:)](maperror%28__%29.md) operator converts this into a `MyGenericError`.

```swift
struct DivisionByZeroError: Error {}
struct MyGenericError: Error { var wrappedError: Error }

func myDivide(_ dividend: Double, _ divisor: Double) throws -> Double {
       guard divisor != 0 else { throw DivisionByZeroError() }
       return dividend / divisor
   }

let divisors: [Double] = [5, 4, 3, 2, 1, 0]
divisors.publisher
    .tryMap { try myDivide(1, $0) }
    .mapError { MyGenericError(wrappedError: $0) }
    .sink(
        receiveCompletion: { print ("completion: \($0)") ,
        receiveValue: { print ("value: \($0)", terminator: " ") }
     )

// Prints: "0.2 0.25 0.3333333333333333 0.5 1.0 completion: failure(MyGenericError(wrappedError: DivisionByZeroError()))"
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29-99evh.md): Transforms all elements from the upstream publisher with a provided closure.
- [tryMap(\_:)](trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [replaceNil(with:)](replacenil%28with_%29.md): Replaces nil elements in the stream with the provided element.
- [scan(\_:\_:)](scan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [tryScan(\_:\_:)](tryscan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`. Changes the failure type declared by the upstream publisher.
