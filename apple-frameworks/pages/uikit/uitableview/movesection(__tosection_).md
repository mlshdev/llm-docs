> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/movesection(_:tosection:)](https://developer.apple.com/documentation/uikit/uitableview/movesection(_:tosection:))

# moveSection(\_:toSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves a section to a new location in the table view.

## Declaration

```swift
func moveSection(_ section: Int, toSection newSection: Int)
```

## Parameters

- `section`: The index of the section to move.
- `newSection`: The index in the table view that’s the destination of the move for the section. The existing section at that location slides up or down to an adjoining index position to make room for it.

<a id="Discussion"></a>

## Discussion

You can combine section-move operations with section-insertion and section-deletion operations within a [beginUpdates()](beginupdates%28%29.md)–[endUpdates()](endupdates%28%29.md) block to have all changes occur together as a single animation.

Unlike the section-insertion section row-deletion methods, this method doesn’t take an animation parameter. For sections that are moved, the moved section animates straight from the starting position to the ending position. Also unlike the other methods, this method allows only one section to be moved per call. If you want multiple section moved, call this method repeatedly within a [beginUpdates()](beginupdates%28%29.md)–[endUpdates()](endupdates%28%29.md) block.

## See Also

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRows(at:with:)](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections(\_:with:)](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections(\_:with:)](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableView.RowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.

# moveSection:toSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves a section to a new location in the table view.

## Declaration

```objectivec
- (void) moveSection:(NSInteger) section toSection:(NSInteger) newSection;
```

## Parameters

- `section`: The index of the section to move.
- `newSection`: The index in the table view that’s the destination of the move for the section. The existing section at that location slides up or down to an adjoining index position to make room for it.

<a id="Discussion"></a>

## Discussion

You can combine section-move operations with section-insertion and section-deletion operations within a [beginUpdates](beginupdates%28%29.md)–[endUpdates](endupdates%28%29.md) block to have all changes occur together as a single animation.

Unlike the section-insertion section row-deletion methods, this method doesn’t take an animation parameter. For sections that are moved, the moved section animates straight from the starting position to the ending position. Also unlike the other methods, this method allows only one section to be moved per call. If you want multiple section moved, call this method repeatedly within a [beginUpdates](beginupdates%28%29.md)–[endUpdates](endupdates%28%29.md) block.

## See Also

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections:withRowAnimation:](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections:withRowAnimation:](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [UITableViewRowAnimation](rowanimation.md): The type of animation to use when inserting or deleting rows.
- [moveRowAtIndexPath:toIndexPath:](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
