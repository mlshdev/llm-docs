> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/indexofitem(withtag:)](https://developer.apple.com/documentation/appkit/nspopupbutton/indexofitem(withtag:))

# indexOfItem(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item with the specified tag.

## Declaration

```swift
func indexOfItem(withTag tag: Int) -> Int
```

## Parameters

- `tag`: The tag of the menu item you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no item with the specified tag was found.

<a id="Discussion"></a>

## Discussion

This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.

# indexOfItemWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item with the specified tag.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag of the menu item you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no item with the specified tag was found.

<a id="Discussion"></a>

## Discussion

This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
