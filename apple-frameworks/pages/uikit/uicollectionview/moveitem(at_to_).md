> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/moveitem(at:to:)](https://developer.apple.com/documentation/uikit/uicollectionview/moveitem(at:to:))

# moveItem(at:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves an item from one location to another in the collection view.

## Declaration

```swift
func moveItem(at indexPath: IndexPath, to newIndexPath: IndexPath)
```

## Parameters

- `indexPath`: The index path of the item you want to move. This parameter must not be `nil`.
- `newIndexPath`: The index path of the item’s new location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to reorganize existing data items. You might do this when you rearrange the items within your data source object or in response to user interactions with the collection view. You can move items between sections or within the same section. The collection view updates the layout as needed to account for the move, animating cells into position as needed.

You can also call this method from a block passed to the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting Items

- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items at the specified index paths.
- [deleteItems(at:)](deleteitems%28at_%29.md): Deletes the items at the specified index paths.

# moveItemAtIndexPath:toIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves an item from one location to another in the collection view.

## Declaration

```objectivec
- (void) moveItemAtIndexPath:(NSIndexPath *) indexPath toIndexPath:(NSIndexPath *) newIndexPath;
```

## Parameters

- `indexPath`: The index path of the item you want to move. This parameter must not be `nil`.
- `newIndexPath`: The index path of the item’s new location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to reorganize existing data items. You might do this when you rearrange the items within your data source object or in response to user interactions with the collection view. You can move items between sections or within the same section. The collection view updates the layout as needed to account for the move, animating cells into position as needed.

You can also call this method from a block passed to the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting Items

- [insertItemsAtIndexPaths:](insertitems%28at_%29.md): Inserts new items at the specified index paths.
- [deleteItemsAtIndexPaths:](deleteitems%28at_%29.md): Deletes the items at the specified index paths.
