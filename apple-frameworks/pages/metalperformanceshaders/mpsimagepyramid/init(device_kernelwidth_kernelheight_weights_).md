> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagepyramid/init(device:kernelwidth:kernelheight:weights:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagepyramid/init(device:kernelwidth:kernelheight:weights:))

# init(device:kernelWidth:kernelHeight:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initialize a downwards n-tap image pyramid with a custom filter kernel and device.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int, weights kernelWeights: UnsafePointer<Float>)
```

## Parameters

- `device`: The device the filter will run on.
- `kernelWidth`: The width of the filter kernel.
- `kernelHeight`: The height of the filter kernel.
- `kernelWeights`: A pointer to an array of `kernelWidth*kernelHeight` values to be used as the kernel. These values are in row-major order.

<a id="return-value"></a>

## Return Value

A valid [MPSImagePyramid](../mpsimagepyramid.md) object or `nil`, if failure.

## See Also

### Methods

- [init(device:)](init%28device_%29.md): Initializes a downwards 5-tap image pyramid with the default filter kernel and device.
- [init(device:centerWeight:)](init%28device_centerweight_%29.md): Initialize a downwards 5-tap image pyramid with a central weight parameter and device.

# initWithDevice:kernelWidth:kernelHeight:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initialize a downwards n-tap image pyramid with a custom filter kernel and device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight weights:(const float *) kernelWeights;
```

## Parameters

- `device`: The device the filter will run on.
- `kernelWidth`: The width of the filter kernel.
- `kernelHeight`: The height of the filter kernel.
- `kernelWeights`: A pointer to an array of `kernelWidth*kernelHeight` values to be used as the kernel. These values are in row-major order.

<a id="return-value"></a>

## Return Value

A valid [MPSImagePyramid](../mpsimagepyramid.md) object or `nil`, if failure.

## See Also

### Methods

- [initWithDevice:](init%28device_%29.md): Initializes a downwards 5-tap image pyramid with the default filter kernel and device.
- [initWithDevice:centerWeight:](init%28device_centerweight_%29.md): Initialize a downwards 5-tap image pyramid with a central weight parameter and device.
