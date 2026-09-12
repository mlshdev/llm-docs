> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/scrollitematindextovisible(_:)](https://developer.apple.com/documentation/appkit/nscomboboxcell/scrollitematindextovisible(_:))

# scrollItemAtIndexToVisible(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.

## Declaration

```swift
func scrollItemAtIndexToVisible(_ index: Int)
```

## Parameters

- `index`: The index of the item to make visible.

<a id="Discussion"></a>

## Discussion

The pop-up list need not be displayed at the time this method is invoked.

## See Also

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.
- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [noteNumberOfItemsChanged()](notenumberofitemschanged%28%29.md): Informs the combo box that the number of items in its data source has changed.
- [reloadData()](reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.

# scrollItemAtIndexToVisible: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.

## Declaration

```objectivec
- (void) scrollItemAtIndexToVisible:(NSInteger) index;
```

## Parameters

- `index`: The index of the item to make visible.

<a id="Discussion"></a>

## Discussion

The pop-up list need not be displayed at the time this method is invoked.

## See Also

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.
- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [noteNumberOfItemsChanged](notenumberofitemschanged%28%29.md): Informs the combo box that the number of items in its data source has changed.
- [reloadData](reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
