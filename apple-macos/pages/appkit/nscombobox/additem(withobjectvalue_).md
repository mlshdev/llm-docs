> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/additem(withobjectvalue:)](https://developer.apple.com/documentation/appkit/nscombobox/additem(withobjectvalue:))

# addItem(withObjectValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds an object to the end of the receiver’s internal item list.

## Declaration

```swift
func addItem(withObjectValue object: Any)
```

## Parameters

- `object`: The object to add to the internal item list.

<a id="Discussion"></a>

## Discussion

This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Combo Box Items

- [addItems(withObjectValues:)](additems%28withobjectvalues_%29.md): Adds multiple objects to the end of the receiver’s internal item list.
- [insertItem(withObjectValue:at:)](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the receiver’s internal item list.
- [objectValues](objectvalues.md): An array of the items from the combo box’s internal list.
- [removeAllItems()](removeallitems%28%29.md): Removes all items from the receiver’s internal item list.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the object at the specified location from the receiver’s internal item list.
- [removeItem(withObjectValue:)](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the given object from the receiver’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

# addItemWithObjectValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds an object to the end of the receiver’s internal item list.

## Declaration

```objectivec
- (void) addItemWithObjectValue:(id) object;
```

## Parameters

- `object`: The object to add to the internal item list.

<a id="Discussion"></a>

## Discussion

This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Combo Box Items

- [addItemsWithObjectValues:](additems%28withobjectvalues_%29.md): Adds multiple objects to the end of the receiver’s internal item list.
- [insertItemWithObjectValue:atIndex:](insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the receiver’s internal item list.
- [objectValues](objectvalues.md): An array of the items from the combo box’s internal list.
- [removeAllItems](removeallitems%28%29.md): Removes all items from the receiver’s internal item list.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the object at the specified location from the receiver’s internal item list.
- [removeItemWithObjectValue:](removeitem%28withobjectvalue_%29.md): Removes all occurrences of the given object from the receiver’s internal item list.
- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
