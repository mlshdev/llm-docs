> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/scenetime](https://developer.apple.com/documentation/spritekit/sk3dnode/scenetime)

# sceneTime (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The current scene time.

## Declaration

```swift
var sceneTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

This timestamp determines the behavior of running animations, similar to how the playhead time in a video player application determines which frame of a movie to display. It applies only to animations whose [usesSceneTimeBase](../../quartzcore/caanimation/usesscenetimebase.md) property is [true](https://developer.apple.com/documentation/swift/true), including those loaded from a scene source using the [playUsingSceneTimeBase](../../scenekit/scnscenesource/animationimportpolicy/playusingscenetimebase.md) option.

Use this property together with the above animation options when you want to directly control (or allow the user to directly control) the playback of animations.

## See Also

### Animating a 3D Node’s Content in Scene Kit

- [isPlaying](isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](loops.md): A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.

# sceneTime (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The current scene time.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval sceneTime;
```

<a id="Discussion"></a>

## Discussion

This timestamp determines the behavior of running animations, similar to how the playhead time in a video player application determines which frame of a movie to display. It applies only to animations whose [usesSceneTimeBase](../../quartzcore/caanimation/usesscenetimebase.md) property is [true](https://developer.apple.com/documentation/swift/true), including those loaded from a scene source using the [SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase](../../scenekit/scnscenesource/animationimportpolicy/playusingscenetimebase.md) option.

Use this property together with the above animation options when you want to directly control (or allow the user to directly control) the playback of animations.

## See Also

### Animating a 3D Node’s Content in Scene Kit

- [playing](isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](loops.md): A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.
