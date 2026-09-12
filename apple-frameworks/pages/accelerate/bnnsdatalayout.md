> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout](https://developer.apple.com/documentation/accelerate/bnnsdatalayout)

# BNNSDataLayout (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the data type of an n-dimensional array.

## Declaration

```swift
struct BNNSDataLayout
```

## Topics

### 1D Data Layouts

- [BNNSDataLayoutVector](bnnsdatalayoutvector.md): A constant that represents a 1D vector.
- [BNNSDataLayout1DFirstMajor](bnnsdatalayout1dfirstmajor.md): A constant that represents a 1D first-major vector.
- [BNNSDataLayout1DLastMajor](bnnsdatalayout1dlastmajor.md): A constant that represents a 1D last-major vector.

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayoutRowMajorMatrix](bnnsdatalayoutrowmajormatrix.md): A constant that represents a 2D row-major matrix.
- [BNNSDataLayout2DFirstMajor](bnnsdatalayout2dfirstmajor.md): A constant that represents a 2D first-major matrix.
- [BNNSDataLayout2DLastMajor](bnnsdatalayout2dlastmajor.md): A constant that represents a 2D last-major matrix.

### 3D Data Layouts

- [BNNSDataLayoutImageCHW](bnnsdatalayoutimagechw.md): A constant that represents a 3D image stack.
- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayout3DLastMajor](bnnsdatalayout3dlastmajor.md): A constant that represents a 3D last-major tensor.
- [BNNSDataLayoutSNE](bnnsdatalayoutsne.md): A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsIOHrWr](bnnsdatalayoutconvolutionweightsiohrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHW_Pack32](bnnsdatalayoutconvolutionweightsoihw_pack32.md): A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.
- [BNNSDataLayout4DFirstMajor](bnnsdatalayout4dfirstmajor.md): A constant that represents a 4D first-major tensor.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.

### 5D Data Layouts

- [BNNSDataLayout5DFirstMajor](bnnsdatalayout5dfirstmajor.md): A constant that represents a 5D first-major tensor.
- [BNNSDataLayout5DLastMajor](bnnsdatalayout5dlastmajor.md): A constant that represents a 5D last-major tensor.

### 6D Data Layouts

- [BNNSDataLayout6DFirstMajor](bnnsdatalayout6dfirstmajor.md): A constant that represents a 6D first-major tensor.
- [BNNSDataLayout6DLastMajor](bnnsdatalayout6dlastmajor.md): A constant that represents a 6D last-major tensor.

### 7D Data Layouts

- [BNNSDataLayout7DFirstMajor](bnnsdatalayout7dfirstmajor.md): A constant that represents a 7D first-major tensor.
- [BNNSDataLayout7DLastMajor](bnnsdatalayout7dlastmajor.md): A constant that represents a 7D last-major tensor.

### 8D Data Layouts

- [BNNSDataLayout8DFirstMajor](bnnsdatalayout8dfirstmajor.md): A constant that represents a 8D first-major tensor.
- [BNNSDataLayout8DLastMajor](bnnsdatalayout8dlastmajor.md): A constant that represents a 8D last-major tensor.

### Other Data Layouts

- [BNNSDataLayoutFullyConnectedSparse](bnnsdatalayoutfullyconnectedsparse.md)
- [BNNSDataLayoutMHA_DHK](bnnsdatalayoutmha_dhk.md)

### Raw Values

- [init(\_:)](bnnsdatalayout/init%28__%29.md)
- [init(rawValue:)](bnnsdatalayout/init%28rawvalue_%29.md)
- [rawValue](bnnsdatalayout/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNS.Shape](bnns/shape.md): Constants that describe the size and data layout of an n-dimensional array descriptor.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank(\_:)](bnnsdatalayoutgetrank%28__%29.md)

# BNNSDataLayout (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the data type of an n-dimensional array.

## Declaration

```objectivec
typedef enum { ... } BNNSDataLayout;
```

## Topics

### 1D Data Layouts

- [BNNSDataLayoutVector](bnnsdatalayoutvector.md): A constant that represents a 1D vector.
- [BNNSDataLayout1DFirstMajor](bnnsdatalayout1dfirstmajor.md): A constant that represents a 1D first-major vector.
- [BNNSDataLayout1DLastMajor](bnnsdatalayout1dlastmajor.md): A constant that represents a 1D last-major vector.

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayoutRowMajorMatrix](bnnsdatalayoutrowmajormatrix.md): A constant that represents a 2D row-major matrix.
- [BNNSDataLayout2DFirstMajor](bnnsdatalayout2dfirstmajor.md): A constant that represents a 2D first-major matrix.
- [BNNSDataLayout2DLastMajor](bnnsdatalayout2dlastmajor.md): A constant that represents a 2D last-major matrix.

### 3D Data Layouts

- [BNNSDataLayoutImageCHW](bnnsdatalayoutimagechw.md): A constant that represents a 3D image stack.
- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayout3DLastMajor](bnnsdatalayout3dlastmajor.md): A constant that represents a 3D last-major tensor.
- [BNNSDataLayoutSNE](bnnsdatalayoutsne.md): A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.

### 4D Data Layouts

- [BNNSDataLayoutConvolutionWeightsOIHW](bnnsdatalayoutconvolutionweightsoihw.md): A constant that represents a 4D array of convolution weights.
- [BNNSDataLayoutConvolutionWeightsIOHrWr](bnnsdatalayoutconvolutionweightsiohrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHrWr](bnnsdatalayoutconvolutionweightsoihrwr.md): A constant that represents a 4D array of rotated convolution weights.
- [BNNSDataLayoutConvolutionWeightsOIHW_Pack32](bnnsdatalayoutconvolutionweightsoihw_pack32.md): A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.
- [BNNSDataLayout4DFirstMajor](bnnsdatalayout4dfirstmajor.md): A constant that represents a 4D first-major tensor.
- [BNNSDataLayout4DLastMajor](bnnsdatalayout4dlastmajor.md): A constant that represents a 4D last-major tensor.

### 5D Data Layouts

- [BNNSDataLayout5DFirstMajor](bnnsdatalayout5dfirstmajor.md): A constant that represents a 5D first-major tensor.
- [BNNSDataLayout5DLastMajor](bnnsdatalayout5dlastmajor.md): A constant that represents a 5D last-major tensor.

### 6D Data Layouts

- [BNNSDataLayout6DFirstMajor](bnnsdatalayout6dfirstmajor.md): A constant that represents a 6D first-major tensor.
- [BNNSDataLayout6DLastMajor](bnnsdatalayout6dlastmajor.md): A constant that represents a 6D last-major tensor.

### 7D Data Layouts

- [BNNSDataLayout7DFirstMajor](bnnsdatalayout7dfirstmajor.md): A constant that represents a 7D first-major tensor.
- [BNNSDataLayout7DLastMajor](bnnsdatalayout7dlastmajor.md): A constant that represents a 7D last-major tensor.

### 8D Data Layouts

- [BNNSDataLayout8DFirstMajor](bnnsdatalayout8dfirstmajor.md): A constant that represents a 8D first-major tensor.
- [BNNSDataLayout8DLastMajor](bnnsdatalayout8dlastmajor.md): A constant that represents a 8D last-major tensor.

### Other Data Layouts

- [BNNSDataLayoutFullyConnectedSparse](bnnsdatalayoutfullyconnectedsparse.md)
- [BNNSDataLayoutMHA_DHK](bnnsdatalayoutmha_dhk.md)

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank](bnnsdatalayoutgetrank%28__%29.md)
