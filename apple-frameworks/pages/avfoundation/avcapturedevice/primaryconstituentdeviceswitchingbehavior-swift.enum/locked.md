> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/locked](https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/locked)

# AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.locked (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device locks camera switching to the active primary constituent device.

## Declaration

```swift
case locked
```

<a id="Discussion"></a>

## Discussion

A locked value restricts the [minAvailableVideoZoomFactor](../minavailablevideozoomfactor.md) property value to the switch-over zoom factor of the active primary constituent device. See [virtualDeviceSwitchOverVideoZoomFactors](../virtualdeviceswitchovervideozoomfactors.md) for more information.

## See Also

### Switching behaviors

- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported](unsupported.md): The device doesn’t support constituent device switching.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.auto](auto.md): The device automatically selects the best camera for the current scene.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](restricted.md): The device restricts fallback camera selection to certain conditions.

# AVCapturePrimaryConstituentDeviceSwitchingBehaviorLocked (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device locks camera switching to the active primary constituent device.

## Declaration

```objectivec
AVCapturePrimaryConstituentDeviceSwitchingBehaviorLocked
```

<a id="Discussion"></a>

## Discussion

A locked value restricts the [minAvailableVideoZoomFactor](../minavailablevideozoomfactor.md) property value to the switch-over zoom factor of the active primary constituent device. See [virtualDeviceSwitchOverVideoZoomFactors](../virtualdeviceswitchovervideozoomfactors.md) for more information.

## See Also

### Switching behaviors

- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported](unsupported.md): The device doesn’t support constituent device switching.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorAuto](auto.md): The device automatically selects the best camera for the current scene.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](restricted.md): The device restricts fallback camera selection to certain conditions.
