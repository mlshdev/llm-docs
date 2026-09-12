> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/audioplayerwithsource:](https://developer.apple.com/documentation/scenekit/scnaudioplayer/audioplayerwithsource:)

# audioPlayerWithSource:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns an audio player (creating one if necessary) to play a simple audio source.

## Declaration

```objectivec
+ (instancetype) audioPlayerWithSource:(SCNAudioSource *) source;
```

## Parameters

- `source`: An audio source object.

<a id="return-value"></a>

## Return Value

A positional audio player object.

<a id="Discussion"></a>

## Discussion

An [SCNAudioSource](../scnaudiosource.md) object represents a distinct source of audio (for example, a sound file) that can be reused and shared by many player objects. Use this method to create an audio player from such a source. When you use this method, SceneKit creates an audio player for the specified [SCNAudioSource](../scnaudiosource.md) object or, if an audio player for that source already exists and is not in use, SceneKit reuses the existing player object.

If instead you want to attach a more complex audio setup to a position in your scene—such as a mixer that varies several audio inputs in response to user input—build that setup using [AVAudioNode](../../avfaudio/avaudionode.md) objects and create a player for it with the [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md) method.

## See Also

### Creating an Audio Player

- [initWithSource:](init%28source_%29.md): Initializes an audio player for playing the specified simple audio source.
- [initWithAVAudioNode:](init%28avaudionode_%29-4u514.md): Initializes an audio player for playing the specified AVFoundation audio node.
- [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md): Deprecated. Returns an audio player (creating one if necessary) to play an audio node.
