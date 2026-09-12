> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/indexofitem(withtitle:)](https://developer.apple.com/documentation/appkit/nspopupbutton/indexofitem(withtitle:))

# indexOfItem(withTitle:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the item with the specified title.

## Declaration

```swift
func indexOfItem(withTitle title: String) -> Int
```

## Parameters

- `title`: The title of the item you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no item with the specified title was found.

## See Also

### Getting the indices of menu items

- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.

# indexOfItemWithTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the item with the specified title.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the item you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no item with the specified title was found.

## See Also

### Getting the indices of menu items

- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
