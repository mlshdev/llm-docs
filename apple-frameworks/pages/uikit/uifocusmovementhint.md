> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusmovementhint](https://developer.apple.com/documentation/uikit/uifocusmovementhint)

# UIFocusMovementHint (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Provides movement hint information for the focused item.

## Declaration

```swift
class UIFocusMovementHint
```

## Topics

### Moving focus

- [movementDirection](uifocusmovementhint/movementdirection.md): A vector representing how close focus is to moving to another item in the swiped direction.

### Transforming a hint

- [interactionTransform](uifocusmovementhint/interactiontransform.md): A 3D transform that contains the combined transformations of perspective, rotation, and translation.
- [perspectiveTransform](uifocusmovementhint/perspectivetransform.md): A 3D transform that represents a perspective matrix to be applied to match UIKit interaction hinting.
- [rotation](uifocusmovementhint/rotation.md): A vector to apply to a transform to match system interaction hinting.
- [translation](uifocusmovementhint/translation.md): A vector to apply to a transform to match system interaction hinting.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusSystem](uifocussystem.md): Queries and reevaluates the currently focused item.
- [UIFocusUpdateContext](uifocusupdatecontext.md): An object that provides information relevant to a specific focus update from one view to another.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.
- [UIFocusGroupPriority](uifocusgrouppriority.md): The importance of an item within a focus group, used by the focus system to determine the group’s primary item.

# UIFocusMovementHint (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Provides movement hint information for the focused item.

## Declaration

```objectivec
@interface UIFocusMovementHint : NSObject
```

## Topics

### Moving focus

- [movementDirection](uifocusmovementhint/movementdirection.md): A vector representing how close focus is to moving to another item in the swiped direction.

### Transforming a hint

- [interactionTransform](uifocusmovementhint/interactiontransform.md): A 3D transform that contains the combined transformations of perspective, rotation, and translation.
- [perspectiveTransform](uifocusmovementhint/perspectivetransform.md): A 3D transform that represents a perspective matrix to be applied to match UIKit interaction hinting.
- [rotation](uifocusmovementhint/rotation.md): A vector to apply to a transform to match system interaction hinting.
- [translation](uifocusmovementhint/translation.md): A vector to apply to a transform to match system interaction hinting.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusSystem](uifocussystem.md): Queries and reevaluates the currently focused item.
- [UIFocusUpdateContext](uifocusupdatecontext.md): An object that provides information relevant to a specific focus update from one view to another.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.
- [UIFocusGroupPriority](uifocusgrouppriority.md): The importance of an item within a focus group, used by the focus system to determine the group’s primary item.
