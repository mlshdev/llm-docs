> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/external

# external (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 2.1+

An external device type.

## Declaration

```swift
static let external: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

On iPad, external devices are those that conform to the UVC (USB Video Class) specification.

## See Also

### External devices

- [externalUnknown](externalunknown.md): Deprecated. An unknown external device type.

# AVCaptureDeviceTypeExternal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 2.1+

An external device type.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeExternal;
```

<a id="Discussion"></a>

## Discussion

On iPad, external devices are those that conform to the UVC (USB Video Class) specification.

## See Also

### External devices

- [AVCaptureDeviceTypeExternalUnknown](externalunknown.md): Deprecated. An unknown external device type.
