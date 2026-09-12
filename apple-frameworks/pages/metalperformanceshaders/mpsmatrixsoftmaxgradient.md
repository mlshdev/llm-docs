> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixsoftmaxgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsoftmaxgradient)

# MPSMatrixSoftMaxGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A gradient softmax kernel that operates on matrices.

## Declaration

```swift
class MPSMatrixSoftMaxGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixsoftmaxgradient/init%28coder_device_%29.md)
- [init(device:)](mpsmatrixsoftmaxgradient/init%28device_%29.md)

### Instance Properties

- [sourceColumns](mpsmatrixsoftmaxgradient/sourcecolumns.md)
- [sourceRows](mpsmatrixsoftmaxgradient/sourcerows.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixsoftmaxgradient/copy%28with_device_%29.md)
- [encode(to:gradientMatrix:forwardOutputMatrix:resultMatrix:)](mpsmatrixsoftmaxgradient/encode%28to_gradientmatrix_forwardoutputmatrix_resultmatrix_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

### Inherited By

- [MPSMatrixLogSoftMaxGradient](mpsmatrixlogsoftmaxgradient.md)

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
- [MPSMatrixSoftMax](mpsmatrixsoftmax.md): A softmax kernel that operates on matrices.

# MPSMatrixSoftMaxGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A gradient softmax kernel that operates on matrices.

## Declaration

```objectivec
@interface MPSMatrixSoftMaxGradient : MPSMatrixBinaryKernel
```

## Topics

### Instance Properties

- [sourceColumns](mpsmatrixsoftmaxgradient/sourcecolumns.md)
- [sourceRows](mpsmatrixsoftmaxgradient/sourcerows.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixsoftmaxgradient/copy%28with_device_%29.md)
- [encodeToCommandBuffer:gradientMatrix:forwardOutputMatrix:resultMatrix:](mpsmatrixsoftmaxgradient/encode%28to_gradientmatrix_forwardoutputmatrix_resultmatrix_%29.md)
- [initWithCoder:device:](mpsmatrixsoftmaxgradient/init%28coder_device_%29.md)
- [initWithDevice:](mpsmatrixsoftmaxgradient/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

### Inherited By

- [MPSMatrixLogSoftMaxGradient](mpsmatrixlogsoftmaxgradient.md)

## See Also

### Matrix Softmax Operations

- [MPSMatrixLogSoftMax](mpsmatrixlogsoftmax.md): A logarithmic softmax kernel that operates on matrices.
- [MPSMatrixLogSoftMaxGradient](mpsmatrixlogsoftmaxgradient.md): A logarithmic gradient softmax kernel that operates on matrices.
- [MPSMatrixSoftMax](mpsmatrixsoftmax.md): A softmax kernel that operates on matrices.
