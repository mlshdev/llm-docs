> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/notenumberofitemschanged()](https://developer.apple.com/documentation/appkit/nscombobox/notenumberofitemschanged())

# noteNumberOfItemsChanged() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the number of items in its data source has changed.

## Declaration

```swift
func noteNumberOfItemsChanged()
```

<a id="Discussion"></a>

## Discussion

This method allows the receiver to update the scrollers in its displayed pop-up list without actually reloading data into the receiver. It is particularly useful for a data source that continually receives data in the background over a period of time, in which case the `NSComboBox` can remain responsive to the user while the data is received.

See the NSComboBoxDataSource informal protocol specification for information on the messages an `NSComboBox` sends to its data source.

## See Also

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [reloadData()](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

# noteNumberOfItemsChanged (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the number of items in its data source has changed.

## Declaration

```objectivec
- (void) noteNumberOfItemsChanged;
```

<a id="Discussion"></a>

## Discussion

This method allows the receiver to update the scrollers in its displayed pop-up list without actually reloading data into the receiver. It is particularly useful for a data source that continually receives data in the background over a period of time, in which case the `NSComboBox` can remain responsive to the user while the data is received.

See the NSComboBoxDataSource informal protocol specification for information on the messages an `NSComboBox` sends to its data source.

## See Also

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [reloadData](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.
