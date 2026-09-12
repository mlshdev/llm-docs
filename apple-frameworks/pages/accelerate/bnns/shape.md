> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/shape](https://developer.apple.com/documentation/accelerate/bnns/shape)

# BNNS.Shape

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that describe the size and data layout of an n-dimensional array descriptor.

## Declaration

```swift
enum Shape
```

## Topics

### Creating a Shape

- [init(\_:dataLayout:stride:)](shape/init%28__datalayout_stride_%29.md): Returns a new shape with the specified size, data layout, and stride.
- [init(arrayLiteral:)](shape/init%28arrayliteral_%29.md): Returns a new shape with the specified size.

### Specifying the Data Layout of a Shape

- [BNNS.DataLayout](datalayout.md): Constants that describe the data layout of an n-dimensional array descriptor shape.

### Shape Constants

- [BNNS.Shape.vector(\_:stride:)](shape/vector%28__stride_%29.md): A constant that represents a shape with a 1D vector data layout.
- [BNNS.Shape.matrixColumnMajor(\_:\_:stride:)](shape/matrixcolumnmajor%28____stride_%29.md): A constant that represents a shape with a 2D column-major data layout.
- [BNNS.Shape.matrixRowMajor(\_:\_:stride:)](shape/matrixrowmajor%28____stride_%29.md): A constant that represents a shape with a 2D row-major data layout.
- [BNNS.Shape.matrixFirstMajor(\_:\_:stride:)](shape/matrixfirstmajor%28____stride_%29.md): A constant that represents a shape with a 2D first-major data layout.
- [BNNS.Shape.matrixLastMajor(\_:\_:stride:)](shape/matrixlastmajor%28____stride_%29.md): A constant that represents a shape with a 2D last-major data layout.
- [BNNS.Shape.imageCHW(\_:\_:\_:stride:)](shape/imagechw%28______stride_%29.md): A constant that represents a shape with a 3D image stack data layout.
- [BNNS.Shape.tensor3DFirstMajor(\_:\_:\_:stride:)](shape/tensor3dfirstmajor%28______stride_%29.md): A constant that represents a shape with a 3D first-major data layout.
- [BNNS.Shape.tensor3DLastMajor(\_:\_:\_:stride:)](shape/tensor3dlastmajor%28______stride_%29.md): A constant that represents a shape with a 3D last-major data layout.
- [BNNS.Shape.tensor3DNSE(\_:\_:\_:stride:)](shape/tensor3dnse%28______stride_%29.md): A constant that represents a shape with the size elements embedding dimension, sequence length, and batch size.
- [BNNS.Shape.tensor3DSNE(\_:\_:\_:stride:)](shape/tensor3dsne%28______stride_%29.md): A constant that represents a shape with the size elements embedding dimension, batch size, and sequence length.
- [BNNS.Shape.convolutionWeightsOIHW(\_:\_:\_:\_:stride:)](shape/convolutionweightsoihw%28________stride_%29.md): A constant that represents a shape with a 4D array of convolution weights data layout.
- [BNNS.Shape.tensor4DFirstMajor(\_:\_:\_:\_:stride:)](shape/tensor4dfirstmajor%28________stride_%29.md): A constant that represents a shape with a 4D first-major data layout.
- [BNNS.Shape.tensor4DLastMajor(\_:\_:\_:\_:stride:)](shape/tensor4dlastmajor%28________stride_%29.md): A constant that represents a shape with a 4D last-major data layout.
- [BNNS.Shape.tensor5DFirstMajor(\_:\_:\_:\_:\_:stride:)](shape/tensor5dfirstmajor%28__________stride_%29.md): A constant that represents a shape with a 5D first-major data layout.
- [BNNS.Shape.tensor5DLastMajor(\_:\_:\_:\_:\_:stride:)](shape/tensor5dlastmajor%28__________stride_%29.md): A constant that represents a shape with a 5D last-major data layout.
- [BNNS.Shape.tensor6DFirstMajor(\_:\_:\_:\_:\_:\_:stride:)](shape/tensor6dfirstmajor%28____________stride_%29.md): A constant that represents a shape with a 6D first-major data layout.
- [BNNS.Shape.tensor6DLastMajor(\_:\_:\_:\_:\_:\_:stride:)](shape/tensor6dlastmajor%28____________stride_%29.md): A constant that represents a shape with a 6D last-major data layout.
- [BNNS.Shape.tensor7DFirstMajor(\_:\_:\_:\_:\_:\_:\_:stride:)](shape/tensor7dfirstmajor%28______________stride_%29.md): A constant that represents a shape with a 7D first-major data layout.
- [BNNS.Shape.tensor7DLastMajor(\_:\_:\_:\_:\_:\_:\_:stride:)](shape/tensor7dlastmajor%28______________stride_%29.md): A constant that represents a shape with a 7D last-major data layout.
- [BNNS.Shape.tensor8DFirstMajor(\_:\_:\_:\_:\_:\_:\_:\_:stride:)](shape/tensor8dfirstmajor%28________________stride_%29.md): A constant that represents a shape with a 8D first-major data layout.
- [BNNS.Shape.tensor8DLastMajor(\_:\_:\_:\_:\_:\_:\_:\_:stride:)](shape/tensor8dlastmajor%28________________stride_%29.md): A constant that represents a shape with a 8D last-major data layout.

### Inspecting the Properties of a Shape

- [batchStride](shape/batchstride.md): The number of elements between each batch of data in the shape.
- [layout](shape/layout.md): The data layout of the shape.
- [rank](shape/rank.md): The number of dimensions of the shape.
- [size](shape/size.md): The size, in elements, of each dimension of the shape.
- [stride](shape/stride.md): The stride, in elements, of each dimension of the shape.

### Default Implementations

- [ExpressibleByArrayLiteral Implementations](shape/expressiblebyarrayliteral-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](../bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNSDataLayout](../bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](../bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](../bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank(\_:)](../bnnsdatalayoutgetrank%28__%29.md)
