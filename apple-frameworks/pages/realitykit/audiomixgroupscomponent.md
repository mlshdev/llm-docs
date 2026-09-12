> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiomixgroupscomponent](https://developer.apple.com/documentation/realitykit/audiomixgroupscomponent)

# AudioMixGroupsComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A component that provides functionality for controlling the playback of audio you assign to mix groups in a scene.

## Declaration

```swift
struct AudioMixGroupsComponent
```

<a id="overview"></a>

## Overview

When defining an [AudioMixGroup](audiomixgroup.md) for a scene in the Audio Mixer section of Reality Composer Pro, this component exists on the first descendant [Entity](entity.md) in the scene at runtime.

A common use case for `AudioMixGroupsComponent` is to simultaneously control the playback volume of every [AudioResource](audioresource.md) in an `AudioMixGroup`, such as the sound effects in a scene. The following example sets the playback volume of every `AudioResource` in the `AudioMixGroup` named SFX:

```swift
let sceneEntity = Entity(named: "ContainsAudio", in: realityKitContentBundle)

// AudioMixGroupsComponent exists on the first descendant Entity in a scene.
var audioMixGroupsEntity = sceneEntity.children[0]

// If no audio mix groups are configured for this scene in Reality Composer Pro, this component won't exist.
guard var audioMixGroupsComponent = audioMixGroupsEntity.components[AudioMixGroupsComponent.self], 
    var sfxGroup = audioMixGroupsComponent.mixGroup(named: "SFX") else {
    return
}

// This code remaps a percent value between 0 and 100 to a decibel value between -60.0 and 0.0.
// Because -60.0 dB is near the low-end of human hearing ability, this is a good value to use in this example.
let volumePercent: Float = 50
let decibels = Audio.Decibel(-40.0 + (20 * log10(volumePercent)))

// Control the playback volume with the gain property on an AudioMixGroup.
sfxGroup.gain = decibels

audioMixGroupsComponent.set(sfxGroup)
audioMixGroupsEntity.components.set(audioMixGroupsComponent)
```

To completely silence an `AudioMixGroup`, use the [isMuted](audiomixgroup/ismuted.md) property.

Use [fade(to:duration:)](audiomixgroup/fade%28to_duration_%29.md) to fade the volume of an `AudioMixGroup` over time.

## Topics

### Initializers

- [init(mixGroups:)](audiomixgroupscomponent/init%28mixgroups_%29.md): Initializes an `AudioMixGroupsComponent`.

### Instance Methods

- [mixGroup(named:)](audiomixgroupscomponent/mixgroup%28named_%29.md): Returns the audio mix group with the given name, if it exists.
- [remove(named:)](audiomixgroupscomponent/remove%28named_%29.md): Removes the audio mix group with the given name, if it exists, from the component.
- [set(\_:)](audiomixgroupscomponent/set%28__%29.md): Adds the given `AudioMixGroup` to the component.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Audio mixing

- [Mixing spatial music](mixing-spatial-music.md): Preview ray-traced reverb by adjusting a spatialized multitrack audio mix in an immersive scene.
- [AudioMixGroup](audiomixgroup.md): A group that manages the playback properties of multiple playing sounds.
