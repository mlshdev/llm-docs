> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/minsupportedlockedvideoframeduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/minsupportedlockedvideoframeduration)

# minSupportedLockedVideoFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

## Declaration

```swift
var minSupportedLockedVideoFrameDuration: CMTime { get }
```

<a id="discussion"></a>

## Discussion

`kCMTimeInvalid` is returned when the device or its current configuration does not support locked frame rate. Use [activeLockedVideoFrameDuration](../avcapturedeviceinput/activelockedvideoframeduration.md) to set the locked frame rate on the input.

## See Also

### Synchronizing with external devices

- [isFollowingExternalSyncDevice](isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [minSupportedExternalSyncFrameDuration](minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [isVideoFrameDurationLocked](isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.

# minSupportedLockedVideoFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime minSupportedLockedVideoFrameDuration;
```

<a id="discussion"></a>

## Discussion

`kCMTimeInvalid` is returned when the device or its current configuration does not support locked frame rate. Use [activeLockedVideoFrameDuration](../avcapturedeviceinput/activelockedvideoframeduration.md) to set the locked frame rate on the input.

## See Also

### Synchronizing with external devices

- [followingExternalSyncDevice](isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [minSupportedExternalSyncFrameDuration](minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [videoFrameDurationLocked](isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
