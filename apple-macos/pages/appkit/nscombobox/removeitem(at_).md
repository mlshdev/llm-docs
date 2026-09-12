> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/removeitem(at:)](https://developer.apple.com/documentation/appkit/nscombobox/removeitem(at:))

# removeItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the object at the specified location from the receiver’s internal item list.

## Declaration

```swift
func removeItem(at index: Int)
```

## Parameters

- `index`: The index of the object to remove. All items beyond `index` are moved up one slot to fill the gap.

<a id="Discussion"></a>

## Discussion

The removed object receives a `release` message. This method raises an `NSRangeException` if `index` is beyond the end of the list and logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Combo Box Items

- [addItems(withObjectValues:)](additems%28withobjectvalues_%29.md): Adds multiple objects to the end of the receiver’s internal item list.
- [addItem(withObjectValue:)](additem%28withobjectvalue_%29.md): Adds an object to the end of the receiver’s internal item list.
- [insertItem(withObjectValue:at:)](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the receiver’s internal item list.
- [objectValues](objectvalues.md): An array of the items from the combo box’s internal list.
- [removeAllItems()](removeallitems%28%29.md): Removes all items from the receiver’s internal item list.
- [removeItem(withObjectValue:)](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the given object from the receiver’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

# removeItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the object at the specified location from the receiver’s internal item list.

## Declaration

```objectivec
- (void) removeItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the object to remove. All items beyond `index` are moved up one slot to fill the gap.

<a id="Discussion"></a>

## Discussion

The removed object receives a `release` message. This method raises an `NSRangeException` if `index` is beyond the end of the list and logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Combo Box Items

- [addItemsWithObjectValues:](additems%28withobjectvalues_%29.md): Adds multiple objects to the end of the receiver’s internal item list.
- [addItemWithObjectValue:](additem%28withobjectvalue_%29.md): Adds an object to the end of the receiver’s internal item list.
- [insertItemWithObjectValue:atIndex:](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the receiver’s internal item list.
- [objectValues](objectvalues.md): An array of the items from the combo box’s internal list.
- [removeAllItems](removeallitems%28%29.md): Removes all items from the receiver’s internal item list.
- [removeItemWithObjectValue:](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the given object from the receiver’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
