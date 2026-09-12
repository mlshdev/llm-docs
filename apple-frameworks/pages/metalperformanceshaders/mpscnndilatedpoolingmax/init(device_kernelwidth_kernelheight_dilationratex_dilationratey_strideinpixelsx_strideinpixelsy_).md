> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndilatedpoolingmax/init(device:kernelwidth:kernelheight:dilationratex:dilationratey:strideinpixelsx:strideinpixelsy:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmax/init(device:kernelwidth:kernelheight:dilationratex:dilationratey:strideinpixelsx:strideinpixelsy:))

# init(device:kernelWidth:kernelHeight:dilationRateX:dilationRateY:strideInPixelsX:strideInPixelsY:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a dilated max pooling filter.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int, dilationRateX: Int, dilationRateY: Int, strideInPixelsX: Int, strideInPixelsY: Int)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md): Initializes a dilated max pooling filter.

# initWithDevice:kernelWidth:kernelHeight:dilationRateX:dilationRateY:strideInPixelsX:strideInPixelsY: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a dilated max pooling filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight dilationRateX:(NSUInteger) dilationRateX dilationRateY:(NSUInteger) dilationRateY strideInPixelsX:(NSUInteger) strideInPixelsX strideInPixelsY:(NSUInteger) strideInPixelsY;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes a dilated max pooling filter.
