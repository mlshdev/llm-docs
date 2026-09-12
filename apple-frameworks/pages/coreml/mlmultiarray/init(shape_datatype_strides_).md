> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(shape:datatype:strides:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(shape:datatype:strides:))

# init(shape:dataType:strides:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates the object with specified strides.

## Declaration

```swift
convenience init(shape: [Int], dataType: MLMultiArrayDataType, strides: [Int])
```

## Parameters

- `shape`: The shape
- `dataType`: The data type
- `strides`: The strides.

<a id="discussion"></a>

## Discussion

The contents of the object are left uninitialized; the client must initialize it.

## See Also

### Creating a multiarray

- [init(\_:)](init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:)](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(dataPointer:shape:dataType:strides:deallocator:)](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [init(pixelBuffer:shape:)](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.
