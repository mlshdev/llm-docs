> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/audioengine](https://developer.apple.com/documentation/spritekit/skscene/audioengine)

# audioEngine (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The AVFoundation audio engine used to play audio from audio nodes contained in the scene.

## Declaration

```swift
var audioEngine: AVAudioEngine { get }
```

<a id="Discussion"></a>

## Discussion

An audio engine instance is automatically created for you when the scene is created. You can use methods and properties on a scene’s audio engine for overall control of all of its child audio nodes. The following code shows how a scene’s overall volume can be reduced from its default of 1.0 down to 0.2 and then paused:

```swift
let scene = SKScene()
scene.audioEngine.mainMixerNode.outputVolume = 0.2
scene.audioEngine.pause()
```

## See Also

### Adding Positional Audio

- [Using Audio Nodes with the Scene’s Listener](../using-audio-nodes-with-the-scene-s-listener.md): Add audio to your scene, and optionally give it 2D-positional mixing characteristics.
- [listener](listener.md): A node used to determine the position of the listener for positional audio in the scene.

# audioEngine (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The AVFoundation audio engine used to play audio from audio nodes contained in the scene.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) AVAudioEngine * audioEngine;
```

<a id="Discussion"></a>

## Discussion

An audio engine instance is automatically created for you when the scene is created. You can use methods and properties on a scene’s audio engine for overall control of all of its child audio nodes. The following code shows how a scene’s overall volume can be reduced from its default of 1.0 down to 0.2 and then paused:

```swift
let scene = SKScene()
scene.audioEngine.mainMixerNode.outputVolume = 0.2
scene.audioEngine.pause()
```

## See Also

### Adding Positional Audio

- [Using Audio Nodes with the Scene’s Listener](../using-audio-nodes-with-the-scene-s-listener.md): Add audio to your scene, and optionally give it 2D-positional mixing characteristics.
- [listener](listener.md): A node used to determine the position of the listener for positional audio in the scene.
