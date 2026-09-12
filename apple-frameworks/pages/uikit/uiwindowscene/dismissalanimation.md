> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/dismissalanimation](https://developer.apple.com/documentation/uikit/uiwindowscene/dismissalanimation)

# UIWindowScene.DismissalAnimation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the types of animations available for dismissing a scene’s windows.

## Declaration

```swift
enum DismissalAnimation
```

## Topics

### Animation styles

- [UIWindowScene.DismissalAnimation.standard](dismissalanimation/standard.md): The standard dismissal animations.
- [UIWindowScene.DismissalAnimation.commit](dismissalanimation/commit.md): Animations to use when saving changes.
- [UIWindowScene.DismissalAnimation.decline](dismissalanimation/decline.md): Animations to use when declining changes.

### Initializers

- [init(rawValue:)](dismissalanimation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [UIWindowScene.ActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowScene.ActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowScene.ActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScene.PresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneDismissalAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the types of animations available for dismissing a scene’s windows.

## Declaration

```objectivec
enum UIWindowSceneDismissalAnimation : NSInteger;
```

## Topics

### Animation styles

- [UIWindowSceneDismissalAnimationStandard](dismissalanimation/standard.md): The standard dismissal animations.
- [UIWindowSceneDismissalAnimationCommit](dismissalanimation/commit.md): Animations to use when saving changes.
- [UIWindowSceneDismissalAnimationDecline](dismissalanimation/decline.md): Animations to use when declining changes.

## See Also

### Supporting types

- [UIWindowSceneActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScenePresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
