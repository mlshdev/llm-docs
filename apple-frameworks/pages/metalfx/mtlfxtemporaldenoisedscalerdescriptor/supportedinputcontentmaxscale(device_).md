> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentmaxscale(device:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentmaxscale(device:))

# supportedInputContentMaxScale(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Returns the largest temporal scaling factor the device supports as a floating-point value.

## Declaration

```swift
class func supportedInputContentMaxScale(device: any MTLDevice) -> Float
```

## Parameters

- `device`: The Metal device for which this method checks the maximum input content scale it supports.

<a id="return-value"></a>

## Return Value

The maximum input content scale the GPU device supports.

# supportedInputContentMaxScaleForDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Returns the largest temporal scaling factor the device supports as a floating-point value.

## Declaration

```objectivec
+ (float) supportedInputContentMaxScaleForDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device for which this method checks the maximum input content scale it supports.

<a id="return-value"></a>

## Return Value

The maximum input content scale the GPU device supports.
