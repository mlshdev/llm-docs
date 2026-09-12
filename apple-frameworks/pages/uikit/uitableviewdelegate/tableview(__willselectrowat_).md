> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willselectrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willselectrowat:))

# tableView(\_:willSelectRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate a row is about to be selected.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willSelectRowAt indexPath: IndexPath) -> IndexPath?
```

## Parameters

- `tableView`: A table view informing the delegate about the impending selection.
- `indexPath`: An index path locating the row in `tableView`.

<a id="return-value"></a>

## Return Value

An index path that confirms or alters the selected row. Return an [IndexPath](../../foundation/indexpath.md) (Swift) or [NSIndexPath](../../foundation/nsindexpath.md) (Objective-C) other than `indexPath` if you want another cell to be selected. Return `nil` if you don’t want the row selected.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The system calls this method after a user has lifted their finger; the row is highlighted on the initial touch, but only selected when the touch withdraws. You can use [UITableViewCell.SelectionStyle.none](../uitableviewcell/selectionstyle-swift.enum/none.md) to disable the appearance of the cell highlight on the initial touch. The system doesn’t call this method if the rows in the table aren’t selectable. See [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md) for more information on controlling table row selection behavior.

## See Also

### Related Documentation

- [tableView(\_:shouldIndentWhileEditingRowAt:)](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView(\_:didSelectRowAt:)](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView(\_:willDeselectRowAt:)](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView(\_:didDeselectRowAt:)](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView(\_:shouldBeginMultipleSelectionInteractionAt:)](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView(\_:didBeginMultipleSelectionInteractionAt:)](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction(\_:)](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

# tableView:willSelectRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate a row is about to be selected.

## Declaration

```objectivec
- (NSIndexPath *) tableView:(UITableView *) tableView willSelectRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: A table view informing the delegate about the impending selection.
- `indexPath`: An index path locating the row in `tableView`.

<a id="return-value"></a>

## Return Value

An index path that confirms or alters the selected row. Return an [IndexPath](../../foundation/indexpath.md) (Swift) or [NSIndexPath](../../foundation/nsindexpath.md) (Objective-C) other than `indexPath` if you want another cell to be selected. Return `nil` if you don’t want the row selected.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The system calls this method after a user has lifted their finger; the row is highlighted on the initial touch, but only selected when the touch withdraws. You can use [UITableViewCellSelectionStyleNone](../uitableviewcell/selectionstyle-swift.enum/none.md) to disable the appearance of the cell highlight on the initial touch. The system doesn’t call this method if the rows in the table aren’t selectable. See [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md) for more information on controlling table row selection behavior.

## See Also

### Related Documentation

- [tableView:shouldIndentWhileEditingRowAtIndexPath:](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView:didSelectRowAtIndexPath:](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView:willDeselectRowAtIndexPath:](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView:didDeselectRowAtIndexPath:](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView:shouldBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView:didBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction:](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.
