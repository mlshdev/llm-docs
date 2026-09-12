> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didupdatefocusin:with:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didupdatefocusin:with:))

# tableView(\_:didUpdateFocusIn:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a focus update specified by the context has just occurred.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didUpdateFocusIn context: UITableViewFocusUpdateContext, with coordinator: UIFocusAnimationCoordinator)
```

## Parameters

- `tableView`: A table view informing the delegate about the new focus.
- `context`: An instance of the [UIFocusUpdateContext](../uifocusupdatecontext.md) class, containing metadata for the focus related update.
- `coordinator`: An instance of the [UIFocusUpdateContext](../uifocusupdatecontext.md) class, containing metadata for the focus related update.

<a id="Discussion"></a>

## Discussion

This functionality of this delegate method is equivalent to overriding [UITableView](../uitableview.md) class’s  implementation of [tableView(\_:didUpdateFocusIn:with:)](tableview%28__didupdatefocusin_with_%29.md). This delegate method provides additional UITableView-related information in its context parameter, such as the index paths for the previously and next focused views. Note that, these index paths are available only if their views are contained within the table view. To learn more about the information provided by the context, see see [UITableViewFocusUpdateContext](../uitableviewfocusupdatecontext.md).

## See Also

### Managing table view focus

- [tableView(\_:canFocusRowAt:)](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView(\_:shouldUpdateFocusIn:)](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView(\_:selectionFollowsFocusForRowAt:)](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

# tableView:didUpdateFocusInContext:withAnimationCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a focus update specified by the context has just occurred.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didUpdateFocusInContext:(UITableViewFocusUpdateContext *) context withAnimationCoordinator:(UIFocusAnimationCoordinator *) coordinator;
```

## Parameters

- `tableView`: A table view informing the delegate about the new focus.
- `context`: An instance of the [UIFocusUpdateContext](../uifocusupdatecontext.md) class, containing metadata for the focus related update.
- `coordinator`: An instance of the [UIFocusUpdateContext](../uifocusupdatecontext.md) class, containing metadata for the focus related update.

<a id="Discussion"></a>

## Discussion

This functionality of this delegate method is equivalent to overriding [UITableView](../uitableview.md) class’s  implementation of [tableView:didUpdateFocusInContext:withAnimationCoordinator:](tableview%28__didupdatefocusin_with_%29.md). This delegate method provides additional UITableView-related information in its context parameter, such as the index paths for the previously and next focused views. Note that, these index paths are available only if their views are contained within the table view. To learn more about the information provided by the context, see see [UITableViewFocusUpdateContext](../uitableviewfocusupdatecontext.md).

## See Also

### Managing table view focus

- [tableView:canFocusRowAtIndexPath:](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView:shouldUpdateFocusInContext:](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [indexPathForPreferredFocusedViewInTableView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView:selectionFollowsFocusForRowAtIndexPath:](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.
