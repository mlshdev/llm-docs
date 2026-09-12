> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/deletesections(_:with:)](https://developer.apple.com/documentation/uikit/uitableview/deletesections(_:with:))

# deleteSections(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes one or more sections in the table view, with an option to animate the deletion.

## Declaration

```swift
func deleteSections(_ sections: IndexSet, with animation: UITableView.RowAnimation)
```

## Parameters

- `sections`: An index set that specifies the sections to delete from the table view. If a section exists after the specified index location, it is moved up one index location.
- `animation`: A constant that either specifies the kind of animation to perform when deleting the section or requests no animation. See [UITableView.RowAnimation](rowanimation.md) for descriptions of the constants.

<a id="Discussion"></a>

## Discussion

When this method when is called in an animation block defined by the [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) methods, `UITableView` defers any insertions of rows or sections until after it has handled the deletions of rows or sections. This order is followed regardless how the insertion and deletion method calls are ordered. This is unlike inserting or removing an item in a mutable array, in which the operation can affect the array index used for the successive insertion or removal operation. For more on this subject, see [Batch Insertion, Deletion, and Reloading of Rows and Sections](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html#//apple_ref/doc/uid/TP40007451-CH10-SW9) in [Table View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/AboutTableViewsiPhone/AboutTableViewsiPhone.html#//apple_ref/doc/uid/TP40007451).

## See Also

### Related Documentation

- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRows(at:with:)](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections(\_:with:)](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [UITableView.RowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

# deleteSections:withRowAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes one or more sections in the table view, with an option to animate the deletion.

## Declaration

```objectivec
- (void) deleteSections:(NSIndexSet *) sections withRowAnimation:(UITableViewRowAnimation) animation;
```

## Parameters

- `sections`: An index set that specifies the sections to delete from the table view. If a section exists after the specified index location, it is moved up one index location.
- `animation`: A constant that either specifies the kind of animation to perform when deleting the section or requests no animation. See [UITableViewRowAnimation](rowanimation.md) for descriptions of the constants.

<a id="Discussion"></a>

## Discussion

When this method when is called in an animation block defined by the [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) methods, `UITableView` defers any insertions of rows or sections until after it has handled the deletions of rows or sections. This order is followed regardless how the insertion and deletion method calls are ordered. This is unlike inserting or removing an item in a mutable array, in which the operation can affect the array index used for the successive insertion or removal operation. For more on this subject, see [Batch Insertion, Deletion, and Reloading of Rows and Sections](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html#//apple_ref/doc/uid/TP40007451-CH10-SW9) in [Table View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/AboutTableViewsiPhone/AboutTableViewsiPhone.html#//apple_ref/doc/uid/TP40007451).

## See Also

### Related Documentation

- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections:withRowAnimation:](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [UITableViewRowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRowAtIndexPath:toIndexPath:](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.
