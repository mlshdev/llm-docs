> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/removeitem(at:)](https://developer.apple.com/documentation/appkit/nscomboboxcell/removeitem(at:))

# removeItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the object at the specified location from the combo box’s internal item list.

## Declaration

```swift
func removeItem(at index: Int)
```

## Parameters

- `index`: The index of the object to remove from the combo box’s internal item list. All items beyond `index` are moved up one slot to fill the gap.

<a id="Discussion"></a>

## Discussion

The removed object receives a `release` message. This method raises an `NSRangeException` if `index` is beyond the end of the list and logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with an Internal List

- [addItems(withObjectValues:)](additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItem(withObjectValue:)](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItem(withObjectValue:at:)](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems()](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItem(withObjectValue:)](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

# removeItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the object at the specified location from the combo box’s internal item list.

## Declaration

```objectivec
- (void) removeItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the object to remove from the combo box’s internal item list. All items beyond `index` are moved up one slot to fill the gap.

<a id="Discussion"></a>

## Discussion

The removed object receives a `release` message. This method raises an `NSRangeException` if `index` is beyond the end of the list and logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with an Internal List

- [addItemsWithObjectValues:](additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItemWithObjectValue:](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItemWithObjectValue:atIndex:](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItemWithObjectValue:](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
