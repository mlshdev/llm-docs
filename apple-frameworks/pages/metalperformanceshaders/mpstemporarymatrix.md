> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporarymatrix](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporarymatrix)

# MPSTemporaryMatrix (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A matrix allocated on GPU private memory.

## Declaration

```swift
class MPSTemporaryMatrix
```

## Topics

### Initializers

- [init(commandBuffer:matrixDescriptor:)](mpstemporarymatrix/init%28commandbuffer_matrixdescriptor_%29.md)

### Instance Properties

- [readCount](mpstemporarymatrix/readcount.md)

### Type Methods

- [prefetchStorage(with:matrixDescriptorList:)](mpstemporarymatrix/prefetchstorage%28with_matrixdescriptorlist_%29.md)

## Relationships

### Inherits From

- [MPSMatrix](mpsmatrix.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matrices

- [MPSMatrix](mpsmatrix.md): A 2D array of data that stores the data’s values.
- [MPSMatrixDescriptor](mpsmatrixdescriptor.md): A description of attributes used to create an MPS matrix.

# MPSTemporaryMatrix (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A matrix allocated on GPU private memory.

## Declaration

```objectivec
@interface MPSTemporaryMatrix : MPSMatrix
```

## Topics

### Initializers

- [temporaryMatrixWithCommandBuffer:matrixDescriptor:](mpstemporarymatrix/init%28commandbuffer_matrixdescriptor_%29.md)

### Instance Properties

- [readCount](mpstemporarymatrix/readcount.md)

### Type Methods

- [prefetchStorageWithCommandBuffer:matrixDescriptorList:](mpstemporarymatrix/prefetchstorage%28with_matrixdescriptorlist_%29.md)

## Relationships

### Inherits From

- [MPSMatrix](mpsmatrix.md)

## See Also

### Matrices

- [MPSMatrix](mpsmatrix.md): A 2D array of data that stores the data’s values.
- [MPSMatrixDescriptor](mpsmatrixdescriptor.md): A description of attributes used to create an MPS matrix.
