> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder](https://developer.apple.com/documentation/uikit/uimenubuilder)

# UIMenuBuilder (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An interface for adding and removing menus from a menu system.

## Declaration

```swift
@MainActor protocol UIMenuBuilder
```

## Mentioned In

- [Optimizing your iPad app for Mac](optimizing-your-ipad-app-for-mac.md)

<a id="overview"></a>

## Overview

You don’t create a menu builder object. Instead, you override [buildMenu(with:)](uiresponder/buildmenu%28with_%29.md) in your app delegate or view controller to receive a builder object. Where you override this method determines the system that the builder updates. To add and remove menus from the menu bar using the [main](uimenusystem/main.md) menu system, override [buildMenu(with:)](uiresponder/buildmenu%28with_%29.md) in your app delegate. To build a context menu using the [context](uimenusystem/context.md) system, override the method in your view controller.

To see an example of how to use a menu builder object, see [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md).

## Topics

### Getting menu systems and elements

- [system](uimenubuilder/system.md): The menu system that the menu builder modifies.
- [menu(for:)](uimenubuilder/menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [action(for:)](uimenubuilder/action%28for_%29.md): Gets the action for the specified action identifier.
- [command(for:propertyList:)](uimenubuilder/command%28for_propertylist_%29.md): Gets the command for the specified selector and property list.

### Inserting child menus

- [insertChild(\_:atStartOfMenu:)](uimenubuilder/insertchild%28__atstartofmenu_%29.md): Adds a child menu as the first element of the specified parent menu.
- [insertChild(\_:atEndOfMenu:)](uimenubuilder/insertchild%28__atendofmenu_%29.md): Adds a child menu as the last element of the specified parent menu.

### Inserting sibling menus

- [insertSibling(\_:beforeMenu:)](uimenubuilder/insertsibling%28__beforemenu_%29.md): Inserts a sibling menu before the specified menu.
- [insertSibling(\_:afterMenu:)](uimenubuilder/insertsibling%28__aftermenu_%29.md): Inserts a sibling menu after the specified menu.

### Replacing menus and child menu elements

- [replaceChildren(ofMenu:from:)](uimenubuilder/replacechildren%28ofmenu_from_%29.md): Replaces the elements in a menu with the elements returned by the specified handler block.

### Removing a menu

- [remove(menu:)](uimenubuilder/remove%28menu_%29.md): Removes a menu from the menu system.

### Instance Methods

- [insertElements(\_:afterAction:)](uimenubuilder/insertelements%28__afteraction_%29.md): Insert elements after an identified action.
- [insertElements(\_:afterCommand:propertyList:)](uimenubuilder/insertelements%28__aftercommand_propertylist_%29.md)
- [insertElements(\_:afterMenu:)](uimenubuilder/insertelements%28__aftermenu_%29.md): Insert elements after an identified menu.
- [insertElements(\_:atEndOfMenu:)](uimenubuilder/insertelements%28__atendofmenu_%29.md): Insert elements at the end of an identified parent menu.
- [insertElements(\_:atStartOfMenu:)](uimenubuilder/insertelements%28__atstartofmenu_%29.md): Insert elements at the start of an identified parent menu.
- [insertElements(\_:beforeAction:)](uimenubuilder/insertelements%28__beforeaction_%29.md): Insert elements before an identified action.
- [insertElements(\_:beforeCommand:propertyList:)](uimenubuilder/insertelements%28__beforecommand_propertylist_%29.md)
- [insertElements(\_:beforeMenu:)](uimenubuilder/insertelements%28__beforemenu_%29.md): Insert elements before an identified menu.
- [remove(action:)](uimenubuilder/remove%28action_%29.md): Remove an identified action.
- [remove(command:propertyList:)](uimenubuilder/remove%28command_propertylist_%29.md)
- [replace(action:with:)](uimenubuilder/replace%28action_with_%29.md): Replace an identified action with menu elements.
- [replace(command:propertyList:with:)](uimenubuilder/replace%28command_propertylist_with_%29.md)
- [replace(menu:with:)](uimenubuilder/replace%28menu_with_%29-8mwou.md): Replace an identified menu with menu elements.
- [replace(menu:with:)](uimenubuilder/replace%28menu_with_%29-95tg2.md): Replace an identified menu with a menu.

## See Also

### App menus

- [UIMenu](uimenu.md): A container for grouping related menu elements in an app menu or contextual menu.
- [UIMenuSystem](uimenusystem.md): An object representing a main or contextual menu system.
- [UIMainMenuSystem](uimainmenusystem.md): The main menu system.

# UIMenuBuilder (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An interface for adding and removing menus from a menu system.

## Declaration

```objectivec
@protocol UIMenuBuilder
```

## Mentioned In

- [Optimizing your iPad app for Mac](optimizing-your-ipad-app-for-mac.md)

<a id="overview"></a>

## Overview

You don’t create a menu builder object. Instead, you override [buildMenuWithBuilder:](uiresponder/buildmenu%28with_%29.md) in your app delegate or view controller to receive a builder object. Where you override this method determines the system that the builder updates. To add and remove menus from the menu bar using the [mainSystem](uimenusystem/main.md) menu system, override [buildMenuWithBuilder:](uiresponder/buildmenu%28with_%29.md) in your app delegate. To build a context menu using the [contextSystem](uimenusystem/context.md) system, override the method in your view controller.

To see an example of how to use a menu builder object, see [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md).

## Topics

### Getting menu systems and elements

- [system](uimenubuilder/system.md): The menu system that the menu builder modifies.
- [menuForIdentifier:](uimenubuilder/menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [actionForIdentifier:](uimenubuilder/action%28for_%29.md): Gets the action for the specified action identifier.
- [commandForAction:propertyList:](uimenubuilder/commandforaction_propertylist_.md): Gets the command for the specified selector and property list.

### Inserting child menus

- [insertChildMenu:atStartOfMenuForIdentifier:](uimenubuilder/insertchild%28__atstartofmenu_%29.md): Adds a child menu as the first element of the specified parent menu.
- [insertChildMenu:atEndOfMenuForIdentifier:](uimenubuilder/insertchild%28__atendofmenu_%29.md): Adds a child menu as the last element of the specified parent menu.

### Inserting sibling menus

- [insertSiblingMenu:beforeMenuForIdentifier:](uimenubuilder/insertsibling%28__beforemenu_%29.md): Inserts a sibling menu before the specified menu.
- [insertSiblingMenu:afterMenuForIdentifier:](uimenubuilder/insertsibling%28__aftermenu_%29.md): Inserts a sibling menu after the specified menu.

### Replacing menus and child menu elements

- [replaceChildrenOfMenuForIdentifier:fromChildrenBlock:](uimenubuilder/replacechildren%28ofmenu_from_%29.md): Replaces the elements in a menu with the elements returned by the specified handler block.

### Removing a menu

- [removeMenuForIdentifier:](uimenubuilder/remove%28menu_%29.md): Removes a menu from the menu system.

### Instance Methods

- [insertElements:afterActionForIdentifier:](uimenubuilder/insertelements%28__afteraction_%29.md): Insert elements after an identified action.
- [insertElements:afterMenuForIdentifier:](uimenubuilder/insertelements%28__aftermenu_%29.md): Insert elements after an identified menu.
- [insertElements:atEndOfMenuForIdentifier:](uimenubuilder/insertelements%28__atendofmenu_%29.md): Insert elements at the end of an identified parent menu.
- [insertElements:atStartOfMenuForIdentifier:](uimenubuilder/insertelements%28__atstartofmenu_%29.md): Insert elements at the start of an identified parent menu.
- [insertElements:beforeActionForIdentifier:](uimenubuilder/insertelements%28__beforeaction_%29.md): Insert elements before an identified action.
- [insertElements:beforeMenuForIdentifier:](uimenubuilder/insertelements%28__beforemenu_%29.md): Insert elements before an identified menu.
- [insertElements:afterCommandForAction:propertyList:](uimenubuilder/insertelements_aftercommandforaction_propertylist_.md): Insert elements after an identified command.
- [insertElements:beforeCommandForAction:propertyList:](uimenubuilder/insertelements_beforecommandforaction_propertylist_.md): Insert elements before an identified command.
- [removeActionForIdentifier:](uimenubuilder/remove%28action_%29.md): Remove an identified action.
- [removeCommandForAction:propertyList:](uimenubuilder/removecommandforaction_propertylist_.md): Remove an identified command.
- [replaceActionForIdentifier:withElements:](uimenubuilder/replace%28action_with_%29.md): Replace an identified action with menu elements.
- [replaceMenuForIdentifier:withElements:](uimenubuilder/replace%28menu_with_%29-8mwou.md): Replace an identified menu with menu elements.
- [replaceMenuForIdentifier:withMenu:](uimenubuilder/replace%28menu_with_%29-95tg2.md): Replace an identified menu with a menu.
- [replaceCommandForAction:propertyList:withElements:](uimenubuilder/replacecommandforaction_propertylist_withelements_.md): Replace an identified command with menu elements.

## See Also

### App menus

- [UIMenu](uimenu.md): A container for grouping related menu elements in an app menu or contextual menu.
- [UIMenuSystem](uimenusystem.md): An object representing a main or contextual menu system.
- [UIMainMenuSystem](uimainmenusystem.md): The main menu system.
