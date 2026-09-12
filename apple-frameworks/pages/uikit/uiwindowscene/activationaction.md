> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationaction](https://developer.apple.com/documentation/uikit/uiwindowscene/activationaction)

# UIWindowScene.ActivationAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A menu element that requests a window scene.

## Declaration

```swift
class ActivationAction
```

<a id="overview"></a>

## Overview

Create a [UIWindowScene.ActivationAction](activationaction.md) object to facilitate activating a new window scene from a menu item. You initialize the action with a closure that the system executes when a user selects the item. The closure should return a [UIWindowScene.ActivationConfiguration](activationconfiguration.md) object. You can specify an alternate action to display on iPhone and apps that don’t support multiple windows.

## Topics

### Creating an activation action

- [init(title:subtitle:image:identifier:discoverabilityTitle:attributes:alternate:\_:)](activationaction/init%28title_subtitle_image_identifier_discoverabilitytitle_attributes_alternate___%29.md): Creates an activation action using the specified parameters.
- [UIWindowScene.ActivationAction.ConfigurationProvider](activationaction/configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation action.

### Getting information about the activation action

- [title](activationaction/title.md): The action’s title.

## Relationships

### Inherits From

- [UIAction](../uiaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uiaccessibilityidentification.md)
- [UIMenuLeaf](../uimenuleaf.md)

## See Also

### Supporting types

- [UIWindowScene.ActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowScene.ActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowScene.DismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScene.PresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneActivationAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A menu element that requests a window scene.

## Declaration

```objectivec
@interface UIWindowSceneActivationAction : UIAction
```

<a id="overview"></a>

## Overview

Create a [UIWindowSceneActivationAction](activationaction.md) object to facilitate activating a new window scene from a menu item. You initialize the action with a closure that the system executes when a user selects the item. The closure should return a [UIWindowSceneActivationConfiguration](activationconfiguration.md) object. You can specify an alternate action to display on iPhone and apps that don’t support multiple windows.

## Topics

### Creating an activation action

- [actionWithIdentifier:alternateAction:configurationProvider:](../uiwindowsceneactivationaction/actionwithidentifier_alternateaction_configurationprovider_.md): Creates an activation action with the specified parameters.
- [UIWindowSceneActivationActionConfigurationProvider](activationaction/configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation action.

### Getting information about the activation action

- [title](activationaction/title.md): The action’s title.

## Relationships

### Inherits From

- [UIAction](../uiaction.md)

## See Also

### Supporting types

- [UIWindowSceneActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScenePresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
