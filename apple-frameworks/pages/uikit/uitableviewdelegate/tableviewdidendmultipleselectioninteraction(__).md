> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableviewdidendmultipleselectioninteraction(_:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableviewdidendmultipleselectioninteraction(_:))

# tableViewDidEndMultipleSelectionInteraction(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

## Declaration

```swift
optional func tableViewDidEndMultipleSelectionInteraction(_ tableView: UITableView)
```

## Parameters

- `tableView`: The table view calling this method.

<a id="Discussion"></a>

## Discussion

The table view calls this method after the user lifts their finger from the device.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView(\_:didSelectRowAt:)](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView(\_:willDeselectRowAt:)](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView(\_:didDeselectRowAt:)](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView(\_:shouldBeginMultipleSelectionInteractionAt:)](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView(\_:didBeginMultipleSelectionInteractionAt:)](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.

# tableViewDidEndMultipleSelectionInteraction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

## Declaration

```objectivec
- (void) tableViewDidEndMultipleSelectionInteraction:(UITableView *) tableView;
```

## Parameters

- `tableView`: The table view calling this method.

<a id="Discussion"></a>

## Discussion

The table view calls this method after the user lifts their finger from the device.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView:didSelectRowAtIndexPath:](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView:willDeselectRowAtIndexPath:](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView:didDeselectRowAtIndexPath:](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView:shouldBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView:didBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
