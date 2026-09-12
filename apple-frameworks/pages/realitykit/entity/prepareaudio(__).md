> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/prepareaudio(_:)](https://developer.apple.com/documentation/realitykit/entity/prepareaudio(_:))

# prepareAudio(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Prepares an audio resource for playback.

## Declaration

```swift
@MainActor @preconcurrency func prepareAudio(_ resource: AudioResource) -> AudioPlaybackController
```

## Parameters

- `resource`: The audio resource the method plays. Load an audio resource from the file system with [init(named:in:configuration:)](../audiofileresource/init%28named_in_configuration_%29.md) , or from a URL with [init(contentsOf:withName:configuration:)](../audiofileresource/init%28contentsof_withname_configuration_%29.md).

<a id="return-value"></a>

## Return Value

An [AudioPlaybackController](../audioplaybackcontroller.md) object that you can use to start and stop audio playback for this specific instance of a resource playing on this entity. You can also use this controller to update playback properties, such as gain and speed, during playback.

<a id="discussion"></a>

## Discussion

To start playback right away with default `AudioPlaybackController` properties, use the [playAudio(\_:)](playaudio%28__%29.md) method instead.

> **Note**

> As soon as the system prepares an audio resource, the audio engine begins tracking the position of the entity and allocates rendering resources, which incurs a power cost.

For optimal system resource usage, avoid preparing sounds before they are needed. For example:

```swift
let controller = entity.prepareAudio(anAudioResource)
controller.gain = -10 // Apply a custom gain, if desired.
controller.speed = 1.2 // Apply a custom speed, if desired.
controller.play()
```

## See Also

### Playing audio

- [playAudio(\_:)](playaudio%28__%29.md): Prepares and plays a new audio playback instance on this entity.
- [playAudio(configuration:\_:)](playaudio%28configuration___%29.md): Prepares and plays a real-time audio playback instance.
- [prepareAudio(configuration:\_:)](prepareaudio%28configuration___%29.md): Prepares a real-time audio playback instances.
- [stopAllAudio()](stopallaudio%28%29.md): Stops playback for all audio on this entity.
- [spatialAudio](spatialaudio.md): The component that configures the spatial rendering of sounds from this entity.
- [ambientAudio](ambientaudio.md): The component that configures the ambient rendering of sounds from this entity.
- [channelAudio](channelaudio.md): The component that configures the channel-based rendering of sounds from this entity.
