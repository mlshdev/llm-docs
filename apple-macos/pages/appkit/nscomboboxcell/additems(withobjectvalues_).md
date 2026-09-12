> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/additems(withobjectvalues:)](https://developer.apple.com/documentation/appkit/nscomboboxcell/additems(withobjectvalues:))

# addItems(withObjectValues:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds multiple objects to the internal item list.

## Declaration

```swift
func addItems(withObjectValues objects: [Any])
```

## Parameters

- `objects`: The object to add to the end of the combo box’s internal item list.

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with an Internal List

- [addItem(withObjectValue:)](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItem(withObjectValue:at:)](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems()](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [removeItem(withObjectValue:)](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

# addItemsWithObjectValues: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds multiple objects to the internal item list.

## Declaration

```objectivec
- (void) addItemsWithObjectValues:(NSArray *) objects;
```

## Parameters

- `objects`: The object to add to the end of the combo box’s internal item list.

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with an Internal List

- [addItemWithObjectValue:](additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItemWithObjectValue:atIndex:](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems](removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [removeItemWithObjectValue:](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
