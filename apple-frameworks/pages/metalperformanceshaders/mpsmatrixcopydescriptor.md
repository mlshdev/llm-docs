> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixcopydescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixcopydescriptor)

# MPSMatrixCopyDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of multiple matrix copy operations.

## Declaration

```swift
class MPSMatrixCopyDescriptor
```

## Topics

### Initializers

- [init(device:count:)](mpsmatrixcopydescriptor/init%28device_count_%29.md)
- [init(sourceMatrices:destinationMatrices:offsetVector:offset:)](mpsmatrixcopydescriptor/init%28sourcematrices_destinationmatrices_offsetvector_offset_%29.md)
- [init(sourceMatrix:destinationMatrix:offsets:)](mpsmatrixcopydescriptor/init%28sourcematrix_destinationmatrix_offsets_%29.md)

### Instance Methods

- [setCopyOperationAt(\_:sourceMatrix:destinationMatrix:offsets:)](mpsmatrixcopydescriptor/setcopyoperationat%28__sourcematrix_destinationmatrix_offsets_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.

# MPSMatrixCopyDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of multiple matrix copy operations.

## Declaration

```objectivec
@interface MPSMatrixCopyDescriptor : NSObject
```

## Topics

### Instance Methods

- [initWithDevice:count:](mpsmatrixcopydescriptor/init%28device_count_%29.md)
- [initWithSourceMatrices:destinationMatrices:offsetVector:offset:](mpsmatrixcopydescriptor/init%28sourcematrices_destinationmatrices_offsetvector_offset_%29.md)
- [setCopyOperationAtIndex:sourceMatrix:destinationMatrix:offsets:](mpsmatrixcopydescriptor/setcopyoperationat%28__sourcematrix_destinationmatrix_offsets_%29.md)

### Type Methods

- [descriptorWithSourceMatrix:destinationMatrix:offsets:](mpsmatrixcopydescriptor/init%28sourcematrix_destinationmatrix_offsets_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.
