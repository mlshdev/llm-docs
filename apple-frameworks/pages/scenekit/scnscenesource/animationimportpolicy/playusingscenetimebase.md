> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/animationimportpolicy/playusingscenetimebase](https://developer.apple.com/documentation/scenekit/scnscenesource/animationimportpolicy/playusingscenetimebase)

# playUsingSceneTimeBase (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Animations loaded from the scene file are immediately added to the scene and played according to the scene’s [sceneTime](../../scnscenerenderer/scenetime.md) property.

## Declaration

```swift
static let playUsingSceneTimeBase: SCNSceneSource.AnimationImportPolicy
```

<a id="Discussion"></a>

## Discussion

Using this policy is equivalent to manually loading each animation, setting its [usesSceneTimeBase](../../../quartzcore/caanimation/usesscenetimebase.md) property to [true](https://developer.apple.com/documentation/swift/true), and adding it to the appropriate element of the scene. Use this policy when you want to directly control (or let the user directly control) the progress of animations.

## See Also

### Type Properties

- [doNotPlay](donotplay.md): Animations are not loaded from the scene file.
- [play](play.md): Animations loaded from the scene file are immediately added to the scene and played once.
- [playRepeatedly](playrepeatedly.md): Animations loaded from the scene file are immediately added to the scene and played repeatedly.

# SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Animations loaded from the scene file are immediately added to the scene and played according to the scene’s [sceneTime](../../scnscenerenderer/scenetime.md) property.

## Declaration

```objectivec
extern SCNSceneSourceAnimationImportPolicy const SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase;
```

<a id="Discussion"></a>

## Discussion

Using this policy is equivalent to manually loading each animation, setting its [usesSceneTimeBase](../../../quartzcore/caanimation/usesscenetimebase.md) property to [true](https://developer.apple.com/documentation/swift/true), and adding it to the appropriate element of the scene. Use this policy when you want to directly control (or let the user directly control) the progress of animations.

## See Also

### Type Properties

- [SCNSceneSourceAnimationImportPolicyDoNotPlay](donotplay.md): Animations are not loaded from the scene file.
- [SCNSceneSourceAnimationImportPolicyPlay](play.md): Animations loaded from the scene file are immediately added to the scene and played once.
- [SCNSceneSourceAnimationImportPolicyPlayRepeatedly](playrepeatedly.md): Animations loaded from the scene file are immediately added to the scene and played repeatedly.
