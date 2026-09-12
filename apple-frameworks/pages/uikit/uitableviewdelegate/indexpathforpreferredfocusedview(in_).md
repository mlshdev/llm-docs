> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/indexpathforpreferredfocusedview(in:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/indexpathforpreferredfocusedview(in:))

# indexPathForPreferredFocusedView(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the table view’s index path for the preferred focused view.

## Declaration

```swift
optional func indexPathForPreferredFocusedView(in tableView: UITableView) -> IndexPath?
```

## Parameters

- `tableView`: A table view requesting the index path for preferred focus view.

<a id="return-value"></a>

## Return Value

An index path for the preferred focus row, or the default preferred focus view.

<a id="Discussion"></a>

## Discussion

This functionality of this delegate method is equivalent to overriding [UITableView](../uitableview.md) class’s [preferredFocusedView](../uifocusguide/preferredfocusedview.md) method in the [UIFocusEnvironment](../uifocusenvironment.md) protocol. If the [UITableView](../uitableview.md) class’s [remembersLastFocusedIndexPath](../uitableview/rememberslastfocusedindexpath.md) method is set to [true](https://developer.apple.com/documentation/swift/true), this method defines the index path that gets focused when the table view is focused for the first time.

The effects of this method may be ignored during or immediately after a view controller transition, such as a presentation dismissal or navigation stack pop. In such cases, the view controller attempts to restore focus to the item that was focused prior to the transition (for example, prior to the view controller being presented or pushed), which can take precedence over the effects of this method. To learn how to control or disable this behavior in the view controller, see [restoresFocusAfterTransition](../uiviewcontroller/restoresfocusaftertransition.md).

## See Also

### Managing table view focus

- [tableView(\_:canFocusRowAt:)](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView(\_:shouldUpdateFocusIn:)](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView(\_:didUpdateFocusIn:with:)](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [tableView(\_:selectionFollowsFocusForRowAt:)](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

# indexPathForPreferredFocusedViewInTableView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the table view’s index path for the preferred focused view.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForPreferredFocusedViewInTableView:(UITableView *) tableView;
```

## Parameters

- `tableView`: A table view requesting the index path for preferred focus view.

<a id="return-value"></a>

## Return Value

An index path for the preferred focus row, or the default preferred focus view.

<a id="Discussion"></a>

## Discussion

This functionality of this delegate method is equivalent to overriding [UITableView](../uitableview.md) class’s [preferredFocusedView](../uifocusguide/preferredfocusedview.md) method in the [UIFocusEnvironment](../uifocusenvironment.md) protocol. If the [UITableView](../uitableview.md) class’s [remembersLastFocusedIndexPath](../uitableview/rememberslastfocusedindexpath.md) method is set to [true](https://developer.apple.com/documentation/swift/true), this method defines the index path that gets focused when the table view is focused for the first time.

The effects of this method may be ignored during or immediately after a view controller transition, such as a presentation dismissal or navigation stack pop. In such cases, the view controller attempts to restore focus to the item that was focused prior to the transition (for example, prior to the view controller being presented or pushed), which can take precedence over the effects of this method. To learn how to control or disable this behavior in the view controller, see [restoresFocusAfterTransition](../uiviewcontroller/restoresfocusaftertransition.md).

## See Also

### Managing table view focus

- [tableView:canFocusRowAtIndexPath:](tableview%28__canfocusrowat_%29.md): Asks the delegate whether the cell at the specified index path is itself focusable.
- [tableView:shouldUpdateFocusInContext:](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView:didUpdateFocusInContext:withAnimationCoordinator:](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [tableView:selectionFollowsFocusForRowAtIndexPath:](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.
