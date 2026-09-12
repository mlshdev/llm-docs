> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensorrangeexpression/range(_:stride:)](https://developer.apple.com/documentation/coreml/mltensorrangeexpression/range(_:stride:))

# range(\_:stride:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Slice the tensor at the specified dimension.

## Declaration

```swift
static func range(_ range: Range<Int>, stride: Int = 1) -> any MLTensorRangeExpression
```

<a id="discussion"></a>

## Discussion

```swift
let x = MLTensor(randomNormal: [1, 3, 28, 28], scalarType: Float.self)
let y = x[..., 0..<2] // or x[..., .range(0..<2, stride: 1)]
y.shape // is [1, 3, 28, 2]
```

## See Also

### Slicing the tensor

- [closedRange(\_:stride:)](closedrange%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [index(\_:)](index%28__%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [partialRangeFrom(\_:stride:)](partialrangefrom%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [partialRangeUpTo(\_:stride:)](partialrangeupto%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
