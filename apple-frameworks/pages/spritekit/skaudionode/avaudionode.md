> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode/avaudionode](https://developer.apple.com/documentation/spritekit/skaudionode/avaudionode)

# avAudioNode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio node’s current audio asset.

## Declaration

```swift
var avAudioNode: AVAudioNode? { get set }
```

<a id="Discussion"></a>

## Discussion

The AV audio node must refer to an [AVAudioEngine](../../avfaudio/avaudioengine.md) sound graph from a single sound source or URL.

## See Also

### Configuring Audio Nodes

- [isPositional](ispositional.md): A Boolean property that indicates whether the node’s audio is altered based on the position of the node.
- [autoplayLooped](autoplaylooped.md): A Boolean value that indicates whether the audio should play in a loop when the node is added to the scene.

# avAudioNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio node’s current audio asset.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVAudioNode * avAudioNode;
```

<a id="Discussion"></a>

## Discussion

The AV audio node must refer to an [AVAudioEngine](../../avfaudio/avaudioengine.md) sound graph from a single sound source or URL.

## See Also

### Configuring Audio Nodes

- [positional](ispositional.md): A Boolean property that indicates whether the node’s audio is altered based on the position of the node.
- [autoplayLooped](autoplaylooped.md): A Boolean value that indicates whether the audio should play in a loop when the node is added to the scene.
