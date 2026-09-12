> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationconfiguration](https://developer.apple.com/documentation/uikit/uiwindowscene/activationconfiguration)

# UIWindowScene.ActivationConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object that provides configuration options for a window scene request.

## Declaration

```swift
class ActivationConfiguration
```

<a id="overview"></a>

## Overview

Use a [UIWindowScene.ActivationConfiguration](activationconfiguration.md) object to request a new window scene from the system. An activation configuration requires a [NSUserActivity](../../foundation/nsuseractivity.md) object that represents the scene’s content. You can specify a preferred presentation style for the new scene by including an optional [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md) object. The system automatically animates the transition to the new scene, but you can customize the transition by providing an optional targeted preview.

To request scene activation from a view interaction, use an instance of this class with [UIWindowScene.ActivationInteraction](activationinteraction.md). To request scene activation from a context menu, use an instance of this class with [UIWindowScene.ActivationAction](activationaction.md).

## Topics

### Creating an activation configuration

- [init(userActivity:options:preview:)](activationconfiguration/init%28useractivity_options_preview_%29.md): Creates an activation configuration.

### Getting information about the activation configuration

- [userActivity](activationconfiguration/useractivity.md): The user activity used to request a scene.
- [options](activationconfiguration/options.md): Options for customizing the scene request.
- [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [preview](activationconfiguration/preview.md): An optional targeted preview that the system uses to animate the transition to the new scene.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Supporting types

- [UIWindowScene.ActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowScene.ActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowScene.DismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScene.PresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneActivationConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object that provides configuration options for a window scene request.

## Declaration

```objectivec
@interface UIWindowSceneActivationConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use a [UIWindowSceneActivationConfiguration](activationconfiguration.md) object to request a new window scene from the system. An activation configuration requires a [NSUserActivity](../../foundation/nsuseractivity.md) object that represents the scene’s content. You can specify a preferred presentation style for the new scene by including an optional [UIWindowSceneActivationRequestOptions](activationrequestoptions.md) object. The system automatically animates the transition to the new scene, but you can customize the transition by providing an optional targeted preview.

To request scene activation from a view interaction, use an instance of this class with [UIWindowSceneActivationInteraction](activationinteraction.md). To request scene activation from a context menu, use an instance of this class with [UIWindowSceneActivationAction](activationaction.md).

## Topics

### Creating an activation configuration

- [initWithUserActivity:](../uiwindowsceneactivationconfiguration/initwithuseractivity_.md): Creates an activation configuration.

### Getting information about the activation configuration

- [userActivity](activationconfiguration/useractivity.md): The user activity used to request a scene.
- [options](activationconfiguration/options.md): Options for customizing the scene request.
- [UIWindowSceneActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [preview](activationconfiguration/preview.md): An optional targeted preview that the system uses to animate the transition to the new scene.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Supporting types

- [UIWindowSceneActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScenePresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
