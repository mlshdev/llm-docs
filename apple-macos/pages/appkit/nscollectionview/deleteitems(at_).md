> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/deleteitems(at:)](https://developer.apple.com/documentation/appkit/nscollectionview/deleteitems(at:))

# deleteItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Deletes the items at the specified index paths.

## Declaration

```swift
func deleteItems(at indexPaths: Set<IndexPath>)
```

## Parameters

- `indexPaths`: A set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects, each of which includes a section and item index corresponding to the insertion point of a single item. Specifying `nil` for this parameter raises an exception.

<a id="Discussion"></a>

## Discussion

After removing items from your data source object, use this method to synchronize those changes with the collection view. Calling this method lets the collection view know that it must update its internal data structures and possibly update its visual appearance. In response, the collection view asks the layout object to update the positions of the remaining objects. If the layout object indicates that there are changes to the visible items, the collection view animates the affected items into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates(\_:completionHandler:)](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, and Deleting Items

- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items into the collection view at the specified locations.
- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.

# deleteItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Deletes the items at the specified index paths.

## Declaration

```objectivec
- (void) deleteItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: A set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects, each of which includes a section and item index corresponding to the insertion point of a single item. Specifying `nil` for this parameter raises an exception.

<a id="Discussion"></a>

## Discussion

After removing items from your data source object, use this method to synchronize those changes with the collection view. Calling this method lets the collection view know that it must update its internal data structures and possibly update its visual appearance. In response, the collection view asks the layout object to update the positions of the remaining objects. If the layout object indicates that there are changes to the visible items, the collection view animates the affected items into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates:completionHandler:](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, and Deleting Items

- [insertItemsAtIndexPaths:](insertitems%28at_%29.md): Inserts new items into the collection view at the specified locations.
- [moveItemAtIndexPath:toIndexPath:](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
