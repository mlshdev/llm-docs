> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitableviewcell/isediting

# isEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is in an editable state.

## Declaration

```swift
var isEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a cell is in an editable state, it displays the editing controls specified for it: the green insertion control, the red deletion control, or (on the right side) the reordering control. Use [editingStyle](editingstyle-swift.property.md) and [showsReorderControl](showsreordercontrol.md) to specify these controls for the cell.

## See Also

### Editing the cell

- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCell.EditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

# editing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is in an editable state.

## Declaration

```objectivec
@property (nonatomic, getter=isEditing) BOOL editing;
```

<a id="Discussion"></a>

## Discussion

When a cell is in an editable state, it displays the editing controls specified for it: the green insertion control, the red deletion control, or (on the right side) the reordering control. Use [editingStyle](editingstyle-swift.property.md) and [showsReorderControl](showsreordercontrol.md) to specify these controls for the cell.

## See Also

### Editing the cell

- [setEditing:animated:](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [UITableViewCellEditingStyle](editingstyle-swift.enum.md): The editing control used by a cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.
