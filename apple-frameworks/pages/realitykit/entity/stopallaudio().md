> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/stopallaudio()](https://developer.apple.com/documentation/realitykit/entity/stopallaudio())

# stopAllAudio()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Stops playback for all audio on this entity.

## Declaration

```swift
@MainActor @preconcurrency func stopAllAudio()
```

<a id="discussion"></a>

## Discussion

You can stop a specific [AudioPlaybackController](../audioplaybackcontroller.md) instance from playing a particular resource by calling the controller’s [stop()](../audioplaybackcontroller/stop%28%29.md) method.

## See Also

### Playing audio

- [playAudio(\_:)](playaudio%28__%29.md): Prepares and plays a new audio playback instance on this entity.
- [playAudio(configuration:\_:)](playaudio%28configuration___%29.md): Prepares and plays a real-time audio playback instance.
- [prepareAudio(configuration:\_:)](prepareaudio%28configuration___%29.md): Prepares a real-time audio playback instances.
- [prepareAudio(\_:)](prepareaudio%28__%29.md): Prepares an audio resource for playback.
- [spatialAudio](spatialaudio.md): The component that configures the spatial rendering of sounds from this entity.
- [ambientAudio](ambientaudio.md): The component that configures the ambient rendering of sounds from this entity.
- [channelAudio](channelaudio.md): The component that configures the channel-based rendering of sounds from this entity.
