> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/insertitems(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/insertitems(at:))

# insertItems(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts new items at the specified index paths.

## Declaration

```swift
func insertItems(at indexPaths: [IndexPath])
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which contains a section index and item index at which to insert a new cell. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to insert one or more new items into the collection view. You might do this when your data source object receives data for new items or in response to user interactions with the collection view. The collection view gets the layout information for the new cells as part of calling this method. And if the layout information indicates that the cells should appear onscreen, the collection view asks your data source to provide the appropriate views, animating them into position as needed.

You can also call this method from a block passed to the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting Items

- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
- [deleteItems(at:)](deleteitems%28at_%29.md): Deletes the items at the specified index paths.

# insertItemsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts new items at the specified index paths.

## Declaration

```objectivec
- (void) insertItemsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which contains a section index and item index at which to insert a new cell. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to insert one or more new items into the collection view. You might do this when your data source object receives data for new items or in response to user interactions with the collection view. The collection view gets the layout information for the new cells as part of calling this method. And if the layout information indicates that the cells should appear onscreen, the collection view asks your data source to provide the appropriate views, animating them into position as needed.

You can also call this method from a block passed to the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting Items

- [moveItemAtIndexPath:toIndexPath:](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
- [deleteItemsAtIndexPaths:](deleteitems%28at_%29.md): Deletes the items at the specified index paths.
