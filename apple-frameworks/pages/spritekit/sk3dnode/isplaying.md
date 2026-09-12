> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/isplaying](https://developer.apple.com/documentation/spritekit/sk3dnode/isplaying)

# isPlaying (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the scene is playing.

## Declaration

```swift
var isPlaying: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit does not increment the scene time, so animations associated with the scene do not play. Change this property’s value to [true](https://developer.apple.com/documentation/swift/true) to start animating the scene.

## See Also

### Animating a 3D Node’s Content in Scene Kit

- [loops](loops.md): A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.
- [sceneTime](scenetime.md): The current scene time.

# playing (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the scene is playing.

## Declaration

```objectivec
@property (getter=isPlaying) BOOL playing;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit does not increment the scene time, so animations associated with the scene do not play. Change this property’s value to [true](https://developer.apple.com/documentation/swift/true) to start animating the scene.

## See Also

### Animating a 3D Node’s Content in Scene Kit

- [loops](loops.md): A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.
- [sceneTime](scenetime.md): The current scene time.
