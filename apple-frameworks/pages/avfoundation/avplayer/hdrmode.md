> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/hdrmode](https://developer.apple.com/documentation/avfoundation/avplayer/hdrmode)

# AVPlayer.HDRMode (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 11.2+ (deprecated in 26.0) · iPadOS 11.2+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 11.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A bitfield type that specifies an HDR mode.

> The deprecated availableHDRModes uses this enum. Use eligibleForHDRPlayback instead

## Declaration

```swift
struct HDRMode
```

<a id="overview"></a>

## Overview

These modes define the available HDR modes. Query [availableHDRModes](availablehdrmodes.md) to find the HDR modes available for a device.

## Topics

### HDR modes

- [hlg](hdrmode/hlg.md): Deprecated. The Hybrid Log-Gamma HDR mode is available.
- [hdr10](hdrmode/hdr10.md): Deprecated. The HDR10 HDR mode is available.
- [dolbyVision](hdrmode/dolbyvision.md): Deprecated. The Dolby Vision HDR mode is available.

### Initializers

- [init(rawValue:)](hdrmode/init%28rawvalue_%29.md): Deprecated. Creates an HDR mode with a string value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [eligibleForHDRPlaybackDidChangeNotification](eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.

# AVPlayerHDRMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.2+ (deprecated in 26.0) · iPadOS 11.2+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 11.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A bitfield type that specifies an HDR mode.

> The deprecated availableHDRModes uses this enum. Use eligibleForHDRPlayback instead

## Declaration

```objectivec
enum AVPlayerHDRMode : NSInteger;
```

<a id="overview"></a>

## Overview

These modes define the available HDR modes. Query [availableHDRModes](availablehdrmodes.md) to find the HDR modes available for a device.

## Topics

### HDR modes

- [AVPlayerHDRModeHLG](hdrmode/hlg.md): Deprecated. The Hybrid Log-Gamma HDR mode is available.
- [AVPlayerHDRModeHDR10](hdrmode/hdr10.md): Deprecated. The HDR10 HDR mode is available.
- [AVPlayerHDRModeDolbyVision](hdrmode/dolbyvision.md): Deprecated. The Dolby Vision HDR mode is available.

## See Also

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayerEligibleForHDRPlaybackDidChangeNotification](eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.
- [AVPlayerAvailableHDRModesDidChangeNotification](../avplayeravailablehdrmodesdidchangenotification.md): Deprecated. A notification that fires whenever availableHDRModes changes.
