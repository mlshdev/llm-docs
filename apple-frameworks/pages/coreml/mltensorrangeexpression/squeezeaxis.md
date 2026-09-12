> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensorrangeexpression/squeezeaxis](https://developer.apple.com/documentation/coreml/mltensorrangeexpression/squeezeaxis)

# squeezeAxis

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Squeeze the tensor at the specified dimension.

## Declaration

```swift
static var squeezeAxis: any MLTensorRangeExpression { get }
```

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(randomNormal: [1, 3, 28, 28], scalarType: Float.self)
let y = x[.squeezeAxis, ...]
y.shape // is [3, 28, 28]
```

## See Also

### Expanding and squeezing the tensor

- [newAxis](newaxis.md): Conforms when `Self` is `_MLTensorRange`. Expand the tensor at the specified dimension.
- [fillAll](fillall.md): Conforms when `Self` is `_MLTensorRange`. The same as the ellipsis literal `...` used to indicate unspecified dimensions of the tensor.
