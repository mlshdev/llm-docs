> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/setprimaryconstituentdeviceswitchingbehaviorforrecording(_:restrictedswitchingbehaviorconditions:)](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/setprimaryconstituentdeviceswitchingbehaviorforrecording(_:restrictedswitchingbehaviorconditions:))

# setPrimaryConstituentDeviceSwitchingBehaviorForRecording(\_:restrictedSwitchingBehaviorConditions:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Sets the camera switching behavior to use during recording.

## Declaration

```swift
func setPrimaryConstituentDeviceSwitchingBehaviorForRecording(_ switchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions)
```

## Parameters

- `switchingBehavior`: The switching behavior to set on the movie file output.

  Attempting to restrict the switching behavior of a capture device that doesn’t support constituent device switching results in an error.
- `restrictedSwitchingBehaviorConditions`: The conditions during which camera switching occurs. Only set a condition when you set the switching behavior to [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md). In all other cases, set the value to [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md).

<a id="Discussion"></a>

## Discussion

Use this method to control the camera switching behavior the system uses when recording a movie. The behavior you specify takes effect when you enable it by setting the value of [isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md) to [true](https://developer.apple.com/documentation/swift/true).

When a capture device doesn’t support constituent device selection, attempting to set a behavior other than [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported.md) causes the system to throw an invalid argument exception.

## See Also

### Restricting camera switching

- [isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.

# setPrimaryConstituentDeviceSwitchingBehaviorForRecording:restrictedSwitchingBehaviorConditions: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Sets the camera switching behavior to use during recording.

## Declaration

```objectivec
- (void) setPrimaryConstituentDeviceSwitchingBehaviorForRecording:(AVCapturePrimaryConstituentDeviceSwitchingBehavior) switchingBehavior restrictedSwitchingBehaviorConditions:(AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions) restrictedSwitchingBehaviorConditions;
```

## Parameters

- `switchingBehavior`: The switching behavior to set on the movie file output.

  Attempting to restrict the switching behavior of a capture device that doesn’t support constituent device switching results in an error.
- `restrictedSwitchingBehaviorConditions`: The conditions during which camera switching occurs. Only set a condition when you set the switching behavior to [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md). In all other cases, set the value to [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionNone](../avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md).

<a id="Discussion"></a>

## Discussion

Use this method to control the camera switching behavior the system uses when recording a movie. The behavior you specify takes effect when you enable it by setting the value of [primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md) to [true](https://developer.apple.com/documentation/swift/true).

When a capture device doesn’t support constituent device selection, attempting to set a behavior other than [AVCapturePrimaryConstituentDeviceSwitchingBehaviorUnsupported](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported.md) causes the system to throw an invalid argument exception.

## See Also

### Restricting camera switching

- [primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.
