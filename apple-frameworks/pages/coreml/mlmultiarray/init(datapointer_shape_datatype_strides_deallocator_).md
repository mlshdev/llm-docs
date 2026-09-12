> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(datapointer:shape:datatype:strides:deallocator:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(datapointer:shape:datatype:strides:deallocator:))

# init(dataPointer:shape:dataType:strides:deallocator:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a multiarray from a data pointer.

## Declaration

```swift
init(dataPointer: UnsafeMutableRawPointer, shape: [NSNumber], dataType: MLMultiArrayDataType, strides: [NSNumber], deallocator: ((UnsafeMutableRawPointer) -> Void)? = nil) throws
```

## Parameters

- `dataPointer`: A pointer to data in memory.
- `shape`: An integer array with an element for each dimension. An element represents the size of the corresponding dimension.
- `dataType`: An [MLMultiArrayDataType](../mlmultiarraydatatype.md) instance that represents the pointer’s data type.
- `strides`: An integer array with an element for each dimension. An element represents the number of memory locations that span the length of the corresponding dimension.
- `deallocator`: In Swift, a closure the multiarray calls in its deinitializer. In Objective-C, a block the multiarray calls in its [dealloc](../../objectivec/nsobject-swift.class/dealloc.md) method.

<a id="Discussion"></a>

## Discussion

The caller is responsible for freeing the memory the `dataPointer` points to, by providing a `deallocator` closure.

## See Also

### Creating a multiarray

- [init(\_:)](init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:)](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(shape:dataType:strides:)](init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [init(pixelBuffer:shape:)](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

# initWithDataPointer:shape:dataType:strides:deallocator:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a multiarray from a data pointer.

## Declaration

```objectivec
- (instancetype) initWithDataPointer:(void *) dataPointer shape:(NSArray<NSNumber *> *) shape dataType:(MLMultiArrayDataType) dataType strides:(NSArray<NSNumber *> *) strides deallocator:(void (^)(void *bytes)) deallocator error:(NSError **) error;
```

## Parameters

- `dataPointer`: A pointer to data in memory.
- `shape`: An integer array with an element for each dimension. An element represents the size of the corresponding dimension.
- `dataType`: An [MLMultiArrayDataType](../mlmultiarraydatatype.md) instance that represents the pointer’s data type.
- `strides`: An integer array with an element for each dimension. An element represents the number of memory locations that span the length of the corresponding dimension.
- `deallocator`: In Swift, a closure the multiarray calls in its deinitializer. In Objective-C, a block the multiarray calls in its [dealloc](../../objectivec/nsobject-swift.class/dealloc.md) method.
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The caller is responsible for freeing the memory the `dataPointer` points to, by providing a `deallocator` closure.

## See Also

### Creating a multiarray

- [initWithShape:dataType:error:](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [initWithShape:dataType:strides:](initwithshape_datatype_strides_.md): Creates the object with specified strides.
- [initWithPixelBuffer:shape:](init%28pixelbuffer_shape_%29.md): Creates a multiarray sharing the surface of a pixel buffer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.
