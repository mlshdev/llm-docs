> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarraydatatype](https://developer.apple.com/documentation/coreml/mlmultiarraydatatype)

# MLMultiArrayDataType (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Constants that define the underlying element types a multiarray can store.

## Declaration

```swift
enum MLMultiArrayDataType
```

<a id="overview"></a>

## Overview

All elements of an [MLMultiArray](mlmultiarray.md) instance must be of the same type and must be defined in [MLMultiArrayDataType](mlmultiarraydatatype.md).

## Topics

### Multiarray data types

- [MLMultiArrayDataType.int8](mlmultiarraydatatype/int8.md)
- [MLMultiArrayDataType.int32](mlmultiarraydatatype/int32.md): Designates the multiarray’s elements as 32-bit integers.
- [MLMultiArrayDataType.float16](mlmultiarraydatatype/float16.md): Designates the multiarray’s elements as 16-bit floats.
- [MLMultiArrayDataType.float32](mlmultiarraydatatype/float32.md): Designates the multiarray’s elements as 32-bit floats.
- [MLMultiArrayDataType.double](mlmultiarraydatatype/double.md): Designates the multiarray’s elements as doubles.
- [float](mlmultiarraydatatype/float.md): Designates the multiarray’s elements as floats.
- [float64](mlmultiarraydatatype/float64.md): Designates the multiarray’s elements as 64-bit floats.

### Creating a multiarray data type

- [init(rawValue:)](mlmultiarraydatatype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a multiarray

- [init(\_:)](mlmultiarray/init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:)](mlmultiarray/init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(shape:dataType:strides:)](mlmultiarray/init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(dataPointer:shape:dataType:strides:deallocator:)](mlmultiarray/init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](mlmultiarray/init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [init(pixelBuffer:shape:)](mlmultiarray/init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.

# MLMultiArrayDataType (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Constants that define the underlying element types a multiarray can store.

## Declaration

```objectivec
enum MLMultiArrayDataType : NSInteger;
```

<a id="overview"></a>

## Overview

All elements of an [MLMultiArray](mlmultiarray.md) instance must be of the same type and must be defined in [MLMultiArrayDataType](mlmultiarraydatatype.md).

## Topics

### Multiarray data types

- [MLMultiArrayDataTypeInt8](mlmultiarraydatatype/int8.md)
- [MLMultiArrayDataTypeInt32](mlmultiarraydatatype/int32.md): Designates the multiarray’s elements as 32-bit integers.
- [MLMultiArrayDataTypeFloat16](mlmultiarraydatatype/float16.md): Designates the multiarray’s elements as 16-bit floats.
- [MLMultiArrayDataTypeFloat32](mlmultiarraydatatype/float32.md): Designates the multiarray’s elements as 32-bit floats.
- [MLMultiArrayDataTypeDouble](mlmultiarraydatatype/double.md): Designates the multiarray’s elements as doubles.
- [MLMultiArrayDataTypeFloat](mlmultiarraydatatype/float.md): Designates the multiarray’s elements as floats.
- [MLMultiArrayDataTypeFloat64](mlmultiarraydatatype/float64.md): Designates the multiarray’s elements as 64-bit floats.

## See Also

### Creating a multiarray

- [initWithShape:dataType:error:](mlmultiarray/init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [initWithShape:dataType:strides:](mlmultiarray/initwithshape_datatype_strides_.md): Creates the object with specified strides.
- [initWithDataPointer:shape:dataType:strides:deallocator:error:](mlmultiarray/init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [initWithPixelBuffer:shape:](mlmultiarray/init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
