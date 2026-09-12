> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/reloaddata()](https://developer.apple.com/documentation/appkit/nscombobox/reloaddata())

# reloadData() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.

## Declaration

```swift
func reloadData()
```

## See Also

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged()](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

# reloadData (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.

## Declaration

```objectivec
- (void) reloadData;
```

## See Also

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.
