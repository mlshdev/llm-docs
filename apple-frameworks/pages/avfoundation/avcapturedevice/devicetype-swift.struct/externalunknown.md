> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/externalunknown](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/externalunknown)

# externalUnknown (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** macOS 10.15+ (deprecated in 14.0)

An unknown external device type.

> Use [external](external.md) instead.

## Declaration

```swift
static let externalUnknown: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

In macOS, use this type to specify external devices, such as an iPhone camera.

> **Important**

>  In [Mac Catalyst](../../../uikit/mac-catalyst.md) apps, use [builtInWideAngleCamera](builtinwideanglecamera.md) instead.

## See Also

### External devices

- [external](external.md): An external device type.

# AVCaptureDeviceTypeExternalUnknown (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** macOS 10.15+ (deprecated in 14.0)

An unknown external device type.

> Use [AVCaptureDeviceTypeExternal](external.md) instead.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeExternalUnknown;
```

<a id="Discussion"></a>

## Discussion

In macOS, use this type to specify external devices, such as an iPhone camera.

> **Important**

>  In [Mac Catalyst](../../../uikit/mac-catalyst.md) apps, use [AVCaptureDeviceTypeBuiltInWideAngleCamera](builtinwideanglecamera.md) instead.

## See Also

### External devices

- [AVCaptureDeviceTypeExternal](external.md): An external device type.
