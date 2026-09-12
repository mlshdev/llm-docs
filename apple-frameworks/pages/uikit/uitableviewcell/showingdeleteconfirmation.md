> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/showingdeleteconfirmation](https://developer.apple.com/documentation/uikit/uitableviewcell/showingdeleteconfirmation)

# showingDeleteConfirmation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.

## Declaration

```swift
var showingDeleteConfirmation: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When users tap the deletion control (the red circle to the left of the cell), the cell displays a “Delete” button on the right side of the cell; this string is localized.

## See Also

### Editing the cell

- [isEditing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCell.EditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

# showingDeleteConfirmation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL showingDeleteConfirmation;
```

<a id="Discussion"></a>

## Discussion

When users tap the deletion control (the red circle to the left of the cell), the cell displays a “Delete” button on the right side of the cell; this string is localized.

## See Also

### Editing the cell

- [editing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing:animated:](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCellEditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.
