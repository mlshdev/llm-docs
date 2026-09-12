> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/supportedinputcontentmaxscale(device:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/supportedinputcontentmaxscale(device:))

# supportedInputContentMaxScale(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the largest temporal scaling factor the device supports as a floating-point value.

## Declaration

```swift
class func supportedInputContentMaxScale(device: any MTLDevice) -> Float
```

## Parameters

- `device`: The [MTLDevice](../../metal/mtldevice.md) instance that represents a GPU.

## See Also

### Checking a GPU device’s scaling support

- [supportsDevice(\_:)](supportsdevice%28__%29.md): Returns a Boolean value that indicates whether the temporal scaler works with a GPU.
- [supportedInputContentMinScale(device:)](supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.

# supportedInputContentMaxScaleForDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the largest temporal scaling factor the device supports as a floating-point value.

## Declaration

```objectivec
+ (float) supportedInputContentMaxScaleForDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The [MTLDevice](../../metal/mtldevice.md) instance that represents a GPU.

## See Also

### Checking a GPU device’s scaling support

- [supportsDevice:](supportsdevice%28__%29.md): Returns a Boolean value that indicates whether the temporal scaler works with a GPU.
- [supportedInputContentMinScaleForDevice:](supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
