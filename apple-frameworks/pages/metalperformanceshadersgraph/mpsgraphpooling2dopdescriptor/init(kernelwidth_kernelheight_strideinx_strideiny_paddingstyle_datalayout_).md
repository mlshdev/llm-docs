> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/init(kernelwidth:kernelheight:strideinx:strideiny:paddingstyle:datalayout:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/init(kernelwidth:kernelheight:strideinx:strideiny:paddingstyle:datalayout:))

# init(kernelWidth:kernelHeight:strideInX:strideInY:paddingStyle:dataLayout:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D pooling descriptor with given values.

## Declaration

```swift
convenience init?(kernelWidth: Int, kernelHeight: Int, strideInX: Int, strideInY: Int, paddingStyle: MPSGraphPaddingStyle, dataLayout: MPSGraphTensorNamedDataLayout)
```

## Parameters

- `kernelWidth`: See `kernelWidth` property.
- `kernelHeight`: See \`kernelHeight\`\` property.
- `strideInX`: See `strideInX` property.
- `strideInY`: See `strideInY` property.
- `paddingStyle`: See `paddingStyle` property.
- `dataLayout`: See `dataLayout` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.

# descriptorWithKernelWidth:kernelHeight:strideInX:strideInY:paddingStyle:dataLayout: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D pooling descriptor with given values.

## Declaration

```objectivec
+ (instancetype) descriptorWithKernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInX:(NSUInteger) strideInX strideInY:(NSUInteger) strideInY paddingStyle:(MPSGraphPaddingStyle) paddingStyle dataLayout:(MPSGraphTensorNamedDataLayout) dataLayout;
```

## Parameters

- `kernelWidth`: See `kernelWidth` property.
- `kernelHeight`: See \`kernelHeight\`\` property.
- `strideInX`: See `strideInX` property.
- `strideInY`: See `strideInY` property.
- `paddingStyle`: See `paddingStyle` property.
- `dataLayout`: See `dataLayout` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.
