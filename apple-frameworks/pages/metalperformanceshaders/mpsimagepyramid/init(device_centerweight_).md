> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagepyramid/init(device:centerweight:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagepyramid/init(device:centerweight:))

# init(device:centerWeight:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initialize a downwards 5-tap image pyramid with a central weight parameter and device.

## Declaration

```swift
convenience init(device: any MTLDevice, centerWeight: Float)
```

## Parameters

- `device`: The device the filter will run on.
- `centerWeight`: Defines the form of the filter kernel through the outer product `ww^T`, where `w = [(1/4 - a/2), 1/4, a, 1/4, (1/4 - a/2)]^T` and `a` is the value of `centerWeight`.

<a id="return-value"></a>

## Return Value

A valid [MPSImagePyramid](../mpsimagepyramid.md) object or `nil`, if failure.

## See Also

### Methods

- [init(device:)](init%28device_%29.md): Initializes a downwards 5-tap image pyramid with the default filter kernel and device.
- [init(device:kernelWidth:kernelHeight:weights:)](init%28device_kernelwidth_kernelheight_weights_%29.md): Initialize a downwards n-tap image pyramid with a custom filter kernel and device.

# initWithDevice:centerWeight: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initialize a downwards 5-tap image pyramid with a central weight parameter and device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device centerWeight:(float) centerWeight;
```

## Parameters

- `device`: The device the filter will run on.
- `centerWeight`: Defines the form of the filter kernel through the outer product `ww^T`, where `w = [(1/4 - a/2), 1/4, a, 1/4, (1/4 - a/2)]^T` and `a` is the value of `centerWeight`.

<a id="return-value"></a>

## Return Value

A valid [MPSImagePyramid](../mpsimagepyramid.md) object or `nil`, if failure.

## See Also

### Methods

- [initWithDevice:](init%28device_%29.md): Initializes a downwards 5-tap image pyramid with the default filter kernel and device.
- [initWithDevice:kernelWidth:kernelHeight:weights:](init%28device_kernelwidth_kernelheight_weights_%29.md): Initialize a downwards n-tap image pyramid with a custom filter kernel and device.
