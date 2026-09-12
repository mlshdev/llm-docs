> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeravailablehdrmodesdidchangenotification](https://developer.apple.com/documentation/avfoundation/avplayeravailablehdrmodesdidchangenotification)

# AVPlayerAvailableHDRModesDidChangeNotification

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ (deprecated in 26.0) · iPadOS 11.2+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 11.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A notification that fires whenever availableHDRModes changes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerAvailableHDRModesDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

This notification fires when a value is added or removed from the list of availableHDRModes. This can be caused by display connection/disconnection or resource changes.

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](avplayer/eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](avplayer/availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayerHDRMode](avplayer/hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [AVPlayerEligibleForHDRPlaybackDidChangeNotification](avplayer/eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.
