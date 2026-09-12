> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/indexofitem(withtarget:andaction:)](https://developer.apple.com/documentation/appkit/nspopupbutton/indexofitem(withtarget:andaction:))

# indexOfItem(withTarget:andAction:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item with the specified target and action.

## Declaration

```swift
func indexOfItem(withTarget target: Any?, andAction actionSelector: Selector?) -> Int
```

## Parameters

- `target`: The target object associated with the menu item.
- `actionSelector`: The action method associated with the menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item, or `-1` if no menu item contains the specified target and action.

<a id="Discussion"></a>

## Discussion

If you specify `NULL` for the `actionSelector` parameter, the index of the first menu item with the specified target is returned. This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.

# indexOfItemWithTarget:andAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item with the specified target and action.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithTarget:(id) target andAction:(SEL) actionSelector;
```

## Parameters

- `target`: The target object associated with the menu item.
- `actionSelector`: The action method associated with the menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item, or `-1` if no menu item contains the specified target and action.

<a id="Discussion"></a>

## Discussion

If you specify `NULL` for the `actionSelector` parameter, the index of the first menu item with the specified target is returned. This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
