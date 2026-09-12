> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/playsoundfilenamed(_:waitforcompletion:)](https://developer.apple.com/documentation/spritekit/skaction/playsoundfilenamed(_:waitforcompletion:))

# playSoundFileNamed(\_:waitForCompletion:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that plays a sound.

## Declaration

```swift
class func playSoundFileNamed(_ soundFile: String, waitForCompletion wait: Bool) -> SKAction
```

## Parameters

- `soundFile`: The name of a sound file in the app’s bundle.
- `wait`: If [true](https://developer.apple.com/documentation/swift/true), the duration of this action is the same as the length of the audio playback. If [false](https://developer.apple.com/documentation/swift/false), the action is considered to have completed immediately.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

Use [SKAction](../skaction.md) `playSoundFileNamed:waitForCompletion:` only for short incidentals. Use [AVAudioPlayer](../../avfaudio/avaudioplayer.md) for long running background music. This action is not reversible; the reversed action is identical to the original action.

## See Also

### Controlling the Audio of a Node

- [play()](play%28%29.md): Creates an action that tells an audio node to start playback.
- [pause()](pause%28%29.md): Creates an action that tells an audio node to pause playback.
- [stop()](stop%28%29.md): Creates an action that tells an audio node to stop playback.
- [changePlaybackRate(to:duration:)](changeplaybackrate%28to_duration_%29.md): Creates an action that changes an audio node’s playback rate to a new value.
- [changePlaybackRate(by:duration:)](changeplaybackrate%28by_duration_%29.md): Creates an action that changes an audio node’s playback rate by a relative amount.
- [changeVolume(to:duration:)](changevolume%28to_duration_%29.md): Creates an action that changes an audio node’s volume to a new value.
- [changeVolume(by:duration:)](changevolume%28by_duration_%29.md): Creates an action that changes an audio node’s volume by a relative value.
- [changeObstruction(to:duration:)](changeobstruction%28to_duration_%29.md): Creates an action that changes an audio node’s obstruction to a new value.
- [changeObstruction(by:duration:)](changeobstruction%28by_duration_%29.md): Creates an action that changes an audio node’s obstruction by a relative value.
- [changeOcclusion(to:duration:)](changeocclusion%28to_duration_%29.md): Creates an action that changes an audio node’s occlusion to a new value.
- [changeOcclusion(by:duration:)](changeocclusion%28by_duration_%29.md): Creates an action that changes an audio node’s occlusion by a relative value.
- [changeReverb(to:duration:)](changereverb%28to_duration_%29.md): Creates an action that changes an audio node’s reverb to a new value.
- [changeReverb(by:duration:)](changereverb%28by_duration_%29.md): Creates an action that changes an audio node’s reverb by a relative value.
- [stereoPan(to:duration:)](stereopan%28to_duration_%29.md): Creates an action that changes an audio node’s stereo panning to a new value.
- [stereoPan(by:duration:)](stereopan%28by_duration_%29.md): Creates an action that changes an audio node’s stereo panning by a relative value.

# playSoundFileNamed:waitForCompletion: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that plays a sound.

## Declaration

```objectivec
+ (SKAction *) playSoundFileNamed:(NSString *) soundFile waitForCompletion:(BOOL) wait;
```

## Parameters

- `soundFile`: The name of a sound file in the app’s bundle.
- `wait`: If [true](https://developer.apple.com/documentation/swift/true), the duration of this action is the same as the length of the audio playback. If [false](https://developer.apple.com/documentation/swift/false), the action is considered to have completed immediately.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

Use [SKAction](../skaction.md) `playSoundFileNamed:waitForCompletion:` only for short incidentals. Use [AVAudioPlayer](../../avfaudio/avaudioplayer.md) for long running background music. This action is not reversible; the reversed action is identical to the original action.

## See Also

### Controlling the Audio of a Node

- [play](play%28%29.md): Creates an action that tells an audio node to start playback.
- [pause](pause%28%29.md): Creates an action that tells an audio node to pause playback.
- [stop](stop%28%29.md): Creates an action that tells an audio node to stop playback.
- [changePlaybackRateTo:duration:](changeplaybackrate%28to_duration_%29.md): Creates an action that changes an audio node’s playback rate to a new value.
- [changePlaybackRateBy:duration:](changeplaybackrate%28by_duration_%29.md): Creates an action that changes an audio node’s playback rate by a relative amount.
- [changeVolumeTo:duration:](changevolume%28to_duration_%29.md): Creates an action that changes an audio node’s volume to a new value.
- [changeVolumeBy:duration:](changevolume%28by_duration_%29.md): Creates an action that changes an audio node’s volume by a relative value.
- [changeObstructionTo:duration:](changeobstruction%28to_duration_%29.md): Creates an action that changes an audio node’s obstruction to a new value.
- [changeObstructionBy:duration:](changeobstruction%28by_duration_%29.md): Creates an action that changes an audio node’s obstruction by a relative value.
- [changeOcclusionTo:duration:](changeocclusion%28to_duration_%29.md): Creates an action that changes an audio node’s occlusion to a new value.
- [changeOcclusionBy:duration:](changeocclusion%28by_duration_%29.md): Creates an action that changes an audio node’s occlusion by a relative value.
- [changeReverbTo:duration:](changereverb%28to_duration_%29.md): Creates an action that changes an audio node’s reverb to a new value.
- [changeReverbBy:duration:](changereverb%28by_duration_%29.md): Creates an action that changes an audio node’s reverb by a relative value.
- [stereoPanTo:duration:](stereopan%28to_duration_%29.md): Creates an action that changes an audio node’s stereo panning to a new value.
- [stereoPanBy:duration:](stereopan%28by_duration_%29.md): Creates an action that changes an audio node’s stereo panning by a relative value.
