> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musictrackloopinfo/loopduration](https://developer.apple.com/documentation/audiotoolbox/musictrackloopinfo/loopduration)

# loopDuration (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The point in a music track, measured in beats from the end of the music track, at which to begin playback during looped playback.

## Declaration

```swift
var loopDuration: MusicTimeStamp
```

<a id="Discussion"></a>

## Discussion

During looped playback, a music track plays from (`kSequenceTrackProperty_TrackLength` – `loopDuration`) to `kSequenceTrackProperty_TrackLength`.

To explicitly turn off looping, specify a loopDuration of `0`.

# loopDuration (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The point in a music track, measured in beats from the end of the music track, at which to begin playback during looped playback.

## Declaration

```objectivec
MusicTimeStamp loopDuration;
```

<a id="Discussion"></a>

## Discussion

During looped playback, a music track plays from (`kSequenceTrackProperty_TrackLength` – `loopDuration`) to `kSequenceTrackProperty_TrackLength`.

To explicitly turn off looping, specify a loopDuration of `0`.
