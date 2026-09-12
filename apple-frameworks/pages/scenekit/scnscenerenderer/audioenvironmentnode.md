> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/audioenvironmentnode](https://developer.apple.com/documentation/scenekit/scnscenerenderer/audioenvironmentnode)

# audioEnvironmentNode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The 3D audio mixing node SceneKit uses for positional audio effects.

## Declaration

```swift
var audioEnvironmentNode: AVAudioEnvironmentNode { get }
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this audio node to spatialize sounds from [SCNAudioPlayer](../scnaudioplayer.md) objects attached to nodes in the scene. You can use this object in conjunction with the [audioEngine](audioengine.md) property to rearrange the audio graph to add other, non-spatialized audio sources or mix in audio processing effects.

## See Also

### Working With Positional Audio

- [audioListener](audiolistener.md): The node representing the listener’s position in the scene for use with positional audio effects.
- [audioEngine](audioengine.md): The audio engine SceneKit uses for playing scene sounds.

# audioEnvironmentNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The 3D audio mixing node SceneKit uses for positional audio effects.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioEnvironmentNode * audioEnvironmentNode;
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this audio node to spatialize sounds from [SCNAudioPlayer](../scnaudioplayer.md) objects attached to nodes in the scene. You can use this object in conjunction with the [audioEngine](audioengine.md) property to rearrange the audio graph to add other, non-spatialized audio sources or mix in audio processing effects.

## See Also

### Working With Positional Audio

- [audioListener](audiolistener.md): The node representing the listener’s position in the scene for use with positional audio effects.
- [audioEngine](audioengine.md): The audio engine SceneKit uses for playing scene sounds.
