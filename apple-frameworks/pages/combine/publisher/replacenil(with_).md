> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/replacenil(with:)](https://developer.apple.com/documentation/combine/publisher/replacenil(with:))

# replaceNil(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Replaces nil elements in the stream with the provided element.

## Declaration

```swift
func replaceNil<T>(with output: T) -> Publishers.Map<Self, T> where Self.Output == T?
```

## Parameters

- `output`: The element to use when replacing `nil`.

<a id="return-value"></a>

## Return Value

A publisher that replaces `nil` elements from the upstream publisher with the provided element.

<a id="discussion"></a>

## Discussion

The [replaceNil(with:)](replacenil%28with_%29.md) operator enables replacement of `nil` values in a stream with a substitute value. In the example below, a collection publisher contains a nil value. The [replaceNil(with:)](replacenil%28with_%29.md) operator replaces this with `0.0`.

```swift
let numbers: [Double?] = [1.0, 2.0, nil, 3.0]
numbers.publisher
    .replaceNil(with: 0.0)
    .sink { print("\($0)", terminator: " ") }

// Prints: "Optional(1.0) Optional(2.0) Optional(0.0) Optional(3.0)"
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29-99evh.md): Transforms all elements from the upstream publisher with a provided closure.
- [tryMap(\_:)](trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [mapError(\_:)](maperror%28__%29.md): Converts any failure from the upstream publisher into a new error.
- [scan(\_:\_:)](scan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [tryScan(\_:\_:)](tryscan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`. Changes the failure type declared by the upstream publisher.
