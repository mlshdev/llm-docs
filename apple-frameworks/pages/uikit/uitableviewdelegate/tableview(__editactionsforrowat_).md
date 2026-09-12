> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:editactionsforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:editactionsforrowat:))

# tableView(\_:editActionsForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate for the actions to display in response to a swipe in the specified row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]?
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

An array of [UITableViewRowAction](../uitableviewrowaction.md) objects representing the actions for the row. Each action you provide is used to create a button that the user can tap.

<a id="Discussion"></a>

## Discussion

Use this method when you want to provide custom actions for one of your table rows. When the user swipes horizontally in a row, the table view moves the row content aside to reveal your actions. Tapping one of the action buttons executes the handler block stored with the action object.

If you do not implement this method, the table view displays the standard accessory buttons when the user swipes the row.

## See Also

### Responding to row actions

- [tableView(\_:leadingSwipeActionsConfigurationForRowAt:)](tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView(\_:trailingSwipeActionsConfigurationForRowAt:)](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView(\_:shouldShowMenuForRowAt:)](tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView(\_:canPerformAction:forRowAt:withSender:)](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView(\_:performAction:forRowAt:withSender:)](tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.

# tableView:editActionsForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate for the actions to display in response to a swipe in the specified row.

## Declaration

```objectivec
- (NSArray<UITableViewRowAction *> *) tableView:(UITableView *) tableView editActionsForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

An array of [UITableViewRowAction](../uitableviewrowaction.md) objects representing the actions for the row. Each action you provide is used to create a button that the user can tap.

<a id="Discussion"></a>

## Discussion

Use this method when you want to provide custom actions for one of your table rows. When the user swipes horizontally in a row, the table view moves the row content aside to reveal your actions. Tapping one of the action buttons executes the handler block stored with the action object.

If you do not implement this method, the table view displays the standard accessory buttons when the user swipes the row.

## See Also

### Responding to row actions

- [tableView:leadingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView:trailingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView:shouldShowMenuForRowAtIndexPath:](tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView:canPerformAction:forRowAtIndexPath:withSender:](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView:performAction:forRowAtIndexPath:withSender:](tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
