> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/audioplayerwithavaudionode:](https://developer.apple.com/documentation/scenekit/scnaudioplayer/audioplayerwithavaudionode:)

# audioPlayerWithAVAudioNode:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns an audio player (creating one if necessary) to play an audio node.

## Declaration

```objectivec
+ (instancetype) audioPlayerWithAVAudioNode:(AVAudioNode *) audioNode;
```

## Parameters

- `audioNode`: An audio node object.

<a id="return-value"></a>

## Return Value

A positional audio player object.

<a id="Discussion"></a>

## Discussion

Creating an audio player from an audio node does not attach that node to an [AVAudioEngine](../../avfaudio/avaudioengine.md) object for mixing and playback—instead, this option allows you to build your own audio node graph for custom effects before manually adding it to the [audioEngine](../scnscenerenderer/audioengine.md) object of the view (or other SceneKit renderer) displaying the scene. Then, after you attach the audio player to an [SCNNode](../scnnode.md) object, SceneKit continually updates the audio node’s 3D mixing parameters to match the position of the scene node.

When you use this method, SceneKit creates an audio player for the specified [AVAudioNode](../../avfaudio/avaudionode.md) object or, if an audio player for that node already exists and is not in use, SceneKit reuses the existing player object.

## See Also

### Creating an Audio Player

- [initWithSource:](init%28source_%29.md): Initializes an audio player for playing the specified simple audio source.
- [initWithAVAudioNode:](init%28avaudionode_%29-4u514.md): Initializes an audio player for playing the specified AVFoundation audio node.
- [audioPlayerWithSource:](audioplayerwithsource_.md): Deprecated. Returns an audio player (creating one if necessary) to play a simple audio source.
