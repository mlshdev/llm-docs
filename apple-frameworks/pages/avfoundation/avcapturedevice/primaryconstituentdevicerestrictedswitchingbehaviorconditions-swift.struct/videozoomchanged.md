> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged](https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged)

# videoZoomChanged (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Restrict switching to a fallback camera only when the device’s video zoom changes.

## Declaration

```swift
static var videoZoomChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions { get }
```

<a id="Discussion"></a>

## Discussion

This condition switches cameras when the video zoom factor changes, either by setting a value for the device’s [videoZoomFactor](../videozoomfactor.md) property or calling its [ramp(toVideoZoomFactor:withRate:)](../ramp%28tovideozoomfactor_withrate_%29.md) method.

> **Note**

>  All changes to video zoom factor allow switching to a fallback camera, not only those changes across switch-over zoom factors.

## See Also

### Switching behavior conditions

- [exposureModeChanged](exposuremodechanged.md): Restrict switching to a fallback camera only when the device’s exposure mode changes.
- [focusModeChanged](focusmodechanged.md): Restrict switching to a fallback camera only when the device’s focus mode changes.

# AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Restrict switching to a fallback camera only when the device’s video zoom changes.

## Declaration

```objectivec
AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged
```

<a id="Discussion"></a>

## Discussion

This condition switches cameras when the video zoom factor changes, either by setting a value for the device’s [videoZoomFactor](../videozoomfactor.md) property or calling its [rampToVideoZoomFactor:withRate:](../ramp%28tovideozoomfactor_withrate_%29.md) method.

> **Note**

>  All changes to video zoom factor allow switching to a fallback camera, not only those changes across switch-over zoom factors.

## See Also

### Switching behavior conditions

- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionExposureModeChanged](exposuremodechanged.md): Restrict switching to a fallback camera only when the device’s exposure mode changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionFocusModeChanged](focusmodechanged.md): Restrict switching to a fallback camera only when the device’s focus mode changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md): Disallow switching to a fallback camera.
