> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:shouldupdatefocusin:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:shouldupdatefocusin:))

# tableView(\_:shouldUpdateFocusIn:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the focus update specified by the context is allowed to occur.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, shouldUpdateFocusIn context: UITableViewFocusUpdateContext) -> Bool
```

## Parameters

- `tableView`: A table view in which the focus update is occurring.
- `context`: An instance of [UIFocusUpdateContext](../uifocusupdatecontext.md) class, contains metadata for the focus related update.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the focus should update; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The functionality of this delegate method is equivalent to overriding [UITableView](../uitableview.md) class’s  [shouldUpdateFocus(in:)](../uifocusenvironment/shouldupdatefocus%28in_%29.md) method. This delegate method provides additional [UITableView](../uitableview.md)-related information in its context parameter, such as the index paths for the previously and next focused views. Note that, these index paths are only available if their views are contained within the table view. To learn more about the information provided by the context, see [UITableViewFocusUpdateContext](../uitableviewfocusupdatecontext.md).

## See Also

### Managing table view focus

- [tableView(\_:canFocusRowAt:)](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView(\_:didUpdateFocusIn:with:)](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView(\_:selectionFollowsFocusForRowAt:)](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

# tableView:shouldUpdateFocusInContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the focus update specified by the context is allowed to occur.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView shouldUpdateFocusInContext:(UITableViewFocusUpdateContext *) context;
```

## Parameters

- `tableView`: A table view in which the focus update is occurring.
- `context`: An instance of [UIFocusUpdateContext](../uifocusupdatecontext.md) class, contains metadata for the focus related update.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the focus should update; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The functionality of this delegate method is equivalent to overriding [UITableView](../uitableview.md) class’s  [shouldUpdateFocusInContext:](../uifocusenvironment/shouldupdatefocus%28in_%29.md) method. This delegate method provides additional [UITableView](../uitableview.md)-related information in its context parameter, such as the index paths for the previously and next focused views. Note that, these index paths are only available if their views are contained within the table view. To learn more about the information provided by the context, see [UITableViewFocusUpdateContext](../uitableviewfocusupdatecontext.md).

## See Also

### Managing table view focus

- [tableView:canFocusRowAtIndexPath:](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView:didUpdateFocusInContext:withAnimationCoordinator:](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedViewInTableView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView:selectionFollowsFocusForRowAtIndexPath:](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.
