> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor)

# BNNSNDArrayDescriptor (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.

## Declaration

```swift
struct BNNSNDArrayDescriptor
```

<a id="overview"></a>

## Overview

You use a [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md) structure as the primary mechanism to pass the description of data to and from BNNS functions. The description may include a pointer to the memory location.

For example, use the following code when you’re passing immutable weights to a convolution layer:

```swift
let weights: [Float] = [ ... ]

weights.withUnsafeBufferPointer { weightsPtr in
    
    let weightsDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                  layout: BNNSDataLayoutConvolutionWeightsOIHW,
                                                  size: (3, 3, 1, 1, 0, 0, 0, 0),
                                                  stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                  data: UnsafeMutableRawPointer(mutating: weightsPtr.baseAddress!),
                                                  data_type: .float,
                                                  table_data: nil,
                                                  table_data_type: .float,
                                                  data_scale: 1,
                                                  data_bias: 0)

    // Create and apply convolution layer.

}
```

Setting a stride value of `0` indicates that BNNS calculates stride, without padding, for that axis. For example, the stride for both of the following n-dimensional array descriptors is the same:

```swift
let inputDescriptor = BNNSNDArrayDescriptor(flags: flags,
                                           layout: BNNSDataLayoutRowMajorMatrix,
                                           size: (3, 3, 0, 0, 0, 0, 0, 0),
                                           stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                           data: nil,
                                           data_type: .float,
                                           table_data: nil,
                                           table_data_type: .float,
                                           data_scale: 1,
                                           data_bias: 0)

let inputDescriptor = BNNSNDArrayDescriptor(flags: flags,
                                           layout: BNNSDataLayoutRowMajorMatrix,
                                           size: (3, 3, 0, 0, 0, 0, 0, 0),
                                           stride: (1, 3, 0, 0, 0, 0, 0, 0),
                                           data: nil,
                                           data_type: .float,
                                           table_data: nil,
                                           table_data_type: .float,
                                           data_scale: 1,
                                           data_bias: 0)
```

You don’t need to specify the data when, for example, you’re passing that data directly to [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md). The following code creates [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md) structures for the input and output of a convolution operation. The data property of both descriptors is nil, and the input and output data are passed directly to [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md):

```swift
let input: [Float] = [ ... ]
var output: [Float] = [ ... ]

let inDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                         layout: BNNSDataLayoutImageCHW,
                                         size: (6, 6, 1, 0, 0, 0, 0, 0),
                                         stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                         data: nil,
                                         data_type: .float,
                                         table_data: nil,
                                         table_data_type: .float,
                                         data_scale: 1,
                                         data_bias: 0)

let outDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                          layout: BNNSDataLayoutImageCHW,
                                          size: (4, 4, 1, 0, 0, 0, 0, 0),
                                          stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                          data: nil,
                                          data_type: .float,
                                          table_data: nil,
                                          table_data_type: .float,
                                          data_scale: 1,
                                          data_bias: 0)

var parameters = BNNSLayerParametersConvolution(i_desc: inDescriptor,
                                                w_desc: weightsDescriptor,
                                                o_desc: outDescriptor,
                                                bias: biasDescriptor,
                                                activation: .identity,
                                                x_stride: 1, y_stride: 1,
                                                x_dilation_stride: 0, y_dilation_stride: 0,
                                                x_padding: 0, y_padding: 0,
                                                groups: 1,
                                                pad: (0, 0, 0, 0))

// `convolutionLayer` is a `BNNSFilter` created by `BNNSFilterCreateLayerConvolution` using `parameters`.

let error = BNNSFilterApplyBatch(convolutionLayer, 1,
                                 input, inStride,
                                 &output, outStride)

```

## Topics

### Creating an Array Descriptor

- [init(flags:layout:size:stride:data:data_type:table_data:table_data_type:data_scale:data_bias:)](bnnsndarraydescriptor/init%28flags_layout_size_stride_data_data_type_table_data_table_data_type_data_scale_data_bias_%29.md): Returns a new n-dimensional array descriptor with the specified parameters.
- [init(data:scalarType:shape:)](bnnsndarraydescriptor/init%28data_scalartype_shape_%29.md): Returns a new n-dimensional array descriptor that references the same data as the specified raw pointer.
- [init(data:shape:)](bnnsndarraydescriptor/init%28data_shape_%29.md): Returns a new n-dimensional array descriptor that references the same data as the specified pointer.
- [init(dataType:shape:)](bnnsndarraydescriptor/init%28datatype_shape_%29.md): Returns a new n-dimensional array descriptor from the specified data type and shape.
- [init()](bnnsndarraydescriptor/init%28%29.md): Returns a new n-dimensional array descriptor.

### Specifying the Behavior of an N-Dimensional Array.

- [BNNSNDArrayFlags](bnnsndarrayflags.md): Options that control the behavior of an n-dimensional array.

### Accessing the Properties of an Array Descriptor

- [flags](bnnsndarraydescriptor/flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](bnnsndarraydescriptor/layout.md): The dimension of the n-dimensional array.
- [size](bnnsndarraydescriptor/size.md): The number of values in each dimension.
- [stride](bnnsndarraydescriptor/stride.md): The increment, in values, between consecutive elements in each dimension.
- [data](bnnsndarraydescriptor/data.md): A pointer that is optional and points to the underlying data.
- [data_type](bnnsndarraydescriptor/data_type.md): The data type of the n-dimensional array.
- [table_data](bnnsndarraydescriptor/table_data.md): The lookup table for indexed data types.
- [table_data_type](bnnsndarraydescriptor/table_data_type.md): The data type of the lookup table.
- [data_scale](bnnsndarraydescriptor/data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](bnnsndarraydescriptor/data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.
- [shape](bnnsndarraydescriptor/shape.md): The shape of the n-dimensional array.

### Allocating and Deallocating Memory

- [allocate(initializingFrom:shape:batchSize:)](bnnsndarraydescriptor/allocate%28initializingfrom_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a copy of the elements in the specified collection.
- [allocate(randomUniformUsing:range:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomuniformusing_range_shape_batchsize_%29-2rorb.md): Returns a new array descriptor that’s initialized with random integer values from the continuous uniform distribution.
- [allocate(randomUniformUsing:range:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomuniformusing_range_shape_batchsize_%29-761hg.md): Returns a new array descriptor that’s initialized with random floating-point values from the continuous uniform distribution.
- [allocate(randomIn:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomin_shape_batchsize_%29-1697a.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomin_shape_batchsize_%29-5a2p2.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:using:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomin_using_shape_batchsize_%29-5kbi8.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(randomIn:using:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomin_using_shape_batchsize_%29-3w6ig.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(repeating:shape:batchSize:)](bnnsndarraydescriptor/allocate%28repeating_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a single, repeated scalar value.
- [allocateUninitialized(scalarType:shape:batchSize:)](bnnsndarraydescriptor/allocateuninitialized%28scalartype_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s allocated with uninitialized memory.
- [deallocate()](bnnsndarraydescriptor/deallocate%28%29.md): Deallocates the memory block previously allocated to this n-dimensional array descriptor.

### Generating an Array from an Array Descriptor’s Data

- [makeArray(of:batchSize:)](bnnsndarraydescriptor/makearray%28of_batchsize_%29.md): Returns a new array that contains a copy of the n-dimensional array descriptor’s data.

### Initializers

- [init(data:scalarType:shape:batchSize:)](bnnsndarraydescriptor/init%28data_scalartype_shape_batchsize_%29.md)
- [init(data:shape:batchSize:)](bnnsndarraydescriptor/init%28data_shape_batchsize_%29.md)

### Instance Properties

- [dataSize](bnnsndarraydescriptor/datasize.md)

### Type Methods

- [allocate(randomNormalUsing:mean:standardDeviation:shape:batchSize:)](bnnsndarraydescriptor/allocate%28randomnormalusing_mean_standarddeviation_shape_batchsize_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNS.Shape](bnns/shape.md): Constants that describe the size and data layout of an n-dimensional array descriptor.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSDataLayoutGetRank(\_:)](bnnsdatalayoutgetrank%28__%29.md)

# BNNSNDArrayDescriptor (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.

## Declaration

```objectivec
typedef struct { ... } BNNSNDArrayDescriptor;
```

<a id="overview"></a>

## Overview

You use a [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md) structure as the primary mechanism to pass the description of data to and from BNNS functions. The description may include a pointer to the memory location.

For example, use the following code when you’re passing immutable weights to a convolution layer:

```swift
let weights: [Float] = [ ... ]

weights.withUnsafeBufferPointer { weightsPtr in
    
    let weightsDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                  layout: BNNSDataLayoutConvolutionWeightsOIHW,
                                                  size: (3, 3, 1, 1, 0, 0, 0, 0),
                                                  stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                  data: UnsafeMutableRawPointer(mutating: weightsPtr.baseAddress!),
                                                  data_type: .float,
                                                  table_data: nil,
                                                  table_data_type: .float,
                                                  data_scale: 1,
                                                  data_bias: 0)

    // Create and apply convolution layer.

}
```

Setting a stride value of `0` indicates that BNNS calculates stride, without padding, for that axis. For example, the stride for both of the following n-dimensional array descriptors is the same:

```swift
let inputDescriptor = BNNSNDArrayDescriptor(flags: flags,
                                           layout: BNNSDataLayoutRowMajorMatrix,
                                           size: (3, 3, 0, 0, 0, 0, 0, 0),
                                           stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                           data: nil,
                                           data_type: .float,
                                           table_data: nil,
                                           table_data_type: .float,
                                           data_scale: 1,
                                           data_bias: 0)

let inputDescriptor = BNNSNDArrayDescriptor(flags: flags,
                                           layout: BNNSDataLayoutRowMajorMatrix,
                                           size: (3, 3, 0, 0, 0, 0, 0, 0),
                                           stride: (1, 3, 0, 0, 0, 0, 0, 0),
                                           data: nil,
                                           data_type: .float,
                                           table_data: nil,
                                           table_data_type: .float,
                                           data_scale: 1,
                                           data_bias: 0)
```

You don’t need to specify the data when, for example, you’re passing that data directly to [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md). The following code creates [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md) structures for the input and output of a convolution operation. The data property of both descriptors is nil, and the input and output data are passed directly to [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md):

```swift
let input: [Float] = [ ... ]
var output: [Float] = [ ... ]

let inDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                         layout: BNNSDataLayoutImageCHW,
                                         size: (6, 6, 1, 0, 0, 0, 0, 0),
                                         stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                         data: nil,
                                         data_type: .float,
                                         table_data: nil,
                                         table_data_type: .float,
                                         data_scale: 1,
                                         data_bias: 0)

let outDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                          layout: BNNSDataLayoutImageCHW,
                                          size: (4, 4, 1, 0, 0, 0, 0, 0),
                                          stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                          data: nil,
                                          data_type: .float,
                                          table_data: nil,
                                          table_data_type: .float,
                                          data_scale: 1,
                                          data_bias: 0)

var parameters = BNNSLayerParametersConvolution(i_desc: inDescriptor,
                                                w_desc: weightsDescriptor,
                                                o_desc: outDescriptor,
                                                bias: biasDescriptor,
                                                activation: .identity,
                                                x_stride: 1, y_stride: 1,
                                                x_dilation_stride: 0, y_dilation_stride: 0,
                                                x_padding: 0, y_padding: 0,
                                                groups: 1,
                                                pad: (0, 0, 0, 0))

// `convolutionLayer` is a `BNNSFilter` created by `BNNSFilterCreateLayerConvolution` using `parameters`.

let error = BNNSFilterApplyBatch(convolutionLayer, 1,
                                 input, inStride,
                                 &output, outStride)

```

## Topics

### Specifying the Behavior of an N-Dimensional Array.

- [BNNSNDArrayFlags](bnnsndarrayflags.md): Options that control the behavior of an n-dimensional array.

### Accessing the Properties of an Array Descriptor

- [flags](bnnsndarraydescriptor/flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](bnnsndarraydescriptor/layout.md): The dimension of the n-dimensional array.
- [size](bnnsndarraydescriptor/size.md): The number of values in each dimension.
- [stride](bnnsndarraydescriptor/stride.md): The increment, in values, between consecutive elements in each dimension.
- [data](bnnsndarraydescriptor/data.md): A pointer that is optional and points to the underlying data.
- [data_type](bnnsndarraydescriptor/data_type.md): The data type of the n-dimensional array.
- [table_data](bnnsndarraydescriptor/table_data.md): The lookup table for indexed data types.
- [table_data_type](bnnsndarraydescriptor/table_data_type.md): The data type of the lookup table.
- [data_scale](bnnsndarraydescriptor/data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](bnnsndarraydescriptor/data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSDataLayoutGetRank](bnnsdatalayoutgetrank%28__%29.md)
