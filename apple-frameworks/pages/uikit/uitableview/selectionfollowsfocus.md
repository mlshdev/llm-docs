> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/selectionfollowsfocus](https://developer.apple.com/documentation/uikit/uitableview/selectionfollowsfocus)

# selectionFollowsFocus (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that triggers an automatic selection when focus moves to a cell.

## Declaration

```swift
var selectionFollowsFocus: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The system determines the default value of this property according to the platform and other properties of the table view.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRow(at:animated:scrollPosition:)](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRow(at:animated:)](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

# selectionFollowsFocus (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that triggers an automatic selection when focus moves to a cell.

## Declaration

```objectivec
@property (nonatomic) BOOL selectionFollowsFocus;
```

<a id="Discussion"></a>

## Discussion

The system determines the default value of this property according to the platform and other properties of the table view.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRowAtIndexPath:animated:scrollPosition:](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRowAtIndexPath:animated:](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [UITableViewSelectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
