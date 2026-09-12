> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndilatedpoolingmaxnode/init(source:filtersize:stride:dilationrate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmaxnode/init(source:filtersize:stride:dilationrate:))

# init(source:filterSize:stride:dilationRate:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(source sourceNode: MPSNNImageNode, filterSize size: Int, stride: Int, dilationRate: Int)
```

## See Also

### Initializers

- [init(source:filterSize:)](init%28source_filtersize_%29.md)
- [init(source:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:)](init%28source_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_%29.md)

# initWithSource:filterSize:stride:dilationRate: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSource:(MPSNNImageNode *) sourceNode filterSize:(NSUInteger) size stride:(NSUInteger) stride dilationRate:(NSUInteger) dilationRate;
```

## See Also

### Initializers

- [initWithSource:filterSize:](init%28source_filtersize_%29.md)
- [initWithSource:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:](init%28source_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_%29.md)
