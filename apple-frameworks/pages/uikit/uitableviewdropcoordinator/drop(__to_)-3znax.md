> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropcoordinator/drop(_:to:)-3znax](https://developer.apple.com/documentation/uikit/uitableviewdropcoordinator/drop(_:to:)-3znax)

# drop(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified location and inserts a placeholder cell at that location.

## Declaration

```swift
func drop(_ dragItem: UIDragItem, to placeholder: UITableViewDropPlaceholder) -> any UITableViewDropPlaceholderContext
```

## Parameters

- `dragItem`: The drag item containing the data to drop.
- `placeholder`: The object that contains information about the type of placeholder cell to insert, and where to insert it.

<a id="return-value"></a>

## Return Value

The context object that you use to replace or remove the placeholder cell later. Store a reference to this object so that you can call its methods later.

<a id="Discussion"></a>

## Discussion

Use this method to insert a temporary placeholder cell (instead of a cell backed by actual data) into the table view. When calling this method, do not update your data source object to account for the placeholder. The table view manages the placeholder until you explicitly remove it using the returned context object.

Typically, you use this method when you must load data asynchronously for a cell. Instead of updating your data source, you insert a placeholder cell. When the data is finally available, update your data source object and call the [commitInsertion(dataSourceUpdates:)](../uitableviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md) method of the returned context object to swap out the placeholder cell for an actual cell. You can also remove a placeholder cell that is no longer needed by calling the [deletePlaceholder()](../uitableviewdropplaceholdercontext/deleteplaceholder%28%29.md) method.

At some point after calling this method, the table view executes the [cellUpdateHandler](../uitableviewplaceholder/cellupdatehandler.md) block in the provided `placeholder` object. Use that block to configure the contents of the placeholder cell.

## See Also

### Animating rows to their destination

- [drop(\_:toRowAt:)](drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [drop(\_:intoRowAt:rect:)](drop%28__intorowat_rect_%29.md)
- [drop(\_:to:)](drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.

# dropItem:toPlaceholder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified location and inserts a placeholder cell at that location.

## Declaration

```objectivec
- (id<UITableViewDropPlaceholderContext>) dropItem:(UIDragItem *) dragItem toPlaceholder:(UITableViewDropPlaceholder *) placeholder;
```

## Parameters

- `dragItem`: The drag item containing the data to drop.
- `placeholder`: The object that contains information about the type of placeholder cell to insert, and where to insert it.

<a id="return-value"></a>

## Return Value

The context object that you use to replace or remove the placeholder cell later. Store a reference to this object so that you can call its methods later.

<a id="Discussion"></a>

## Discussion

Use this method to insert a temporary placeholder cell (instead of a cell backed by actual data) into the table view. When calling this method, do not update your data source object to account for the placeholder. The table view manages the placeholder until you explicitly remove it using the returned context object.

Typically, you use this method when you must load data asynchronously for a cell. Instead of updating your data source, you insert a placeholder cell. When the data is finally available, update your data source object and call the [commitInsertionWithDataSourceUpdates:](../uitableviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md) method of the returned context object to swap out the placeholder cell for an actual cell. You can also remove a placeholder cell that is no longer needed by calling the [deletePlaceholder](../uitableviewdropplaceholdercontext/deleteplaceholder%28%29.md) method.

At some point after calling this method, the table view executes the [cellUpdateHandler](../uitableviewplaceholder/cellupdatehandler.md) block in the provided `placeholder` object. Use that block to configure the contents of the placeholder cell.

## See Also

### Animating rows to their destination

- [dropItem:toRowAtIndexPath:](drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [dropItem:intoRowAtIndexPath:rect:](drop%28__intorowat_rect_%29.md)
- [dropItem:toTarget:](drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
