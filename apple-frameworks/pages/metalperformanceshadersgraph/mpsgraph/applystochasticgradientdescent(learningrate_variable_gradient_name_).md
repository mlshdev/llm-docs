> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/applystochasticgradientdescent(learningrate:variable:gradient:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/applystochasticgradientdescent(learningrate:variable:gradient:name:))

# applyStochasticGradientDescent(learningRate:variable:gradient:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The Stochastic gradient descent performs a gradient descent `variable = variable - (learningRate * g)` where, `g` is gradient of error wrt variable this op directly writes to the variable

## Declaration

```swift
func applyStochasticGradientDescent(learningRate learningRateTensor: MPSGraphTensor, variable: MPSGraphVariableOp, gradient gradientTensor: MPSGraphTensor, name: String?) -> MPSGraphOperation
```

## Parameters

- `learningRateTensor`: Scalar tensor which indicates the learning rate to use with the optimizer
- `variable`: Variable operation with trainable parameters
- `gradientTensor`: Partial gradient of the trainable parameters with respect to loss
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# applyStochasticGradientDescentWithLearningRateTensor:variable:gradientTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The Stochastic gradient descent performs a gradient descent `variable = variable - (learningRate * g)` where, `g` is gradient of error wrt variable this op directly writes to the variable

## Declaration

```objectivec
- (MPSGraphOperation *) applyStochasticGradientDescentWithLearningRateTensor:(MPSGraphTensor *) learningRateTensor variable:(MPSGraphVariableOp *) variable gradientTensor:(MPSGraphTensor *) gradientTensor name:(NSString *) name;
```

## Parameters

- `learningRateTensor`: Scalar tensor which indicates the learning rate to use with the optimizer
- `variable`: Variable operation with trainable parameters
- `gradientTensor`: Partial gradient of the trainable parameters with respect to loss
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
