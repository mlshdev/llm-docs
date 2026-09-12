> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/eligibleforhdrplayback](https://developer.apple.com/documentation/avfoundation/avplayer/eligibleforhdrplayback)

# eligibleForHDRPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · tvOS 13.4+ · visionOS 1.0+

A Boolean value that indicates whether the current device can present content to an HDR display.

## Declaration

```swift
nonisolated class var eligibleForHDRPlayback: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is not key-value observable.

## See Also

### Determining HDR playback eligibility

- [availableHDRModes](availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayer.HDRMode](hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [eligibleForHDRPlaybackDidChangeNotification](eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.

# eligibleForHDRPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · tvOS 13.4+ · visionOS 1.0+

A Boolean value that indicates whether the current device can present content to an HDR display.

## Declaration

```objectivec
@property (class, readonly) BOOL eligibleForHDRPlayback;
```

<a id="Discussion"></a>

## Discussion

This property is not key-value observable.

## See Also

### Determining HDR playback eligibility

- [availableHDRModes](availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayerHDRMode](hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [AVPlayerEligibleForHDRPlaybackDidChangeNotification](eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.
- [AVPlayerAvailableHDRModesDidChangeNotification](../avplayeravailablehdrmodesdidchangenotification.md): Deprecated. A notification that fires whenever availableHDRModes changes.
