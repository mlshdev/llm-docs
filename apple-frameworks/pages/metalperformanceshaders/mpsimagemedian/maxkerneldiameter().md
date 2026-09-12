> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagemedian/maxkerneldiameter()](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagemedian/maxkerneldiameter())

# maxKernelDiameter() (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Queries the maximum diameter, in pixels, of the filter window supported by the median filter.

## Declaration

```swift
class func maxKernelDiameter() -> Int
```

<a id="return-value"></a>

## Return Value

Returns the maximum diameter, in pixels, of the filter window supported by the median filter.

## See Also

### Methods

- [init(device:kernelDiameter:)](init%28device_kerneldiameter_%29.md): Initializes a filter for a particular kernel size and device.
- [minKernelDiameter()](minkerneldiameter%28%29.md): Queries the minimum diameter, in pixels, of the filter window supported by the median filter.

# maxKernelDiameter (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Queries the maximum diameter, in pixels, of the filter window supported by the median filter.

## Declaration

```objectivec
+ (NSUInteger) maxKernelDiameter;
```

<a id="return-value"></a>

## Return Value

Returns the maximum diameter, in pixels, of the filter window supported by the median filter.

## See Also

### Methods

- [initWithDevice:kernelDiameter:](init%28device_kerneldiameter_%29.md): Initializes a filter for a particular kernel size and device.
- [minKernelDiameter](minkerneldiameter%28%29.md): Queries the minimum diameter, in pixels, of the filter window supported by the median filter.
