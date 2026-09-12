> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiomixgroup](https://developer.apple.com/documentation/realitykit/audiomixgroup)

# AudioMixGroup

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A group that manages the playback properties of multiple playing sounds.

## Declaration

```swift
struct AudioMixGroup
```

<a id="overview"></a>

## Overview

A mix group component manages the playback parameters for a collection of different [AudioPlaybackController](audioplaybackcontroller.md) and [AudioGeneratorController](audiogeneratorcontroller.md) instances. Properties such as [gain](audiomixgroup/gain.md), [fade(to:duration:)](audiomixgroup/fade%28to_duration_%29.md), and [speed](audiomixgroup/speed.md) are multiplicative with the parameters you set on the controller.

You  associate audio resources to a mix group by setting the `mixGroupName` parameter in the resource’s configuration. For an example, see [mixGroupName](audiofileresource/configuration-swift.struct/mixgroupname.md). Enable a mix group by adding it to an [AudioMixGroupsComponent](audiomixgroupscomponent.md) structure on an entity in the scene. The scene where the component belongs limits the scope of the mix group.

```swift
var mixGroup = AudioMixGroup(name: "myMixGroup")
entity.components.set(AudioMixGroupsComponent(mixGroups: [mixGroup]))
```

## Topics

### Initializers

- [init(name:)](audiomixgroup/init%28name_%29.md): Creates a mix group.

### Instance Properties

- [gain](audiomixgroup/gain.md): The overall level for all sounds of an audio mix group in relative decibels.
- [isMuted](audiomixgroup/ismuted.md): A Boolean value that indicates whether an audio mix group emits any sound.
- [name](audiomixgroup/name.md): The name of an audio mix group.
- [speed](audiomixgroup/speed.md): The rate of playback for an audio mix group.

### Instance Methods

- [fade(to:duration:)](audiomixgroup/fade%28to_duration_%29.md): Transitions the gain to a value over a time interval using a linear curve.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Audio mixing

- [Mixing spatial music](mixing-spatial-music.md): Preview ray-traced reverb by adjusting a spatialized multitrack audio mix in an immersive scene.
- [AudioMixGroupsComponent](audiomixgroupscomponent.md): A component that provides functionality for controlling the playback of audio you assign to mix groups in a scene.
