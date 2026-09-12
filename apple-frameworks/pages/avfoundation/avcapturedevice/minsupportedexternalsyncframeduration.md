> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/minsupportedexternalsyncframeduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/minsupportedexternalsyncframeduration)

# minSupportedExternalSyncFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.

## Declaration

```swift
var minSupportedExternalSyncFrameDuration: CMTime { get }
```

<a id="discussion"></a>

## Discussion

Use this property as the minimum allowable frame duration to pass to `AVCaptureDeviceInput/follow:externalSyncDevice:videoFrameDuration:delegate:` when you want to follow an external sync device. This property returns `kCMTimeInvalid` when the device’s’ current configuration does not support external sync device following.

## See Also

### Synchronizing with external devices

- [isFollowingExternalSyncDevice](isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [isVideoFrameDurationLocked](isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
- [minSupportedLockedVideoFrameDuration](minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

# minSupportedExternalSyncFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime minSupportedExternalSyncFrameDuration;
```

<a id="discussion"></a>

## Discussion

Use this property as the minimum allowable frame duration to pass to `AVCaptureDeviceInput/follow:externalSyncDevice:videoFrameDuration:delegate:` when you want to follow an external sync device. This property returns `kCMTimeInvalid` when the device’s’ current configuration does not support external sync device following.

## See Also

### Synchronizing with external devices

- [followingExternalSyncDevice](isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [videoFrameDurationLocked](isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
- [minSupportedLockedVideoFrameDuration](minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.
