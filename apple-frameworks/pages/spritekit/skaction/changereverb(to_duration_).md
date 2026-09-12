> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/changereverb(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/changereverb(to:duration:))

# changeReverb(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that changes an audio node’s reverb to a new value.

## Declaration

```swift
class func changeReverb(to v: Float, duration: TimeInterval) -> SKAction
```

## Parameters

- `v`: The new value for the reverb. The value should be between `0.0` and `1.0`, inclusive.
- `duration`: The duration of the animation, in seconds.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the audio node’s reverb animates from its current value to its new value. For more information, see [AVAudio3DMixing](../../avfaudio/avaudio3dmixing.md).

This action is not reversible.

## See Also

### Controlling the Audio of a Node

- [playSoundFileNamed(\_:waitForCompletion:)](playsoundfilenamed%28__waitforcompletion_%29.md): Creates an action that plays a sound.
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
- [changeReverb(by:duration:)](changereverb%28by_duration_%29.md): Creates an action that changes an audio node’s reverb by a relative value.
- [stereoPan(to:duration:)](stereopan%28to_duration_%29.md): Creates an action that changes an audio node’s stereo panning to a new value.
- [stereoPan(by:duration:)](stereopan%28by_duration_%29.md): Creates an action that changes an audio node’s stereo panning by a relative value.

# changeReverbTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that changes an audio node’s reverb to a new value.

## Declaration

```objectivec
+ (SKAction *) changeReverbTo:(float) v duration:(NSTimeInterval) duration;
```

## Parameters

- `v`: The new value for the reverb. The value should be between `0.0` and `1.0`, inclusive.
- `duration`: The duration of the animation, in seconds.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the audio node’s reverb animates from its current value to its new value. For more information, see [AVAudio3DMixing](../../avfaudio/avaudio3dmixing.md).

This action is not reversible.

## See Also

### Controlling the Audio of a Node

- [playSoundFileNamed:waitForCompletion:](playsoundfilenamed%28__waitforcompletion_%29.md): Creates an action that plays a sound.
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
- [changeReverbBy:duration:](changereverb%28by_duration_%29.md): Creates an action that changes an audio node’s reverb by a relative value.
- [stereoPanTo:duration:](stereopan%28to_duration_%29.md): Creates an action that changes an audio node’s stereo panning to a new value.
- [stereoPanBy:duration:](stereopan%28by_duration_%29.md): Creates an action that changes an audio node’s stereo panning by a relative value.
