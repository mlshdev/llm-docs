> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/init(kernelwidth:kernelheight:strideinx:strideiny:dilationrateinx:dilationrateiny:paddingleft:paddingright:paddingtop:paddingbottom:paddingstyle:datalayout:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/init(kernelwidth:kernelheight:strideinx:strideiny:dilationrateinx:dilationrateiny:paddingleft:paddingright:paddingtop:paddingbottom:paddingstyle:datalayout:))

# init(kernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D pooling descriptor with given values.

## Declaration

```swift
convenience init?(kernelWidth: Int, kernelHeight: Int, strideInX: Int, strideInY: Int, dilationRateInX: Int, dilationRateInY: Int, paddingLeft: Int, paddingRight: Int, paddingTop: Int, paddingBottom: Int, paddingStyle: MPSGraphPaddingStyle, dataLayout: MPSGraphTensorNamedDataLayout)
```

## Parameters

- `kernelWidth`: See `kernelWidth` property.
- `kernelHeight`: See `kernelHeight` property.
- `strideInX`: See `strideInX` property.
- `strideInY`: See `strideInY` property.
- `dilationRateInX`: See `dilationRateInX` property.
- `dilationRateInY`: See `dilationRateInY` property.
- `paddingLeft`: See `paddingLeft` property.
- `paddingRight`: See `paddingRight` property.
- `paddingTop`: See `paddingTop` property.
- `paddingBottom`: See `paddingBottom` property.
- `paddingStyle`: See `paddingStyle` property.
- `dataLayout`: See `dataLayout` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.

# descriptorWithKernelWidth:kernelHeight:strideInX:strideInY:dilationRateInX:dilationRateInY:paddingLeft:paddingRight:paddingTop:paddingBottom:paddingStyle:dataLayout: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D pooling descriptor with given values.

## Declaration

```objectivec
+ (instancetype) descriptorWithKernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInX:(NSUInteger) strideInX strideInY:(NSUInteger) strideInY dilationRateInX:(NSUInteger) dilationRateInX dilationRateInY:(NSUInteger) dilationRateInY paddingLeft:(NSUInteger) paddingLeft paddingRight:(NSUInteger) paddingRight paddingTop:(NSUInteger) paddingTop paddingBottom:(NSUInteger) paddingBottom paddingStyle:(MPSGraphPaddingStyle) paddingStyle dataLayout:(MPSGraphTensorNamedDataLayout) dataLayout;
```

## Parameters

- `kernelWidth`: See `kernelWidth` property.
- `kernelHeight`: See `kernelHeight` property.
- `strideInX`: See `strideInX` property.
- `strideInY`: See `strideInY` property.
- `dilationRateInX`: See `dilationRateInX` property.
- `dilationRateInY`: See `dilationRateInY` property.
- `paddingLeft`: See `paddingLeft` property.
- `paddingRight`: See `paddingRight` property.
- `paddingTop`: See `paddingTop` property.
- `paddingBottom`: See `paddingBottom` property.
- `paddingStyle`: See `paddingStyle` property.
- `dataLayout`: See `dataLayout` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.
