> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/spatialaudio

# spatialAudio

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The component that configures the spatial rendering of sounds from this entity.

## Declaration

```swift
@MainActor @preconcurrency var spatialAudio: SpatialAudioComponent? { get set }
```

## See Also

### Playing audio

- [playAudio(\_:)](playaudio%28__%29.md): Prepares and plays a new audio playback instance on this entity.
- [playAudio(configuration:\_:)](playaudio%28configuration___%29.md): Prepares and plays a real-time audio playback instance.
- [prepareAudio(configuration:\_:)](prepareaudio%28configuration___%29.md): Prepares a real-time audio playback instances.
- [prepareAudio(\_:)](prepareaudio%28__%29.md): Prepares an audio resource for playback.
- [stopAllAudio()](stopallaudio%28%29.md): Stops playback for all audio on this entity.
- [ambientAudio](ambientaudio.md): The component that configures the ambient rendering of sounds from this entity.
- [channelAudio](channelaudio.md): The component that configures the channel-based rendering of sounds from this entity.
