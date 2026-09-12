> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsvector](https://developer.apple.com/documentation/metalperformanceshaders/mpsvector)

# MPSVector (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A 1D array of data that stores the data’s values.

## Declaration

```swift
class MPSVector
```

## Topics

### Initializers

- [init(buffer:descriptor:)](mpsvector/init%28buffer_descriptor_%29.md)
- [init(buffer:offset:descriptor:)](mpsvector/init%28buffer_offset_descriptor_%29.md)
- [init(device:descriptor:)](mpsvector/init%28device_descriptor_%29.md)

### Instance Properties

- [data](mpsvector/data.md)
- [dataType](mpsvector/datatype.md)
- [device](mpsvector/device.md)
- [length](mpsvector/length.md)
- [vectorBytes](mpsvector/vectorbytes.md)
- [vectors](mpsvector/vectors.md)
- [offset](mpsvector/offset.md)

### Instance Methods

- [resourceSize()](mpsvector/resourcesize%28%29.md)
- [synchronize(on:)](mpsvector/synchronize%28on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryVector](mpstemporaryvector.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Vectors

- [MPSVectorDescriptor](mpsvectordescriptor.md): A description of the length and data type of a vector.
- [MPSTemporaryVector](mpstemporaryvector.md): A vector allocated on GPU private memory.

# MPSVector (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A 1D array of data that stores the data’s values.

## Declaration

```objectivec
@interface MPSVector : NSObject
```

## Topics

### Initializers

- [initWithBuffer:descriptor:](mpsvector/init%28buffer_descriptor_%29.md)
- [initWithBuffer:offset:descriptor:](mpsvector/init%28buffer_offset_descriptor_%29.md)
- [initWithDevice:descriptor:](mpsvector/init%28device_descriptor_%29.md)

### Instance Properties

- [data](mpsvector/data.md)
- [dataType](mpsvector/datatype.md)
- [device](mpsvector/device.md)
- [length](mpsvector/length.md)
- [vectorBytes](mpsvector/vectorbytes.md)
- [vectors](mpsvector/vectors.md)
- [offset](mpsvector/offset.md)

### Instance Methods

- [resourceSize](mpsvector/resourcesize%28%29.md)
- [synchronizeOnCommandBuffer:](mpsvector/synchronize%28on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryVector](mpstemporaryvector.md)

## See Also

### Vectors

- [MPSVectorDescriptor](mpsvectordescriptor.md): A description of the length and data type of a vector.
- [MPSTemporaryVector](mpstemporaryvector.md): A vector allocated on GPU private memory.
