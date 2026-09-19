> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/auparameterevent/rampdurationsampleframes

# rampDurationSampleFrames (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The ramp duration, in sample frames. Must be `0` for a non-ramped event; otherwise, must be greater than `0` for a ramped event.

## Declaration

```swift
var rampDurationSampleFrames: AUAudioFrameCount
```

# rampDurationSampleFrames (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The ramp duration, in sample frames. Must be `0` for a non-ramped event; otherwise, must be greater than `0` for a ramped event.

## Declaration

```objectivec
AUAudioFrameCount rampDurationSampleFrames;
```
