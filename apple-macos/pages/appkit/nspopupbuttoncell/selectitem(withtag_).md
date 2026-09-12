> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/selectitem(withtag:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/selectitem(withtag:))

# selectItem(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the menu item with the specified tag.

## Declaration

```swift
func selectItem(withTag tag: Int) -> Bool
```

## Parameters

- `tag`: The tag of the item you want to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item was successfully selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If no item with the specified tag is found, this method returns [false](https://developer.apple.com/documentation/swift/false) and leaves the menu state unchanged.

You typically assign tags to menu items from Interface Builder, but you can also assign them programmatically using the setTag: method of [NSMenuItem](../nsmenuitem.md).

## See Also

### Dealing with selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle(\_:)](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

# selectItemWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the menu item with the specified tag.

## Declaration

```objectivec
- (BOOL) selectItemWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag of the item you want to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item was successfully selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If no item with the specified tag is found, this method returns [false](https://developer.apple.com/documentation/swift/false) and leaves the menu state unchanged.

You typically assign tags to menu items from Interface Builder, but you can also assign them programmatically using the setTag: method of [NSMenuItem](../nsmenuitem.md).

## See Also

### Dealing with selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle:](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.
