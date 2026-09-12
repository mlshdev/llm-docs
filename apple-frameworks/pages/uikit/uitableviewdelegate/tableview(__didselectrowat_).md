> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didselectrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didselectrowat:))

# tableView(\_:didSelectRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate a row is selected.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: A table view informing the delegate about the new row selection.
- `indexPath`: An index path locating the new selected row in `tableView`.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The delegate handles selections in this method. For instance, you can use this method to assign a checkmark ([UITableViewCell.AccessoryType.checkmark](../uitableviewcell/accessorytype-swift.enum/checkmark.md)) to one row in a section in order to create a radio-list style. The system doesn’t call this method if the rows in the table aren’t selectable. See [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md) for more information on controlling table row selection behavior.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView(\_:willDeselectRowAt:)](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView(\_:didDeselectRowAt:)](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView(\_:shouldBeginMultipleSelectionInteractionAt:)](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView(\_:didBeginMultipleSelectionInteractionAt:)](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction(\_:)](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

# tableView:didSelectRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate a row is selected.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didSelectRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: A table view informing the delegate about the new row selection.
- `indexPath`: An index path locating the new selected row in `tableView`.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The delegate handles selections in this method. For instance, you can use this method to assign a checkmark ([UITableViewCellAccessoryCheckmark](../uitableviewcell/accessorytype-swift.enum/checkmark.md)) to one row in a section in order to create a radio-list style. The system doesn’t call this method if the rows in the table aren’t selectable. See [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md) for more information on controlling table row selection behavior.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView:willDeselectRowAtIndexPath:](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView:didDeselectRowAtIndexPath:](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView:shouldBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView:didBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction:](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.
