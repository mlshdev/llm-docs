> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnspatialnormalization/init(device:kernelwidth:kernelheight:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnspatialnormalization/init(device:kernelwidth:kernelheight:))

# init(device:kernelWidth:kernelHeight:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a spatial normalization kernel.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int)
```

## Parameters

- `device`: The device the kernel will run on.
- `kernelWidth`: The width of the kernel.
- `kernelHeight`: The height of the kernel.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNSpatialNormalization](../mpscnnspatialnormalization.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

> **Note**

>  The value of `kernelWidth` must be equal to the value of `kernelHeight`.

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md): Initializes a spatial normalization kernel.

# initWithDevice:kernelWidth:kernelHeight: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a spatial normalization kernel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight;
```

## Parameters

- `device`: The device the kernel will run on.
- `kernelWidth`: The width of the kernel.
- `kernelHeight`: The height of the kernel.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNSpatialNormalization](../mpscnnspatialnormalization.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

> **Note**

>  The value of `kernelWidth` must be equal to the value of `kernelHeight`.

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes a spatial normalization kernel.
