> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/playaudio(_:at:)](https://developer.apple.com/documentation/realitykit/audio/playaudio(_:at:))

# playAudio(\_:at:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Prepares and plays multiple audio resources for synchronized playback at a specified time.

## Declaration

```swift
@discardableResult @MainActor static func playAudio(_ resourcesAndEntities: [(AudioResource, Entity)], at time: AVAudioTime) throws -> AudioPlaybackGroupController
```

## Parameters

- `resourcesAndEntities`: An array of tuples containing audio resources and their associated entities. The same entity can appear multiple times with different resources.
- `time`: The AVAudioTime when the audio file should start playing.

<a id="return-value"></a>

## Return Value

An `AudioPlaybackGroupController` for the synchronized group.

<a id="discussion"></a>

## Discussion

This method creates an `AudioPlaybackGroupController` that coordinates playback across multiple entity/resource pairs. All audio sources in the group will be synchronized to sample-accurate precision. After the controller is created, the [play(at:)](../audioplaybackgroupcontroller/play%28at_%29.md) method of the controller that it returns is immediately called.

Any call to play() will cancel pending scheduled time and play audio immediately, while any call to playAudio(at: AVAudioTime) will cancel current scheduled time and schedule for new time.

To maintain precise timing, audio preparation must complete before the scheduled playback time. If preparation is still in progress when the scheduled time arrives, or if the scheduled time is in the past, playback will start immediately, which may result in timing drift.

The returned controller’s [isPlaying](../audioplaybackgroupcontroller/isplaying.md) property becomes `true` immediately after this call returns. Code that checks `isPlaying` to decide whether to trigger another action — such as starting a different sound — reads the correct state without racing against the scheduled start time.

> **Throws**

> An error if the audio preparation fails.

<a id="Usage-Notes"></a>

## Usage Notes

- The same entity can be used with multiple resources in the same group
- Entities can participate in multiple groups simultaneously
- The completion handler fires when the longest resource finishes

## See Also

### Playing audio resources

- [playAudio(\_:)](playaudio%28__%29.md): Prepares and plays multiple audio resources for synchronized playback
- [prepareAudio(\_:)](prepareaudio%28__%29.md): Prepares multiple audio resources for synchronized playback without starting them.
