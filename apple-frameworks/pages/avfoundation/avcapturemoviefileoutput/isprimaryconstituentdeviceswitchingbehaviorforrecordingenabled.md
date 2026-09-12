> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled)

# isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether to restrict constituent device switching behavior during recording.

## Declaration

```swift
var isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to enable camera switching restrictions when recording movies. You set restrictions by calling the output’s [setPrimaryConstituentDeviceSwitchingBehaviorForRecording(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md) method. The restrictions take effect when you start recording, and revert to the behavior set by the capture device’s [primaryConstituentDeviceSwitchingBehavior](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md) when you stop recording.

By default, this property is [true](https://developer.apple.com/documentation/swift/true) when connected to a capture device that supports constituent device switching.

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.

# primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether to restrict constituent device switching behavior during recording.

## Declaration

```objectivec
@property (nonatomic, getter=isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled) BOOL primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled;
```

<a id="Discussion"></a>

## Discussion

Use this property to enable camera switching restrictions when recording movies. You set restrictions by calling the output’s [setPrimaryConstituentDeviceSwitchingBehaviorForRecording:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md) method. The restrictions take effect when you start recording, and revert to the behavior set by the capture device’s [primaryConstituentDeviceSwitchingBehavior](../avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md) when you stop recording.

By default, this property is [true](https://developer.apple.com/documentation/swift/true) when connected to a capture device that supports constituent device switching.

## See Also

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.
