> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenedraginteraction](https://developer.apple.com/documentation/uikit/uiwindowscenedraginteraction)

# UIWindowSceneDragInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An interaction you add to a view that enables pan gestures to change the containing window scene’s position.

## Declaration

```swift
@MainActor class UIWindowSceneDragInteraction
```

<a id="overview"></a>

## Overview

Create and add this interaction to a view that you want to drag to adjust the position of your app’s window. [UINavigationBar](uinavigationbar.md) handles this automatically, so you only need to add this interaction to views in other parts of your window that you want to be draggable.

**Swift**

```swift
var windowDragInteraction = UIWindowSceneDragInteraction()
draggableView.addInteraction(windowDragInteraction)
```

**Objective-C**

```objc
UIWindowSceneDragInteraction *windowDragInteraction = [[UIWindowSceneDragInteraction alloc] init];
[self.draggableView addInteraction:windowDragInteraction];
```

## Topics

### Preventing gesture conflicts

- [gestureForFailureRelationships](uiwindowscenedraginteraction/gestureforfailurerelationships.md): The gesture that the drag interaction adds to the view hierarchy.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Supporting types

- [UIWindowScene.ActivationAction](uiwindowscene/activationaction.md): A menu element that requests a window scene.
- [UIWindowScene.ActivationConfiguration](uiwindowscene/activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowScene.ActivationInteraction](uiwindowscene/activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowScene.ActivationRequestOptions](uiwindowscene/activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowScene.DismissalAnimation](uiwindowscene/dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowScene.ResizingRestrictions](uiwindowscene/resizingrestrictions.md)
- [UIWindowSceneResizingRestrictions](uiwindowsceneresizingrestrictions.md)
- [UIWindowScene.PresentationStyle](uiwindowscene/presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.

# UIWindowSceneDragInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An interaction you add to a view that enables pan gestures to change the containing window scene’s position.

## Declaration

```objectivec
@interface UIWindowSceneDragInteraction : NSObject
```

<a id="overview"></a>

## Overview

Create and add this interaction to a view that you want to drag to adjust the position of your app’s window. [UINavigationBar](uinavigationbar.md) handles this automatically, so you only need to add this interaction to views in other parts of your window that you want to be draggable.

**Swift**

```swift
var windowDragInteraction = UIWindowSceneDragInteraction()
draggableView.addInteraction(windowDragInteraction)
```

**Objective-C**

```objc
UIWindowSceneDragInteraction *windowDragInteraction = [[UIWindowSceneDragInteraction alloc] init];
[self.draggableView addInteraction:windowDragInteraction];
```

## Topics

### Preventing gesture conflicts

- [gestureForFailureRelationships](uiwindowscenedraginteraction/gestureforfailurerelationships.md): The gesture that the drag interaction adds to the view hierarchy.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Supporting types

- [UIWindowSceneActivationAction](uiwindowscene/activationaction.md): A menu element that requests a window scene.
- [UIWindowSceneActivationConfiguration](uiwindowscene/activationconfiguration.md): An object that provides configuration options for a window scene request.
- [UIWindowSceneActivationInteraction](uiwindowscene/activationinteraction.md): An interaction that facilitates activating a window scene when a user pinches out on the interaction’s view.
- [UIWindowSceneActivationRequestOptions](uiwindowscene/activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UIWindowSceneDismissalAnimation](uiwindowscene/dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.
- [UIWindowSceneResizingRestrictions](uiwindowsceneresizingrestrictions.md)
- [UIWindowScenePresentationStyle](uiwindowscene/presentationstyle.md): Deprecated. The placement of a window scene relative to other scenes in the workspace.
