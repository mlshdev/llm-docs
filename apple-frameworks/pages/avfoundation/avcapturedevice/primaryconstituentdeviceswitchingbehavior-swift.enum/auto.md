> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/auto

# AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.auto (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device automatically selects the best camera for the current scene.

## Declaration

```swift
case auto
```

<a id="Discussion"></a>

## Discussion

This mode places no restrictions on when a camera switch can occur.

## See Also

### Switching behaviors

- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported](unsupported.md): The device doesn’t support constituent device switching.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](restricted.md): The device restricts fallback camera selection to certain conditions.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.locked](locked.md): The device locks camera switching to the active primary constituent device.

# AVCapturePrimaryConstituentDeviceSwitchingBehaviorAuto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device automatically selects the best camera for the current scene.

## Declaration

```objectivec
AVCapturePrimaryConstituentDeviceSwitchingBehaviorAuto
```

<a id="Discussion"></a>

## Discussion

This mode places no restrictions on when a camera switch can occur.

## See Also

### Switching behaviors

- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported](unsupported.md): The device doesn’t support constituent device switching.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](restricted.md): The device restricts fallback camera selection to certain conditions.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorLocked](locked.md): The device locks camera switching to the active primary constituent device.
