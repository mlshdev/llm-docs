> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton/menu](https://developer.apple.com/documentation/appkit/nscombobutton/menu)

# menu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The menu that contains the button’s alternate actions.

## Declaration

```swift
var menu: NSMenu { get set }
```

<a id="Discussion"></a>

## Discussion

The combo button executes the menu item’s action when someone selects that item, so make sure to configure the targets and actions for each menu item in your menu.

An [NSComboButton](../nscombobutton.md) doesn’t support the addition of a contextual menu.

# menu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The menu that contains the button’s alternate actions.

## Declaration

```objectivec
@property (strong) NSMenu * menu;
```

<a id="Discussion"></a>

## Discussion

The combo button executes the menu item’s action when someone selects that item, so make sure to configure the targets and actions for each menu item in your menu.

An [NSComboButton](../nscombobutton.md) doesn’t support the addition of a contextual menu.
