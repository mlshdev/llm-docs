> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcreductionlayer](https://developer.apple.com/documentation/mlcompute/mlcreductionlayer)

# MLCReductionLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that reduces tensor values across a specific dimension to a scalar value.

## Declaration

```swift
class MLCReductionLayer
```

<a id="overview"></a>

## Overview

Use this layer to perform reduction operations on a given dimension. The output of this layer is a tensor of the same shape as the source tensor, except the layer sets the dimension to `1`.

## Topics

### Creating Reduction Layers

- [init(reductionType:dimension:)](mlcreductionlayer/init%28reductiontype_dimension_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimension you specify.
- [init(reductionType:dimensions:)](mlcreductionlayer/init%28reductiontype_dimensions_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimensions you specify.
- [MLCReductionType](mlcreductiontype.md): Deprecated. Constants that describe a reduction operation type.

### Inspecting Reduction Layers

- [reductionType](mlcreductionlayer/reductiontype.md): Deprecated. The function reduction type the system uses for reduction.
- [dimension](mlcreductionlayer/dimension.md): Deprecated. The dimension to perform the reduction operation on.
- [dimensions](mlcreductionlayer/dimensions-9oph6.md): Deprecated. The dimensions to perform the reduction operation on.

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
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

# MLCReductionLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that reduces tensor values across a specific dimension to a scalar value.

## Declaration

```objectivec
@interface MLCReductionLayer : MLCLayer
```

<a id="overview"></a>

## Overview

Use this layer to perform reduction operations on a given dimension. The output of this layer is a tensor of the same shape as the source tensor, except the layer sets the dimension to `1`.

## Topics

### Creating Reduction Layers

- [layerWithReductionType:dimension:](mlcreductionlayer/init%28reductiontype_dimension_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimension you specify.
- [layerWithReductionType:dimensions:](mlcreductionlayer/layerwithreductiontype_dimensions_.md): Deprecated. Creates a reduction layer using the reduction type and dimensions you specify.
- [MLCReductionType](mlcreductiontype.md): Deprecated. Constants that describe a reduction operation type.

### Inspecting Reduction Layers

- [reductionType](mlcreductionlayer/reductiontype.md): Deprecated. The function reduction type the system uses for reduction.
- [dimension](mlcreductionlayer/dimension.md): Deprecated. The dimension to perform the reduction operation on.
- [dimensions](mlcreductionlayer/dimensions-4359b.md): Deprecated. The dimensions to perform the reduction operation on.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.
