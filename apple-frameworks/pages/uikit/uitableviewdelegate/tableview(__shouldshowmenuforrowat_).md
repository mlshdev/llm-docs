> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:shouldshowmenuforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:shouldshowmenuforrowat:))

# tableView(\_:shouldShowMenuForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Asks the delegate if the editing menu should be shown for a certain row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, shouldShowMenuForRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view that is making this request.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the editing menu should be shown positioned near the row and pointing to it, otherwise [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the user tap-holds a certain row in the table view, this method (if implemented) is invoked first. Return [false](https://developer.apple.com/documentation/swift/false) if the editing menu shouldn’t be shown—for example, the cell corresponding to the row contains content that shouldn’t be copied or pasted over.

## See Also

### Responding to row actions

- [tableView(\_:leadingSwipeActionsConfigurationForRowAt:)](tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView(\_:trailingSwipeActionsConfigurationForRowAt:)](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView(\_:canPerformAction:forRowAt:withSender:)](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView(\_:performAction:forRowAt:withSender:)](tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
- [tableView(\_:editActionsForRowAt:)](tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.

# tableView:shouldShowMenuForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Asks the delegate if the editing menu should be shown for a certain row.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView shouldShowMenuForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view that is making this request.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the editing menu should be shown positioned near the row and pointing to it, otherwise [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the user tap-holds a certain row in the table view, this method (if implemented) is invoked first. Return [false](https://developer.apple.com/documentation/swift/false) if the editing menu shouldn’t be shown—for example, the cell corresponding to the row contains content that shouldn’t be copied or pasted over.

## See Also

### Responding to row actions

- [tableView:leadingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__leadingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the leading edge of the row.
- [tableView:trailingSwipeActionsConfigurationForRowAtIndexPath:](tableview%28__trailingswipeactionsconfigurationforrowat_%29.md): Returns the swipe actions to display on the trailing edge of the row.
- [tableView:canPerformAction:forRowAtIndexPath:withSender:](tableview%28__canperformaction_forrowat_withsender_%29.md): Deprecated. Asks the delegate if the editing menu should omit the Copy or Paste command for a given row.
- [tableView:performAction:forRowAtIndexPath:withSender:](tableview%28__performaction_forrowat_withsender_%29.md): Deprecated. Tells the delegate to perform a copy or paste operation on the content of a given row.
- [tableView:editActionsForRowAtIndexPath:](tableview%28__editactionsforrowat_%29.md): Deprecated. Asks the delegate for the actions to display in response to a swipe in the specified row.
