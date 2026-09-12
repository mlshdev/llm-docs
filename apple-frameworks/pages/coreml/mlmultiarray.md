> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray](https://developer.apple.com/documentation/coreml/mlmultiarray)

# MLMultiArray (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A machine learning collection type that stores numeric values in an array with multiple dimensions.

## Declaration

```swift
class MLMultiArray
```

## Mentioned In

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md)

<a id="overview"></a>

## Overview

A multidimensional array, or *multiarray*, is one of the underlying types of an `MLFeatureValue` that stores numeric values in multiple dimensions. All elements in an [MLMultiArray](mlmultiarray.md) instance are one of the same type, and one of the types that [MLMultiArrayDataType](mlmultiarraydatatype.md) defines:

- **[MLMultiArrayDataType.int32](mlmultiarraydatatype/int32.md)**: 32-bit integer
- **[MLMultiArrayDataType.float16](mlmultiarraydatatype/float16.md)**: 16-bit floating point number
- **[MLMultiArrayDataType.float32](mlmultiarraydatatype/float32.md)**: 32-bit floating point number (also known as [float](mlmultiarraydatatype/float.md))
- **[float64](mlmultiarraydatatype/float64.md)**: 64-bit floating point number (also known as `double` in Swift or `MLMultiArrayDataTypeDouble` in Objective-C)

Each dimension in a multiarray is typically significant or meaningful. For example, a model could have an input that accepts images as a multiarray of pixels with three dimensions, C x H x W. The first dimension, *C*,\_ \_represents the number of color channels, and the second and third dimensions, *H* and *W*, represent the image’s height and width, respectively. The number of dimensions and size of each dimension define the multiarray’s *shape*.

> **Note**

>  Some models use a one-dimensional multiarray for an input or output. This type of multiarray is conceptually identical to a conventional array.

The [shape](mlmultiarray/shape.md) property is an integer array that has an element for each dimension in the multiarray. Each element in [shape](mlmultiarray/shape.md) defines the size of the corresponding dimension. To inspect the shape and constraints of a model’s multiarray input or output feature:

1. Access the model’s [modelDescription](mlmodel/modeldescription.md) property.
2. Find the multiarray input or output feature in the model description’s [inputDescriptionsByName](mlmodeldescription/inputdescriptionsbyname.md) or [outputDescriptionsByName](mlmodeldescription/outputdescriptionsbyname.md) property, respectively.
3. Access the feature description’s [multiArrayConstraint](mlfeaturedescription/multiarrayconstraint.md) property.
4. Inspect the multiarray constraint’s [shape](mlmultiarrayconstraint/shape.md) and [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md).

## Topics

### Creating a multiarray

- [init(\_:)](mlmultiarray/init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:)](mlmultiarray/init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(shape:dataType:strides:)](mlmultiarray/init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(dataPointer:shape:dataType:strides:deallocator:)](mlmultiarray/init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](mlmultiarray/init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [init(pixelBuffer:shape:)](mlmultiarray/init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

### Inspecting a multiarray

- [count](mlmultiarray/count.md): The total number of elements in the multiarray.
- [dataType](mlmultiarray/datatype.md): The underlying type of the multiarray.
- [shape](mlmultiarray/shape.md): The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.
- [strides](mlmultiarray/strides.md): A number array in which each element is the number of memory locations that span the length of the corresponding dimension.

### Transfering the contents

- [transfer(to:)](mlmultiarray/transfer%28to_%29.md): Transfer the contents to the destination multi-array.

### Providing buffer access

- [withUnsafeBufferPointer(ofType:\_:)](mlmultiarray/withunsafebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeBytes(\_:)](mlmultiarray/withunsafebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeMutableBufferPointer(ofType:\_:)](mlmultiarray/withunsafemutablebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
- [withUnsafeMutableBytes(\_:)](mlmultiarray/withunsafemutablebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.

### Accessing a multiarray’s elements

- [subscript(\_:)](mlmultiarray/subscript%28__%29.md)
- [pixelBuffer](mlmultiarray/pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
- [dataPointer](mlmultiarray/datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.

### Initializers

- [init(coder:)](mlmultiarray/init%28coder_%29.md)
- [init(concatenating:axis:dataType:)](mlmultiarray/init%28concatenating_axis_datatype_%29.md): Concatenate MLMultiArrays to form a new MLMultiArray.

### Default Implementations

- [MLMultiArray Implementations](mlmultiarray/mlmultiarray-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLShapedArray](mlshapedarray.md): A machine learning collection type that stores scalar values in a multidimensional array.
- [MLShapedArrayProtocol](mlshapedarrayprotocol.md): An interface that defines a shaped array type.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.

# MLMultiArray (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A machine learning collection type that stores numeric values in an array with multiple dimensions.

## Declaration

```objectivec
@interface MLMultiArray : NSObject
```

## Mentioned In

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md)

<a id="overview"></a>

## Overview

A multidimensional array, or *multiarray*, is one of the underlying types of an `MLFeatureValue` that stores numeric values in multiple dimensions. All elements in an [MLMultiArray](mlmultiarray.md) instance are one of the same type, and one of the types that [MLMultiArrayDataType](mlmultiarraydatatype.md) defines:

- **[MLMultiArrayDataTypeInt32](mlmultiarraydatatype/int32.md)**: 32-bit integer
- **[MLMultiArrayDataTypeFloat16](mlmultiarraydatatype/float16.md)**: 16-bit floating point number
- **[MLMultiArrayDataTypeFloat32](mlmultiarraydatatype/float32.md)**: 32-bit floating point number (also known as [MLMultiArrayDataTypeFloat](mlmultiarraydatatype/float.md))
- **[MLMultiArrayDataTypeFloat64](mlmultiarraydatatype/float64.md)**: 64-bit floating point number (also known as `double` in Swift or `MLMultiArrayDataTypeDouble` in Objective-C)

Each dimension in a multiarray is typically significant or meaningful. For example, a model could have an input that accepts images as a multiarray of pixels with three dimensions, C x H x W. The first dimension, *C*,\_ \_represents the number of color channels, and the second and third dimensions, *H* and *W*, represent the image’s height and width, respectively. The number of dimensions and size of each dimension define the multiarray’s *shape*.

> **Note**

>  Some models use a one-dimensional multiarray for an input or output. This type of multiarray is conceptually identical to a conventional array.

The [shape](mlmultiarray/shape.md) property is an integer array that has an element for each dimension in the multiarray. Each element in [shape](mlmultiarray/shape.md) defines the size of the corresponding dimension. To inspect the shape and constraints of a model’s multiarray input or output feature:

1. Access the model’s [modelDescription](mlmodel/modeldescription.md) property.
2. Find the multiarray input or output feature in the model description’s [inputDescriptionsByName](mlmodeldescription/inputdescriptionsbyname.md) or [outputDescriptionsByName](mlmodeldescription/outputdescriptionsbyname.md) property, respectively.
3. Access the feature description’s [multiArrayConstraint](mlfeaturedescription/multiarrayconstraint.md) property.
4. Inspect the multiarray constraint’s [shape](mlmultiarrayconstraint/shape.md) and [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md).

## Topics

### Creating a multiarray

- [initWithShape:dataType:error:](mlmultiarray/init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [initWithShape:dataType:strides:](mlmultiarray/initwithshape_datatype_strides_.md): Creates the object with specified strides.
- [initWithDataPointer:shape:dataType:strides:deallocator:error:](mlmultiarray/init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [initWithPixelBuffer:shape:](mlmultiarray/init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

### Inspecting a multiarray

- [count](mlmultiarray/count.md): The total number of elements in the multiarray.
- [dataType](mlmultiarray/datatype.md): The underlying type of the multiarray.
- [shape](mlmultiarray/shape.md): The multiarray’s multidimensional shape as a number array in which each element’s value is the size of the corresponding dimension.
- [strides](mlmultiarray/strides.md): A number array in which each element is the number of memory locations that span the length of the corresponding dimension.

### Transfering the contents

- [transferToMultiArray:](mlmultiarray/transfer%28to_%29.md): Transfer the contents to the destination multi-array.

### Accessing a multiarray’s elements

- [setObject:atIndexedSubscript:](mlmultiarray/setobject_atindexedsubscript_.md): Assigns a number to the multiarray’s element at the location that the linear offset defines.
- [setObject:forKeyedSubscript:](mlmultiarray/setobject_forkeyedsubscript_.md): Assigns a number to the multiarray’s element at the location that the number array defines.
- [getBytesWithHandler:](mlmultiarray/getbyteswithhandler_.md): Get the underlying buffer pointer to read.
- [getMutableBytesWithHandler:](mlmultiarray/getmutablebyteswithhandler_.md): Get the underlying buffer pointer to mutate.
- [pixelBuffer](mlmultiarray/pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
- [dataPointer](mlmultiarray/datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.

### Type Methods

- [multiArrayByConcatenatingMultiArrays:alongAxis:dataType:](mlmultiarray/init%28concatenating_axis_datatype_%29.md): Concatenate MLMultiArrays to form a new MLMultiArray.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.
