> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-7hdev/spatialaudiomixmetadata

# spatialAudioMixMetadata

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+ · tvOS 26.0+

The result of audio analysis during recording which contains metadata necessary to properly configure the Audio Mix feature during playback or editing. Can be used with `AUAudioUnit` instances that support AudioUnitPropertyID `kProperty_SpatialAudioMixMetadata`

## Declaration

```swift
var spatialAudioMixMetadata: Data { get }
```
