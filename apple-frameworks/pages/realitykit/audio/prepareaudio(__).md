> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/prepareaudio(_:)](https://developer.apple.com/documentation/realitykit/audio/prepareaudio(_:))

# prepareAudio(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Prepares multiple audio resources for synchronized playback without starting them.

## Declaration

```swift
@MainActor static func prepareAudio(_ resourcesAndEntities: [(AudioResource, Entity)]) throws -> AudioPlaybackGroupController
```

## Parameters

- `resourcesAndEntities`: An array of tuples pairing each audio resource with the entity that emits it. The same entity may appear multiple times with different resources, and a single entity can participate in multiple groups.

<a id="return-value"></a>

## Return Value

A controller that coordinates playback of the synchronized group.

<a id="discussion"></a>

## Discussion

Use this method to set up a group of audio sources that you want to play together. Each resource is paired with the entity that emits it. Call [play()](../audioplaybackgroupcontroller/play%28%29.md) or [play(at:)](../audioplaybackgroupcontroller/play%28at_%29.md) to begin playback.

> **Throws**

> An error if audio preparation fails.

## See Also

### Playing audio resources

- [playAudio(\_:)](playaudio%28__%29.md): Prepares and plays multiple audio resources for synchronized playback
- [playAudio(\_:at:)](playaudio%28__at_%29.md): Prepares and plays multiple audio resources for synchronized playback at a specified time.
