> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/numberofitems](https://developer.apple.com/documentation/appkit/nscomboboxcell/numberofitems)

# numberOfItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The total number of items in the pop-up list.

## Declaration

```swift
var numberOfItems: Int { get }
```

## See Also

### Related Documentation

- [numberOfVisibleItems](numberofvisibleitems.md): The maximum number of items visible in the pop-up list at any one time.
- [numberOfItems(in:)](../nscomboboxcelldatasource/numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.

### Working with an Internal List

- [addItems(withObjectValues:)](additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItem(withObjectValue:)](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItem(withObjectValue:at:)](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems()](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [removeItem(withObjectValue:)](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.

# numberOfItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The total number of items in the pop-up list.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfItems;
```

## See Also

### Related Documentation

- [numberOfVisibleItems](numberofvisibleitems.md): The maximum number of items visible in the pop-up list at any one time.
- [numberOfItemsInComboBoxCell:](../nscomboboxcelldatasource/numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.

### Working with an Internal List

- [addItemsWithObjectValues:](additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItemWithObjectValue:](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItemWithObjectValue:atIndex:](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [removeItemWithObjectValue:](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
