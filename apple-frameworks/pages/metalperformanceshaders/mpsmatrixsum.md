> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixsum](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsum)

# MPSMatrixSum (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for performing a pointwise summation of a matrix.

## Declaration

```swift
class MPSMatrixSum
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixsum/init%28coder_device_%29.md)
- [init(device:count:rows:columns:transpose:)](mpsmatrixsum/init%28device_count_rows_columns_transpose_%29.md)

### Instance Properties

- [columns](mpsmatrixsum/columns.md)
- [count](mpsmatrixsum/count.md)
- [neuronParameterA](mpsmatrixsum/neuronparametera.md)
- [neuronParameterB](mpsmatrixsum/neuronparameterb.md)
- [neuronParameterC](mpsmatrixsum/neuronparameterc.md)
- [resultMatrixOrigin](mpsmatrixsum/resultmatrixorigin.md)
- [rows](mpsmatrixsum/rows.md)
- [transpose](mpsmatrixsum/transpose.md)

### Instance Methods

- [encode(to:sourceMatrices:resultMatrix:scale:offsetVector:biasVector:start:)](mpsmatrixsum/encode%28to_sourcematrices_resultmatrix_scale_offsetvector_biasvector_start_%29.md)
- [neuronType()](mpsmatrixsum/neurontype%28%29.md)
- [setNeuronType(\_:parameterA:parameterB:parameterC:)](mpsmatrixsum/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Matrix Arithmetic Operations

- [MPSMatrixMultiplication](mpsmatrixmultiplication.md): A matrix multiplication kernel.
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.

# MPSMatrixSum (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for performing a pointwise summation of a matrix.

## Declaration

```objectivec
@interface MPSMatrixSum : MPSKernel
```

## Topics

### Instance Properties

- [columns](mpsmatrixsum/columns.md)
- [count](mpsmatrixsum/count.md)
- [neuronParameterA](mpsmatrixsum/neuronparametera.md)
- [neuronParameterB](mpsmatrixsum/neuronparameterb.md)
- [neuronParameterC](mpsmatrixsum/neuronparameterc.md)
- [resultMatrixOrigin](mpsmatrixsum/resultmatrixorigin.md)
- [rows](mpsmatrixsum/rows.md)
- [transpose](mpsmatrixsum/transpose.md)

### Instance Methods

- [encodeToCommandBuffer:sourceMatrices:resultMatrix:scaleVector:offsetVector:biasVector:startIndex:](mpsmatrixsum/encode%28to_sourcematrices_resultmatrix_scale_offsetvector_biasvector_start_%29.md)
- [initWithCoder:device:](mpsmatrixsum/init%28coder_device_%29.md)
- [initWithDevice:count:rows:columns:transpose:](mpsmatrixsum/init%28device_count_rows_columns_transpose_%29.md)
- [neuronType](mpsmatrixsum/neurontype%28%29.md)
- [setNeuronType:parameterA:parameterB:parameterC:](mpsmatrixsum/setneurontype%28__parametera_parameterb_parameterc_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Matrix Arithmetic Operations

- [MPSMatrixMultiplication](mpsmatrixmultiplication.md): A matrix multiplication kernel.
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.
