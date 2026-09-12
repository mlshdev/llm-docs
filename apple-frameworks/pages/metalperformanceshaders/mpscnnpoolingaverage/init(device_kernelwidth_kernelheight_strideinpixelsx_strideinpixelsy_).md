> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolingaverage/init(device:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolingaverage/init(device:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:))

# init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes an average pooling filter.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int, strideInPixelsX: Int, strideInPixelsY: Int)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md): Initializes an average pooling filter.

# initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes an average pooling filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInPixelsX:(NSUInteger) strideInPixelsX strideInPixelsY:(NSUInteger) strideInPixelsY;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes an average pooling filter.
