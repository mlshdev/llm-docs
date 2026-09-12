> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/showsreordercontrol](https://developer.apple.com/documentation/uikit/uitableviewcell/showsreordercontrol)

# showsReorderControl (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the cell shows the reordering control.

## Declaration

```swift
var showsReorderControl: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The reordering control is gray, multiple horizontal bar control on the right side of the cell. Users can drag this control to reorder the cell within the table. The default value is [false](https://developer.apple.com/documentation/swift/false). If the value is [true](https://developer.apple.com/documentation/swift/true) , the reordering control temporarily replaces any accessory view.

For the reordering control to appear, you must not only set this property but implement the [UITableViewDataSource](../uitableviewdatasource.md) method [tableView(\_:moveRowAt:to:)](../uitableviewdatasource/tableview%28__moverowat_to_%29.md). In addition, if the data source implements [tableView(\_:canMoveRowAt:)](../uitableviewdatasource/tableview%28__canmoverowat_%29.md) to return [false](https://developer.apple.com/documentation/swift/false), the reordering control doesn’t appear in that designated row.

## See Also

### Editing the cell

- [isEditing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCell.EditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.

# showsReorderControl (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the cell shows the reordering control.

## Declaration

```objectivec
@property (nonatomic) BOOL showsReorderControl;
```

<a id="Discussion"></a>

## Discussion

The reordering control is gray, multiple horizontal bar control on the right side of the cell. Users can drag this control to reorder the cell within the table. The default value is [false](https://developer.apple.com/documentation/swift/false). If the value is [true](https://developer.apple.com/documentation/swift/true) , the reordering control temporarily replaces any accessory view.

For the reordering control to appear, you must not only set this property but implement the [UITableViewDataSource](../uitableviewdatasource.md) method [tableView:moveRowAtIndexPath:toIndexPath:](../uitableviewdatasource/tableview%28__moverowat_to_%29.md). In addition, if the data source implements [tableView:canMoveRowAtIndexPath:](../uitableviewdatasource/tableview%28__canmoverowat_%29.md) to return [false](https://developer.apple.com/documentation/swift/false), the reordering control doesn’t appear in that designated row.

## See Also

### Editing the cell

- [editing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing:animated:](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCellEditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
