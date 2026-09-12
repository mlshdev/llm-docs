> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported)

# AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device doesn’t support constituent device switching.

## Declaration

```swift
case unsupported
```

<a id="Discussion"></a>

## Discussion

Switching cameras isn’t supported on devices that don’t have more than one constituent device.

## See Also

### Switching behaviors

- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.auto](auto.md): The device automatically selects the best camera for the current scene.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](restricted.md): The device restricts fallback camera selection to certain conditions.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.locked](locked.md): The device locks camera switching to the active primary constituent device.

# AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device doesn’t support constituent device switching.

## Declaration

```objectivec
AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported
```

<a id="Discussion"></a>

## Discussion

Switching cameras isn’t supported on devices that don’t have more than one constituent device.

## See Also

### Switching behaviors

- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorAuto](auto.md): The device automatically selects the best camera for the current scene.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](restricted.md): The device restricts fallback camera selection to certain conditions.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorLocked](locked.md): The device locks camera switching to the active primary constituent device.
