> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode/ispositional](https://developer.apple.com/documentation/spritekit/skaudionode/ispositional)

# isPositional (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean property that indicates whether the node’s audio is altered based on the position of the node.

## Declaration

```swift
var isPositional: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the audio mixer considers the position and velocity of the [SKAudioNode](../skaudionode.md) relative to scene’s current [listener](../skscene/listener.md) node. The mixer applies distance attenuation, doppler shift, and pan effects to the sound. If [false](https://developer.apple.com/documentation/swift/false), then the sound is played normally. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Audio Nodes

- [avAudioNode](avaudionode.md): The audio node’s current audio asset.
- [autoplayLooped](autoplaylooped.md): A Boolean value that indicates whether the audio should play in a loop when the node is added to the scene.

# positional (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean property that indicates whether the node’s audio is altered based on the position of the node.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isPositional) BOOL positional;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the audio mixer considers the position and velocity of the [SKAudioNode](../skaudionode.md) relative to scene’s current [listener](../skscene/listener.md) node. The mixer applies distance attenuation, doppler shift, and pan effects to the sound. If [false](https://developer.apple.com/documentation/swift/false), then the sound is played normally. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Audio Nodes

- [avAudioNode](avaudionode.md): The audio node’s current audio asset.
- [autoplayLooped](autoplaylooped.md): A Boolean value that indicates whether the audio should play in a loop when the node is added to the scene.
