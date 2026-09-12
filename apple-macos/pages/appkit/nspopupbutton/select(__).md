> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/select(_:)](https://developer.apple.com/documentation/appkit/nspopupbutton/select(_:))

# select(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the specified menu item.

## Declaration

```swift
func select(_ item: NSMenuItem?)
```

## Parameters

- `item`: The menu item to select, or `nil` if you want to deselect all menu items.

## See Also

### Setting the current selection

- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTag:)](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.

# selectItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the specified menu item.

## Declaration

```objectivec
- (void) selectItem:(NSMenuItem *) item;
```

## Parameters

- `item`: The menu item to select, or `nil` if you want to deselect all menu items.

## See Also

### Setting the current selection

- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTag:](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
