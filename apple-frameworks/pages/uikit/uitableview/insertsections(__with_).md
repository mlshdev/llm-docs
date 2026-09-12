> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/insertsections(_:with:)](https://developer.apple.com/documentation/uikit/uitableview/insertsections(_:with:))

# insertSections(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts one or more sections in the table view, with an option to animate the insertion.

## Declaration

```swift
func insertSections(_ sections: IndexSet, with animation: UITableView.RowAnimation)
```

## Parameters

- `sections`: An index set that specifies the sections to insert in the table view. If a section already exists at the specified index location, it is moved down one index location.
- `animation`: A constant that indicates how the insertion is to be animated, for example, fade in or slide in from the left. See [UITableView.RowAnimation](rowanimation.md) for descriptions of these constants.

<a id="Discussion"></a>

## Discussion

`UITableView` calls the relevant delegate and data source methods immediately afterward to get the cells and other content for visible cells.

When this method is called in an animation block defined by the [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) methods, `UITableView` defers any insertions of rows or sections until after it has handled the deletions of rows or sections. This order is followed regardless of how the insertion and deletion method calls are ordered. This is unlike inserting or removing an item in a mutable array, in which the operation can affect the array index used for the successive insertion or removal operation. For more on this subject, see [Batch Insertion, Deletion, and Reloading of Rows and Sections](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html#//apple_ref/doc/uid/TP40007451-CH10-SW9) in [Table View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/AboutTableViewsiPhone/AboutTableViewsiPhone.html#//apple_ref/doc/uid/TP40007451).

## See Also

### Related Documentation

- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRows(at:with:)](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [deleteSections(\_:with:)](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableView.RowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

# insertSections:withRowAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts one or more sections in the table view, with an option to animate the insertion.

## Declaration

```objectivec
- (void) insertSections:(NSIndexSet *) sections withRowAnimation:(UITableViewRowAnimation) animation;
```

## Parameters

- `sections`: An index set that specifies the sections to insert in the table view. If a section already exists at the specified index location, it is moved down one index location.
- `animation`: A constant that indicates how the insertion is to be animated, for example, fade in or slide in from the left. See [UITableViewRowAnimation](rowanimation.md) for descriptions of these constants.

<a id="Discussion"></a>

## Discussion

`UITableView` calls the relevant delegate and data source methods immediately afterward to get the cells and other content for visible cells.

When this method is called in an animation block defined by the [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) methods, `UITableView` defers any insertions of rows or sections until after it has handled the deletions of rows or sections. This order is followed regardless of how the insertion and deletion method calls are ordered. This is unlike inserting or removing an item in a mutable array, in which the operation can affect the array index used for the successive insertion or removal operation. For more on this subject, see [Batch Insertion, Deletion, and Reloading of Rows and Sections](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html#//apple_ref/doc/uid/TP40007451-CH10-SW9) in [Table View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/TableView_iPhone/AboutTableViewsiPhone/AboutTableViewsiPhone.html#//apple_ref/doc/uid/TP40007451).

## See Also

### Related Documentation

- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [deleteSections:withRowAnimation:](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableViewRowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRowAtIndexPath:toIndexPath:](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.
