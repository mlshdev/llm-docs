> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndilatedpoolingmaxnode/init(source:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:dilationratex:dilationratey:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmaxnode/init(source:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:dilationratex:dilationratey:))

# init(source:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(source sourceNode: MPSNNImageNode, kernelWidth: Int, kernelHeight: Int, strideInPixelsX: Int, strideInPixelsY: Int, dilationRateX: Int, dilationRateY: Int)
```

## See Also

### Initializers

- [init(source:filterSize:)](init%28source_filtersize_%29.md)
- [init(source:filterSize:stride:dilationRate:)](init%28source_filtersize_stride_dilationrate_%29.md)

# initWithSource:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSource:(MPSNNImageNode *) sourceNode kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInPixelsX:(NSUInteger) strideInPixelsX strideInPixelsY:(NSUInteger) strideInPixelsY dilationRateX:(NSUInteger) dilationRateX dilationRateY:(NSUInteger) dilationRateY;
```

## See Also

### Initializers

- [initWithSource:filterSize:](init%28source_filtersize_%29.md)
- [initWithSource:filterSize:stride:dilationRate:](init%28source_filtersize_stride_dilationrate_%29.md)
