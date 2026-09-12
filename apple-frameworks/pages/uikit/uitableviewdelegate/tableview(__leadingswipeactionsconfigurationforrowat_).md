> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:leadingswipeactionsconfigurationforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:leadingswipeactionsconfigurationforrowat:))

# tableView(\_:leadingSwipeActionsConfigurationForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the swipe actions to display on the leading edge of the row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, leadingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration?
```

## Parameters

- `tableView`: The table view containing the row.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

The swipe actions to display next to the leading edge of the row. Return `nil` if you want the table to display the default set of actions.

<a id="Discussion"></a>

## Discussion

Use this method to return a set of actions to display when the user swipes the row. The actions you return are displayed on the leading edge of the row. For example, in a left-to-right language environment, they are displayed on the left side of the row when the user swipes from left to right.

## See Also

### Responding to row actions

- [tableView(\_:trailingSwipeActionsConfigurationForRowAt:)](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView(\_:shouldShowMenuForRowAt:)](tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView(\_:canPerformAction:forRowAt:withSender:)](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView(\_:performAction:forRowAt:withSender:)](tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
- [tableView(\_:editActionsForRowAt:)](tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.

# tableView:leadingSwipeActionsConfigurationForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the swipe actions to display on the leading edge of the row.

## Declaration

```objectivec
- (UISwipeActionsConfiguration *) tableView:(UITableView *) tableView leadingSwipeActionsConfigurationForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view containing the row.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

The swipe actions to display next to the leading edge of the row. Return `nil` if you want the table to display the default set of actions.

<a id="Discussion"></a>

## Discussion

Use this method to return a set of actions to display when the user swipes the row. The actions you return are displayed on the leading edge of the row. For example, in a left-to-right language environment, they are displayed on the left side of the row when the user swipes from left to right.

## See Also

### Responding to row actions

- [tableView:trailingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView:shouldShowMenuForRowAtIndexPath:](tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView:canPerformAction:forRowAtIndexPath:withSender:](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView:performAction:forRowAtIndexPath:withSender:](tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
- [tableView:editActionsForRowAtIndexPath:](tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.
