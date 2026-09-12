> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller)

# AudioPlaybackController

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A controller that manages an audio playback instance.

## Declaration

```swift
@MainActor @preconcurrency class AudioPlaybackController
```

<a id="overview"></a>

## Overview

You can obtain an audio playback controller by calling an entity’s Entity/prepareAudio(*:) or Entity/playAudio(*:) method which creates a controller with the associated [AudioResource](audioresource.md). To play multiple instances of a resource, call [playAudio(\_:)](entity/playaudio%28__%29.md) to obtain new AudioPlaybackControllers.

During playback, the audio appears to come from the entity that you used to create the controller. As you move around the MR scene, RealityKit modulates the characteristics of the audio to account for your location.

> **Note**

> Playback commences only after the entity is parented and placed within a scene.

After playback completes, or if you call the [stop()](audioplaybackcontroller/stop%28%29.md) method, the audio resource resets, allowing you to replay the resource from the beginning. Alternatively, you can enable indefinite looping by setting the `loops` property of the audio resource to `true`.

Look for one of the events in [AudioEvents](audioevents.md) if you want to be alerted when certain aspects of audio playback occur.

## Topics

### Managing the resource

- [resource](audioplaybackcontroller/resource.md): The resource that provides the audio stream.

### Setting the volume

- [gain](audioplaybackcontroller/gain.md): The individual gain in decibels of the audio playback controller output.
- [fade(to:duration:)](audioplaybackcontroller/fade%28to_duration_%29.md): Transitions the gain to the given value over a time interval using a linear curve.

### Setting the speed

- [speed](audioplaybackcontroller/speed.md): The rate of playback of the audio resource, with a range of `[.25, 4]`

### Setting the reverb

- [reverbSendLevel](audioplaybackcontroller/reverbsendlevel.md): Deprecated. The send level from this playback controller to the reverb system.

### Starting and stopping audio playback

- [play()](audioplaybackcontroller/play%28%29.md): Plays the audio resource.
- [pause()](audioplaybackcontroller/pause%28%29.md): Pauses playback of the audio resource while maintaining the position in the audio stream.
- [stop()](audioplaybackcontroller/stop%28%29.md): Stops playback of the audio resource and discards the location in the audio stream.
- [isPlaying](audioplaybackcontroller/isplaying.md): A Boolean value that indicates whether playback is currently active.

### Handling completion

- [completionHandler](audioplaybackcontroller/completionhandler.md): A closure that the playback controller executes when it reaches the end of the audio stream.

### Finding the associated entity

- [entity](audioplaybackcontroller/entity.md): The entity from which the audio stream emanates.

### Scheduling audio playback

- [play(at:)](audioplaybackcontroller/play%28at_%29.md): Plays the audio resource asynchronously at a specified time.

### Instance Methods

- [seek(to:)](audioplaybackcontroller/seek%28to_%29.md): Sets the playback position to the specified time.

### Type Aliases

- [AudioPlaybackController.Decibel](audioplaybackcontroller/decibel.md): Deprecated. The unit for measuring intensity of sound on a logarithmic scale.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback controllers

- [AudioGeneratorController](audiogeneratorcontroller.md): A controller that manages the playback of a real-time audio stream.
- [AudioGeneratorConfiguration](audiogeneratorconfiguration.md): A container for various settings for preparing and playing an AudioGeneratorController.
- [AudioEvents](audioevents.md): Events associated with audio playback.
- [PlayAudioAction](playaudioaction.md): An action which plays an audio resource on the given target entity.
