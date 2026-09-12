> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/scenetime](https://developer.apple.com/documentation/scenekit/scnscenerenderer/scenetime)

# sceneTime (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The current scene time.

## Declaration

```swift
var sceneTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

This timestamp determines how running animations behave, which is similar to how the playhead time in a video player application determines which frame of a movie to display. Scene time applies only to animations whose [usesSceneTimeBase](../../quartzcore/caanimation/usesscenetimebase.md) property is [true](https://developer.apple.com/documentation/swift/true), including those loaded from a scene source using the [playUsingSceneTimeBase](../scnscenesource/animationimportpolicy/playusingscenetimebase.md) option.

Use this property, together with the above animation options, when you want to directly control (or allow the user to directly control) the playback of animations. For example, if you’re building an authoring tool for 3D assets, you might bind this property’s value to a slider control for scrubbing through playback of animations in a scene file.

## See Also

### Managing Scene Animation Timing

- [isPlaying](isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](loops.md): A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.

# sceneTime (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The current scene time.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval sceneTime;
```

<a id="Discussion"></a>

## Discussion

This timestamp determines how running animations behave, which is similar to how the playhead time in a video player application determines which frame of a movie to display. Scene time applies only to animations whose [usesSceneTimeBase](../../quartzcore/caanimation/usesscenetimebase.md) property is [true](https://developer.apple.com/documentation/swift/true), including those loaded from a scene source using the [SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase](../scnscenesource/animationimportpolicy/playusingscenetimebase.md) option.

Use this property, together with the above animation options, when you want to directly control (or allow the user to directly control) the playback of animations. For example, if you’re building an authoring tool for 3D assets, you might bind this property’s value to a slider control for scrubbing through playback of animations in a scene file.

## See Also

### Managing Scene Animation Timing

- [playing](isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](loops.md): A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.
