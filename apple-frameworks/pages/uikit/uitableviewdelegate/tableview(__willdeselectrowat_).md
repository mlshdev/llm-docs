> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willdeselectrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willdeselectrowat:))

# tableView(\_:willDeselectRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a specified row is about to be deselected.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willDeselectRowAt indexPath: IndexPath) -> IndexPath?
```

## Parameters

- `tableView`: A table view informing the delegate about the impending deselection.
- `indexPath`: An index path locating the row in `tableView` to be deselected.

<a id="return-value"></a>

## Return Value

An index path that confirms or alters the deselected row. Return an `NSIndexPath` object other than `indexPath` if you want another cell to be deselected. Return `nil` if you don’t want the row deselected.

<a id="Discussion"></a>

## Discussion

This method is only called if there is an existing selection when the user tries to select a different row. The delegate is sent this method for the previously selected row. You can use [UITableViewCell.SelectionStyle.none](../uitableviewcell/selectionstyle-swift.enum/none.md) to disable the appearance of the cell highlight on touch-down.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView(\_:didSelectRowAt:)](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView(\_:didDeselectRowAt:)](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView(\_:shouldBeginMultipleSelectionInteractionAt:)](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView(\_:didBeginMultipleSelectionInteractionAt:)](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction(\_:)](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

# tableView:willDeselectRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that a specified row is about to be deselected.

## Declaration

```objectivec
- (NSIndexPath *) tableView:(UITableView *) tableView willDeselectRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: A table view informing the delegate about the impending deselection.
- `indexPath`: An index path locating the row in `tableView` to be deselected.

<a id="return-value"></a>

## Return Value

An index path that confirms or alters the deselected row. Return an `NSIndexPath` object other than `indexPath` if you want another cell to be deselected. Return `nil` if you don’t want the row deselected.

<a id="Discussion"></a>

## Discussion

This method is only called if there is an existing selection when the user tries to select a different row. The delegate is sent this method for the previously selected row. You can use [UITableViewCellSelectionStyleNone](../uitableviewcell/selectionstyle-swift.enum/none.md) to disable the appearance of the cell highlight on touch-down.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView:didSelectRowAtIndexPath:](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView:didDeselectRowAtIndexPath:](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView:shouldBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.
- [tableView:didBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction:](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.
