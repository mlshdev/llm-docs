> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentminscale(device:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentminscale(device:))

# supportedInputContentMinScale(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Returns the smallest temporal scaling factor the device supports as a floating-point value.

## Declaration

```swift
class func supportedInputContentMinScale(device: any MTLDevice) -> Float
```

## Parameters

- `device`: The Metal device for which this method checks the minimum input content scale it supports.

<a id="return-value"></a>

## Return Value

The minimum input content scale the GPU device supports.

# supportedInputContentMinScaleForDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Returns the smallest temporal scaling factor the device supports as a floating-point value.

## Declaration

```objectivec
+ (float) supportedInputContentMinScaleForDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device for which this method checks the minimum input content scale it supports.

<a id="return-value"></a>

## Return Value

The minimum input content scale the GPU device supports.
