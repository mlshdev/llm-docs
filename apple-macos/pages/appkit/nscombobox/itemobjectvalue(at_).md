> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/itemobjectvalue(at:)](https://developer.apple.com/documentation/appkit/nscombobox/itemobjectvalue(at:))

# itemObjectValue(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object located at the given index within the receiver’s internal item list.

## Declaration

```swift
func itemObjectValue(at index: Int) -> Any
```

## Parameters

- `index`: The index of the object to retrieve. If `index` is beyond the end of the list, an `NSRangeException` is raised.

<a id="return-value"></a>

## Return Value

The object located at the specified index in the internal item list.

<a id="Discussion"></a>

## Discussion

This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [noteNumberOfItemsChanged()](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData()](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

# itemObjectValueAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object located at the given index within the receiver’s internal item list.

## Declaration

```objectivec
- (id) itemObjectValueAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the object to retrieve. If `index` is beyond the end of the list, an `NSRangeException` is raised.

<a id="return-value"></a>

## Return Value

The object located at the specified index in the internal item list.

<a id="Discussion"></a>

## Discussion

This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [noteNumberOfItemsChanged](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.
