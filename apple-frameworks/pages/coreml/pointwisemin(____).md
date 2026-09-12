> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/pointwisemin(_:_:)](https://developer.apple.com/documentation/coreml/pointwisemin(_:_:))

# pointwiseMin(\_:\_:)

**Framework:** Core ML  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Computes the element-wise minimum of two tensors.

## Declaration

```swift
func pointwiseMin(_ lhs: MLTensor, _ rhs: MLTensor) -> MLTensor
```

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor([1.0, 3.0, 6.0])
let y = MLTensor([6.0, 3.0, 1.0])
let z = pointwiseMin(x, y)
await z.shapedArray(of: Float.self) // is [1.0, 3.0, 1.0]
```

Shapes must be broadcastable, where the broadcasted shape becomes the shape of the output.

## See Also

### Model tensor

- [MLTensor](mltensor.md): A multi-dimensional array of numerical or Boolean scalars tailored to ML use cases, containing methods to perform transformations and mathematical operations efficiently using a ML compute device.
- [MLTensorScalar](mltensorscalar.md): A type that represents the tensor scalar types supported by the framework. Don’t use this type directly.
- [MLTensorRangeExpression](mltensorrangeexpression.md): A type that can be used to slice a dimension of a tensor. Don’t use this type directly.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29.md): Computes the element-wise minimum between two tensors.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
