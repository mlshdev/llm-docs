> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/allowsmultipleselectionduringediting](https://developer.apple.com/documentation/uikit/uitableview/allowsmultipleselectionduringediting)

# allowsMultipleSelectionDuringEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.

## Declaration

```swift
var allowsMultipleSelectionDuringEditing: Bool { get set }
```

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set it to [true](https://developer.apple.com/documentation/swift/true), check marks appear next to selected rows in editing mode. In addition, [UITableView](../uitableview.md) doesn’t query for editing styles when it goes into editing mode. If you access [indexPathsForSelectedRows](indexpathsforselectedrows.md), you can get the index paths that identify the selected rows.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRow(at:animated:scrollPosition:)](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRow(at:animated:)](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [selectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

# allowsMultipleSelectionDuringEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsMultipleSelectionDuringEditing;
```

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set it to [true](https://developer.apple.com/documentation/swift/true), check marks appear next to selected rows in editing mode. In addition, [UITableView](../uitableview.md) doesn’t query for editing styles when it goes into editing mode. If you access [indexPathsForSelectedRows](indexpathsforselectedrows.md), you can get the index paths that identify the selected rows.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRowAtIndexPath:animated:scrollPosition:](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRowAtIndexPath:animated:](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [UITableViewSelectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
