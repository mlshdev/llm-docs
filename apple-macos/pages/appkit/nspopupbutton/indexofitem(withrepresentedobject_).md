> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/indexofitem(withrepresentedobject:)](https://developer.apple.com/documentation/appkit/nspopupbutton/indexofitem(withrepresentedobject:))

# indexOfItem(withRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item that holds the specified represented object.

## Declaration

```swift
func indexOfItem(withRepresentedObject obj: Any?) -> Int
```

## Parameters

- `obj`: The represented object associated with a menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item that owns the specified object, or `-1` if no such menu item was found.

<a id="Discussion"></a>

## Discussion

Represented objects bear some direct relation to the title or image of a menu item; for example, an item entitled “100” might have an `NSNumber` object encapsulating that value as its represented object. This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.

# indexOfItemWithRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item that holds the specified represented object.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithRepresentedObject:(id) obj;
```

## Parameters

- `obj`: The represented object associated with a menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item that owns the specified object, or `-1` if no such menu item was found.

<a id="Discussion"></a>

## Discussion

Represented objects bear some direct relation to the title or image of a menu item; for example, an item entitled “100” might have an `NSNumber` object encapsulating that value as its represented object. This method invokes the method of the same name of its `NSPopUpButtonCell` object.

## See Also

### Getting the indices of menu items

- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
