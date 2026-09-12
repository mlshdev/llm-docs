> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarray](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray)

# MPSNDArray (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArray
```

## Topics

### Initializers

- [init(buffer:offset:descriptor:)](mpsndarray/init%28buffer_offset_descriptor_%29.md)
- [init(device:descriptor:)](mpsndarray/init%28device_descriptor_%29.md)
- [init(device:scalar:)](mpsndarray/init%28device_scalar_%29.md)

### Instance Properties

- [dataType](mpsndarray/datatype.md)
- [dataTypeSize](mpsndarray/datatypesize.md)
- [device](mpsndarray/device.md)
- [label](mpsndarray/label.md)
- [numberOfDimensions](mpsndarray/numberofdimensions.md)
- [parent](mpsndarray/parent.md)

### Instance Methods

- [arrayView(with:)](mpsndarray/arrayview%28with_%29.md)
- [arrayView(with:descriptor:aliasing:)](mpsndarray/arrayview%28with_descriptor_aliasing_%29.md)
- [arrayView(withDimensionCount:dimensionSizes:strides:)](mpsndarray/arrayview%28withdimensioncount_dimensionsizes_strides_%29.md)
- [arrayView(withShape:strides:)](mpsndarray/arrayview%28withshape_strides_%29.md)
- [descriptor()](mpsndarray/descriptor%28%29.md)
- [exportData(with:to:destinationDataType:offset:rowStrides:)](mpsndarray/exportdata%28with_to_destinationdatatype_offset_rowstrides_%29.md)
- [exportData(with:to:offset:)](mpsndarray/exportdata%28with_to_offset_%29.md)
- [importData(with:from:offset:)](mpsndarray/importdata%28with_from_offset_%29.md)
- [importData(with:from:sourceDataType:offset:rowStrides:)](mpsndarray/importdata%28with_from_sourcedatatype_offset_rowstrides_%29.md)
- [length(ofDimension:)](mpsndarray/length%28ofdimension_%29.md)
- [readBytes(\_:strideBytes:)](mpsndarray/readbytes%28__stridebytes_%29.md)
- [resourceSize()](mpsndarray/resourcesize%28%29.md)
- [synchronize(on:)](mpsndarray/synchronize%28on_%29.md)
- [userBuffer()](mpsndarray/userbuffer%28%29.md)
- [writeBytes(\_:strideBytes:)](mpsndarray/writebytes%28__stridebytes_%29.md)

### Type Methods

- [defaultAllocator()](mpsndarray/defaultallocator%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryNDArray](mpstemporaryndarray.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSNDArray (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArray : NSObject
```

## Topics

### Instance Properties

- [dataType](mpsndarray/datatype.md)
- [dataTypeSize](mpsndarray/datatypesize.md)
- [device](mpsndarray/device.md)
- [label](mpsndarray/label.md)
- [numberOfDimensions](mpsndarray/numberofdimensions.md)
- [parent](mpsndarray/parent.md)

### Instance Methods

- [arrayViewWithDescriptor:](mpsndarray/arrayview%28with_%29.md)
- [arrayViewWithCommandBuffer:descriptor:aliasing:](mpsndarray/arrayview%28with_descriptor_aliasing_%29.md)
- [arrayViewWithDimensionCount:dimensionSizes:strides:](mpsndarray/arrayview%28withdimensioncount_dimensionsizes_strides_%29.md)
- [arrayViewWithShape:strides:](mpsndarray/arrayview%28withshape_strides_%29.md)
- [descriptor](mpsndarray/descriptor%28%29.md)
- [exportDataWithCommandBuffer:toBuffer:destinationDataType:offset:rowStrides:](mpsndarray/exportdata%28with_to_destinationdatatype_offset_rowstrides_%29.md)
- [exportDataWithCommandBuffer:toImages:offset:](mpsndarray/exportdata%28with_to_offset_%29.md)
- [importDataWithCommandBuffer:fromImages:offset:](mpsndarray/importdata%28with_from_offset_%29.md)
- [importDataWithCommandBuffer:fromBuffer:sourceDataType:offset:rowStrides:](mpsndarray/importdata%28with_from_sourcedatatype_offset_rowstrides_%29.md)
- [initWithBuffer:offset:descriptor:](mpsndarray/init%28buffer_offset_descriptor_%29.md)
- [initWithDevice:descriptor:](mpsndarray/init%28device_descriptor_%29.md)
- [initWithDevice:scalar:](mpsndarray/init%28device_scalar_%29.md)
- [lengthOfDimension:](mpsndarray/length%28ofdimension_%29.md)
- [readBytes:strideBytes:](mpsndarray/readbytes%28__stridebytes_%29.md)
- [resourceSize](mpsndarray/resourcesize%28%29.md)
- [synchronizeOnCommandBuffer:](mpsndarray/synchronize%28on_%29.md)
- [userBuffer](mpsndarray/userbuffer%28%29.md)
- [writeBytes:strideBytes:](mpsndarray/writebytes%28__stridebytes_%29.md)

### Type Methods

- [defaultAllocator](mpsndarray/defaultallocator%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryNDArray](mpstemporaryndarray.md)
