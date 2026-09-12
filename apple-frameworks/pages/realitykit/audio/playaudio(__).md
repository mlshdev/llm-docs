> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/playaudio(_:)](https://developer.apple.com/documentation/realitykit/audio/playaudio(_:))

# playAudio(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Prepares and plays multiple audio resources for synchronized playback

## Declaration

```swift
@discardableResult @MainActor static func playAudio(_ resourcesAndEntities: [(AudioResource, Entity)]) throws -> AudioPlaybackGroupController
```

## Parameters

- `resourcesAndEntities`: An array of tuples containing audio resources and their associated entities. The same entity can appear multiple times with different resources.

<a id="return-value"></a>

## Return Value

An `AudioPlaybackGroupController` for the synchronized group.

<a id="discussion"></a>

## Discussion

This method creates an `AudioPlaybackGroupController` that coordinates playback across multiple entity/resource pairs. All audio sources in the group will be synchronized to sample-accurate precision. After the controller is created, the [play()](../audioplaybackgroupcontroller/play%28%29.md) method of the controller that it returns is immediately called.

> **Throws**

> An error if the audio preparation fails.

<a id="Usage-Notes"></a>

## Usage Notes

- The same entity can be used with multiple resources in the same group
- Entities can participate in multiple groups simultaneously
- The completion handler fires when the longest resource finishes

## See Also

### Playing audio resources

- [playAudio(\_:at:)](playaudio%28__at_%29.md): Prepares and plays multiple audio resources for synchronized playback at a specified time.
- [prepareAudio(\_:)](prepareaudio%28__%29.md): Prepares multiple audio resources for synchronized playback without starting them.
