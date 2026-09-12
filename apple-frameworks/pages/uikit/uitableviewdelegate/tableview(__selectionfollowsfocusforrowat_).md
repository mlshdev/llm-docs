> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:selectionfollowsfocusforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:selectionfollowsfocusforrowat:))

# tableView(\_:selectionFollowsFocusForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, selectionFollowsFocusForRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view making the request.
- `indexPath`: The index path of the row to determine selection behavior for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to automatically select the row at the specified index path when focus moves to it; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the table view’s [selectionFollowsFocus](../uitableview/selectionfollowsfocus.md) property is [true](https://developer.apple.com/documentation/swift/true) and you return [false](https://developer.apple.com/documentation/swift/false) from this delegate method, focus still moves to the row when the user selects it. However, when focus moves to the row, the row doesn’t automatically select.

## See Also

### Managing table view focus

- [tableView(\_:canFocusRowAt:)](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView(\_:shouldUpdateFocusIn:)](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView(\_:didUpdateFocusIn:with:)](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.

# tableView:selectionFollowsFocusForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView selectionFollowsFocusForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view making the request.
- `indexPath`: The index path of the row to determine selection behavior for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to automatically select the row at the specified index path when focus moves to it; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the table view’s [selectionFollowsFocus](../uitableview/selectionfollowsfocus.md) property is [true](https://developer.apple.com/documentation/swift/true) and you return [false](https://developer.apple.com/documentation/swift/false) from this delegate method, focus still moves to the row when the user selects it. However, when focus moves to the row, the row doesn’t automatically select.

## See Also

### Managing table view focus

- [tableView:canFocusRowAtIndexPath:](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView:shouldUpdateFocusInContext:](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView:didUpdateFocusInContext:withAnimationCoordinator:](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedViewInTableView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
