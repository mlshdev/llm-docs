> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/scrollitematindextotop(_:)](https://developer.apple.com/documentation/appkit/nscombobox/scrollitematindextotop(_:))

# scrollItemAtIndexToTop(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.

## Declaration

```swift
func scrollItemAtIndexToTop(_ index: Int)
```

## Parameters

- `index`: The index of the item to scroll to the top.

<a id="Discussion"></a>

## Discussion

The pop-up list need not be displayed at the time this method is invoked.

## See Also

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged()](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData()](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

# scrollItemAtIndexToTop: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.

## Declaration

```objectivec
- (void) scrollItemAtIndexToTop:(NSInteger) index;
```

## Parameters

- `index`: The index of the item to scroll to the top.

<a id="Discussion"></a>

## Discussion

The pop-up list need not be displayed at the time this method is invoked.

## See Also

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.
