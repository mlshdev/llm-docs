> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagemedian/init(device:kerneldiameter:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagemedian/init(device:kerneldiameter:))

# init(device:kernelDiameter:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a filter for a particular kernel size and device.

## Declaration

```swift
init(device: any MTLDevice, kernelDiameter: Int)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `kernelDiameter`: The diameter of the median filter, in pixels. Must be an odd number.

<a id="return-value"></a>

## Return Value

An initialized median filter object.

## See Also

### Methods

- [maxKernelDiameter()](maxkerneldiameter%28%29.md): Queries the maximum diameter, in pixels, of the filter window supported by the median filter.
- [minKernelDiameter()](minkerneldiameter%28%29.md): Queries the minimum diameter, in pixels, of the filter window supported by the median filter.

# initWithDevice:kernelDiameter: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a filter for a particular kernel size and device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelDiameter:(NSUInteger) kernelDiameter;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `kernelDiameter`: The diameter of the median filter, in pixels. Must be an odd number.

<a id="return-value"></a>

## Return Value

An initialized median filter object.

## See Also

### Methods

- [maxKernelDiameter](maxkerneldiameter%28%29.md): Queries the maximum diameter, in pixels, of the filter window supported by the median filter.
- [minKernelDiameter](minkerneldiameter%28%29.md): Queries the minimum diameter, in pixels, of the filter window supported by the median filter.
