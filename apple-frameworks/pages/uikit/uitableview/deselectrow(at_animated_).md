> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/deselectrow(at:animated:)](https://developer.apple.com/documentation/uikit/uitableview/deselectrow(at:animated:))

# deselectRow(at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deselects a row that an index path identifies, with an option to animate the deselection.

## Declaration

```swift
func deselectRow(at indexPath: IndexPath, animated: Bool)
```

## Parameters

- `indexPath`: An index path identifying a row in the table view.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if you want to animate the deselection, and [false](https://developer.apple.com/documentation/swift/false) if the change should be immediate.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

Calling this method doesn’t cause the delegate to receive a [tableView(\_:willDeselectRowAt:)](../uitableviewdelegate/tableview%28__willdeselectrowat_%29.md) or [tableView(\_:didDeselectRowAt:)](../uitableviewdelegate/tableview%28__diddeselectrowat_%29.md) message, nor does it send [selectionDidChangeNotification](selectiondidchangenotification.md) notifications to observers.

Calling this method doesn’t cause any scrolling to the deselected row.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRow(at:animated:scrollPosition:)](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [selectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

# deselectRowAtIndexPath:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deselects a row that an index path identifies, with an option to animate the deselection.

## Declaration

```objectivec
- (void) deselectRowAtIndexPath:(NSIndexPath *) indexPath animated:(BOOL) animated;
```

## Parameters

- `indexPath`: An index path identifying a row in the table view.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if you want to animate the deselection, and [false](https://developer.apple.com/documentation/swift/false) if the change should be immediate.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

Calling this method doesn’t cause the delegate to receive a [tableView:willDeselectRowAtIndexPath:](../uitableviewdelegate/tableview%28__willdeselectrowat_%29.md) or [tableView:didDeselectRowAtIndexPath:](../uitableviewdelegate/tableview%28__diddeselectrowat_%29.md) message, nor does it send [UITableViewSelectionDidChangeNotification](selectiondidchangenotification.md) notifications to observers.

Calling this method doesn’t cause any scrolling to the deselected row.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [indexPathsForSelectedRows](indexpathsforselectedrows.md): The index paths that represent the selected rows.
- [selectRowAtIndexPath:animated:scrollPosition:](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [UITableViewSelectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
