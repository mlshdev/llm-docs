> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(_:))

# init(\_:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.

## Declaration

```swift
convenience init<C>(_ data: C) throws where C : Collection, C.Element : FixedWidthInteger
```

<a id="discussion"></a>

## Discussion

```
let v:[Int32] = [3, 2, 1]
let m = try MLMultiArray(v)
print(m)
Int32 3 vector
[3,2,1]
```

This initializer will trap if called with data containing FixedWidthInteger elements that cannot be safely converted to Int32, but it is safe to use with wider types so long as the actual data is within range.

```
let a = try MLMultiArray([Int.max]) // trap!
let b = try MLMultiArray([Int(Int32.max), Int(Int32.min)]) // This is fine.
```

## See Also

### Creating a multiarray

- [init(shape:dataType:)](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(shape:dataType:strides:)](init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(dataPointer:shape:dataType:strides:deallocator:)](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [init(pixelBuffer:shape:)](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.
