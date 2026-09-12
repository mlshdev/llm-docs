> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensorrangeexpression/newaxis](https://developer.apple.com/documentation/coreml/mltensorrangeexpression/newaxis)

# newAxis

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Expand the tensor at the specified dimension.

## Declaration

```swift
static var newAxis: any MLTensorRangeExpression { get }
```

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(randomNormal: [1, 3, 28, 28], scalarType: Float.self)
let y = x[.newAxis, ...]
y.shape // is [1, 1, 3, 28, 28]
```

## See Also

### Expanding and squeezing the tensor

- [squeezeAxis](squeezeaxis.md): Conforms when `Self` is `_MLTensorRange`. Squeeze the tensor at the specified dimension.
- [fillAll](fillall.md): Conforms when `Self` is `_MLTensorRange`. The same as the ellipsis literal `...` used to indicate unspecified dimensions of the tensor.
