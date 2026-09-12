> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/allowsmultipleselection](https://developer.apple.com/documentation/uikit/uitableview/allowsmultipleselection)

# allowsMultipleSelection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether users can select more than one row outside of editing mode.

## Declaration

```swift
var allowsMultipleSelection: Bool { get set }
```

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

This property controls whether a user can select multiple rows simultaneously outside of editing mode. Selected rows acquire a selected appearance.

In iOS, when the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can select additional rows by tapping on them. The user must tap a currently selected row to deselect it.

In macOS, when the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can select additional rows by holding the Command or Shift key while clicking on the additional rows they want to select. If the user isn’t holding a modifier key, clicking on another row clears the current selection and selects only the clicked row. This behavior resembles the selection behavior of [NSTableView](https://developer.apple.com/documentation/appkit/nstableview).

If you access [indexPathsForSelectedRows](indexpathsforselectedrows.md), you can get the index paths that identify the selected rows.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRow(at:animated:scrollPosition:)](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRow(at:animated:)](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [selectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

# allowsMultipleSelection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether users can select more than one row outside of editing mode.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsMultipleSelection;
```

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

This property controls whether a user can select multiple rows simultaneously outside of editing mode. Selected rows acquire a selected appearance.

In iOS, when the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can select additional rows by tapping on them. The user must tap a currently selected row to deselect it.

In macOS, when the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can select additional rows by holding the Command or Shift key while clicking on the additional rows they want to select. If the user isn’t holding a modifier key, clicking on another row clears the current selection and selects only the clicked row. This behavior resembles the selection behavior of [NSTableView](https://developer.apple.com/documentation/appkit/nstableview).

If you access [indexPathsForSelectedRows](indexpathsforselectedrows.md), you can get the index paths that identify the selected rows.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRowAtIndexPath:animated:scrollPosition:](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRowAtIndexPath:animated:](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [UITableViewSelectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
