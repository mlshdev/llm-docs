> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixcopytoimage](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixcopytoimage)

# MPSMatrixCopyToImage (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A kernel that copies matrix data to a Metal Performance Shaders image.

## Declaration

```swift
class MPSMatrixCopyToImage
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixcopytoimage/init%28coder_device_%29.md)
- [init(device:dataLayout:)](mpsmatrixcopytoimage/init%28device_datalayout_%29.md)

### Instance Properties

- [dataLayout](mpsmatrixcopytoimage/datalayout.md)
- [sourceMatrixBatchIndex](mpsmatrixcopytoimage/sourcematrixbatchindex.md)
- [sourceMatrixOrigin](mpsmatrixcopytoimage/sourcematrixorigin.md)

### Instance Methods

- [encode(commandBuffer:sourceMatrix:destinationImage:)](mpsmatrixcopytoimage/encode%28commandbuffer_sourcematrix_destinationimage_%29.md)
- [encodeBatch(commandBuffer:sourceMatrix:destinationImages:)](mpsmatrixcopytoimage/encodebatch%28commandbuffer_sourcematrix_destinationimages_%29.md)

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

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.

# MPSMatrixCopyToImage (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A kernel that copies matrix data to a Metal Performance Shaders image.

## Declaration

```objectivec
@interface MPSMatrixCopyToImage : MPSKernel
```

## Topics

### Instance Properties

- [dataLayout](mpsmatrixcopytoimage/datalayout.md)
- [sourceMatrixBatchIndex](mpsmatrixcopytoimage/sourcematrixbatchindex.md)
- [sourceMatrixOrigin](mpsmatrixcopytoimage/sourcematrixorigin.md)

### Instance Methods

- [encodeToCommandBuffer:sourceMatrix:destinationImage:](mpsmatrixcopytoimage/encode%28commandbuffer_sourcematrix_destinationimage_%29.md)
- [encodeBatchToCommandBuffer:sourceMatrix:destinationImages:](mpsmatrixcopytoimage/encodebatch%28commandbuffer_sourcematrix_destinationimages_%29.md)
- [initWithCoder:device:](mpsmatrixcopytoimage/init%28coder_device_%29.md)
- [initWithDevice:dataLayout:](mpsmatrixcopytoimage/init%28device_datalayout_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.
