> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmatmullayer](https://developer.apple.com/documentation/mlcompute/mlcmatmullayer)

# MLCMatMulLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that multiplies matrices.

## Declaration

```swift
class MLCMatMulLayer
```

## Topics

### Creating Matrix Multiplication Layers

- [init(descriptor:)](mlcmatmullayer/init%28descriptor_%29.md): Deprecated. Creates a matrix multiplication layer with the specified descriptor you specify.
- [MLCMatMulDescriptor](mlcmatmuldescriptor.md): Deprecated. A configuration object you use to create a matrix multiplication layer.

### Inspecting Matrix Multiplication Layers

- [descriptor](mlcmatmullayer/descriptor.md): Deprecated. The configuration object you use to create the matrix multiplication layer.

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
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.

# MLCMatMulLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that multiplies matrices.

## Declaration

```objectivec
@interface MLCMatMulLayer : MLCLayer
```

## Topics

### Creating Matrix Multiplication Layers

- [layerWithDescriptor:](mlcmatmullayer/init%28descriptor_%29.md): Deprecated. Creates a matrix multiplication layer with the specified descriptor you specify.
- [MLCMatMulDescriptor](mlcmatmuldescriptor.md): Deprecated. A configuration object you use to create a matrix multiplication layer.

### Inspecting Matrix Multiplication Layers

- [descriptor](mlcmatmullayer/descriptor.md): Deprecated. The configuration object you use to create the matrix multiplication layer.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Math Layers

- [MLCArithmeticLayer](mlcarithmeticlayer.md): Deprecated. A layer that performs an arithmetic operation.
- [MLCReductionLayer](mlcreductionlayer.md): Deprecated. A layer that reduces tensor values across a specific dimension to a scalar value.
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md): Deprecated. A layer that connects each input to each output within its layer.
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md): Deprecated. A layer that computes the uncentered cross-correlation values between the spacial planes of each feature channel of a tensor.
- [MLCComparisonLayer](mlccomparisonlayer.md): Deprecated. A layer that performs elementwise comparison of two tensors.
