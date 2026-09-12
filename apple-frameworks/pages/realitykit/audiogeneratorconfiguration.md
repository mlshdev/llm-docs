> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiogeneratorconfiguration](https://developer.apple.com/documentation/realitykit/audiogeneratorconfiguration)

# AudioGeneratorConfiguration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A container for various settings for preparing and playing an AudioGeneratorController.

## Declaration

```swift
struct AudioGeneratorConfiguration
```

## Topics

### Initializers

- [init(layoutTag:mixGroupName:)](audiogeneratorconfiguration/init%28layouttag_mixgroupname_%29.md)

### Instance Properties

- [layoutTag](audiogeneratorconfiguration/layouttag.md): The format in which the audio channels are specified.
- [mixGroupName](audiogeneratorconfiguration/mixgroupname.md): An arbitrary name that assigns an audio resource to an audio mix group.

## See Also

### Playback controllers

- [AudioPlaybackController](audioplaybackcontroller.md): A controller that manages an audio playback instance.
- [AudioGeneratorController](audiogeneratorcontroller.md): A controller that manages the playback of a real-time audio stream.
- [AudioEvents](audioevents.md): Events associated with audio playback.
- [PlayAudioAction](playaudioaction.md): An action which plays an audio resource on the given target entity.
