> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/playaudio(configuration:_:)](https://developer.apple.com/documentation/realitykit/entity/playaudio(configuration:_:))

# playAudio(configuration:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Prepares and plays a real-time audio playback instance.

## Declaration

```swift
@MainActor @preconcurrency func playAudio(configuration: AudioGeneratorConfiguration = .init(), _ generatorRenderHandler: @escaping Audio.GeneratorRenderHandler) throws -> AudioGeneratorController
```

## Parameters

- `configuration`: A set of configuration parameters necessary for initializing and rendering the `generatorRenderHandler`.
- `generatorRenderHandler`: The audio render handler to play. The system runs this handler to generate real-time audio.

<a id="return-value"></a>

## Return Value

An [AudioGeneratorController](../audiogeneratorcontroller.md) instance that you use to manage audio playback. Use the controller to set the volume and start or stop playback.

<a id="discussion"></a>

## Discussion

Maintain playback by keeping a reference to the generator controller.

> **Note**

> See `Audio.GeneratorRenderHandler` for compliance with Swift 6 concurrency.

## See Also

### Playing audio

- [playAudio(\_:)](playaudio%28__%29.md): Prepares and plays a new audio playback instance on this entity.
- [prepareAudio(configuration:\_:)](prepareaudio%28configuration___%29.md): Prepares a real-time audio playback instances.
- [prepareAudio(\_:)](prepareaudio%28__%29.md): Prepares an audio resource for playback.
- [stopAllAudio()](stopallaudio%28%29.md): Stops playback for all audio on this entity.
- [spatialAudio](spatialaudio.md): The component that configures the spatial rendering of sounds from this entity.
- [ambientAudio](ambientaudio.md): The component that configures the ambient rendering of sounds from this entity.
- [channelAudio](channelaudio.md): The component that configures the channel-based rendering of sounds from this entity.
