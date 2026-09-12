> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isvideoframedurationlocked](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isvideoframedurationlocked)

# isVideoFrameDurationLocked (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the device’s video frame rate (expressed as a duration) is currently locked.

## Declaration

```swift
var isVideoFrameDurationLocked: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns `true` when an [AVCaptureDeviceInput](../avcapturedeviceinput.md) associated with the device has its [activeLockedVideoFrameDuration](../avcapturedeviceinput/activelockedvideoframeduration.md) property set to something other than `kCMTimeInvalid`. See [activeLockedVideoFrameDuration](../avcapturedeviceinput/activelockedvideoframeduration.md) for more information on video frame duration locking.

## See Also

### Synchronizing with external devices

- [isFollowingExternalSyncDevice](isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [minSupportedExternalSyncFrameDuration](minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [minSupportedLockedVideoFrameDuration](minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

# videoFrameDurationLocked (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the device’s video frame rate (expressed as a duration) is currently locked.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoFrameDurationLocked) BOOL videoFrameDurationLocked;
```

<a id="discussion"></a>

## Discussion

Returns `true` when an [AVCaptureDeviceInput](../avcapturedeviceinput.md) associated with the device has its [activeLockedVideoFrameDuration](../avcapturedeviceinput/activelockedvideoframeduration.md) property set to something other than `kCMTimeInvalid`. See [activeLockedVideoFrameDuration](../avcapturedeviceinput/activelockedvideoframeduration.md) for more information on video frame duration locking.

## See Also

### Synchronizing with external devices

- [followingExternalSyncDevice](isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [minSupportedExternalSyncFrameDuration](minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [minSupportedLockedVideoFrameDuration](minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.
