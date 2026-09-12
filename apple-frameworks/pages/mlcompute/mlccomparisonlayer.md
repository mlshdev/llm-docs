> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlccomparisonlayer](https://developer.apple.com/documentation/mlcompute/mlccomparisonlayer)

# MLCComparisonLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A layer that performs elementwise comparison of two tensors.

## Declaration

```swift
class MLCComparisonLayer
```

<a id="overview"></a>

## Overview

The layer returns a tensor with the shape equal to the largest shape of operations. It fills with the Boolean value `result[i] = op1[i] ? op2[i]`, where `?` corresponds to the  [MLCComparisonOperation](mlccomparisonoperation.md) you specify.

## Topics

### Creating Comparison Layers

- [init(operation:)](mlccomparisonlayer/init%28operation_%29.md): Deprecated. Creates a comparison layer with the operation you specify.
- [MLCComparisonOperation](mlccomparisonoperation.md): Deprecated. A comparison operation.

### Inspecting Comparison Layers

- [operation](mlccomparisonlayer/operation.md): Deprecated. The comparison layer’s operation.

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
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.

# MLCComparisonLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A layer that performs elementwise comparison of two tensors.

## Declaration

```objectivec
@interface MLCComparisonLayer : MLCLayer
```

<a id="overview"></a>

## Overview

The layer returns a tensor with the shape equal to the largest shape of operations. It fills with the Boolean value `result[i] = op1[i] ? op2[i]`, where `?` corresponds to the  [MLCComparisonOperation](mlccomparisonoperation.md) you specify.

## Topics

### Creating Comparison Layers

- [layerWithOperation:](mlccomparisonlayer/init%28operation_%29.md): Deprecated. Creates a comparison layer with the operation you specify.
- [MLCComparisonOperation](mlccomparisonoperation.md): Deprecated. A comparison operation.

### Inspecting Comparison Layers

- [operation](mlccomparisonlayer/operation.md): Deprecated. The comparison layer’s operation.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
