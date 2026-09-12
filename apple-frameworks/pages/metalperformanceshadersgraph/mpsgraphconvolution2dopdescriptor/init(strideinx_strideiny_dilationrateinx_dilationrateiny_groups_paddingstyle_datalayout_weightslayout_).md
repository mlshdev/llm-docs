> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/init(strideinx:strideiny:dilationrateinx:dilationrateiny:groups:paddingstyle:datalayout:weightslayout:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/init(strideinx:strideiny:dilationrateinx:dilationrateiny:groups:paddingstyle:datalayout:weightslayout:))

# init(strideInX:strideInY:dilationRateInX:dilationRateInY:groups:paddingStyle:dataLayout:weightsLayout:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a convolution descriptor with given values for parameters.

## Declaration

```swift
convenience init?(strideInX: Int, strideInY: Int, dilationRateInX: Int, dilationRateInY: Int, groups: Int, paddingStyle: MPSGraphPaddingStyle, dataLayout: MPSGraphTensorNamedDataLayout, weightsLayout: MPSGraphTensorNamedDataLayout)
```

## Parameters

- `strideInX`: See [strideInX](strideinx.md) property.
- `strideInY`: See [strideInY](strideiny.md) property.
- `dilationRateInX`: See [dilationRateInX](dilationrateinx.md) property.
- `dilationRateInY`: See [dilationRateInY](dilationrateiny.md) property.
- `groups`: See [groups](groups.md) property.
- `paddingStyle`: See [paddingStyle](paddingstyle.md) property.
- `dataLayout`: See [dataLayout](datalayout.md) property.
- `weightsLayout`: See [weightsLayout](weightslayout.md) property.

<a id="return-value"></a>

## Return Value

The `MPSGraphConvolution2DOpDescriptor` on autoreleasepool.

# descriptorWithStrideInX:strideInY:dilationRateInX:dilationRateInY:groups:paddingStyle:dataLayout:weightsLayout: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a convolution descriptor with given values for parameters.

## Declaration

```objectivec
+ (instancetype) descriptorWithStrideInX:(NSUInteger) strideInX strideInY:(NSUInteger) strideInY dilationRateInX:(NSUInteger) dilationRateInX dilationRateInY:(NSUInteger) dilationRateInY groups:(NSUInteger) groups paddingStyle:(MPSGraphPaddingStyle) paddingStyle dataLayout:(MPSGraphTensorNamedDataLayout) dataLayout weightsLayout:(MPSGraphTensorNamedDataLayout) weightsLayout;
```

## Parameters

- `strideInX`: See [strideInX](strideinx.md) property.
- `strideInY`: See [strideInY](strideiny.md) property.
- `dilationRateInX`: See [dilationRateInX](dilationrateinx.md) property.
- `dilationRateInY`: See [dilationRateInY](dilationrateiny.md) property.
- `groups`: See [groups](groups.md) property.
- `paddingStyle`: See [paddingStyle](paddingstyle.md) property.
- `dataLayout`: See [dataLayout](datalayout.md) property.
- `weightsLayout`: See [weightsLayout](weightslayout.md) property.

<a id="return-value"></a>

## Return Value

The `MPSGraphConvolution2DOpDescriptor` on autoreleasepool.
