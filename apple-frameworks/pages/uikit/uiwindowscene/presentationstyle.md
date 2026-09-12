> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/presentationstyle](https://developer.apple.com/documentation/uikit/uiwindowscene/presentationstyle)

# UIWindowScene.PresentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The placement of a window scene relative to other scenes in the workspace.

> Use [placement](activationrequestoptions/placement.md) instead.

## Declaration

```swift
enum PresentationStyle
```

## Topics

### Constants

- [UIWindowScene.PresentationStyle.automatic](presentationstyle/automatic.md): Deprecated. The system determines the most appropriate style.
- [UIWindowScene.PresentationStyle.prominent](presentationstyle/prominent.md): Deprecated. Presents prominently above others in the current space.
- [UIWindowScene.PresentationStyle.standard](presentationstyle/standard.md): Deprecated. The default style of the system.

### Initializers

- [init(rawValue:)](presentationstyle/init%28rawvalue_%29.md): Deprecated.

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
- [UIWindowScene.DismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)

# UIWindowScenePresentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The placement of a window scene relative to other scenes in the workspace.

## Declaration

```objectivec
enum UIWindowScenePresentationStyle : NSUInteger;
```

## Topics

### Constants

- [UIWindowScenePresentationStyleAutomatic](presentationstyle/automatic.md): Deprecated. The system determines the most appropriate style.
- [UIWindowScenePresentationStyleProminent](presentationstyle/prominent.md): Deprecated. Presents prominently above others in the current space.
- [UIWindowScenePresentationStyleStandard](presentationstyle/standard.md): Deprecated. The default style of the system.

## See Also

### Supporting types

- [UIWindowSceneActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
