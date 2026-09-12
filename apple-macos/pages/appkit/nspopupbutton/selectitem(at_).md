> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/selectitem(at:)](https://developer.apple.com/documentation/appkit/nspopupbutton/selectitem(at:))

# selectItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the item in the menu at the specified index.

## Declaration

```swift
func selectItem(at index: Int)
```

## Parameters

- `index`: The index of the item you want to select, or `-1` you want to deselect all menu items.

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.

### Setting the current selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(withTag:)](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.

# selectItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the item in the menu at the specified index.

## Declaration

```objectivec
- (void) selectItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item you want to select, or `-1` you want to deselect all menu items.

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.

### Setting the current selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemWithTag:](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
