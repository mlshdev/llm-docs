> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/deleteitems(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/deleteitems(at:))

# deleteItems(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes the items at the specified index paths.

## Declaration

```swift
func deleteItems(at indexPaths: [IndexPath])
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which contains a section index and item index for the item you want to delete from the collection view. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to remove items from the collection view. You might do this when you remove the items from your data source object or in response to user interactions with the collection view. The collection view updates the layout of the remaining items to account for the deletions, animating the remaining items into position as needed.

You can also call this method from a block passed to the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting Items

- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items at the specified index paths.
- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.

# deleteItemsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes the items at the specified index paths.

## Declaration

```objectivec
- (void) deleteItemsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which contains a section index and item index for the item you want to delete from the collection view. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to remove items from the collection view. You might do this when you remove the items from your data source object or in response to user interactions with the collection view. The collection view updates the layout of the remaining items to account for the deletions, animating the remaining items into position as needed.

You can also call this method from a block passed to the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting Items

- [insertItemsAtIndexPaths:](insertitems%28at_%29.md): Inserts new items at the specified index paths.
- [moveItemAtIndexPath:toIndexPath:](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
