> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/menu](https://developer.apple.com/documentation/uikit/uibutton/menu)

# menu (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A menu that the button displays.

## Declaration

```swift
@NSCopying var menu: UIMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When this property changes, the button automatically enables and disables the [contextMenuInteraction](../uicontrol/contextmenuinteraction.md).

## See Also

### Supporting menu and toggle buttons

- [isHeld](isheld.md): A Boolean value that indicates whether the button menu is visible.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button tracks a selection, either through a menu or a toggle.
- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.

# menu (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A menu that the button displays.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIMenu * menu;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When this property changes, the button automatically enables and disables the [contextMenuInteraction](../uicontrol/contextmenuinteraction.md).

## See Also

### Supporting menu and toggle buttons

- [held](isheld.md): A Boolean value that indicates whether the button menu is visible.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button tracks a selection, either through a menu or a toggle.
- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.
