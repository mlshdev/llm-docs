> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/supportsdevice(_:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/supportsdevice(_:))

# supportsDevice(\_:) (Swift)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

Returns a Boolean value that indicates whether the temporal scaler works with a GPU.

## Declaration

```swift
class func supportsDevice(_ device: any MTLDevice) -> Bool
```

## Parameters

- `device`: An [MTLDevice](../../metal/mtldevice.md) instance that represents a GPU.

## See Also

### Checking a GPU device’s scaling support

- [supportedInputContentMinScale(device:)](supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
- [supportedInputContentMaxScale(device:)](supportedinputcontentmaxscale%28device_%29.md): Returns the largest temporal scaling factor the device supports as a floating-point value.

# supportsDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

Returns a Boolean value that indicates whether the temporal scaler works with a GPU.

## Declaration

```objectivec
+ (BOOL) supportsDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: An [MTLDevice](../../metal/mtldevice.md) instance that represents a GPU.

## See Also

### Checking a GPU device’s scaling support

- [supportedInputContentMinScaleForDevice:](supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
- [supportedInputContentMaxScaleForDevice:](supportedinputcontentmaxscale%28device_%29.md): Returns the largest temporal scaling factor the device supports as a floating-point value.
