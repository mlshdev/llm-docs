> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:shouldbeginmultipleselectioninteractionat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:shouldbeginmultipleselectioninteractionat:))

# tableView(\_:shouldBeginMultipleSelectionInteractionAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, shouldBeginMultipleSelectionInteractionAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view calling this method.
- `indexPath`: The index path of the row that the user touched to start the two-finger pan gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the user to select multiple rows using a two-finger pan gesture; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disable the behavior. The default value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the system recognizes a two-finger pan gesture, it calls this method before it sets [isEditing](../uitableview/isediting.md) to [true](https://developer.apple.com/documentation/swift/true). If you return [true](https://developer.apple.com/documentation/swift/true) from this method, the user can select multiple rows using a two-finger pan gesture.

In macOS, the system calls this method when a user attempts to select multiple rows by holding a modifier key and clicking additional rows to select them.

To support multiple selection using the two-finger pan gesture (in iOS) or modifier keys (in macOS), set the [allowsMultipleSelectionDuringEditing](../uitableview/allowsmultipleselectionduringediting.md) property to [true](https://developer.apple.com/documentation/swift/true) when you configure the table view.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView(\_:willSelectRowAt:)](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView(\_:didSelectRowAt:)](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView(\_:willDeselectRowAt:)](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView(\_:didDeselectRowAt:)](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView(\_:didBeginMultipleSelectionInteractionAt:)](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction(\_:)](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.

# tableView:shouldBeginMultipleSelectionInteractionAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the user can use a two-finger pan gesture to select multiple items in a table view.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView shouldBeginMultipleSelectionInteractionAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view calling this method.
- `indexPath`: The index path of the row that the user touched to start the two-finger pan gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the user to select multiple rows using a two-finger pan gesture; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disable the behavior. The default value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the system recognizes a two-finger pan gesture, it calls this method before it sets [editing](../uitableview/isediting.md) to [true](https://developer.apple.com/documentation/swift/true). If you return [true](https://developer.apple.com/documentation/swift/true) from this method, the user can select multiple rows using a two-finger pan gesture.

In macOS, the system calls this method when a user attempts to select multiple rows by holding a modifier key and clicking additional rows to select them.

To support multiple selection using the two-finger pan gesture (in iOS) or modifier keys (in macOS), set the [allowsMultipleSelectionDuringEditing](../uitableview/allowsmultipleselectionduringediting.md) property to [true](https://developer.apple.com/documentation/swift/true) when you configure the table view.

## See Also

### Responding to row selections

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md): Detect when a user taps a table view cell so your app can take the next indicated action.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [tableView:willSelectRowAtIndexPath:](tableview%28__willselectrowat_%29.md): Tells the delegate a row is about to be selected.
- [tableView:didSelectRowAtIndexPath:](tableview%28__didselectrowat_%29.md): Tells the delegate a row is selected.
- [tableView:willDeselectRowAtIndexPath:](tableview%28__willdeselectrowat_%29.md): Tells the delegate that a specified row is about to be deselected.
- [tableView:didDeselectRowAtIndexPath:](tableview%28__diddeselectrowat_%29.md): Tells the delegate that the specified row is now deselected.
- [tableView:didBeginMultipleSelectionInteractionAtIndexPath:](tableview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple rows in a table view.
- [tableViewDidEndMultipleSelectionInteraction:](tableviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple rows in a table view.
