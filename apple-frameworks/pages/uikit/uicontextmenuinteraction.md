> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteraction](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction)

# UIContextMenuInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An interaction object that you use to display relevant actions for your content.

## Declaration

```swift
@MainActor class UIContextMenuInteraction
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

Use a [UIContextMenuInteraction](uicontextmenuinteraction.md) object to focus the user’s attention on a specific portion of your content, and to provide actions for the user to perform on that content. A context menu interaction object tracks Force Touch gestures on devices that support 3D Touch, and long-press gestures on devices that don’t support it. When the appropriate gesture occurs, this object animates your content to a new interface and displays the contextual menu that you supplied. UIKit manages all menu-related interactions and reports the selected action, if any, back to your app.

A context menu interaction object inherits from [UIInteraction](uiinteraction.md). After creating the object, assign an appropriate object to its [delegate](uicontextmenuinteraction/delegate.md) property and use the [addInteraction(\_:)](uiview/addinteraction%28__%29.md) method to attach it to one of your views. The delegate object you provide must adopt the [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) protocol. Use the methods of that object to provide the contents of the contextual menu. Add your context menu interaction object to a view in your interface using the view’s [addInteraction(\_:)](uiview/addinteraction%28__%29.md) method.

## Topics

### Creating a context menu interaction object

- [init(delegate:)](uicontextmenuinteraction/init%28delegate_%29.md): Creates a context menu interaction object with the specified delegate object.
- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

### Previewing and managing the content

- [delegate](uicontextmenuinteraction/delegate.md): The object that provides the preview and contextual menu for your content and responds to interaction-related events.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.

### Getting the interaction’s location

- [location(in:)](uicontextmenuinteraction/location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

### Getting the menu appearance

- [menuAppearance](uicontextmenuinteraction/menuappearance.md): The appearance of the context menu.
- [UIContextMenuInteraction.appearance](uicontextmenuinteraction/appearance.md): Constants that describe the appearance of the menu.

### Managing menu interactions

- [dismissMenu()](uicontextmenuinteraction/dismissmenu%28%29.md): Dismisses the context menu.
- [updateVisibleMenu(\_:)](uicontextmenuinteraction/updatevisiblemenu%28__%29.md): Updates the currently visible menu.

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

### Contextual menus

- [UIContextMenuSystem](uicontextmenusystem.md): The context menu system.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
- [UITargetedPreview](uitargetedpreview.md): An object describing the view to use during preview-related animations.
- [UIPreviewTarget](uipreviewtarget.md): An object that specifies the container view to use for animations.
- [UIPreviewParameters](uipreviewparameters.md): Additional parameters to use when animating a preview interface.

# UIContextMenuInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An interaction object that you use to display relevant actions for your content.

## Declaration

```objectivec
@interface UIContextMenuInteraction : NSObject
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

Use a [UIContextMenuInteraction](uicontextmenuinteraction.md) object to focus the user’s attention on a specific portion of your content, and to provide actions for the user to perform on that content. A context menu interaction object tracks Force Touch gestures on devices that support 3D Touch, and long-press gestures on devices that don’t support it. When the appropriate gesture occurs, this object animates your content to a new interface and displays the contextual menu that you supplied. UIKit manages all menu-related interactions and reports the selected action, if any, back to your app.

A context menu interaction object inherits from [UIInteraction](uiinteraction.md). After creating the object, assign an appropriate object to its [delegate](uicontextmenuinteraction/delegate.md) property and use the [addInteraction:](uiview/addinteraction%28__%29.md) method to attach it to one of your views. The delegate object you provide must adopt the [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) protocol. Use the methods of that object to provide the contents of the contextual menu. Add your context menu interaction object to a view in your interface using the view’s [addInteraction:](uiview/addinteraction%28__%29.md) method.

## Topics

### Creating a context menu interaction object

- [initWithDelegate:](uicontextmenuinteraction/init%28delegate_%29.md): Creates a context menu interaction object with the specified delegate object.
- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

### Previewing and managing the content

- [delegate](uicontextmenuinteraction/delegate.md): The object that provides the preview and contextual menu for your content and responds to interaction-related events.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.

### Getting the interaction’s location

- [locationInView:](uicontextmenuinteraction/location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

### Getting the menu appearance

- [menuAppearance](uicontextmenuinteraction/menuappearance.md): The appearance of the context menu.
- [UIContextMenuInteractionAppearance](uicontextmenuinteraction/appearance.md): Constants that describe the appearance of the menu.

### Managing menu interactions

- [dismissMenu](uicontextmenuinteraction/dismissmenu%28%29.md): Dismisses the context menu.
- [updateVisibleMenuWithBlock:](uicontextmenuinteraction/updatevisiblemenu%28__%29.md): Updates the currently visible menu.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Contextual menus

- [UIContextMenuSystem](uicontextmenusystem.md): The context menu system.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
- [UITargetedPreview](uitargetedpreview.md): An object describing the view to use during preview-related animations.
- [UIPreviewTarget](uipreviewtarget.md): An object that specifies the container view to use for animations.
- [UIPreviewParameters](uipreviewparameters.md): Additional parameters to use when animating a preview interface.
