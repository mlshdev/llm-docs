> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpooling/init(coder:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpooling/init(coder:device:))

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a pooling filter.

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## See Also

### Instance Methods

- [init(device:kernelWidth:kernelHeight:)](init%28device_kernelwidth_kernelheight_%29.md): Initializes a pooling filter.
- [init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:)](init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes a pooling filter.

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a pooling filter.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## See Also

### Instance Methods

- [initWithDevice:kernelWidth:kernelHeight:](init%28device_kernelwidth_kernelheight_%29.md): Initializes a pooling filter.
- [initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:](init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes a pooling filter.
