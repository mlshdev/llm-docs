> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporaryvector](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporaryvector)

# MPSTemporaryVector (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A vector allocated on GPU private memory.

## Declaration

```swift
class MPSTemporaryVector
```

## Topics

### Initializers

- [init(commandBuffer:descriptor:)](mpstemporaryvector/init%28commandbuffer_descriptor_%29.md)

### Instance Properties

- [readCount](mpstemporaryvector/readcount.md)

### Type Methods

- [prefetchStorage(with:descriptorList:)](mpstemporaryvector/prefetchstorage%28with_descriptorlist_%29.md)

## Relationships

### Inherits From

- [MPSVector](mpsvector.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Vectors

- [MPSVector](mpsvector.md): A 1D array of data that stores the data’s values.
- [MPSVectorDescriptor](mpsvectordescriptor.md): A description of the length and data type of a vector.

# MPSTemporaryVector (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A vector allocated on GPU private memory.

## Declaration

```objectivec
@interface MPSTemporaryVector : MPSVector
```

## Topics

### Instance Properties

- [readCount](mpstemporaryvector/readcount.md)

### Type Methods

- [temporaryVectorWithCommandBuffer:descriptor:](mpstemporaryvector/init%28commandbuffer_descriptor_%29.md)
- [prefetchStorageWithCommandBuffer:descriptorList:](mpstemporaryvector/prefetchstorage%28with_descriptorlist_%29.md)

## Relationships

### Inherits From

- [MPSVector](mpsvector.md)

## See Also

### Vectors

- [MPSVector](mpsvector.md): A 1D array of data that stores the data’s values.
- [MPSVectorDescriptor](mpsvectordescriptor.md): A description of the length and data type of a vector.
