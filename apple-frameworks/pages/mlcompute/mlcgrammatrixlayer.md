> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgrammatrixlayer](https://developer.apple.com/documentation/mlcompute/mlcgrammatrixlayer)

# MLCGramMatrixLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.

## Declaration

```swift
class MLCGramMatrixLayer
```

<a id="overview"></a>

## Overview

For example, if the input tensor batch function is:

`x = x[b, y, x, c]`

The computation performed by this layer is:

`y = y[b, 1, f, c] = alpha * sum_{x, y} x[b, y, x, f] * x[b, y, x, c]`

Interpret this operation as computing all combinations of fully connected layers between the different spatial planes of the input tensor.

The layer performs this operation independently for each tensor in a batch. Then the layer stores these results in the feature channel and x-coordinate indices of the output batch.

Legend:

- **`b`**: The batch index.
- **`y` and `x`**: The spatial coordinates.
- **`c`**: The feature channel index.
- **`alpha`**: The scaling factor.

## Topics

### Creating Gram Matrix Layers

- [init(scale:)](mlcgrammatrixlayer/init%28scale_%29.md): Deprecated. Creates a gram matrix layer with the scaling factor you specify.

### Inspecting Gram Matrix Layers

- [scale](mlcgrammatrixlayer/scale.md): Deprecated. The scaling factor.

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
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

# MLCGramMatrixLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.

## Declaration

```objectivec
@interface MLCGramMatrixLayer : MLCLayer
```

<a id="overview"></a>

## Overview

For example, if the input tensor batch function is:

`x = x[b, y, x, c]`

The computation performed by this layer is:

`y = y[b, 1, f, c] = alpha * sum_{x, y} x[b, y, x, f] * x[b, y, x, c]`

Interpret this operation as computing all combinations of fully connected layers between the different spatial planes of the input tensor.

The layer performs this operation independently for each tensor in a batch. Then the layer stores these results in the feature channel and x-coordinate indices of the output batch.

Legend:

- **`b`**: The batch index.
- **`y` and `x`**: The spatial coordinates.
- **`c`**: The feature channel index.
- **`alpha`**: The scaling factor.

## Topics

### Creating Gram Matrix Layers

- [layerWithScale:](mlcgrammatrixlayer/init%28scale_%29.md): Deprecated. Creates a gram matrix layer with the scaling factor you specify.

### Inspecting Gram Matrix Layers

- [scale](mlcgrammatrixlayer/scale.md): Deprecated. The scaling factor.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.
