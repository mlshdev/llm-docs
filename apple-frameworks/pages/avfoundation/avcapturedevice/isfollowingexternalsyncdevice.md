> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isfollowingexternalsyncdevice](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfollowingexternalsyncdevice)

# isFollowingExternalSyncDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the device is following an external sync device.

## Declaration

```swift
var isFollowingExternalSyncDevice: Bool { get }
```

<a id="discussion"></a>

## Discussion

See [follow(\_:videoFrameDuration:delegate:)](../avcapturedeviceinput/follow%28__videoframeduration_delegate_%29.md) for more information on external sync.

## See Also

### Synchronizing with external devices

- [minSupportedExternalSyncFrameDuration](minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [isVideoFrameDurationLocked](isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
- [minSupportedLockedVideoFrameDuration](minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

# followingExternalSyncDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the device is following an external sync device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFollowingExternalSyncDevice) BOOL followingExternalSyncDevice;
```

<a id="discussion"></a>

## Discussion

See [followExternalSyncDevice:videoFrameDuration:delegate:](../avcapturedeviceinput/follow%28__videoframeduration_delegate_%29.md) for more information on external sync.

## See Also

### Synchronizing with external devices

- [minSupportedExternalSyncFrameDuration](minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [videoFrameDurationLocked](isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
- [minSupportedLockedVideoFrameDuration](minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.
