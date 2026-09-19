> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged

# focusModeChanged (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Restrict switching to a fallback camera only when the device’s focus mode changes.

## Declaration

```swift
static var focusModeChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions { get }
```

## See Also

### Switching behavior conditions

- [exposureModeChanged](exposuremodechanged.md): Restrict switching to a fallback camera only when the device’s exposure mode changes.
- [videoZoomChanged](videozoomchanged.md): Restrict switching to a fallback camera only when the device’s video zoom changes.

# AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionFocusModeChanged (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Restrict switching to a fallback camera only when the device’s focus mode changes.

## Declaration

```objectivec
AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionFocusModeChanged
```

## See Also

### Switching behavior conditions

- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionExposureModeChanged](exposuremodechanged.md): Restrict switching to a fallback camera only when the device’s exposure mode changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged](videozoomchanged.md): Restrict switching to a fallback camera only when the device’s video zoom changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md): Disallow switching to a fallback camera.
