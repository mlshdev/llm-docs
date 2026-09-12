> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/playaudio(_:waitforcompletion:)](https://developer.apple.com/documentation/scenekit/scnaction/playaudio(_:waitforcompletion:))

# playAudio(\_:waitForCompletion:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that plays an audio source.

## Declaration

```swift
class func playAudio(_ source: SCNAudioSource, waitForCompletion wait: Bool) -> SCNAction
```

## Parameters

- `source`: The audio source to play.
- `wait`: If [true](https://developer.apple.com/documentation/swift/true), the duration of this action is the same as the length of the audio playback. If [false](https://developer.apple.com/documentation/swift/false), the action is considered to have completed immediately.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, SceneKit plays the audio source on the target node—any positional audio effects are based on the node’s position. For more information about positional audio in SceneKit, see [SCNAudioPlayer](../scnaudioplayer.md).

This action is not reversible; the reverse of this action is the same action.

# playAudioSource:waitForCompletion: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that plays an audio source.

## Declaration

```objectivec
+ (SCNAction *) playAudioSource:(SCNAudioSource *) source waitForCompletion:(BOOL) wait;
```

## Parameters

- `source`: The audio source to play.
- `wait`: If [true](https://developer.apple.com/documentation/swift/true), the duration of this action is the same as the length of the audio playback. If [false](https://developer.apple.com/documentation/swift/false), the action is considered to have completed immediately.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, SceneKit plays the audio source on the target node—any positional audio effects are based on the node’s position. For more information about positional audio in SceneKit, see [SCNAudioPlayer](../scnaudioplayer.md).

This action is not reversible; the reverse of this action is the same action.
