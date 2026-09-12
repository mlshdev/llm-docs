> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnncrosschannelnormalization/init(device:kernelsize:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnncrosschannelnormalization/init(device:kernelsize:))

# init(device:kernelSize:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a normalization kernel in a channel.

## Declaration

```swift
init(device: any MTLDevice, kernelSize: Int)
```

## Parameters

- `device`: The device the filter will run on.
- `kernelSize`: The size of the kernel, in both x and y dimensions.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNCrossChannelNormalization](../mpscnncrosschannelnormalization.md) object or `nil`, if failure.

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md): Initializes a normalization kernel in a channel.

# initWithDevice:kernelSize: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a normalization kernel in a channel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelSize:(NSUInteger) kernelSize;
```

## Parameters

- `device`: The device the filter will run on.
- `kernelSize`: The size of the kernel, in both x and y dimensions.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNCrossChannelNormalization](../mpscnncrosschannelnormalization.md) object or `nil`, if failure.

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes a normalization kernel in a channel.
