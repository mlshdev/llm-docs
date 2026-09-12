> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/system](https://developer.apple.com/documentation/uikit/uimenubuilder/system)

# system (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The menu system that the menu builder modifies.

## Declaration

```swift
var system: UIMenuSystem { get }
```

<a id="Discussion"></a>

## Discussion

Always check the [system](system.md) property to determine which menu system the builder is modifying before you add and remove menus. For example, when you want to modify the main menu bar, check [system](system.md) for [main](../uimenusystem/main.md).

```swift
override func buildMenu(with builder: UIMenuBuilder) {
    super.buildMenu(with: builder)
    
    // Ensure that the builder is modifying the menu bar system.
    guard builder.system == UIMenuSystem.main else { return }
    
    let refreshCommand = UICommand(title: "Refresh", action: #selector(refreshData(_:)))
    let refreshMenu = UIMenu(title: "", options: .displayInline, children: [refreshCommand])

    // Insert the menu into the File menu before the Close menu.
    builder.insertSibling(refreshMenu, beforeMenu: .close)
}
```

## See Also

### Getting menu systems and elements

- [menu(for:)](menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [action(for:)](action%28for_%29.md): Gets the action for the specified action identifier.
- [command(for:propertyList:)](command%28for_propertylist_%29.md): Gets the command for the specified selector and property list.

# system (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The menu system that the menu builder modifies.

## Declaration

```objectivec
@property (nonatomic, readonly) UIMenuSystem * system;
```

<a id="Discussion"></a>

## Discussion

Always check the [system](system.md) property to determine which menu system the builder is modifying before you add and remove menus. For example, when you want to modify the main menu bar, check [system](system.md) for [mainSystem](../uimenusystem/main.md).

```swift
override func buildMenu(with builder: UIMenuBuilder) {
    super.buildMenu(with: builder)
    
    // Ensure that the builder is modifying the menu bar system.
    guard builder.system == UIMenuSystem.main else { return }
    
    let refreshCommand = UICommand(title: "Refresh", action: #selector(refreshData(_:)))
    let refreshMenu = UIMenu(title: "", options: .displayInline, children: [refreshCommand])

    // Insert the menu into the File menu before the Close menu.
    builder.insertSibling(refreshMenu, beforeMenu: .close)
}
```

## See Also

### Getting menu systems and elements

- [menuForIdentifier:](menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [actionForIdentifier:](action%28for_%29.md): Gets the action for the specified action identifier.
- [commandForAction:propertyList:](commandforaction_propertylist_.md): Gets the command for the specified selector and property list.
