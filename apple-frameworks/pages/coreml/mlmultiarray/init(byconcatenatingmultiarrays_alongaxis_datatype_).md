> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(byconcatenatingmultiarrays:alongaxis:datatype:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(byconcatenatingmultiarrays:alongaxis:datatype:))

# init(byConcatenatingMultiArrays:alongAxis:dataType:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Merges an array of multiarrays into one multiarray along an axis.

## Declaration

```swift
convenience init(byConcatenatingMultiArrays multiArrays: [MLMultiArray], alongAxis axis: Int, dataType: MLMultiArrayDataType)
```

## Parameters

- `multiArrays`: An [MLMultiArray](../mlmultiarray.md) array.
- `axis`: A zero-based axis number the instances in `multiArray` merge along.
- `dataType`: An [MLMultiArrayDataType](../mlmultiarraydatatype.md) instance that represents the underlying type of all the instances in `multiArrays`.

<a id="Discussion"></a>

## Discussion

All multiarray instances in `multiArrays` must have:

- The same data type
- The same number of dimensions
- The same size for each corresponding dimension, except for the concatenation axis

For example, this code concatenates two multiarrays along their first dimension:

```swift
let multiarray1 = try MLMultiArray(shape: [1, 5, 7], dataType: .int32)
let multiarray2 = try MLMultiArray(shape: [2, 5, 7], dataType: .int32)

// Merge the two multiarrays along the first dimension.
let multiArray3 = MLMultiArray(concatenating: [multiarray1, multiarray2],
                               axis: 0,
                               dataType: .int32)

assert(multiArray3.shape == [3, 5, 7])
```

## See Also

### Creating a multiarray

- [init(\_:)](init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:)](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(shape:dataType:strides:)](init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(dataPointer:shape:dataType:strides:deallocator:)](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(pixelBuffer:shape:)](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.
