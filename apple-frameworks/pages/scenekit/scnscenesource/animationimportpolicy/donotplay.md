> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/animationimportpolicy/donotplay](https://developer.apple.com/documentation/scenekit/scnscenesource/animationimportpolicy/donotplay)

# doNotPlay (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Animations are not loaded from the scene file.

## Declaration

```swift
static let doNotPlay: SCNSceneSource.AnimationImportPolicy
```

<a id="Discussion"></a>

## Discussion

To play animations stored in the scene file, load them manually using the [entryWithIdentifier:withClass:](../entrywithidentifier_withclass_.md) method.

## See Also

### Type Properties

- [play](play.md): Animations loaded from the scene file are immediately added to the scene and played once.
- [playRepeatedly](playrepeatedly.md): Animations loaded from the scene file are immediately added to the scene and played repeatedly.
- [playUsingSceneTimeBase](playusingscenetimebase.md): Animations loaded from the scene file are immediately added to the scene and played according to the scene’s [sceneTime](../../scnscenerenderer/scenetime.md) property.

# SCNSceneSourceAnimationImportPolicyDoNotPlay (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Animations are not loaded from the scene file.

## Declaration

```objectivec
extern SCNSceneSourceAnimationImportPolicy const SCNSceneSourceAnimationImportPolicyDoNotPlay;
```

<a id="Discussion"></a>

## Discussion

To play animations stored in the scene file, load them manually using the [entryWithIdentifier:withClass:](../entrywithidentifier_withclass_.md) method.

## See Also

### Type Properties

- [SCNSceneSourceAnimationImportPolicyPlay](play.md): Animations loaded from the scene file are immediately added to the scene and played once.
- [SCNSceneSourceAnimationImportPolicyPlayRepeatedly](playrepeatedly.md): Animations loaded from the scene file are immediately added to the scene and played repeatedly.
- [SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase](playusingscenetimebase.md): Animations loaded from the scene file are immediately added to the scene and played according to the scene’s [sceneTime](../../scnscenerenderer/scenetime.md) property.
