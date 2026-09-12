> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackgroupcontroller](https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller)

# AudioPlaybackGroupController

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A controller that manages synchronized playback for a group of audio resources.

## Declaration

```swift
@MainActor @preconcurrency class AudioPlaybackGroupController
```

<a id="overview"></a>

## Overview

You obtain an audio playback group controller by calling [prepareAudio(\_:)](audio/prepareaudio%28__%29.md) or [playAudio(\_:)](audio/playaudio%28__%29.md) with multiple [AudioResource](audioresource.md)/[Entity](entity.md) pairs. The controller coordinates all sources so they remain synchronized through playback, pause, seek, and rate changes.

Each source plays from its associated entity, so RealityKit applies that entity’s spatial audio characteristics independently. The same entity may appear multiple times with different resources, and a single entity can participate in multiple groups simultaneously.

```swift
// Load multiple audio resources.
let drums = try AudioFileResource.load(named: "Drums")
let bass  = try AudioFileResource.load(named: "Bass")
let lead  = try AudioFileResource.load(named: "Lead")

// Pair each resource with the entity that should emit it.
let pairs: [(AudioResource, Entity)] = [
    (drums, drumsEntity),
    (bass,  bassEntity),
    (lead,  leadEntity),
]

// Prepare and start synchronized playback.
let controller = try Audio.playAudio(pairs)

// Adjust the whole group together.
controller.fade(to: -6, duration: 0.5)
```

> **Note**

> Playback commences only after the entities are parented and placed within a scene.

Use [play(at:)](audioplaybackgroupcontroller/play%28at_%29.md) to schedule a synchronized start at a future `AVAudioTime`, which is useful for aligning a group with other audio sources or external clocks.

To be notified when the group finishes playing, subscribe to [AudioEvents.PlaybackGroupCompleted](audioevents/playbackgroupcompleted.md) on the scene. The event fires once when playback reaches the end of the group’s audio stream.

## Topics

### Controlling playback

- [play(at:)](audioplaybackgroupcontroller/play%28at_%29.md): Plays all audio resources in the group asynchronously at a specified time.
- [seek(to:)](audioplaybackgroupcontroller/seek%28to_%29.md): Sets the playback position to the specified time.

### Accessing playback state

- [resourcesAndEntities](audioplaybackgroupcontroller/resourcesandentities.md): The resource and entity tuples that comprise the playback group

### Instance Properties

- [gain](audioplaybackgroupcontroller/gain.md): The individual gain in decibels for all audio resources in the group.
- [isPlaying](audioplaybackgroupcontroller/isplaying.md): A Boolean value that indicates whether playback is currently active.
- [speed](audioplaybackgroupcontroller/speed.md): The rate of playback for all audio resources in the group, with a range of `[.25, 4]`

### Instance Methods

- [fade(to:duration:)](audioplaybackgroupcontroller/fade%28to_duration_%29.md): Transitions the gain to the given value over a time interval using a linear curve for all audio resources in the group.
- [pause()](audioplaybackgroupcontroller/pause%28%29.md): Pauses playback of the audio resource while maintaining the position in the audio stream.
- [play()](audioplaybackgroupcontroller/play%28%29.md): Plays the audio resource.
- [stop()](audioplaybackgroupcontroller/stop%28%29.md): Stops playback of the audio resource and discards the location in the audio stream.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Acoustics and group playback

- [ReverbMeshResource](reverbmeshresource.md): A high-level representation of a collection of vertices and edges that define a shape used for simulating reverb.
