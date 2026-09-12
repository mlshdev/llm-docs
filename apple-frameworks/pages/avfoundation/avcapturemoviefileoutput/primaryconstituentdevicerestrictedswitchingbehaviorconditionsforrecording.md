> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording)

# primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The conditions during which camera switching may occur while recording.

## Declaration

```swift
var primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions { get }
```

<a id="Discussion"></a>

## Discussion

The default conditions include [videoZoomChanged](../avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md), [focusModeChanged](../avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged.md), and [exposureModeChanged](../avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/exposuremodechanged.md).

This property is key-value observable.

## See Also

### Restricting camera switching

- [isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording(\_:restrictedSwitchingBehaviorConditions:)](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.

# primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The conditions during which camera switching may occur while recording.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording;
```

<a id="Discussion"></a>

## Discussion

The default conditions include [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionVideoZoomChanged](../avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md), [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionFocusModeChanged](../avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged.md), and [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionExposureModeChanged](../avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/exposuremodechanged.md).

This property is key-value observable.

## See Also

### Restricting camera switching

- [primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording:restrictedSwitchingBehaviorConditions:](setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
