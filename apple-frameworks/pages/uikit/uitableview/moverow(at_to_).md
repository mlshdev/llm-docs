> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/moverow(at:to:)](https://developer.apple.com/documentation/uikit/uitableview/moverow(at:to:))

# moveRow(at:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves the row at a specified location to a destination location.

## Declaration

```swift
func moveRow(at indexPath: IndexPath, to newIndexPath: IndexPath)
```

## Parameters

- `indexPath`: An index path identifying the row to move.
- `newIndexPath`: An index path identifying the row that’s the destination of the row at `indexPath`. The existing row at that location slides up or down to an adjoining index position to make room for it.

<a id="Discussion"></a>

## Discussion

You can combine row-move operations with row-insertion and row-deletion operations within a [beginUpdates()](beginupdates%28%29.md)–[endUpdates()](endupdates%28%29.md) block to have all changes occur together as a single animation.

Unlike the row-insertion and row-deletion methods, this method doesn’t take an `animation` parameter. For rows that are moved, the moved row animates straight from the starting position to the ending position. Also unlike the other methods, this method allows only one row to be moved per call. If you want multiple rows moved, you can call this method repeatedly within a [beginUpdates()](beginupdates%28%29.md)–[endUpdates()](endupdates%28%29.md) block.

## See Also

### Related Documentation

- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRows(at:with:)](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections(\_:with:)](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections(\_:with:)](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableView.RowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

# moveRowAtIndexPath:toIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves the row at a specified location to a destination location.

## Declaration

```objectivec
- (void) moveRowAtIndexPath:(NSIndexPath *) indexPath toIndexPath:(NSIndexPath *) newIndexPath;
```

## Parameters

- `indexPath`: An index path identifying the row to move.
- `newIndexPath`: An index path identifying the row that’s the destination of the row at `indexPath`. The existing row at that location slides up or down to an adjoining index position to make room for it.

<a id="Discussion"></a>

## Discussion

You can combine row-move operations with row-insertion and row-deletion operations within a [beginUpdates](beginupdates%28%29.md)–[endUpdates](endupdates%28%29.md) block to have all changes occur together as a single animation.

Unlike the row-insertion and row-deletion methods, this method doesn’t take an `animation` parameter. For rows that are moved, the moved row animates straight from the starting position to the ending position. Also unlike the other methods, this method allows only one row to be moved per call. If you want multiple rows moved, you can call this method repeatedly within a [beginUpdates](beginupdates%28%29.md)–[endUpdates](endupdates%28%29.md) block.

## See Also

### Related Documentation

- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections:withRowAnimation:](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections:withRowAnimation:](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableViewRowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.
