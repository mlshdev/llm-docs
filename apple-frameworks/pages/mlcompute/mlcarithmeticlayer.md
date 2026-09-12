> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcarithmeticlayer](https://developer.apple.com/documentation/mlcompute/mlcarithmeticlayer)

# MLCArithmeticLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that performs an arithmetic operation.

## Declaration

```swift
class MLCArithmeticLayer
```

## Topics

### Creating Arithmetic Layers

- [init(operation:)](mlcarithmeticlayer/init%28operation_%29.md): Deprecated. Creates an arithmetic layer with the operation you specify.
- [MLCArithmeticOperation](mlcarithmeticoperation.md): Deprecated. Constants that describe an arithmetic operation.

### Inspecting Arithmetic Layers

- [operation](mlcarithmeticlayer/operation.md): Deprecated. The arithmetic layer’s operation.

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

- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

# MLCArithmeticLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that performs an arithmetic operation.

## Declaration

```objectivec
@interface MLCArithmeticLayer : MLCLayer
```

## Topics

### Creating Arithmetic Layers

- [layerWithOperation:](mlcarithmeticlayer/init%28operation_%29.md): Deprecated. Creates an arithmetic layer with the operation you specify.
- [MLCArithmeticOperation](mlcarithmeticoperation.md): Deprecated. Constants that describe an arithmetic operation.

### Inspecting Arithmetic Layers

- [operation](mlcarithmeticlayer/operation.md): Deprecated. The arithmetic layer’s operation.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Math Layers

- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCMatMulLayer](mlcmatmullayer.md): Deprecated. A layer that multiplies matrices.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.
