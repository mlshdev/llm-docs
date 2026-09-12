> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/removeitem(withobjectvalue:)](https://developer.apple.com/documentation/appkit/nscomboboxcell/removeitem(withobjectvalue:))

# removeItem(withObjectValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all occurrences of the specified object from the combo box’s internal item list.

## Declaration

```swift
func removeItem(withObjectValue object: Any)
```

## Parameters

- `object`: The object to remove from the combo box’s internal item list. Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.

### Working with an Internal List

- [addItems(withObjectValues:)](additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItem(withObjectValue:)](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItem(withObjectValue:at:)](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems()](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

# removeItemWithObjectValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all occurrences of the specified object from the combo box’s internal item list.

## Declaration

```objectivec
- (void) removeItemWithObjectValue:(id) object;
```

## Parameters

- `object`: The object to remove from the combo box’s internal item list. Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.

### Working with an Internal List

- [addItemsWithObjectValues:](additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItemWithObjectValue:](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItemWithObjectValue:atIndex:](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
