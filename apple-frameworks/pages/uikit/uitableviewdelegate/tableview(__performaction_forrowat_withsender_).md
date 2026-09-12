> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:performaction:forrowat:withsender:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:performaction:forrowat:withsender:))

# tableView(\_:performAction:forRowAt:withSender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Tells the delegate to perform a copy or paste operation on the content of a given row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, performAction action: Selector, forRowAt indexPath: IndexPath, withSender sender: Any?)
```

## Parameters

- `tableView`: The table view that is making this request.
- `action`: A selector type identifying the [copy(\_:)](../uiresponderstandardeditactions/copy%28__%29.md) or [paste(\_:)](../uiresponderstandardeditactions/paste%28__%29.md) method of the [UIResponderStandardEditActions](../uiresponderstandardeditactions.md) informal protocol.
- `indexPath`: The index path of the row.
- `sender`: The object that initially sent the `copy:` or `paste:` message.

<a id="Discussion"></a>

## Discussion

The table view invokes this method for a given `action` if the user taps Copy or Paste in the editing menu. The delegate can do whatever is appropriate for the action; for example, for a copy, it can extract the relevant cell content for the row at `indexPath` and write it to the general pasteboard or an application (private) pasteboard. See [UIPasteboard](../uipasteboard.md) for further information.

## See Also

### Responding to row actions

- [tableView(\_:leadingSwipeActionsConfigurationForRowAt:)](tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView(\_:trailingSwipeActionsConfigurationForRowAt:)](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView(\_:shouldShowMenuForRowAt:)](tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView(\_:canPerformAction:forRowAt:withSender:)](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView(\_:editActionsForRowAt:)](tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.

# tableView:performAction:forRowAtIndexPath:withSender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Tells the delegate to perform a copy or paste operation on the content of a given row.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView performAction:(SEL) action forRowAtIndexPath:(NSIndexPath *) indexPath withSender:(id) sender;
```

## Parameters

- `tableView`: The table view that is making this request.
- `action`: A selector type identifying the [copy:](../uiresponderstandardeditactions/copy%28__%29.md) or [paste:](../uiresponderstandardeditactions/paste%28__%29.md) method of the [UIResponderStandardEditActions](../uiresponderstandardeditactions.md) informal protocol.
- `indexPath`: The index path of the row.
- `sender`: The object that initially sent the `copy:` or `paste:` message.

<a id="Discussion"></a>

## Discussion

The table view invokes this method for a given `action` if the user taps Copy or Paste in the editing menu. The delegate can do whatever is appropriate for the action; for example, for a copy, it can extract the relevant cell content for the row at `indexPath` and write it to the general pasteboard or an application (private) pasteboard. See [UIPasteboard](../uipasteboard.md) for further information.

## See Also

### Responding to row actions

- [tableView:leadingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView:trailingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView:shouldShowMenuForRowAtIndexPath:](tableview%28__shouldshowmenuforrowat_%29.md): Deprecated. Asks the delegate if the editing menu should be shown for a certain row.
- [tableView:canPerformAction:forRowAtIndexPath:withSender:](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView:editActionsForRowAtIndexPath:](tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.
