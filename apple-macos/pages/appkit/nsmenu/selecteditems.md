> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/selecteditems](https://developer.apple.com/documentation/appkit/nsmenu/selecteditems)

# selectedItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The menu items that are currently selected.

## Declaration

```swift
var selectedItems: [NSMenuItem] { get set }
```

<a id="Discussion"></a>

## Discussion

An item selects when its state is [on](../nscontrol/statevalue/on.md). If the tracking mode is [NSMenu.SelectionMode.selectOne](selectionmode-swift.enum/selectone.md) or [NSMenu.SelectionMode.selectAny](selectionmode-swift.enum/selectany.md), the property only selects or returns menu items whose show-target action is `nil`.

## See Also

### Selecting Items

- [selectionMode](selectionmode-swift.property.md): The selection mode of the menu.
- [NSMenu.SelectionMode](selectionmode-swift.enum.md): Describes how the menu manages selection states of the menu items that belong to the same selection group.

# selectedItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The menu items that are currently selected.

## Declaration

```objectivec
@property (copy) NSArray<NSMenuItem *> * selectedItems;
```

<a id="Discussion"></a>

## Discussion

An item selects when its state is [NSControlStateValueOn](../nscontrol/statevalue/on.md). If the tracking mode is [NSMenuSelectionModeSelectOne](selectionmode-swift.enum/selectone.md) or [NSMenuSelectionModeSelectAny](selectionmode-swift.enum/selectany.md), the property only selects or returns menu items whose show-target action is `nil`.

## See Also

### Selecting Items

- [selectionMode](selectionmode-swift.property.md): The selection mode of the menu.
- [NSMenuSelectionMode](selectionmode-swift.enum.md): Describes how the menu manages selection states of the menu items that belong to the same selection group.
