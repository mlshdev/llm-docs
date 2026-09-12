> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/matrixmultiplication(primary:secondary:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/matrixmultiplication(primary:secondary:name:))

# matrixMultiplication(primary:secondary:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the matrix multiplication of 2 input tensors with support for broadcasting.

## Declaration

```swift
func matrixMultiplication(primary primaryTensor: MPSGraphTensor, secondary secondaryTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `primaryTensor`: The left-hand side tensor.
- `secondaryTensor`: The right-hand side tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid tensor containing the product of the input matrices.

# matrixMultiplicationWithPrimaryTensor:secondaryTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Computes the matrix multiplication of 2 input tensors with support for broadcasting.

## Declaration

```objectivec
- (MPSGraphTensor *) matrixMultiplicationWithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor name:(NSString *) name;
```

## Parameters

- `primaryTensor`: The left-hand side tensor.
- `secondaryTensor`: The right-hand side tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid tensor containing the product of the input matrices.
