> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/selectionmode-swift.property](https://developer.apple.com/documentation/appkit/nsmenu/selectionmode-swift.property)

# selectionMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The selection mode of the menu.

## Declaration

```swift
var selectionMode: NSMenu.SelectionMode { get set }
```

<a id="Discussion"></a>

## Discussion

The selection mode only affects menu items that belong to the same selection group. A selection group consists of the items with the same target-action.

## See Also

### Selecting Items

- [selectedItems](selecteditems.md): The menu items that are currently selected.
- [NSMenu.SelectionMode](selectionmode-swift.enum.md): Describes how the menu manages selection states of the menu items that belong to the same selection group.

# selectionMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The selection mode of the menu.

## Declaration

```objectivec
@property NSMenuSelectionMode selectionMode;
```

<a id="Discussion"></a>

## Discussion

The selection mode only affects menu items that belong to the same selection group. A selection group consists of the items with the same target-action.

## See Also

### Selecting Items

- [selectedItems](selecteditems.md): The menu items that are currently selected.
- [NSMenuSelectionMode](selectionmode-swift.enum.md): Describes how the menu manages selection states of the menu items that belong to the same selection group.
