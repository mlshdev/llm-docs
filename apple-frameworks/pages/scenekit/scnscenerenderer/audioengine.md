> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/audioengine](https://developer.apple.com/documentation/scenekit/scnscenerenderer/audioengine)

# audioEngine (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The audio engine SceneKit uses for playing scene sounds.

## Declaration

```swift
var audioEngine: AVAudioEngine { get }
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this audio engine to play sounds from [SCNAudioPlayer](../scnaudioplayer.md) objects attached to nodes in the scene. You can use this object directly to add other sound sources not related to scene contents, or to add other sound processing nodes or mixing nodes to the audio engine. To identify the node SceneKit uses for spatializing scene sounds when connecting other nodes, use the [audioEnvironmentNode](audioenvironmentnode.md) property.

## See Also

### Working With Positional Audio

- [audioListener](audiolistener.md): The node representing the listener’s position in the scene for use with positional audio effects.
- [audioEnvironmentNode](audioenvironmentnode.md): The 3D audio mixing node SceneKit uses for positional audio effects.

# audioEngine (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio engine SceneKit uses for playing scene sounds.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioEngine * audioEngine;
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this audio engine to play sounds from [SCNAudioPlayer](../scnaudioplayer.md) objects attached to nodes in the scene. You can use this object directly to add other sound sources not related to scene contents, or to add other sound processing nodes or mixing nodes to the audio engine. To identify the node SceneKit uses for spatializing scene sounds when connecting other nodes, use the [audioEnvironmentNode](audioenvironmentnode.md) property.

## See Also

### Working With Positional Audio

- [audioListener](audiolistener.md): The node representing the listener’s position in the scene for use with positional audio effects.
- [audioEnvironmentNode](audioenvironmentnode.md): The 3D audio mixing node SceneKit uses for positional audio effects.
