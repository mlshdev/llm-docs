> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensorrangeexpression](https://developer.apple.com/documentation/coreml/mltensorrangeexpression)

# MLTensorRangeExpression

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that can be used to slice a dimension of a tensor. Don’t use this type directly.

## Declaration

```swift
protocol MLTensorRangeExpression : Sendable
```

## Topics

### Expanding and squeezing the tensor

- [newAxis](mltensorrangeexpression/newaxis.md): Conforms when `Self` is `_MLTensorRange`. Expand the tensor at the specified dimension.
- [squeezeAxis](mltensorrangeexpression/squeezeaxis.md): Conforms when `Self` is `_MLTensorRange`. Squeeze the tensor at the specified dimension.
- [fillAll](mltensorrangeexpression/fillall.md): Conforms when `Self` is `_MLTensorRange`. The same as the ellipsis literal `...` used to indicate unspecified dimensions of the tensor.

### Slicing the tensor

- [closedRange(\_:stride:)](mltensorrangeexpression/closedrange%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [index(\_:)](mltensorrangeexpression/index%28__%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [partialRangeFrom(\_:stride:)](mltensorrangeexpression/partialrangefrom%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [partialRangeUpTo(\_:stride:)](mltensorrangeexpression/partialrangeupto%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.
- [range(\_:stride:)](mltensorrangeexpression/range%28__stride_%29.md): Conforms when `Self` is `_MLTensorRange`. Slice the tensor at the specified dimension.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model tensor

- [MLTensor](mltensor.md): A multi-dimensional array of numerical or Boolean scalars tailored to ML use cases, containing methods to perform transformations and mathematical operations efficiently using a ML compute device.
- [MLTensorScalar](mltensorscalar.md): A type that represents the tensor scalar types supported by the framework. Don’t use this type directly.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29.md): Computes the element-wise minimum of two tensors.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29.md): Computes the element-wise minimum between two tensors.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
