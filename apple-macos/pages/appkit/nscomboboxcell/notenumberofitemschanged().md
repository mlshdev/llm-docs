> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/notenumberofitemschanged()](https://developer.apple.com/documentation/appkit/nscomboboxcell/notenumberofitemschanged())

# noteNumberOfItemsChanged() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the combo box that the number of items in its data source has changed.

## Declaration

```swift
func noteNumberOfItemsChanged()
```

<a id="Discussion"></a>

## Discussion

This method allows the combo box to update the scrollers in its displayed pop-up list without actually reloading data into the combo box. It is particularly useful for a data source that continually receives data in the background over a period of time, in which case the `NSComboBoxCell` can remain responsive to the user while the data is received.

See the NSComboBoxCellDataSource informal protocol specification for information on the messages an `NSComboBoxCell` sends to its data source.

## See Also

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.
- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [reloadData()](reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.

# noteNumberOfItemsChanged (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the combo box that the number of items in its data source has changed.

## Declaration

```objectivec
- (void) noteNumberOfItemsChanged;
```

<a id="Discussion"></a>

## Discussion

This method allows the combo box to update the scrollers in its displayed pop-up list without actually reloading data into the combo box. It is particularly useful for a data source that continually receives data in the background over a period of time, in which case the `NSComboBoxCell` can remain responsive to the user while the data is received.

See the NSComboBoxCellDataSource informal protocol specification for information on the messages an `NSComboBoxCell` sends to its data source.

## See Also

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.
- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [reloadData](reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.
