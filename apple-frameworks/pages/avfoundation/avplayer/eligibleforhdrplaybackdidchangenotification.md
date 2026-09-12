> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/eligibleforhdrplaybackdidchangenotification](https://developer.apple.com/documentation/avfoundation/avplayer/eligibleforhdrplaybackdidchangenotification)

# eligibleForHDRPlaybackDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · tvOS 13.4+ · visionOS 1.0+

A notification that’s posted whenever HDR playback eligibility changes.

## Declaration

```swift
class let eligibleForHDRPlaybackDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system may post this notification if a user connects or disconnects a display, or makes other system resource changes.

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayer.HDRMode](hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.

# AVPlayerEligibleForHDRPlaybackDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · tvOS 13.4+ · visionOS 1.0+

A notification that’s posted whenever HDR playback eligibility changes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerEligibleForHDRPlaybackDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system may post this notification if a user connects or disconnects a display, or makes other system resource changes.

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayerHDRMode](hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [AVPlayerAvailableHDRModesDidChangeNotification](../avplayeravailablehdrmodesdidchangenotification.md): Deprecated. A notification that fires whenever availableHDRModes changes.
