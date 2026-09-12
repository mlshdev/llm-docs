> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct](https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct)

# AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A structure that defines the conditions in which to restrict camera switching.

## Declaration

```swift
struct PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions
```

<a id="overview"></a>

## Overview

Use these constants to control the conditions that allow fallback camera selection when you set the value of the [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md) property to [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md).

When triggered by one or more enabled conditions, fallback camera switching waits for exposure and focus to stabilize before deciding which camera to use as the primary constituent device.

Whenever [videoZoomChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md) isn’t included in the restricted switching behavior conditions, [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md) still allows camera selection when a change in video zoom factor makes a camera eligible or ineligible for selection as the [activePrimaryConstituent](activeprimaryconstituent.md).

When the video zoom factor decreases to below the switch-over zoom factor of the active primary constituent device, the system selects a different camera to satisfy the requested zoom factor.

When the video zoom factor increases and crosses a camera’s switch-over zoom factor, this camera becomes eligible to set as the [activePrimaryConstituent](activeprimaryconstituent.md). If exposure and focus allow, this camera then becomes the new active primary constituent device. Similar to the [videoZoomChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md) this also waits for exposure and focus to stabilize. Otherwise the [activePrimaryConstituent](activeprimaryconstituent.md) remains unchanged.

## Topics

### Switching behavior conditions

- [exposureModeChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/exposuremodechanged.md): Restrict switching to a fallback camera only when the device’s exposure mode changes.
- [focusModeChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged.md): Restrict switching to a fallback camera only when the device’s focus mode changes.
- [videoZoomChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md): Restrict switching to a fallback camera only when the device’s video zoom changes.

### Initializers

- [init(rawValue:)](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/init%28rawvalue_%29.md): Creates a switching behavior condition with an unsigned integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md): The conditions that restrict camera switching behavior for the active primary constituent device.
- [activePrimaryConstituent](activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.enum.md): Constants that control when to allow a virtual device to switch its active primary constituent device.
- [supportedFallbackPrimaryConstituentDevices](supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.

# AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A structure that defines the conditions in which to restrict camera switching.

## Declaration

```objectivec
enum AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these constants to control the conditions that allow fallback camera selection when you set the value of the [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md) property to [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md).

When triggered by one or more enabled conditions, fallback camera switching waits for exposure and focus to stabilize before deciding which camera to use as the primary constituent device.

Whenever [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md) isn’t included in the restricted switching behavior conditions, [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md) still allows camera selection when a change in video zoom factor makes a camera eligible or ineligible for selection as the [activePrimaryConstituentDevice](activeprimaryconstituent.md).

When the video zoom factor decreases to below the switch-over zoom factor of the active primary constituent device, the system selects a different camera to satisfy the requested zoom factor.

When the video zoom factor increases and crosses a camera’s switch-over zoom factor, this camera becomes eligible to set as the [activePrimaryConstituentDevice](activeprimaryconstituent.md). If exposure and focus allow, this camera then becomes the new active primary constituent device. Similar to the [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md) this also waits for exposure and focus to stabilize. Otherwise the [activePrimaryConstituentDevice](activeprimaryconstituent.md) remains unchanged.

## Topics

### Switching behavior conditions

- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionExposureModeChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/exposuremodechanged.md): Restrict switching to a fallback camera only when the device’s exposure mode changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionFocusModeChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged.md): Restrict switching to a fallback camera only when the device’s focus mode changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md): Restrict switching to a fallback camera only when the device’s video zoom changes.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md): Disallow switching to a fallback camera.

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md): The conditions that restrict camera switching behavior for the active primary constituent device.
- [activePrimaryConstituentDevice](activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCapturePrimaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.enum.md): Constants that control when to allow a virtual device to switch its active primary constituent device.
- [supportedFallbackPrimaryConstituentDevices](supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.
