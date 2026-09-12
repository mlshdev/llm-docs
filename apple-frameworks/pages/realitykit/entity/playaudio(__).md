> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/playaudio(_:)](https://developer.apple.com/documentation/realitykit/entity/playaudio(_:))

# playAudio(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Prepares and plays a new audio playback instance on this entity.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func playAudio(_ resource: AudioResource) -> AudioPlaybackController
```

## Parameters

- `resource`: The audio resource the method plays. Load an audio resource from the file system with [init(named:in:configuration:)](../audiofileresource/init%28named_in_configuration_%29.md) , or from a URL with [init(contentsOf:withName:configuration:)](../audiofileresource/init%28contentsof_withname_configuration_%29.md).

<a id="return-value"></a>

## Return Value

An [AudioPlaybackController](../audioplaybackcontroller.md) object that you can use to start and stop audio playback for this specific instance of a resource playing on this entity. You can also use this controller to update playback properties, such as gain and speed, during playback.

<a id="discussion"></a>

## Discussion

The method prepares the audio by calling [prepareAudio(\_:)](prepareaudio%28__%29.md), and then immediately calls the [play()](../audioplaybackcontroller/play%28%29.md) method of the controller that it returns. To begin multiple playback instances you can call `playAudio` multiple times.

## See Also

### Playing audio

- [playAudio(configuration:\_:)](playaudio%28configuration___%29.md): Prepares and plays a real-time audio playback instance.
- [prepareAudio(configuration:\_:)](prepareaudio%28configuration___%29.md): Prepares a real-time audio playback instances.
- [prepareAudio(\_:)](prepareaudio%28__%29.md): Prepares an audio resource for playback.
- [stopAllAudio()](stopallaudio%28%29.md): Stops playback for all audio on this entity.
- [spatialAudio](spatialaudio.md): The component that configures the spatial rendering of sounds from this entity.
- [ambientAudio](ambientaudio.md): The component that configures the ambient rendering of sounds from this entity.
- [channelAudio](channelaudio.md): The component that configures the channel-based rendering of sounds from this entity.
