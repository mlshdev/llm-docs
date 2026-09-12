> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/rowanimation](https://developer.apple.com/documentation/uikit/uitableview/rowanimation)

# UITableView.RowAnimation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The type of animation to use when inserting or deleting rows.

## Declaration

```swift
enum RowAnimation
```

<a id="overview"></a>

## Overview

You specify one of these constants as a parameter of the [insertRows(at:with:)](insertrows%28at_with_%29.md), [insertSections(\_:with:)](insertsections%28__with_%29.md), [deleteRows(at:with:)](deleterows%28at_with_%29.md),[deleteSections(\_:with:)](deletesections%28__with_%29.md), [reloadRows(at:with:)](reloadrows%28at_with_%29.md), and [reloadSections(\_:with:)](reloadsections%28__with_%29.md) methods.

## Topics

### Constants

- [UITableView.RowAnimation.fade](rowanimation/fade.md): The inserted or deleted row or rows fade into or out of the table view.
- [UITableView.RowAnimation.right](rowanimation/right.md): The inserted row or rows slide in from the right; the deleted row or rows slide out to the right.
- [UITableView.RowAnimation.left](rowanimation/left.md): The inserted row or rows slide in from the left; the deleted row or rows slide out to the left.
- [UITableView.RowAnimation.top](rowanimation/top.md): The inserted row or rows slide in from the top; the deleted row or rows slide out toward the top.
- [UITableView.RowAnimation.bottom](rowanimation/bottom.md): The inserted row or rows slide in from the bottom; the deleted row or rows slide out toward the bottom.
- [UITableView.RowAnimation.none](rowanimation/none.md): The inserted or deleted rows use the default animations.
- [UITableView.RowAnimation.middle](rowanimation/middle.md): The table view attempts to keep the old and new cells centered in the space they did or will occupy.
- [UITableView.RowAnimation.automatic](rowanimation/automatic.md): The table view chooses an appropriate animation style for you.

### Initializers

- [init(rawValue:)](rowanimation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inserting, deleting, and moving rows and sections

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRows(at:with:)](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections(\_:with:)](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections(\_:with:)](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.

# UITableViewRowAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The type of animation to use when inserting or deleting rows.

## Declaration

```objectivec
enum UITableViewRowAnimation : NSInteger;
```

<a id="overview"></a>

## Overview

You specify one of these constants as a parameter of the [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md), [insertSections:withRowAnimation:](insertsections%28__with_%29.md), [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md),[deleteSections:withRowAnimation:](deletesections%28__with_%29.md), [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md), and [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md) methods.

## Topics

### Constants

- [UITableViewRowAnimationFade](rowanimation/fade.md): The inserted or deleted row or rows fade into or out of the table view.
- [UITableViewRowAnimationRight](rowanimation/right.md): The inserted row or rows slide in from the right; the deleted row or rows slide out to the right.
- [UITableViewRowAnimationLeft](rowanimation/left.md): The inserted row or rows slide in from the left; the deleted row or rows slide out to the left.
- [UITableViewRowAnimationTop](rowanimation/top.md): The inserted row or rows slide in from the top; the deleted row or rows slide out toward the top.
- [UITableViewRowAnimationBottom](rowanimation/bottom.md): The inserted row or rows slide in from the bottom; the deleted row or rows slide out toward the bottom.
- [UITableViewRowAnimationNone](rowanimation/none.md): The inserted or deleted rows use the default animations.
- [UITableViewRowAnimationMiddle](rowanimation/middle.md): The table view attempts to keep the old and new cells centered in the space they did or will occupy.
- [UITableViewRowAnimationAutomatic](rowanimation/automatic.md): The table view chooses an appropriate animation style for you.

## See Also

### Inserting, deleting, and moving rows and sections

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.
- [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md): Deletes the rows that an array of index paths identifies, with an option to animate the deletion.
- [insertSections:withRowAnimation:](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.
- [deleteSections:withRowAnimation:](deletesections%28__with_%29.md): Deletes one or more sections in the table view, with an option to animate the deletion.
- [moveRowAtIndexPath:toIndexPath:](moverow%28at_to_%29.md): Moves the row at a specified location to a destination location.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section to a new location in the table view.
