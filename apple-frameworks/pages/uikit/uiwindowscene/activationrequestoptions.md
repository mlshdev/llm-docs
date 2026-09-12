> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationrequestoptions](https://developer.apple.com/documentation/uikit/uiwindowscene/activationrequestoptions)

# UIWindowScene.ActivationRequestOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

An object that contains information you want the system to use when activating a new window scene.

## Declaration

```swift
class ActivationRequestOptions
```

<a id="overview"></a>

## Overview

Create a [UIWindowScene.ActivationRequestOptions](activationrequestoptions.md) object before you activate a scene using the [activateSceneSession(for:errorHandler:)](../uiapplication/activatescenesession%28for_errorhandler_%29.md) (Swift) or [activateSceneSessionForRequest:errorHandler:](../uiapplication/activatescenesessionforrequest_errorhandler_.md) (Objective-C) method of [UIApplication](../uiapplication.md). Use this object to specify the preferred presentation style of the new scene.

## Topics

### Positioning windows

- [placement](activationrequestoptions/placement.md): The placement you prefer when the system activates the window scene.
- [UIWindowScenePlacement](../uiwindowsceneplacement-swift.protocol.md): The placement of a window scene in the workspace.
- [UIWindowSceneProminentPlacement](../uiwindowsceneprominentplacement-swift.struct.md): A placement that indicates the system should present the window more prominently than others in the space.
- [UIWindowSceneStandardPlacement](../uiwindowscenestandardplacement-swift.struct.md): A placement that indicates the system should present the window using the default style of the system in the space.
- [UIWindowScenePushPlacement](../uiwindowscenepushplacement-swift.struct.md): A placement that indicates the system needs to present the window by pushing it onto another window.

### Deprecated

- [preferredPresentationStyle](activationrequestoptions/preferredpresentationstyle.md): Deprecated. The presentation style of the window scene.
- [UIWindowSceneReplacePlacement](../uiwindowscenereplaceplacement-swift.struct.md): Deprecated.

## Relationships

### Inherits From

- [UIScene.ActivationRequestOptions](../uiscene/activationrequestoptions.md)

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
- [UIWindowScene.ActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowScene.ActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowScene.DismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowScene.ResizingRestrictions](resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScene.PresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneActivationRequestOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

An object that contains information you want the system to use when activating a new window scene.

## Declaration

```objectivec
@interface UIWindowSceneActivationRequestOptions : UISceneActivationRequestOptions
```

<a id="overview"></a>

## Overview

Create a [UIWindowSceneActivationRequestOptions](activationrequestoptions.md) object before you activate a scene using the [activateSceneSession(for:errorHandler:)](../uiapplication/activatescenesession%28for_errorhandler_%29.md) (Swift) or [activateSceneSessionForRequest:errorHandler:](../uiapplication/activatescenesessionforrequest_errorhandler_.md) (Objective-C) method of [UIApplication](../uiapplication.md). Use this object to specify the preferred presentation style of the new scene.

## Topics

### Positioning windows

- [placement](../uiwindowsceneactivationrequestoptions/placement.md): The placement you prefer when the system activates the window scene.
- [UIWindowScenePlacement](../uiwindowsceneplacement-c.class.md): The placement of a window scene in the workspace.
- [UIWindowSceneProminentPlacement](../uiwindowsceneprominentplacement-c.class.md): A placement that indicates the system should present the window more prominently than others in the space.
- [UIWindowSceneStandardPlacement](../uiwindowscenestandardplacement-c.class.md): A placement that indicates the system should present the window using the default style of the system in the space.
- [UIWindowScenePushPlacement](../uiwindowscenepushplacement-c.class.md): A placement that indicates the system needs to present the window by pushing it onto another window.

### Deprecated

- [preferredPresentationStyle](activationrequestoptions/preferredpresentationstyle.md): Deprecated. The presentation style of the window scene.
- [UIWindowSceneReplacePlacement](../uiwindowscenereplaceplacement-c.class.md): Deprecated.

## Relationships

### Inherits From

- [UISceneActivationRequestOptions](../uiscene/activationrequestoptions.md)

## See Also

### Supporting types

- [UIWindowSceneActivationAction](activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationConfiguration](activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationInteraction](activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneDestructionRequestOptions](../uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneDragInteraction](../uiwindowscenedraginteraction.md): An interaction you add to a view that enables pan gestures to change the containing window scene’s position.
- [UIWindowSceneResizingRestrictions](../uiwindowsceneresizingrestrictions.md)
- [UIWindowScenePresentationStyle](presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
