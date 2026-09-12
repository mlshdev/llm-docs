> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusupdatecontext](https://developer.apple.com/documentation/uikit/uifocusupdatecontext)

# UIFocusUpdateContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that provides information relevant to a specific focus update from one view to another.

## Declaration

```swift
@MainActor class UIFocusUpdateContext
```

<a id="overview"></a>

## Overview

Focus update context objects are ephemeral and are usually discarded after the update is finished. The `UIFocus` APIs create a single high-level software interface for controlling focus in apps that use focus-based input.

## Topics

### Locating focus direction

- [previouslyFocusedView](uifocusupdatecontext/previouslyfocusedview.md): The view that was focused before the focus update.
- [nextFocusedView](uifocusupdatecontext/nextfocusedview.md): The view that takes the focus after the focus update.
- [focusHeading](uifocusupdatecontext/focusheading.md): The heading in which the focus update is occurring.
- [UIFocusHeading](uifocusheading.md): The general type of an event.

### Getting related focus items

- [previouslyFocusedItem](uifocusupdatecontext/previouslyfocuseditem.md): The item that was focused before the update.
- [nextFocusedItem](uifocusupdatecontext/nextfocuseditem.md): The item to be focused after the update.

### Responding to focus-related keys and notifications

- [didUpdateNotification](uifocussystem/didupdatenotification.md): The focus for the UI has been updated.
- [movementDidFailNotification](uifocussystem/movementdidfailnotification.md): The focus failed to move to another item.
- [animationCoordinatorUserInfoKey](uifocussystem/animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [focusUpdateContextUserInfoKey](uifocussystem/focusupdatecontextuserinfokey.md): Updates the context key.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md)
- [UITableViewFocusUpdateContext](uitableviewfocusupdatecontext.md)

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
- [UIFocusSystem](uifocussystem.md): Queries and reevaluates the currently focused item.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusMovementHint](uifocusmovementhint.md): Provides movement hint information for the focused item.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.
- [UIFocusGroupPriority](uifocusgrouppriority.md): The importance of an item within a focus group, used by the focus system to determine the group’s primary item.

# UIFocusUpdateContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that provides information relevant to a specific focus update from one view to another.

## Declaration

```objectivec
@interface UIFocusUpdateContext : NSObject
```

<a id="overview"></a>

## Overview

Focus update context objects are ephemeral and are usually discarded after the update is finished. The `UIFocus` APIs create a single high-level software interface for controlling focus in apps that use focus-based input.

## Topics

### Locating focus direction

- [previouslyFocusedView](uifocusupdatecontext/previouslyfocusedview.md): The view that was focused before the focus update.
- [nextFocusedView](uifocusupdatecontext/nextfocusedview.md): The view that takes the focus after the focus update.
- [focusHeading](uifocusupdatecontext/focusheading.md): The heading in which the focus update is occurring.
- [UIFocusHeading](uifocusheading.md): The general type of an event.

### Getting related focus items

- [previouslyFocusedItem](uifocusupdatecontext/previouslyfocuseditem.md): The item that was focused before the update.
- [nextFocusedItem](uifocusupdatecontext/nextfocuseditem.md): The item to be focused after the update.

### Responding to focus-related keys and notifications

- [UIFocusDidUpdateNotification](uifocussystem/didupdatenotification.md): The focus for the UI has been updated.
- [UIFocusMovementDidFailNotification](uifocussystem/movementdidfailnotification.md): The focus failed to move to another item.
- [UIFocusUpdateAnimationCoordinatorKey](uifocussystem/animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [UIFocusUpdateContextKey](uifocussystem/focusupdatecontextuserinfokey.md): Updates the context key.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md)
- [UITableViewFocusUpdateContext](uitableviewfocusupdatecontext.md)

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusSystem](uifocussystem.md): Queries and reevaluates the currently focused item.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusMovementHint](uifocusmovementhint.md): Provides movement hint information for the focused item.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.
- [UIFocusGroupPriority](uifocusgrouppriority.md): The importance of an item within a focus group, used by the focus system to determine the group’s primary item.
