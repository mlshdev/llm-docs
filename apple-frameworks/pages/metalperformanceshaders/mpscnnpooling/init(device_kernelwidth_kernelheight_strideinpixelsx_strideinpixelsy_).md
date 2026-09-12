> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpooling/init(device:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpooling/init(device:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:))

# init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a pooling filter.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int, strideInPixelsX: Int, strideInPixelsY: Int)
```

## Parameters

- `device`: The device the kernel will run on.
- `kernelWidth`: The width of the kernel.

  This value can be odd or even.
- `kernelHeight`: The height of the kernel.

  This value can be odd or even.
- `strideInPixelsX`: The output stride (downsampling factor) in the x dimension.
- `strideInPixelsY`: The output stride (downsampling factor) in the y dimension.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNPooling](../mpscnnpooling.md) object or `nil`, if failure.

## See Also

### Instance Methods

- [init(coder:device:)](init%28coder_device_%29.md): Initializes a pooling filter.
- [init(device:kernelWidth:kernelHeight:)](init%28device_kernelwidth_kernelheight_%29.md): Initializes a pooling filter.

# initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a pooling filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInPixelsX:(NSUInteger) strideInPixelsX strideInPixelsY:(NSUInteger) strideInPixelsY;
```

## Parameters

- `device`: The device the kernel will run on.
- `kernelWidth`: The width of the kernel.

  This value can be odd or even.
- `kernelHeight`: The height of the kernel.

  This value can be odd or even.
- `strideInPixelsX`: The output stride (downsampling factor) in the x dimension.
- `strideInPixelsY`: The output stride (downsampling factor) in the y dimension.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNPooling](../mpscnnpooling.md) object or `nil`, if failure.

## See Also

### Instance Methods

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes a pooling filter.
- [initWithDevice:kernelWidth:kernelHeight:](init%28device_kernelwidth_kernelheight_%29.md): Initializes a pooling filter.
