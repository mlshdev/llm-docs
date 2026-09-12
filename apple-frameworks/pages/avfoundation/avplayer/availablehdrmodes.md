> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/availablehdrmodes](https://developer.apple.com/documentation/avfoundation/avplayer/availablehdrmodes)

# availableHDRModes (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.2+ (deprecated in 26.0) · iPadOS 11.2+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 11.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The HDR modes that are available for playback.

> Use eligibleForHDRPlayback instead

## Declaration

```swift
nonisolated class var availableHDRModes: AVPlayer.HDRMode { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates all of the HDR modes that the device can play. A value of `0` indicates the device doesn’t support HDR. Each value indicates that an appropriate HDR display is available for the specified HDR mode. Additionally, the device must be capable of playing the specified HDR type.

This property doesn’t indicate whether a video contains HDR content, HDR video is currently playing, or if video is playing on an HDR display.

> **Important**

>  Mac apps built with Mac Catalyst don’t support HDR playback on Intel-based Mac computers. When playing HDR content over HTTP Live Streaming, [AVPlayer](../avplayer.md) selects the SDR variant playlist. When playing file-based media, HDR content is tone mapped to SDR before it’s rendered onscreen.

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [AVPlayer.HDRMode](hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [eligibleForHDRPlaybackDidChangeNotification](eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.

# availableHDRModes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.2+ (deprecated in 26.0) · iPadOS 11.2+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 11.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The HDR modes that are available for playback.

> Use eligibleForHDRPlayback instead

## Declaration

```objectivec
@property (class, readonly) AVPlayerHDRMode availableHDRModes;
```

<a id="Discussion"></a>

## Discussion

This property indicates all of the HDR modes that the device can play. A value of `0` indicates the device doesn’t support HDR. Each value indicates that an appropriate HDR display is available for the specified HDR mode. Additionally, the device must be capable of playing the specified HDR type.

This property doesn’t indicate whether a video contains HDR content, HDR video is currently playing, or if video is playing on an HDR display.

> **Important**

>  Mac apps built with Mac Catalyst don’t support HDR playback on Intel-based Mac computers. When playing HDR content over HTTP Live Streaming, [AVPlayer](../avplayer.md) selects the SDR variant playlist. When playing file-based media, HDR content is tone mapped to SDR before it’s rendered onscreen.

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [AVPlayerHDRMode](hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [AVPlayerEligibleForHDRPlaybackDidChangeNotification](eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.
- [AVPlayerAvailableHDRModesDidChangeNotification](../avplayeravailablehdrmodesdidchangenotification.md): Deprecated. A notification that fires whenever availableHDRModes changes.
