> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/withmltensorcomputepolicy(_:_:)](https://developer.apple.com/documentation/coreml/withmltensorcomputepolicy(_:_:))

# withMLTensorComputePolicy(\_:\_:)

**Framework:** Core ML  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.

## Declaration

```swift
func withMLTensorComputePolicy<R>(_ computePolicy: MLComputePolicy, _ body: () async throws -> R) async rethrows -> R
```

## Parameters

- `computePolicy`: A compute policy that will be set before the closure gets called and restored after the closure returns.
- `body`: A nullary closure. If the closure has a return value, that value is also used as the return value of the `withMLTensorComputePolicy(_:_:)` function.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure.

## See Also

### Model tensor

- [MLTensor](mltensor.md): A multi-dimensional array of numerical or Boolean scalars tailored to ML use cases, containing methods to perform transformations and mathematical operations efficiently using a ML compute device.
- [MLTensorScalar](mltensorscalar.md): A type that represents the tensor scalar types supported by the framework. Don’t use this type directly.
- [MLTensorRangeExpression](mltensorrangeexpression.md): A type that can be used to slice a dimension of a tensor. Don’t use this type directly.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29.md): Computes the element-wise minimum of two tensors.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29.md): Computes the element-wise minimum between two tensors.
