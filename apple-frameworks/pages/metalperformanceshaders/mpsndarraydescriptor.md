> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraydescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraydescriptor)

# MPSNDArrayDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayDescriptor
```

## Topics

### Initializers

- [init(dataType:dimensionCount:dimensionSizes:)](mpsndarraydescriptor/init%28datatype_dimensioncount_dimensionsizes_%29.md)
- [init(dataType:shape:)](mpsndarraydescriptor/init%28datatype_shape_%29.md)

### Instance Properties

- [dataType](mpsndarraydescriptor/datatype.md)
- [numberOfDimensions](mpsndarraydescriptor/numberofdimensions.md)
- [preferPackedRows](mpsndarraydescriptor/preferpackedrows.md)

### Instance Methods

- [dimensionOrder()](mpsndarraydescriptor/dimensionorder%28%29.md)
- [getShape()](mpsndarraydescriptor/getshape%28%29.md)
- [length(ofDimension:)](mpsndarraydescriptor/length%28ofdimension_%29.md)
- [permute(withDimensionOrder:)](mpsndarraydescriptor/permute%28withdimensionorder_%29.md)
- [reshape(withDimensionCount:dimensionSizes:)](mpsndarraydescriptor/reshape%28withdimensioncount_dimensionsizes_%29.md)
- [reshape(withShape:)](mpsndarraydescriptor/reshape%28withshape_%29.md)
- [sliceDimension(\_:withSubrange:)](mpsndarraydescriptor/slicedimension%28__withsubrange_%29.md)
- [sliceRange(forDimension:)](mpsndarraydescriptor/slicerange%28fordimension_%29.md)
- [transposeDimension(\_:withDimension:)](mpsndarraydescriptor/transposedimension%28__withdimension_%29.md)

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

# MPSNDArrayDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayDescriptor : NSObject
```

## Topics

### Instance Properties

- [dataType](mpsndarraydescriptor/datatype.md)
- [numberOfDimensions](mpsndarraydescriptor/numberofdimensions.md)
- [preferPackedRows](mpsndarraydescriptor/preferpackedrows.md)

### Instance Methods

- [dimensionOrder](mpsndarraydescriptor/dimensionorder%28%29.md)
- [getShape](mpsndarraydescriptor/getshape%28%29.md)
- [lengthOfDimension:](mpsndarraydescriptor/length%28ofdimension_%29.md)
- [permuteWithDimensionOrder:](mpsndarraydescriptor/permute%28withdimensionorder_%29.md)
- [reshapeWithDimensionCount:dimensionSizes:](mpsndarraydescriptor/reshape%28withdimensioncount_dimensionsizes_%29.md)
- [reshapeWithShape:](mpsndarraydescriptor/reshape%28withshape_%29.md)
- [sliceDimension:withSubrange:](mpsndarraydescriptor/slicedimension%28__withsubrange_%29.md)
- [sliceRangeForDimension:](mpsndarraydescriptor/slicerange%28fordimension_%29.md)
- [transposeDimension:withDimension:](mpsndarraydescriptor/transposedimension%28__withdimension_%29.md)

### Type Methods

- [descriptorWithDataType:dimensionSizes:](mpsndarraydescriptor/descriptorwithdatatype_dimensionsizes_.md)
- [descriptorWithDataType:dimensionCount:dimensionSizes:](mpsndarraydescriptor/init%28datatype_dimensioncount_dimensionsizes_%29.md)
- [descriptorWithDataType:shape:](mpsndarraydescriptor/init%28datatype_shape_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
