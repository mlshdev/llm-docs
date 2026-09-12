> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:targetindexpathformovefromrowat:toproposedindexpath:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:targetindexpathformovefromrowat:toproposedindexpath:))

# tableView(\_:targetIndexPathForMoveFromRowAt:toProposedIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate to return a new index path to retarget a proposed move of a row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, targetIndexPathForMoveFromRowAt sourceIndexPath: IndexPath, toProposedIndexPath proposedDestinationIndexPath: IndexPath) -> IndexPath
```

## Parameters

- `tableView`: The table view that is requesting this information.
- `sourceIndexPath`: An index path identifying the original location of a row (in its section) that is being dragged.
- `proposedDestinationIndexPath`: An index path identifying the currently proposed destination of the row being dragged.

<a id="return-value"></a>

## Return Value

An index path locating the desired row destination for the move operation. Return `proposedDestinationIndexPath` if that location is suitable.

<a id="Discussion"></a>

## Discussion

This method allows customization of the target row for a particular row as it is being moved up and down a table view.  As the dragged row hovers over another row, the destination row slides downward to visually make room for the relocation; this is the location identified by `proposedDestinationIndexPath`.

# tableView:targetIndexPathForMoveFromRowAtIndexPath:toProposedIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate to return a new index path to retarget a proposed move of a row.

## Declaration

```objectivec
- (NSIndexPath *) tableView:(UITableView *) tableView targetIndexPathForMoveFromRowAtIndexPath:(NSIndexPath *) sourceIndexPath toProposedIndexPath:(NSIndexPath *) proposedDestinationIndexPath;
```

## Parameters

- `tableView`: The table view that is requesting this information.
- `sourceIndexPath`: An index path identifying the original location of a row (in its section) that is being dragged.
- `proposedDestinationIndexPath`: An index path identifying the currently proposed destination of the row being dragged.

<a id="return-value"></a>

## Return Value

An index path locating the desired row destination for the move operation. Return `proposedDestinationIndexPath` if that location is suitable.

<a id="Discussion"></a>

## Discussion

This method allows customization of the target row for a particular row as it is being moved up and down a table view.  As the dragged row hovers over another row, the destination row slides downward to visually make room for the relocation; this is the location identified by `proposedDestinationIndexPath`.
