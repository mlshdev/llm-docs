> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/index(of:)](https://developer.apple.com/documentation/appkit/nspopupbutton/index(of:))

# index(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the specified menu item.

## Declaration

```swift
func index(of item: NSMenuItem) -> Int
```

## Parameters

- `item`: The menu item whose index you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no such item was found.

<a id="Discussion"></a>

## Discussion

This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.

# indexOfItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the specified menu item.

## Declaration

```objectivec
- (NSInteger) indexOfItem:(NSMenuItem *) item;
```

## Parameters

- `item`: The menu item whose index you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no such item was found.

<a id="Discussion"></a>

## Discussion

This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
