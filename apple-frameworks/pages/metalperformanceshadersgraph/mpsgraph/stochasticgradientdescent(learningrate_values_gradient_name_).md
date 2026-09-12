> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/stochasticgradientdescent(learningrate:values:gradient:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/stochasticgradientdescent(learningrate:values:gradient:name:))

# stochasticGradientDescent(learningRate:values:gradient:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The Stochastic gradient descent performs a gradient descent.

## Declaration

```swift
func stochasticGradientDescent(learningRate learningRateTensor: MPSGraphTensor, values valuesTensor: MPSGraphTensor, gradient gradientTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `learningRateTensor`: Scalar tensor which indicates the learning rate to use with the optimizer
- `valuesTensor`: Values tensor, usually representing the trainable parameters
- `gradientTensor`: Partial gradient of the trainable parameters with respect to loss
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

`variable = variable - (learningRate * g)` where, `g` is gradient of error wrt variable

# stochasticGradientDescentWithLearningRateTensor:valuesTensor:gradientTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The Stochastic gradient descent performs a gradient descent.

## Declaration

```objectivec
- (MPSGraphTensor *) stochasticGradientDescentWithLearningRateTensor:(MPSGraphTensor *) learningRateTensor valuesTensor:(MPSGraphTensor *) valuesTensor gradientTensor:(MPSGraphTensor *) gradientTensor name:(NSString *) name;
```

## Parameters

- `learningRateTensor`: Scalar tensor which indicates the learning rate to use with the optimizer
- `valuesTensor`: Values tensor, usually representing the trainable parameters
- `gradientTensor`: Partial gradient of the trainable parameters with respect to loss
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

`variable = variable - (learningRate * g)` where, `g` is gradient of error wrt variable
