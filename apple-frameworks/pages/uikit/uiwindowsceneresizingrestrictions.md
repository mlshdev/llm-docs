> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowsceneresizingrestrictions](https://developer.apple.com/documentation/uikit/uiwindowsceneresizingrestrictions)

# UIWindowSceneResizingRestrictions (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

## Declaration

```swift
enum UIWindowSceneResizingRestrictions
```

## Topics

### Enumeration Cases

- [UIWindowSceneResizingRestrictions.freeform](uiwindowsceneresizingrestrictions/freeform.md): User resizes are only restricted by the system and other restrictions put in place
- [UIWindowSceneResizingRestrictions.none](uiwindowsceneresizingrestrictions/none.md): The user cannot resize the scene
- [UIWindowSceneResizingRestrictions.uniform](uiwindowsceneresizingrestrictions/uniform.md): User resizes are restricted to the current aspect ratio
- [UIWindowSceneResizingRestrictions.unspecified](uiwindowsceneresizingrestrictions/unspecified.md): App has no preference on user resize

### Initializers

- [init(rawValue:)](uiwindowsceneresizingrestrictions/init%28rawvalue_%29.md)

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

- [UIWindowScene.ActivationAction](uiwindowscene/activationaction.md): A menu element that requests a window scene.
- [UIWindowScene.ActivationConfiguration](uiwindowscene/activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowScene.ActivationInteraction](uiwindowscene/activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowScene.ActivationRequestOptions](uiwindowscene/activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowScene.DismissalAnimation](uiwindowscene/dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](uiwindowscene/resizingrestrictions.md)
- [UIWindowScene.PresentationStyle](uiwindowscene/presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneResizingRestrictions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

## Declaration

```objectivec
enum UIWindowSceneResizingRestrictions : NSInteger;
```

## Topics

### Enumeration Cases

- [UIWindowSceneResizingRestrictionsFreeform](uiwindowsceneresizingrestrictions/freeform.md): User resizes are only restricted by the system and other restrictions put in place
- [UIWindowSceneResizingRestrictionsNone](uiwindowsceneresizingrestrictions/none.md): The user cannot resize the scene
- [UIWindowSceneResizingRestrictionsUniform](uiwindowsceneresizingrestrictions/uniform.md): User resizes are restricted to the current aspect ratio
- [UIWindowSceneResizingRestrictionsUnspecified](uiwindowsceneresizingrestrictions/unspecified.md): App has no preference on user resize

## See Also

### Supporting types

- [UIWindowSceneActivationAction](uiwindowscene/activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationConfiguration](uiwindowscene/activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationInteraction](uiwindowscene/activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneActivationRequestOptions](uiwindowscene/activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](uiwindowscene/dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScenePresentationStyle](uiwindowscene/presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
