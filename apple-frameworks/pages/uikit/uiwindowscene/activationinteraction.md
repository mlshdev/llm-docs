> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationinteraction](https://developer.apple.com/documentation/uikit/uiwindowscene/activationinteraction)

# UIWindowScene.ActivationInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.

## Declaration

```swift
@MainActor class ActivationInteraction
```

<a id="overview"></a>

## Overview

Create a [UIWindowScene.ActivationInteraction](activationinteraction.md) object when you want to facilitate requesting scene activation when the user pinches open on a view. You initialize the interaction with a closure that the system executes when the user triggers the interaction. The closure should return a [UIWindowScene.ActivationConfiguration](activationconfiguration.md) object. You also provide an error-handler closure that the system executes if the scene activation request fails.

To request scene activation from an interaction with a [UICollectionView](../uicollectionview.md) cell, use the [collectionView(\_:sceneActivationConfigurationForItemAt:point:)](../uicollectionviewdelegate/collectionview%28__sceneactivationconfigurationforitemat_point_%29.md) method.

## Topics

### Creating an activation interaction

- [init(\_:errorHandler:)](activationinteraction/init%28__errorhandler_%29.md): Creates an activation interaction.
- [UIWindowScene.ActivationInteraction.ConfigurationProvider](activationinteraction/configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation interaction.

### Initializers

- [init(configurationProvider:errorHandler:)](activationinteraction/init%28configurationprovider_errorhandler_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](../uiinteraction.md)

## See Also

### Supporting types

- [UIWindowScene.ActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowScene.ActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowScene.DismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScene.PresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneActivationInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.

## Declaration

```objectivec
@interface UIWindowSceneActivationInteraction : NSObject
```

<a id="overview"></a>

## Overview

Create a [UIWindowSceneActivationInteraction](activationinteraction.md) object when you want to facilitate requesting scene activation when the user pinches open on a view. You initialize the interaction with a closure that the system executes when the user triggers the interaction. The closure should return a [UIWindowSceneActivationConfiguration](activationconfiguration.md) object. You also provide an error-handler closure that the system executes if the scene activation request fails.

To request scene activation from an interaction with a [UICollectionView](../uicollectionview.md) cell, use the [collectionView:sceneActivationConfigurationForItemAtIndexPath:point:](../uicollectionviewdelegate/collectionview%28__sceneactivationconfigurationforitemat_point_%29.md) method.

## Topics

### Creating an activation interaction

- [initWithConfigurationProvider:errorHandler:](activationinteraction/init%28__errorhandler_%29.md): Creates an activation interaction.
- [UIWindowSceneActivationInteractionConfigurationProvider](activationinteraction/configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation interaction.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](../uiinteraction.md)

## See Also

### Supporting types

- [UIWindowSceneActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationRequestOptions](activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScenePresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
