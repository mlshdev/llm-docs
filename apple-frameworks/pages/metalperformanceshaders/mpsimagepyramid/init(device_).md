> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagepyramid/init(device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagepyramid/init(device:))

# init(device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a downwards 5-tap image pyramid with the default filter kernel and device.

## Declaration

```swift
convenience init(device: any MTLDevice)
```

## Parameters

- `device`: The device the filter will run on.

<a id="return-value"></a>

## Return Value

A valid [MPSImagePyramid](../mpsimagepyramid.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

The filter kernel is the outer product of `w = [1/16, 1/4, 3/8, 1/4, 1/16]^T`, with itself.

## See Also

### Methods

- [init(device:centerWeight:)](init%28device_centerweight_%29.md): Initialize a downwards 5-tap image pyramid with a central weight parameter and device.
- [init(device:kernelWidth:kernelHeight:weights:)](init%28device_kernelwidth_kernelheight_weights_%29.md): Initialize a downwards n-tap image pyramid with a custom filter kernel and device.

# initWithDevice: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a downwards 5-tap image pyramid with the default filter kernel and device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The device the filter will run on.

<a id="return-value"></a>

## Return Value

A valid [MPSImagePyramid](../mpsimagepyramid.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

The filter kernel is the outer product of `w = [1/16, 1/4, 3/8, 1/4, 1/16]^T`, with itself.

## See Also

### Methods

- [initWithDevice:centerWeight:](init%28device_centerweight_%29.md): Initialize a downwards 5-tap image pyramid with a central weight parameter and device.
- [initWithDevice:kernelWidth:kernelHeight:weights:](init%28device_kernelwidth_kernelheight_weights_%29.md): Initialize a downwards n-tap image pyramid with a custom filter kernel and device.
