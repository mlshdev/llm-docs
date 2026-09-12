> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensor](https://developer.apple.com/documentation/metal/mtltensor)

# MTLTensor (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A resource representing a multi-dimensional array that you can use with machine learning workloads.

## Declaration

```swift
protocol MTLTensor : MTLResource
```

## Topics

### Instance Properties

- [auxiliaryPlanes](mtltensor/auxiliaryplanes.md): The auxiliary planes of this tensor.
- [buffer](mtltensor/buffer.md): A buffer instance this tensor shares its storage with or `nil` if this tensor does not wrap an underlying buffer.
- [bufferOffset](mtltensor/bufferoffset.md): An offset, in bytes, into the buffer instance this tensor shares its storage with, or zero if this tensor does not wrap an underlying buffer.
- [dataType](mtltensor/datatype.md): The underlying data format of the data plane.
- [dimensions](mtltensor/dimensions.md): An array of sizes, in elements, one for each dimension of this tensor.
- [gpuResourceID](mtltensor/gpuresourceid.md): A handle that represents the GPU resource, which you can store in an argument buffer.
- [strides](mtltensor/strides.md): An array of strides, in elements, one for each dimension of this tensor, if applicable.
- [usage](mtltensor/usage.md): A set of contexts in which you can use this tensor.

### Instance Methods

- [getBytes(\_:strides:sliceOrigin:sliceDimensions:)](mtltensor/getbytes%28__strides_sliceorigin_slicedimensions_%29.md): Copies data from a slice of the data plane of this tensor into a pointer you provide.
- [getBytes(\_:strides:sliceOrigin:sliceDimensions:plane:)](mtltensor/getbytes%28__strides_sliceorigin_slicedimensions_plane_%29.md): Copies data from a slice of a plane of this tensor into a pointer you provide.
- [replace(sliceOrigin:sliceDimensions:plane:withBytes:strides:)](mtltensor/replace%28sliceorigin_slicedimensions_plane_withbytes_strides_%29.md): Replaces a slice of a plane of this tensor with data from a pointer you provide.
- [replace(sliceOrigin:sliceDimensions:withBytes:strides:)](mtltensor/replace%28sliceorigin_slicedimensions_withbytes_strides_%29.md): Replaces a slice of the data plane of this tensor with data from a pointer you provide.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tensors

- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensor (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A resource representing a multi-dimensional array that you can use with machine learning workloads.

## Declaration

```objectivec
@protocol MTLTensor <MTLResource>
```

## Topics

### Instance Properties

- [auxiliaryPlanes](mtltensor/auxiliaryplanes.md): The auxiliary planes of this tensor.
- [buffer](mtltensor/buffer.md): A buffer instance this tensor shares its storage with or `nil` if this tensor does not wrap an underlying buffer.
- [bufferOffset](mtltensor/bufferoffset.md): An offset, in bytes, into the buffer instance this tensor shares its storage with, or zero if this tensor does not wrap an underlying buffer.
- [dataType](mtltensor/datatype.md): The underlying data format of the data plane.
- [dimensions](mtltensor/dimensions.md): An array of sizes, in elements, one for each dimension of this tensor.
- [gpuResourceID](mtltensor/gpuresourceid.md): A handle that represents the GPU resource, which you can store in an argument buffer.
- [strides](mtltensor/strides.md): An array of strides, in elements, one for each dimension of this tensor, if applicable.
- [usage](mtltensor/usage.md): A set of contexts in which you can use this tensor.

### Instance Methods

- [getBytes:strides:fromSliceOrigin:sliceDimensions:](mtltensor/getbytes%28__strides_sliceorigin_slicedimensions_%29.md): Copies data from a slice of the data plane of this tensor into a pointer you provide.
- [getBytes:strides:fromSliceOrigin:sliceDimensions:plane:](mtltensor/getbytes%28__strides_sliceorigin_slicedimensions_plane_%29.md): Copies data from a slice of a plane of this tensor into a pointer you provide.
- [replaceSliceOrigin:sliceDimensions:plane:withBytes:strides:](mtltensor/replace%28sliceorigin_slicedimensions_plane_withbytes_strides_%29.md): Replaces a slice of a plane of this tensor with data from a pointer you provide.
- [replaceSliceOrigin:sliceDimensions:withBytes:strides:](mtltensor/replace%28sliceorigin_slicedimensions_withbytes_strides_%29.md): Replaces a slice of the data plane of this tensor with data from a pointer you provide.

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)

## See Also

### Tensors

- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
