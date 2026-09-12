> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/options-swift.struct/destructive](https://developer.apple.com/documentation/uikit/uimenu/options-swift.struct/destructive)

# destructive (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An option indicating the menu’s appearance represents a destructive action.

## Declaration

```swift
static var destructive: UIMenu.Options { get }
```

<a id="Discussion"></a>

## Discussion

Apply this option when you need a menu for a destructive action. Use the menu’s title to communicate the action to perform, and use the menu’s child menu elements to ask for user confirmation of that action.

## See Also

### Options

- [displayInline](displayinline.md): An option indicating the menu displays inline with its parent menu instead of displaying as a submenu.
- [singleSelection](singleselection.md): An option indicating whether the menu and its submenus allow a single menu item that’s in the “on” state.
- [displayAsPalette](displayaspalette.md): An option indicating the menu displays as a row of menu elements for choosing from a collection of items.

# UIMenuOptionsDestructive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An option indicating the menu’s appearance represents a destructive action.

## Declaration

```objectivec
UIMenuOptionsDestructive
```

<a id="Discussion"></a>

## Discussion

Apply this option when you need a menu for a destructive action. Use the menu’s title to communicate the action to perform, and use the menu’s child menu elements to ask for user confirmation of that action.

## See Also

### Options

- [UIMenuOptionsDisplayInline](displayinline.md): An option indicating the menu displays inline with its parent menu instead of displaying as a submenu.
- [UIMenuOptionsSingleSelection](singleselection.md): An option indicating whether the menu and its submenus allow a single menu item that’s in the “on” state.
- [UIMenuOptionsDisplayAsPalette](displayaspalette.md): An option indicating the menu displays as a row of menu elements for choosing from a collection of items.
