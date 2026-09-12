> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/audiolistener](https://developer.apple.com/documentation/scenekit/scnscenerenderer/audiolistener)

# audioListener (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node representing the listener’s position in the scene for use with positional audio effects.

## Declaration

```swift
var audioListener: SCNNode? { get set }
```

<a id="Discussion"></a>

## Discussion

When you use the [SCNAudioPlayer](../scnaudioplayer.md) class to play sound, the resulting effect depends on the position of each audio source in the scene relative to the listener. For example, changes in relative position can cause a sound to be localized to the left or right channel for stereo headphone output.

This property determines the listener’s position. If the value is `nil` (the default), the listener position is always the same as that of the [pointOfView](pointofview.md) node. By providing a different node for this property, you can separate the listener position from the point of view—this produces an effect similar to that of a boom microphone in video production. For example, in a third-person game where the camera floats high in the sky above the player character, you might use the player character as the listener node so that sounds from positions nearest the player are loudest.

To place an audio source in the scene, use the [addAudioPlayer(\_:)](../scnnode/addaudioplayer%28__%29.md) method on an [SCNNode](../scnnode.md) object.

## See Also

### Working With Positional Audio

- [audioEnvironmentNode](audioenvironmentnode.md): The 3D audio mixing node SceneKit uses for positional audio effects.
- [audioEngine](audioengine.md): The audio engine SceneKit uses for playing scene sounds.

# audioListener (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The node representing the listener’s position in the scene for use with positional audio effects.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNNode * audioListener;
```

<a id="Discussion"></a>

## Discussion

When you use the [SCNAudioPlayer](../scnaudioplayer.md) class to play sound, the resulting effect depends on the position of each audio source in the scene relative to the listener. For example, changes in relative position can cause a sound to be localized to the left or right channel for stereo headphone output.

This property determines the listener’s position. If the value is `nil` (the default), the listener position is always the same as that of the [pointOfView](pointofview.md) node. By providing a different node for this property, you can separate the listener position from the point of view—this produces an effect similar to that of a boom microphone in video production. For example, in a third-person game where the camera floats high in the sky above the player character, you might use the player character as the listener node so that sounds from positions nearest the player are loudest.

To place an audio source in the scene, use the [addAudioPlayer:](../scnnode/addaudioplayer%28__%29.md) method on an [SCNNode](../scnnode.md) object.

## See Also

### Working With Positional Audio

- [audioEnvironmentNode](audioenvironmentnode.md): The 3D audio mixing node SceneKit uses for positional audio effects.
- [audioEngine](audioengine.md): The audio engine SceneKit uses for playing scene sounds.
