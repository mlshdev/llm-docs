> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixsoftmax](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsoftmax)

# MPSMatrixSoftMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A softmax kernel that operates on matrices.

## Declaration

```swift
class MPSMatrixSoftMax
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixsoftmax/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixsoftmax/init%28device_%29.md)

### Instance Properties

- [sourceColumns](mpsmatrixsoftmax/sourcecolumns.md)
- [sourceRows](mpsmatrixsoftmax/sourcerows.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixsoftmax/copy%28with_device_%29.md)
- [encode(commandBuffer:inputMatrix:resultMatrix:)](mpsmatrixsoftmax/encode%28commandbuffer_inputmatrix_resultmatrix_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

### Inherited By

- [MPSMatrixLogSoftMax](mpsmatrixlogsoftmax.md)

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

### Matrix Softmax Operations

- [MPSMatrixLogSoftMax](mpsmatrixlogsoftmax.md): A logarithmic softmax kernel that operates on matrices.
- [MPSMatrixLogSoftMaxGradient](mpsmatrixlogsoftmaxgradient.md): A logarithmic gradient softmax kernel that operates on matrices.
- [MPSMatrixSoftMaxGradient](mpsmatrixsoftmaxgradient.md): A gradient softmax kernel that operates on matrices.

# MPSMatrixSoftMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A softmax kernel that operates on matrices.

## Declaration

```objectivec
@interface MPSMatrixSoftMax : MPSMatrixUnaryKernel
```

## Topics

### Instance Properties

- [sourceColumns](mpsmatrixsoftmax/sourcecolumns.md)
- [sourceRows](mpsmatrixsoftmax/sourcerows.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixsoftmax/copy%28with_device_%29.md)
- [encodeToCommandBuffer:inputMatrix:resultMatrix:](mpsmatrixsoftmax/encode%28commandbuffer_inputmatrix_resultmatrix_%29.md)
- [initWithCoder:device:](mpsmatrixsoftmax/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixsoftmax/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

### Inherited By

- [MPSMatrixLogSoftMax](mpsmatrixlogsoftmax.md)

## See Also

### Matrix Softmax Operations

- [MPSMatrixLogSoftMax](mpsmatrixlogsoftmax.md): A logarithmic softmax kernel that operates on matrices.
- [MPSMatrixLogSoftMaxGradient](mpsmatrixlogsoftmaxgradient.md): A logarithmic gradient softmax kernel that operates on matrices.
- [MPSMatrixSoftMaxGradient](mpsmatrixsoftmaxgradient.md): A gradient softmax kernel that operates on matrices.
