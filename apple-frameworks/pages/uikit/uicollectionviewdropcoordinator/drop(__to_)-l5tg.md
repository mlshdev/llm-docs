> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropcoordinator/drop(_:to:)-l5tg](https://developer.apple.com/documentation/uikit/uicollectionviewdropcoordinator/drop(_:to:)-l5tg)

# drop(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified location and inserts a placeholder cell at that location.

## Declaration

```swift
func drop(_ dragItem: UIDragItem, to placeholder: UICollectionViewDropPlaceholder) -> any UICollectionViewDropPlaceholderContext
```

## Parameters

- `dragItem`: The drag item containing the data to drop.
- `placeholder`: The placeholder to add at the specified location.

<a id="return-value"></a>

## Return Value

The context object that you use to replace or remove the placeholder cell later. Store a reference to this object so that you can call its methods later.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to insert a temporary placeholder cell (instead of a cell backed by actual data) into the collection view. When calling this method, don’t update your data source object to account for the placeholder. The collection view manages the placeholder until you explicitly remove it using the returned context object.

Typically, you use this method when you must load data asynchronously for a cell. Instead of updating your data source, you insert a placeholder cell. When the data is finally available, update your data source object and call the [commitInsertion(dataSourceUpdates:)](../uicollectionviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md) method of the returned context object to swap out the placeholder cell for an actual cell. You can also remove a placeholder cell that’s no longer needed by calling the [deletePlaceholder()](../uicollectionviewdropplaceholdercontext/deleteplaceholder%28%29.md) method.

At some point after calling this method, the collection view executes your `cellUpdateHandler` block. Use that block to configure the contents of the placeholder cell. Calling the [setNeedsCellUpdate()](../uicollectionviewdropplaceholdercontext/setneedscellupdate%28%29.md) method of the returned context object executes your handler again, giving you a way to update the cell later.

## See Also

### Animating Items to Their Destination

- [drop(\_:toItemAt:)](drop%28__toitemat_%29.md): Animates the item to the specified index path in the collection view.
- [drop(\_:intoItemAt:rect:)](drop%28__intoitemat_rect_%29.md): Animates the item to the specified rectangle in the collection view.
- [drop(\_:to:)](drop%28__to_%29-7w5rn.md): Animates the item to an arbitrary location in your view hierarchy.

# dropItem:toPlaceholder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified location and inserts a placeholder cell at that location.

## Declaration

```objectivec
- (id<UICollectionViewDropPlaceholderContext>) dropItem:(UIDragItem *) dragItem toPlaceholder:(UICollectionViewDropPlaceholder *) placeholder;
```

## Parameters

- `dragItem`: The drag item containing the data to drop.
- `placeholder`: The placeholder to add at the specified location.

<a id="return-value"></a>

## Return Value

The context object that you use to replace or remove the placeholder cell later. Store a reference to this object so that you can call its methods later.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to insert a temporary placeholder cell (instead of a cell backed by actual data) into the collection view. When calling this method, don’t update your data source object to account for the placeholder. The collection view manages the placeholder until you explicitly remove it using the returned context object.

Typically, you use this method when you must load data asynchronously for a cell. Instead of updating your data source, you insert a placeholder cell. When the data is finally available, update your data source object and call the [commitInsertionWithDataSourceUpdates:](../uicollectionviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md) method of the returned context object to swap out the placeholder cell for an actual cell. You can also remove a placeholder cell that’s no longer needed by calling the [deletePlaceholder](../uicollectionviewdropplaceholdercontext/deleteplaceholder%28%29.md) method.

At some point after calling this method, the collection view executes your `cellUpdateHandler` block. Use that block to configure the contents of the placeholder cell. Calling the [setNeedsCellUpdate](../uicollectionviewdropplaceholdercontext/setneedscellupdate%28%29.md) method of the returned context object executes your handler again, giving you a way to update the cell later.

## See Also

### Animating Items to Their Destination

- [dropItem:toItemAtIndexPath:](drop%28__toitemat_%29.md): Animates the item to the specified index path in the collection view.
- [dropItem:intoItemAtIndexPath:rect:](drop%28__intoitemat_rect_%29.md): Animates the item to the specified rectangle in the collection view.
- [dropItem:toTarget:](drop%28__to_%29-7w5rn.md): Animates the item to an arbitrary location in your view hierarchy.
