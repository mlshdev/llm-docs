> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions)

# activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The conditions that restrict camera switching behavior for the active primary constituent device.

## Declaration

```swift
var activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions { get }
```

<a id="Discussion"></a>

## Discussion

For virtual devices with multiple constituent devices, this property returns the active restricted switching behavior conditions. This is equal to [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md) except while recording using an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) that you configure with different restricted switching behavior conditions.

Devices that don’t support constituent device switching return [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md).

This property is key-value observable.

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituent](activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.enum.md): Constants that control when to allow a virtual device to switch its active primary constituent device.
- [AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md): A structure that defines the conditions in which to restrict camera switching.
- [supportedFallbackPrimaryConstituentDevices](supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.

# activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The conditions that restrict camera switching behavior for the active primary constituent device.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions;
```

<a id="Discussion"></a>

## Discussion

For virtual devices with multiple constituent devices, this property returns the active restricted switching behavior conditions. This is equal to [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md) except while recording using an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) that you configure with different restricted switching behavior conditions.

Devices that don’t support constituent device switching return [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md).

This property is key-value observable.

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDevice](activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCapturePrimaryConstituentDeviceSwitchingBehavior](primaryconstituentdeviceswitchingbehavior-swift.enum.md): Constants that control when to allow a virtual device to switch its active primary constituent device.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md): A structure that defines the conditions in which to restrict camera switching.
- [supportedFallbackPrimaryConstituentDevices](supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.
