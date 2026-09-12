> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum)

# AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Constants that control when to allow a virtual device to switch its active primary constituent device.

## Declaration

```swift
enum PrimaryConstituentDeviceSwitchingBehavior
```

<a id="overview"></a>

## Overview

Virtual devices with multiple constituent video devices (such as the Dual Camera, Dual Wide Camera, or Triple Camera) consist of cameras that each have different properties like focal length, maximum light sensitivity, and minimum focus distance. The system selects one of the constituent video devices as the primary device.

When multiple constituent cameras can achieve a requested zoom factor, the virtual device chooses the best camera for the scene. The system makes this decision primarily using a camera’s focal length, because the camera with the longest focal length requires the least amount of digital upscaling to provide the highest image quality. Secondary conditions are focus and exposure. For example, when the scene requires focus or exposure to go beyond the limits of the active primary constituent device, a camera with a shorter focal length may be able to deliver a better quality image. The system considers such a device a fallback primary constituent device. For example, a telephoto camera with a minimum focus distance of 40 cm isn’t able to deliver a sharp image when the subject in the scene is closer than 40 cm. For such a scene, the virtual device switches to the wide-angle camera, which typically has a smaller minimum focus distance and is able to accurately focus the subject. In this case the wide-angle camera is the fallback primary constitute device.

## Topics

### Switching behaviors

- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported](primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported.md): The device doesn’t support constituent device switching.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.auto](primaryconstituentdeviceswitchingbehavior-swift.enum/auto.md): The device automatically selects the best camera for the current scene.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md): The device restricts fallback camera selection to certain conditions.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.locked](primaryconstituentdeviceswitchingbehavior-swift.enum/locked.md): The device locks camera switching to the active primary constituent device.

### Initializers

- [init(rawValue:)](primaryconstituentdeviceswitchingbehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md): The conditions that restrict camera switching behavior for the active primary constituent device.
- [activePrimaryConstituent](activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md): A structure that defines the conditions in which to restrict camera switching.
- [supportedFallbackPrimaryConstituentDevices](supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.

# AVCapturePrimaryConstituentDeviceSwitchingBehavior (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Constants that control when to allow a virtual device to switch its active primary constituent device.

## Declaration

```objectivec
enum AVCapturePrimaryConstituentDeviceSwitchingBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

Virtual devices with multiple constituent video devices (such as the Dual Camera, Dual Wide Camera, or Triple Camera) consist of cameras that each have different properties like focal length, maximum light sensitivity, and minimum focus distance. The system selects one of the constituent video devices as the primary device.

When multiple constituent cameras can achieve a requested zoom factor, the virtual device chooses the best camera for the scene. The system makes this decision primarily using a camera’s focal length, because the camera with the longest focal length requires the least amount of digital upscaling to provide the highest image quality. Secondary conditions are focus and exposure. For example, when the scene requires focus or exposure to go beyond the limits of the active primary constituent device, a camera with a shorter focal length may be able to deliver a better quality image. The system considers such a device a fallback primary constituent device. For example, a telephoto camera with a minimum focus distance of 40 cm isn’t able to deliver a sharp image when the subject in the scene is closer than 40 cm. For such a scene, the virtual device switches to the wide-angle camera, which typically has a smaller minimum focus distance and is able to accurately focus the subject. In this case the wide-angle camera is the fallback primary constitute device.

## Topics

### Switching behaviors

- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported](primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported.md): The device doesn’t support constituent device switching.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorAuto](primaryconstituentdeviceswitchingbehavior-swift.enum/auto.md): The device automatically selects the best camera for the current scene.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md): The device restricts fallback camera selection to certain conditions.
- [AVCapturePrimaryConstituentDeviceSwitchingBehaviorLocked](primaryconstituentdeviceswitchingbehavior-swift.enum/locked.md): The device locks camera switching to the active primary constituent device.

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md): The conditions that restrict camera switching behavior for the active primary constituent device.
- [activePrimaryConstituentDevice](activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md): A structure that defines the conditions in which to restrict camera switching.
- [supportedFallbackPrimaryConstituentDevices](supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.
