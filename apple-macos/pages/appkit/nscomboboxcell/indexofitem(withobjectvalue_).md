> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/indexofitem(withobjectvalue:)](https://developer.apple.com/documentation/appkit/nscomboboxcell/indexofitem(withobjectvalue:))

# indexOfItem(withObjectValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the combo box’s internal item list for the given object and returns the matching index number.

## Declaration

```swift
func indexOfItem(withObjectValue object: Any) -> Int
```

## Parameters

- `object`: The object for which to return the index.

<a id="return-value"></a>

## Return Value

The lowest index whose corresponding value is equal to `anObject`. Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true). If none of the objects in the combo box’s internal item list is equal to `anObject`, [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md) returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.

### Manipulating the Displayed List

- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [noteNumberOfItemsChanged()](notenumberofitemschanged%28%29.md): Informs the combo box that the number of items in its data source has changed.
- [reloadData()](reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.

# indexOfItemWithObjectValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the combo box’s internal item list for the given object and returns the matching index number.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithObjectValue:(id) object;
```

## Parameters

- `object`: The object for which to return the index.

<a id="return-value"></a>

## Return Value

The lowest index whose corresponding value is equal to `anObject`. Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true). If none of the objects in the combo box’s internal item list is equal to `anObject`, [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md) returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.

### Manipulating the Displayed List

- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [noteNumberOfItemsChanged](notenumberofitemschanged%28%29.md): Informs the combo box that the number of items in its data source has changed.
- [reloadData](reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.
