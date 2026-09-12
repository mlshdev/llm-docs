> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/loops](https://developer.apple.com/documentation/spritekit/sk3dnode/loops)

# loops (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.

## Declaration

```swift
var loops: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit returns the scene time to zero after all animations associated with the scene have played, causing those animations to repeat. Otherwise, SceneKit stops playing the scene when all animations have completed.

## See Also

### Animating a 3D Node’s Content in Scene Kit

- [isPlaying](isplaying.md): A Boolean value that determines whether the scene is playing.
- [sceneTime](scenetime.md): The current scene time.

# loops (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.

## Declaration

```objectivec
@property (nonatomic) BOOL loops;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit returns the scene time to zero after all animations associated with the scene have played, causing those animations to repeat. Otherwise, SceneKit stops playing the scene when all animations have completed.

## See Also

### Animating a 3D Node’s Content in Scene Kit

- [playing](isplaying.md): A Boolean value that determines whether the scene is playing.
- [sceneTime](scenetime.md): The current scene time.
