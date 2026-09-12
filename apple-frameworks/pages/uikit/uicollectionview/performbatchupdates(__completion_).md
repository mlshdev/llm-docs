> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/performbatchupdates(_:completion:)](https://developer.apple.com/documentation/uikit/uicollectionview/performbatchupdates(_:completion:))

# performBatchUpdates(\_:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Animates multiple insert, delete, reload, and move operations as a group.

## Declaration

```swift
func performBatchUpdates(_ updates: (() -> Void)?, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `updates`: The block that performs the relevant insert, delete, reload, or move operations.
- `completion`: A completion handler block to execute when all of the operations finish. This block takes a single Boolean parameter that contains the value [true](https://developer.apple.com/documentation/swift/true) if all of the related animations completed successfully or [false](https://developer.apple.com/documentation/swift/false) if they were interrupted. This parameter may be `nil`.

<a id="Discussion"></a>

## Discussion

You can use this method in cases where you want to make multiple changes to the collection view in one single animated operation, as opposed to in several separate animations. You might use this method to insert, delete, reload, or move cells or use it to change the layout parameters associated with one or more cells. Use the block passed in the `updates` parameter to specify all of the operations you want to perform.

If the collection view’s layout isn’t up to date before you call this method, a reload may occur. To avoid problems, you should update your data model inside the `updates` block or ensure the layout is updated before you call [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md).

Deletes are processed before inserts in batch operations. This means the indexes for the deletions are processed relative to the indexes of the collection view’s state before the batch operation, and the indexes for the insertions are processed relative to the indexes of the state after all the deletions in the batch operation.

## See Also

### Related Documentation

- [deleteItems(at:)](deleteitems%28at_%29.md): Deletes the items at the specified index paths.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section from one location to another in the collection view.
- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items at the specified index paths.
- [insertSections(\_:)](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the sections at the specified indexes.

# performBatchUpdates:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Animates multiple insert, delete, reload, and move operations as a group.

## Declaration

```objectivec
- (void) performBatchUpdates:(void (^)()) updates completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `updates`: The block that performs the relevant insert, delete, reload, or move operations.
- `completion`: A completion handler block to execute when all of the operations finish. This block takes a single Boolean parameter that contains the value [true](https://developer.apple.com/documentation/swift/true) if all of the related animations completed successfully or [false](https://developer.apple.com/documentation/swift/false) if they were interrupted. This parameter may be `nil`.

<a id="Discussion"></a>

## Discussion

You can use this method in cases where you want to make multiple changes to the collection view in one single animated operation, as opposed to in several separate animations. You might use this method to insert, delete, reload, or move cells or use it to change the layout parameters associated with one or more cells. Use the block passed in the `updates` parameter to specify all of the operations you want to perform.

If the collection view’s layout isn’t up to date before you call this method, a reload may occur. To avoid problems, you should update your data model inside the `updates` block or ensure the layout is updated before you call [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md).

Deletes are processed before inserts in batch operations. This means the indexes for the deletions are processed relative to the indexes of the collection view’s state before the batch operation, and the indexes for the insertions are processed relative to the indexes of the state after all the deletions in the batch operation.

## See Also

### Related Documentation

- [deleteItemsAtIndexPaths:](deleteitems%28at_%29.md): Deletes the items at the specified index paths.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section from one location to another in the collection view.
- [moveItemAtIndexPath:toIndexPath:](moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
- [insertItemsAtIndexPaths:](insertitems%28at_%29.md): Inserts new items at the specified index paths.
- [insertSections:](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [deleteSections:](deletesections%28__%29.md): Deletes the sections at the specified indexes.
