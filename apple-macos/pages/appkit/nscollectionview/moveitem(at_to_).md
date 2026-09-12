> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/moveitem(at:to:)](https://developer.apple.com/documentation/appkit/nscollectionview/moveitem(at:to:))

# moveItem(at:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Moves an item from one location to another in the collection view.

## Declaration

```swift
func moveItem(at indexPath: IndexPath, to newIndexPath: IndexPath)
```

## Parameters

- `indexPath`: The index path of the item that you want to move. This parameter must not be `nil`.
- `newIndexPath`: The index path of the item’s new location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

After rearranging items in your data source object, use this method to synchronize those changes with the collection view. Calling this method lets the collection view know that it must update its internal data structures and possibly update its visual appearance. You can move the item to a different section or to a new location in the same section. The collection view updates the layout as needed to account for the move, animating cells into position in response.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates(\_:completionHandler:)](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, and Deleting Items

- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items into the collection view at the specified locations.
- [deleteItems(at:)](deleteitems%28at_%29.md): Deletes the items at the specified index paths.

# moveItemAtIndexPath:toIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Moves an item from one location to another in the collection view.

## Declaration

```objectivec
- (void) moveItemAtIndexPath:(NSIndexPath *) indexPath toIndexPath:(NSIndexPath *) newIndexPath;
```

## Parameters

- `indexPath`: The index path of the item that you want to move. This parameter must not be `nil`.
- `newIndexPath`: The index path of the item’s new location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

After rearranging items in your data source object, use this method to synchronize those changes with the collection view. Calling this method lets the collection view know that it must update its internal data structures and possibly update its visual appearance. You can move the item to a different section or to a new location in the same section. The collection view updates the layout as needed to account for the move, animating cells into position in response.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates:completionHandler:](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, and Deleting Items

- [insertItemsAtIndexPaths:](insertitems%28at_%29.md): Inserts new items into the collection view at the specified locations.
- [deleteItemsAtIndexPaths:](deleteitems%28at_%29.md): Deletes the items at the specified index paths.
