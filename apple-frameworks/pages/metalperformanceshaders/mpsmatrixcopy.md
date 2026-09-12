> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixcopy](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixcopy)

# MPSMatrixCopy (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that can perform multiple matrix copy operations.

## Declaration

```swift
class MPSMatrixCopy
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixcopy/init%28coder_device_%29.md)
- [init(device:copyRows:copyColumns:sourcesAreTransposed:destinationsAreTransposed:)](mpsmatrixcopy/init%28device_copyrows_copycolumns_sourcesaretransposed_destinationsaretransposed_%29.md)

### Instance Properties

- [copyColumns](mpsmatrixcopy/copycolumns.md)
- [copyRows](mpsmatrixcopy/copyrows.md)
- [destinationsAreTransposed](mpsmatrixcopy/destinationsaretransposed.md)
- [sourcesAreTransposed](mpsmatrixcopy/sourcesaretransposed.md)

### Instance Methods

- [encode(commandBuffer:copyDescriptor:)](mpsmatrixcopy/encode%28commandbuffer_copydescriptor_%29.md)
- [encode(commandBuffer:copyDescriptor:rowPermuteIndices:rowPermuteOffset:columnPermuteIndices:columnPermuteOffset:)](mpsmatrixcopy/encode%28commandbuffer_copydescriptor_rowpermuteindices_rowpermuteoffset_columnpermuteindices_columnpermuteoffset_%29.md)

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

- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.

# MPSMatrixCopy (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that can perform multiple matrix copy operations.

## Declaration

```objectivec
@interface MPSMatrixCopy : MPSKernel
```

## Topics

### Instance Properties

- [copyColumns](mpsmatrixcopy/copycolumns.md)
- [copyRows](mpsmatrixcopy/copyrows.md)
- [destinationsAreTransposed](mpsmatrixcopy/destinationsaretransposed.md)
- [sourcesAreTransposed](mpsmatrixcopy/sourcesaretransposed.md)

### Instance Methods

- [encodeToCommandBuffer:copyDescriptor:](mpsmatrixcopy/encode%28commandbuffer_copydescriptor_%29.md)
- [encodeToCommandBuffer:copyDescriptor:rowPermuteIndices:rowPermuteOffset:columnPermuteIndices:columnPermuteOffset:](mpsmatrixcopy/encode%28commandbuffer_copydescriptor_rowpermuteindices_rowpermuteoffset_columnpermuteindices_columnpermuteoffset_%29.md)
- [initWithCoder:device:](mpsmatrixcopy/init%28coder_device_%29.md)
- [initWithDevice:copyRows:copyColumns:sourcesAreTransposed:destinationsAreTransposed:](mpsmatrixcopy/init%28device_copyrows_copycolumns_sourcesaretransposed_destinationsaretransposed_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Matrix Copying Operations

- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.
