> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/stop()](https://developer.apple.com/documentation/spritekit/skaction/stop())

# stop() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that tells an audio node to stop playback.

## Declaration

```swift
class func stop() -> SKAction
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action may only be executed on an [SKAudioNode](../skaudionode.md) object. The audio is stopped, and if restarted, begins at the beginning.

This action is not reversible.

## See Also

### Controlling the Audio of a Node

- [playSoundFileNamed(\_:waitForCompletion:)](playsoundfilenamed%28__waitforcompletion_%29.md): Creates an action that plays a sound.
- [play()](play%28%29.md): Creates an action that tells an audio node to start playback.
- [pause()](pause%28%29.md): Creates an action that tells an audio node to pause playback.
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

# stop (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that tells an audio node to stop playback.

## Declaration

```objectivec
+ (SKAction *) stop;
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action may only be executed on an [SKAudioNode](../skaudionode.md) object. The audio is stopped, and if restarted, begins at the beginning.

This action is not reversible.

## See Also

### Controlling the Audio of a Node

- [playSoundFileNamed:waitForCompletion:](playsoundfilenamed%28__waitforcompletion_%29.md): Creates an action that plays a sound.
- [play](play%28%29.md): Creates an action that tells an audio node to start playback.
- [pause](pause%28%29.md): Creates an action that tells an audio node to pause playback.
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
