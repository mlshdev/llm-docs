> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/init(strideinx:strideiny:strideinz:dilationrateinx:dilationrateiny:dilationrateinz:groups:paddingleft:paddingright:paddingtop:paddingbottom:paddingfront:paddingback:paddingstyle:datalayout:weightslayout:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/init(strideinx:strideiny:strideinz:dilationrateinx:dilationrateiny:dilationrateinz:groups:paddingleft:paddingright:paddingtop:paddingbottom:paddingfront:paddingback:paddingstyle:datalayout:weightslayout:))

# init(strideInX:strideInY:strideInZ:dilationRateInX:dilationRateInY:dilationRateInZ:groups:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingFront:paddingBack:paddingStyle:dataLayout:weightsLayout:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a convolution descriptor with given values for parameters.

## Declaration

```swift
convenience init?(strideInX: Int, strideInY: Int, strideInZ: Int, dilationRateInX: Int, dilationRateInY: Int, dilationRateInZ: Int, groups: Int, paddingLeft: Int, paddingRight: Int, paddingTop: Int, paddingBottom: Int, paddingFront: Int, paddingBack: Int, paddingStyle: MPSGraphPaddingStyle, dataLayout: MPSGraphTensorNamedDataLayout, weightsLayout: MPSGraphTensorNamedDataLayout)
```

## Parameters

- `strideInX`: See [strideInX](strideinx.md) property.
- `strideInY`: See [strideInY](strideiny.md) property.
- `strideInZ`: See [strideInZ](strideinz.md) property.
- `dilationRateInX`: See [dilationRateInX](dilationrateinx.md) property.
- `dilationRateInY`: See [dilationRateInY](dilationrateiny.md) property.
- `dilationRateInZ`: See [dilationRateInZ](dilationrateinz.md) property.
- `groups`: See [groups](groups.md) property.
- `paddingLeft`: See [paddingLeft](paddingleft.md) property.
- `paddingRight`: See [paddingRight](paddingright.md) property.
- `paddingTop`: See [paddingTop](paddingtop.md) property.
- `paddingBottom`: See [paddingBottom](paddingbottom.md) property.
- `paddingFront`: See [paddingFront](paddingfront.md) property.
- `paddingBack`: See [paddingBack](paddingback.md) property.
- `paddingStyle`: See [paddingStyle](paddingstyle.md) property.
- `dataLayout`: See [dataLayout](datalayout.md) property.
- `weightsLayout`: See [weightsLayout](weightslayout.md) property.

<a id="return-value"></a>

## Return Value

The `MPSGraphConvolution3DOpDescriptor` on autoreleasepool.

# descriptorWithStrideInX:strideInY:strideInZ:dilationRateInX:dilationRateInY:dilationRateInZ:groups:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingFront:paddingBack:paddingStyle:dataLayout:weightsLayout: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a convolution descriptor with given values for parameters.

## Declaration

```objectivec
+ (instancetype) descriptorWithStrideInX:(NSUInteger) strideInX strideInY:(NSUInteger) strideInY strideInZ:(NSUInteger) strideInZ dilationRateInX:(NSUInteger) dilationRateInX dilationRateInY:(NSUInteger) dilationRateInY dilationRateInZ:(NSUInteger) dilationRateInZ groups:(NSUInteger) groups paddingLeft:(NSUInteger) paddingLeft paddingRight:(NSUInteger) paddingRight paddingTop:(NSUInteger) paddingTop paddingBottom:(NSUInteger) paddingBottom paddingFront:(NSUInteger) paddingFront paddingBack:(NSUInteger) paddingBack paddingStyle:(MPSGraphPaddingStyle) paddingStyle dataLayout:(MPSGraphTensorNamedDataLayout) dataLayout weightsLayout:(MPSGraphTensorNamedDataLayout) weightsLayout;
```

## Parameters

- `strideInX`: See [strideInX](strideinx.md) property.
- `strideInY`: See [strideInY](strideiny.md) property.
- `strideInZ`: See [strideInZ](strideinz.md) property.
- `dilationRateInX`: See [dilationRateInX](dilationrateinx.md) property.
- `dilationRateInY`: See [dilationRateInY](dilationrateiny.md) property.
- `dilationRateInZ`: See [dilationRateInZ](dilationrateinz.md) property.
- `groups`: See [groups](groups.md) property.
- `paddingLeft`: See [paddingLeft](paddingleft.md) property.
- `paddingRight`: See [paddingRight](paddingright.md) property.
- `paddingTop`: See [paddingTop](paddingtop.md) property.
- `paddingBottom`: See [paddingBottom](paddingbottom.md) property.
- `paddingFront`: See [paddingFront](paddingfront.md) property.
- `paddingBack`: See [paddingBack](paddingback.md) property.
- `paddingStyle`: See [paddingStyle](paddingstyle.md) property.
- `dataLayout`: See [dataLayout](datalayout.md) property.
- `weightsLayout`: See [weightsLayout](weightslayout.md) property.

<a id="return-value"></a>

## Return Value

The `MPSGraphConvolution3DOpDescriptor` on autoreleasepool.
