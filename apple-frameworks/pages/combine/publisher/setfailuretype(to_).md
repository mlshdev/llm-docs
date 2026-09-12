> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/setfailuretype(to:)](https://developer.apple.com/documentation/combine/publisher/setfailuretype(to:))

# setFailureType(to:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Changes the failure type declared by the upstream publisher.

## Declaration

```swift
func setFailureType<E>(to failureType: E.Type) -> Publishers.SetFailureType<Self, E> where E : Error
```

## Parameters

- `failureType`: The `Failure` type presented by this publisher.

<a id="return-value"></a>

## Return Value

A publisher that appears to send the specified failure type.

<a id="discussion"></a>

## Discussion

Use [setFailureType(to:)](setfailuretype%28to_%29.md) when you need set the error type of a publisher that cannot fail.

Conversely, if the upstream can fail, you would use [mapError(\_:)](maperror%28__%29.md) to provide instructions on converting the error types to needed by the downstream publisher’s inputs.

The following example has two publishers with mismatched error types: `pub1`’s error type is [Never](https://developer.apple.com/documentation/swift/never), and `pub2`’s error type is [Error](https://developer.apple.com/documentation/swift/error). Because of the mismatch, the [combineLatest(\_:)](combinelatest%28__%29.md) operator requires that `pub1` use [setFailureType(to:)](setfailuretype%28to_%29.md) to make it appear that `pub1` can produce the [Error](https://developer.apple.com/documentation/swift/error) type, like `pub2` can.

```swift
let pub1 = [0, 1, 2, 3, 4, 5].publisher
let pub2 = CurrentValueSubject<Int, Error>(0)
let cancellable = pub1
    .setFailureType(to: Error.self)
    .combineLatest(pub2)
    .sink(
        receiveCompletion: { print ("completed: \($0)") },
        receiveValue: { print ("value: \($0)")}
     )

// Prints: "value: (5, 0)".
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29-99evh.md): Transforms all elements from the upstream publisher with a provided closure.
- [tryMap(\_:)](trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [mapError(\_:)](maperror%28__%29.md): Converts any failure from the upstream publisher into a new error.
- [replaceNil(with:)](replacenil%28with_%29.md): Replaces nil elements in the stream with the provided element.
- [scan(\_:\_:)](scan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [tryScan(\_:\_:)](tryscan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.
