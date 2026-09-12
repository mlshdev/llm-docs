> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/deleterows(at:with:)](https://developer.apple.com/documentation/uikit/uitableview/deleterows(at:with:))

# deleteRows(at:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes the rows that an array of index paths identifies, with an option to animate the deletion.

## Declaration

```swift
func deleteRows(at indexPaths: [IndexPath], with animation: UITableView.RowAnimation)
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the rows to delete.
- `animation`: A constant that indicates how the deletion is to be animated, for example, fade out or slide out from the bottom. See [UITableView.RowAnimation](rowanimation.md) for descriptions of these constants.

<a id="Discussion"></a>

## Discussion

When this method is called in an animation block defined by the [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) methods, `UITableView` defers any insertions of rows or sections until after it has handled the deletions of rows or sections. This order is followed regardless how the insertion and deletion method calls are ordered. This is unlike inserting or removing an item in a mutable array, in which the operation can affect the array index used for the successive insertion or removal operation. For more on this subject, see [Batch Insertion, Deletion, and Reloading of Rows and Sections](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html#//apple_ref/doc/uid/TP40007451-CH10-SW9) in [Table View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/AboutTableViewsiPhone/AboutTableViewsiPhone.html#//apple_ref/doc/uid/TP40007451).

## See Also

### Related Documentation

- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [insertSections(\_:with:)](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections(\_:with:)](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableView.RowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

# deleteRowsAtIndexPaths:withRowAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes the rows that an array of index paths identifies, with an option to animate the deletion.

## Declaration

```objectivec
- (void) deleteRowsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths withRowAnimation:(UITableViewRowAnimation) animation;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the rows to delete.
- `animation`: A constant that indicates how the deletion is to be animated, for example, fade out or slide out from the bottom. See [UITableViewRowAnimation](rowanimation.md) for descriptions of these constants.

<a id="Discussion"></a>

## Discussion

When this method is called in an animation block defined by the [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) methods, `UITableView` defers any insertions of rows or sections until after it has handled the deletions of rows or sections. This order is followed regardless how the insertion and deletion method calls are ordered. This is unlike inserting or removing an item in a mutable array, in which the operation can affect the array index used for the successive insertion or removal operation. For more on this subject, see [Batch Insertion, Deletion, and Reloading of Rows and Sections](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html#//apple_ref/doc/uid/TP40007451-CH10-SW9) in [Table View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/AboutTableViewsiPhone/AboutTableViewsiPhone.html#//apple_ref/doc/uid/TP40007451).

## See Also

### Related Documentation

- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [insertSections:withRowAnimation:](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections:withRowAnimation:](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableViewRowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRowAtIndexPath:toIndexPath:](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.
