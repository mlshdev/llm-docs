> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/init(pixelbuffer:shape:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init(pixelbuffer:shape:))

# init(pixelBuffer:shape:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a multiarray sharing the surface of a pixel buffer.

## Declaration

```swift
init(pixelBuffer: CVPixelBuffer, shape: [NSNumber])
```

## Parameters

- `pixelBuffer`: The pixel buffer owned by the instance.
- `shape`: The shape of the `MLMultiArray`. The last dimension of `shape` must match the pixel buffer’s width. The product of the rest of the dimensions must match the height.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an [IOSurface](../../iosurface.md)-backed `MLMultiArray` that reduces the inference latency by avoiding the buffer copy to and from some compute units.

The instance will own the pixel buffer and release it on the deallocation.

The pixel buffer’s pixel format type must be [kCVPixelFormatType_OneComponent16Half](../../corevideo/kcvpixelformattype_onecomponent16half.md). The `MLMultiArray` data type is [MLMultiArrayDataType.float16](../mlmultiarraydatatype/float16.md).

## See Also

### Creating a multiarray

- [init(\_:)](init%28__%29.md): An MLMultiArray constructed with the FixedWidthInteger elements of the collection converted to Int32.
- [init(shape:dataType:)](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [init(shape:dataType:strides:)](init%28shape_datatype_strides_%29.md): Creates the object with specified strides.
- [init(dataPointer:shape:dataType:strides:deallocator:)](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [init(byConcatenatingMultiArrays:alongAxis:dataType:)](init%28byconcatenatingmultiarrays_alongaxis_datatype_%29.md): Merges an array of multiarrays into one multiarray along an axis.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.

# initWithPixelBuffer:shape: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a multiarray sharing the surface of a pixel buffer.

## Declaration

```objectivec
- (instancetype) initWithPixelBuffer:(CVPixelBufferRef) pixelBuffer shape:(NSArray<NSNumber *> *) shape;
```

## Parameters

- `pixelBuffer`: The pixel buffer owned by the instance.
- `shape`: The shape of the `MLMultiArray`. The last dimension of `shape` must match the pixel buffer’s width. The product of the rest of the dimensions must match the height.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an [IOSurface](../../iosurface.md)-backed `MLMultiArray` that reduces the inference latency by avoiding the buffer copy to and from some compute units.

The instance will own the pixel buffer and release it on the deallocation.

The pixel buffer’s pixel format type must be [kCVPixelFormatType_OneComponent16Half](../../corevideo/kcvpixelformattype_onecomponent16half.md). The `MLMultiArray` data type is [MLMultiArrayDataTypeFloat16](../mlmultiarraydatatype/float16.md).

## See Also

### Creating a multiarray

- [initWithShape:dataType:error:](init%28shape_datatype_%29.md): Creates a multidimensional array with a shape and type.
- [initWithShape:dataType:strides:](initwithshape_datatype_strides_.md): Creates the object with specified strides.
- [initWithDataPointer:shape:dataType:strides:deallocator:error:](init%28datapointer_shape_datatype_strides_deallocator_%29.md): Creates a multiarray from a data pointer.
- [MLMultiArrayDataType](../mlmultiarraydatatype.md): Constants that define the underlying element types a multiarray can store.
