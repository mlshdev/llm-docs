> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/editingstyle-swift.property](https://developer.apple.com/documentation/uikit/uitableviewcell/editingstyle-swift.property)

# editingStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The editing style of the cell.

## Declaration

```swift
var editingStyle: UITableViewCell.EditingStyle { get }
```

<a id="Discussion"></a>

## Discussion

One of the constants described in [UITableViewCell.EditingStyle](editingstyle-swift.enum.md) is used as the value of this property; it specifies whether the cell is in an editable state and, if it is, whether it shows an insertion or deletion control. The default value is [UITableViewCell.EditingStyle.none](editingstyle-swift.enum/none.md) (not editable). The delegate returns the value of this property for a particular cell in its implementation of the [tableView(\_:editingStyleForRowAt:)](../uitableviewdelegate/tableview%28__editingstyleforrowat_%29.md) method.

## See Also

### Editing the cell

- [isEditing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [UITableViewCell.EditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

# editingStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The editing style of the cell.

## Declaration

```objectivec
@property (nonatomic, readonly) UITableViewCellEditingStyle editingStyle;
```

<a id="Discussion"></a>

## Discussion

One of the constants described in [UITableViewCellEditingStyle](editingstyle-swift.enum.md) is used as the value of this property; it specifies whether the cell is in an editable state and, if it is, whether it shows an insertion or deletion control. The default value is [UITableViewCellEditingStyleNone](editingstyle-swift.enum/none.md) (not editable). The delegate returns the value of this property for a particular cell in its implementation of the [tableView:editingStyleForRowAtIndexPath:](../uitableviewdelegate/tableview%28__editingstyleforrowat_%29.md) method.

## See Also

### Editing the cell

- [editing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing:animated:](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [UITableViewCellEditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.
