> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/changesselectionasprimaryaction](https://developer.apple.com/documentation/uikit/uibutton/changesselectionasprimaryaction)

# changesSelectionAsPrimaryAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the button tracks a selection, either through a menu or a toggle.

## Declaration

```swift
var changesSelectionAsPrimaryAction: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This behavior of this property composes with [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) and the [menu](menu.md) property.

If [menu](menu.md) is `nil`, setting this property to [true](https://developer.apple.com/documentation/swift/true) makes the button toggle its [selected](../uicontrol/state-swift.struct/selected.md) state.

If you set a menu and [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) is [false](https://developer.apple.com/documentation/swift/false), setting this property to [true](https://developer.apple.com/documentation/swift/true) makes the button a toggle button. The menu functions as a contextual menu, which appears after a long press.

If you set a menu and [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) is [true](https://developer.apple.com/documentation/swift/true), setting this property to [true](https://developer.apple.com/documentation/swift/true) makes the button function as a pop-up. The button presents the menu on touch, the menu tracks the selection in its [selectedElements](../uimenu/selectedelements.md) property, and the button title updates to reflect the selection.

## See Also

### Supporting menu and toggle buttons

- [menu](menu.md): A menu that the button displays.
- [isHeld](isheld.md): A Boolean value that indicates whether the button menu is visible.
- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.

# changesSelectionAsPrimaryAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the button tracks a selection, either through a menu or a toggle.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL changesSelectionAsPrimaryAction;
```

<a id="Discussion"></a>

## Discussion

This behavior of this property composes with [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) and the [menu](menu.md) property.

If [menu](menu.md) is `nil`, setting this property to [true](https://developer.apple.com/documentation/swift/true) makes the button toggle its [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md) state.

If you set a menu and [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) is [false](https://developer.apple.com/documentation/swift/false), setting this property to [true](https://developer.apple.com/documentation/swift/true) makes the button a toggle button. The menu functions as a contextual menu, which appears after a long press.

If you set a menu and [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) is [true](https://developer.apple.com/documentation/swift/true), setting this property to [true](https://developer.apple.com/documentation/swift/true) makes the button function as a pop-up. The button presents the menu on touch, the menu tracks the selection in its [selectedElements](../uimenu/selectedelements.md) property, and the button title updates to reflect the selection.

## See Also

### Supporting menu and toggle buttons

- [menu](menu.md): A menu that the button displays.
- [held](isheld.md): A Boolean value that indicates whether the button menu is visible.
- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.
