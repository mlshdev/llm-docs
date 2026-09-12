> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem](https://developer.apple.com/documentation/uikit/uifocussystem)

# UIFocusSystem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Queries and reevaluates the currently focused item.

## Declaration

```swift
@MainActor class UIFocusSystem
```

<a id="overview"></a>

## Overview

Use a [UIFocusSystem](uifocussystem.md) object to obtain the focus-related state for the objects of your app. You can get state information for your app’s views, view controllers, windows, and other objects that adopt the [UIFocusEnvironment](uifocusenvironment.md) protocol. The [UIFocusSystem](uifocussystem.md) object lists the currently focused item, if any, for a window or view hierarchy. You can use it to force the system to update the focus state, and you can register custom sounds to be played during focus changes.

## Topics

### Getting a focus system object

- [init(for:)](uifocussystem/init%28for_%29.md): Deprecated. Retrieves a focus system object that contains the state information for the specified object.

### Getting the currently focused item

- [focusedItem](uifocussystem/focuseditem.md): The item that’s currently focused.

### Managing focus updates

- [requestFocusUpdate(to:)](uifocussystem/requestfocusupdate%28to_%29.md): Submits a request to update the focus state of the specified object.
- [updateFocusIfNeeded()](uifocussystem/updatefocusifneeded%28%29.md): Forces the system to act on a pending focus update for the current environment.

### Registering custom sounds

- [register(\_:forSoundIdentifier:)](uifocussystem/register%28__forsoundidentifier_%29.md): Registers the specified sound file with the focus engine.

### Responding to focus-related keys and notifications

- [animationCoordinatorUserInfoKey](uifocussystem/animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [didUpdateNotification](uifocussystem/didupdatenotification.md): The focus for the UI has been updated.
- [focusUpdateContextUserInfoKey](uifocussystem/focusupdatecontextuserinfokey.md): Updates the context key.
- [movementDidFailNotification](uifocussystem/movementdidfailnotification.md): The focus failed to move to another item.

### Structures

- [UIFocusSystem.DidUpdateMessage](uifocussystem/didupdatemessage.md)
- [UIFocusSystem.MovementDidFailMessage](uifocussystem/movementdidfailmessage.md)

### Initializers

- [init(forEnvironment:)](uifocussystem/init%28forenvironment_%29.md): Deprecated.

### Type Methods

- [focusSystem(for:)](uifocussystem/focussystem%28for_%29-5htbd.md)
- [focusSystem(for:)](uifocussystem/focussystem%28for_%29-7tm2f.md)

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

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusUpdateContext](uifocusupdatecontext.md): An object that provides information relevant to a specific focus update from one view to another.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusMovementHint](uifocusmovementhint.md): Provides movement hint information for the focused item.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.
- [UIFocusGroupPriority](uifocusgrouppriority.md): The importance of an item within a focus group, used by the focus system to determine the group’s primary item.

# UIFocusSystem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Queries and reevaluates the currently focused item.

## Declaration

```objectivec
@interface UIFocusSystem : NSObject
```

<a id="overview"></a>

## Overview

Use a [UIFocusSystem](uifocussystem.md) object to obtain the focus-related state for the objects of your app. You can get state information for your app’s views, view controllers, windows, and other objects that adopt the [UIFocusEnvironment](uifocusenvironment.md) protocol. The [UIFocusSystem](uifocussystem.md) object lists the currently focused item, if any, for a window or view hierarchy. You can use it to force the system to update the focus state, and you can register custom sounds to be played during focus changes.

## Topics

### Getting a focus system object

- [focusSystemForEnvironment:](uifocussystem/init%28for_%29.md): Deprecated. Retrieves a focus system object that contains the state information for the specified object.

### Getting the currently focused item

- [focusedItem](uifocussystem/focuseditem.md): The item that’s currently focused.

### Managing focus updates

- [requestFocusUpdateToEnvironment:](uifocussystem/requestfocusupdate%28to_%29.md): Submits a request to update the focus state of the specified object.
- [updateFocusIfNeeded](uifocussystem/updatefocusifneeded%28%29.md): Forces the system to act on a pending focus update for the current environment.

### Checking the ancestry of the environment

- [environment:containsEnvironment:](uifocussystem/environment_containsenvironment_.md): Returns a Boolean value that indicates whether one focus environment is contained by another.

### Registering custom sounds

- [registerURL:forSoundIdentifier:](uifocussystem/register%28__forsoundidentifier_%29.md): Registers the specified sound file with the focus engine.

### Responding to focus-related keys and notifications

- [UIFocusUpdateAnimationCoordinatorKey](uifocussystem/animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [UIFocusDidUpdateNotification](uifocussystem/didupdatenotification.md): The focus for the UI has been updated.
- [UIFocusUpdateContextKey](uifocussystem/focusupdatecontextuserinfokey.md): Updates the context key.
- [UIFocusMovementDidFailNotification](uifocussystem/movementdidfailnotification.md): The focus failed to move to another item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusUpdateContext](uifocusupdatecontext.md): An object that provides information relevant to a specific focus update from one view to another.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusMovementHint](uifocusmovementhint.md): Provides movement hint information for the focused item.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.
- [UIFocusGroupPriority](uifocusgrouppriority.md): The importance of an item within a focus group, used by the focus system to determine the group’s primary item.
