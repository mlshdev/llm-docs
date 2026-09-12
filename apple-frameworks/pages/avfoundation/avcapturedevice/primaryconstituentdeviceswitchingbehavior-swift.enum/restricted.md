> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted](https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted)

# AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device restricts fallback camera selection to certain conditions.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

The camera doesn’t restrict camera switches necessary to honor the requested video zoom factor.

## See Also

### Switching behaviors

- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported](unsupported.md): The device doesn’t support constituent device switching.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.auto](auto.md): The device automatically selects the best camera for the current scene.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.locked](locked.md): The device locks camera switching to the active primary constituent device.

# AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The device restricts fallback camera selection to certain conditions.

## Declaration

```objectivec
AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted
```

<a id="Discussion"></a>

## Discussion

The camera doesn’t restrict camera switches necessary to honor the requested video zoom factor.

## See Also

### Switching behaviors

- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported](unsupported.md): The device doesn’t support constituent device switching.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorAuto](auto.md): The device automatically selects the best camera for the current scene.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorLocked](locked.md): The device locks camera switching to the active primary constituent device.
