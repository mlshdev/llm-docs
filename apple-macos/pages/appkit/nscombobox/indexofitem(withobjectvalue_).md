> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/indexofitem(withobjectvalue:)](https://developer.apple.com/documentation/appkit/nscombobox/indexofitem(withobjectvalue:))

# indexOfItem(withObjectValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the receiver’s internal item list for the specified object and returns the lowest matching index.

## Declaration

```swift
func indexOfItem(withObjectValue object: Any) -> Int
```

## Parameters

- `object`: The object for which to return the index.

<a id="return-value"></a>

## Return Value

The lowest index in the internal item list whose corresponding value is equal to that of the specified object. Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true).

<a id="discussion"></a>

## Discussion

If none of the objects in the receiver’s internal item list are equal to `anObject`, [indexOfItem(withObjectValue:)](indexofitem%28withobjectvalue_%29.md) returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

### Manipulating the Displayed List

- [itemObjectValue(at:)](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged()](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData()](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

# indexOfItemWithObjectValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the receiver’s internal item list for the specified object and returns the lowest matching index.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithObjectValue:(id) object;
```

## Parameters

- `object`: The object for which to return the index.

<a id="return-value"></a>

## Return Value

The lowest index in the internal item list whose corresponding value is equal to that of the specified object. Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true).

<a id="discussion"></a>

## Discussion

If none of the objects in the receiver’s internal item list are equal to `anObject`, [indexOfItemWithObjectValue:](indexofitem%28withobjectvalue_%29.md) returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

### Manipulating the Displayed List

- [itemObjectValueAtIndex:](itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged](notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData](reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.
