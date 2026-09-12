> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcfullyconnectedlayer](https://developer.apple.com/documentation/mlcompute/mlcfullyconnectedlayer)

# MLCFullyConnectedLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that connects each input to each output within its layer.

## Declaration

```swift
class MLCFullyConnectedLayer
```

<a id="overview"></a>

## Overview

This is also known as a dense layer.

## Topics

### Creating Fully Connected Layers

- [init(weights:biases:descriptor:)](mlcfullyconnectedlayer/init%28weights_biases_descriptor_%29.md): Deprecated. Creates a fully connected layer with the weights, biases, and convolution descriptor you specify.
- [MLCConvolutionDescriptor](mlcconvolutiondescriptor.md): Deprecated. A configuration object you use to create a convolution or fully connected layer.

### Inspecting Fully Connected Layers

- [descriptor](mlcfullyconnectedlayer/descriptor.md): Deprecated. The configuration object you use to create the fully connected layer.
- [weights](mlcfullyconnectedlayer/weights.md): Deprecated. The weights tensor you use for the fully connected layer.
- [biases](mlcfullyconnectedlayer/biases.md): Deprecated. The biases tensor you use for the fully connected layer.
- [biasesParameter](mlcfullyconnectedlayer/biasesparameter.md): Deprecated. The biases tensor parameter you use for optimizer updates.
- [weightsParameter](mlcfullyconnectedlayer/weightsparameter.md): Deprecated. The weights tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

# MLCFullyConnectedLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that connects each input to each output within its layer.

## Declaration

```objectivec
@interface MLCFullyConnectedLayer : MLCLayer
```

<a id="overview"></a>

## Overview

This is also known as a dense layer.

## Topics

### Creating Fully Connected Layers

- [layerWithWeights:biases:descriptor:](mlcfullyconnectedlayer/init%28weights_biases_descriptor_%29.md): Deprecated. Creates a fully connected layer with the weights, biases, and convolution descriptor you specify.
- [MLCConvolutionDescriptor](mlcconvolutiondescriptor.md): Deprecated. A configuration object you use to create a convolution or fully connected layer.

### Inspecting Fully Connected Layers

- [descriptor](mlcfullyconnectedlayer/descriptor.md): Deprecated. The configuration object you use to create the fully connected layer.
- [weights](mlcfullyconnectedlayer/weights.md): Deprecated. The weights tensor you use for the fully connected layer.
- [biases](mlcfullyconnectedlayer/biases.md): Deprecated. The biases tensor you use for the fully connected layer.
- [biasesParameter](mlcfullyconnectedlayer/biasesparameter.md): Deprecated. The biases tensor parameter you use for optimizer updates.
- [weightsParameter](mlcfullyconnectedlayer/weightsparameter.md): Deprecated. The weights tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.
