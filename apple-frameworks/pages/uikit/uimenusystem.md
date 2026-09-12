> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenusystem](https://developer.apple.com/documentation/uikit/uimenusystem)

# UIMenuSystem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object representing a main or contextual menu system.

## Declaration

```swift
@MainActor class UIMenuSystem
```

<a id="overview"></a>

## Overview

A menu system groups root menus together. The [main](uimenusystem/main.md) system has only one root menu while the [context](uimenusystem/context.md) system can have multiple root menus, each built in different [UIResponder](uiresponder.md) objects like a view controller.

Use [UIMenuSystem](uimenusystem.md) in your implementation of [buildMenu(with:)](uiresponder/buildmenu%28with_%29.md) to isolate changes to a specific system.

```swift
override func buildMenu(with builder: UIMenuBuilder) {
    super.buildMenu(with: builder)
    
    // Ensure that the builder is modifying the menu bar system.
    guard builder.system == UIMenuSystem.main else { return }

    // ...
}
```

You can also use a menu system to rebuild or revalidate menus as changes occur in your app. To rebuild a menu, call the [setNeedsRebuild()](uimenusystem/setneedsrebuild%28%29.md) method. Call [setNeedsRevalidate()](uimenusystem/setneedsrevalidate%28%29.md) when you need the menu system to revalidate a menu.

For more information, see [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md).

## Topics

### Getting a menu system

- [main](uimenusystem/main.md): The main menu system.
- [context](uimenusystem/context.md): The context menu system.

### Rebuilding a menu system

- [setNeedsRebuild()](uimenusystem/setneedsrebuild%28%29.md): Tells the menu system to rebuild all of its menus.

### Revalidating a menu system

- [setNeedsRevalidate()](uimenusystem/setneedsrevalidate%28%29.md): Tells the menu system to validate all of its menus.

### Setting group preferences

- [UIMenuSystem.ElementGroupPreference](uimenusystem/elementgrouppreference.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIContextMenuSystem](uicontextmenusystem.md)
- [UIMainMenuSystem](uimainmenusystem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### App menus

- [UIMenu](uimenu.md): A container for grouping related menu elements in an app menu or contextual menu.
- [UIMenuBuilder](uimenubuilder.md): An interface for adding and removing menus from a menu system.
- [UIMainMenuSystem](uimainmenusystem.md): The main menu system.

# UIMenuSystem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object representing a main or contextual menu system.

## Declaration

```objectivec
@interface UIMenuSystem : NSObject
```

<a id="overview"></a>

## Overview

A menu system groups root menus together. The [mainSystem](uimenusystem/main.md) system has only one root menu while the [contextSystem](uimenusystem/context.md) system can have multiple root menus, each built in different [UIResponder](uiresponder.md) objects like a view controller.

Use [UIMenuSystem](uimenusystem.md) in your implementation of [buildMenuWithBuilder:](uiresponder/buildmenu%28with_%29.md) to isolate changes to a specific system.

```swift
override func buildMenu(with builder: UIMenuBuilder) {
    super.buildMenu(with: builder)
    
    // Ensure that the builder is modifying the menu bar system.
    guard builder.system == UIMenuSystem.main else { return }

    // ...
}
```

You can also use a menu system to rebuild or revalidate menus as changes occur in your app. To rebuild a menu, call the [setNeedsRebuild](uimenusystem/setneedsrebuild%28%29.md) method. Call [setNeedsRevalidate](uimenusystem/setneedsrevalidate%28%29.md) when you need the menu system to revalidate a menu.

For more information, see [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md).

## Topics

### Getting a menu system

- [mainSystem](uimenusystem/main.md): The main menu system.
- [contextSystem](uimenusystem/context.md): The context menu system.

### Rebuilding a menu system

- [setNeedsRebuild](uimenusystem/setneedsrebuild%28%29.md): Tells the menu system to rebuild all of its menus.

### Revalidating a menu system

- [setNeedsRevalidate](uimenusystem/setneedsrevalidate%28%29.md): Tells the menu system to validate all of its menus.

### Setting group preferences

- [UIMenuSystemElementGroupPreference](uimenusystem/elementgrouppreference.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIContextMenuSystem](uicontextmenusystem.md)
- [UIMainMenuSystem](uimainmenusystem.md)

## See Also

### App menus

- [UIMenu](uimenu.md): A container for grouping related menu elements in an app menu or contextual menu.
- [UIMenuBuilder](uimenubuilder.md): An interface for adding and removing menus from a menu system.
- [UIMainMenuSystem](uimainmenusystem.md): The main menu system.
