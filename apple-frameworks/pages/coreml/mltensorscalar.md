> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensorscalar](https://developer.apple.com/documentation/coreml/mltensorscalar)

# MLTensorScalar

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that represents the tensor scalar types supported by the framework. Don’t use this type directly.

## Declaration

```swift
protocol MLTensorScalar : Sendable
```

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model tensor

- [MLTensor](mltensor.md): A multi-dimensional array of numerical or Boolean scalars tailored to ML use cases, containing methods to perform transformations and mathematical operations efficiently using a ML compute device.
- [MLTensorRangeExpression](mltensorrangeexpression.md): A type that can be used to slice a dimension of a tensor. Don’t use this type directly.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29.md): Computes the element-wise minimum of two tensors.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29.md): Computes the element-wise minimum between two tensors.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
