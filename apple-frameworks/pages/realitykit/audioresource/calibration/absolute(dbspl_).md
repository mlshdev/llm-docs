> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audioresource/calibration/absolute(dbspl:)

# absolute(dBSPL:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The reference level (-12dBLUFS) of the audio source material will be reproduced at the given `dBSPL` level on known audio output hardware.

## Declaration

```swift
static func absolute(dBSPL: Audio.Decibel) -> AudioResource.Calibration
```

<a id="discussion"></a>

## Discussion

> **Note**

> The -12dBLUFS reference level is achieved automatically by using `Normalization.dynamic`.
