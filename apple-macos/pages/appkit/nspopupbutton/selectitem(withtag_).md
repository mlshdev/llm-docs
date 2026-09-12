> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/selectitem(withtag:)](https://developer.apple.com/documentation/appkit/nspopupbutton/selectitem(withtag:))

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

You typically assign tags to menu items from Interface Builder, but you can also assign them programmatically using the setTag: method of `NSMenuItem`.

## See Also

### Related Documentation

- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.

### Setting the current selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.

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

You typically assign tags to menu items from Interface Builder, but you can also assign them programmatically using the setTag: method of `NSMenuItem`.

## See Also

### Related Documentation

- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.

### Setting the current selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
