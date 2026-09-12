> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsvectordescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsvectordescriptor)

# MPSVectorDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of the length and data type of a vector.

## Declaration

```swift
class MPSVectorDescriptor
```

## Topics

### Initializers

- [init(length:dataType:)](mpsvectordescriptor/init%28length_datatype_%29.md)
- [init(length:vectors:vectorBytes:dataType:)](mpsvectordescriptor/init%28length_vectors_vectorbytes_datatype_%29.md)

### Instance Properties

- [dataType](mpsvectordescriptor/datatype.md)
- [length](mpsvectordescriptor/length.md)
- [vectorBytes](mpsvectordescriptor/vectorbytes.md)
- [vectors](mpsvectordescriptor/vectors.md)

### Type Methods

- [vectorBytes(forLength:dataType:)](mpsvectordescriptor/vectorbytes%28forlength_datatype_%29.md)

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

### Vectors

- [MPSVector](mpsvector.md): A 1D array of data that stores the data’s values.
- [MPSTemporaryVector](mpstemporaryvector.md): A vector allocated on GPU private memory.

# MPSVectorDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of the length and data type of a vector.

## Declaration

```objectivec
@interface MPSVectorDescriptor : NSObject
```

## Topics

### Initializers

- [vectorDescriptorWithLength:dataType:](mpsvectordescriptor/init%28length_datatype_%29.md)
- [vectorDescriptorWithLength:vectors:vectorBytes:dataType:](mpsvectordescriptor/init%28length_vectors_vectorbytes_datatype_%29.md)

### Instance Properties

- [dataType](mpsvectordescriptor/datatype.md)
- [length](mpsvectordescriptor/length.md)
- [vectorBytes](mpsvectordescriptor/vectorbytes.md)
- [vectors](mpsvectordescriptor/vectors.md)

### Type Methods

- [vectorBytesForLength:dataType:](mpsvectordescriptor/vectorbytes%28forlength_datatype_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Vectors

- [MPSVector](mpsvector.md): A 1D array of data that stores the data’s values.
- [MPSTemporaryVector](mpstemporaryvector.md): A vector allocated on GPU private memory.
