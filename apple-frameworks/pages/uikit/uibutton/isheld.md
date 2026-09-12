> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/isheld](https://developer.apple.com/documentation/uikit/uibutton/isheld)

# isHeld (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the button menu is visible.

## Declaration

```swift
var isHeld: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The property is [true](https://developer.apple.com/documentation/swift/true) if the button is presenting a menu in response to a long press. Buttons that set [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) to present a menu don’t set this property.

## See Also

### Supporting menu and toggle buttons

- [menu](menu.md): A menu that the button displays.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button tracks a selection, either through a menu or a toggle.
- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.

# held (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the button menu is visible.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isHeld) BOOL held;
```

<a id="Discussion"></a>

## Discussion

The property is [true](https://developer.apple.com/documentation/swift/true) if the button is presenting a menu in response to a long press. Buttons that set [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md) to present a menu don’t set this property.

## See Also

### Supporting menu and toggle buttons

- [menu](menu.md): A menu that the button displays.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button tracks a selection, either through a menu or a toggle.
- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.
