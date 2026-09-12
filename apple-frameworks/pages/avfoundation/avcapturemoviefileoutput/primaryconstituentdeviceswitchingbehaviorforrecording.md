> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/primaryconstituentdeviceswitchingbehaviorforrecording](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/primaryconstituentdeviceswitchingbehaviorforrecording)

# primaryConstituentDeviceSwitchingBehaviorForRecording (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The camera switching behavior to use for recording.

## Declaration

```swift
var primaryConstituentDeviceSwitchingBehaviorForRecording: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md).

This property is key-value observable.

## See Also

### Restricting camera switching

- [isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.

# primaryConstituentDeviceSwitchingBehaviorForRecording (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The camera switching behavior to use for recording.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCapturePrimaryConstituentDeviceSwitchingBehavior primaryConstituentDeviceSwitchingBehaviorForRecording;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [AVCapturePrimaryConstituentDeviceSwitchingBehaviorRestricted](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md).

This property is key-value observable.

## See Also

### Restricting camera switching

- [primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.
