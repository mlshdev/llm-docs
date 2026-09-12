> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:canfocusrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:canfocusrowat:))

# tableView(\_:canFocusRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the cell at the specified index path is itself focusable.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, canFocusRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row indicated by `indexPath`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The functionality of this delegate method is equivalent to overriding the cell’s [canBecomeFocused](../uiview/canbecomefocused.md) method. If [true](https://developer.apple.com/documentation/swift/true) is returned, then the cell at the specified index path is focusable, meaning none of its contents can be focused. Returning[false](https://developer.apple.com/documentation/swift/false) means the cell itself is not focusable, however this does not prevent any of its contents from being focused. If this method is not implemented, then the return value is assumed to be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing table view focus

- [tableView(\_:shouldUpdateFocusIn:)](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView(\_:didUpdateFocusIn:with:)](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView(\_:selectionFollowsFocusForRowAt:)](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.

# tableView:canFocusRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the cell at the specified index path is itself focusable.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView canFocusRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row indicated by `indexPath`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The functionality of this delegate method is equivalent to overriding the cell’s [canBecomeFocused](../uiview/canbecomefocused.md) method. If [true](https://developer.apple.com/documentation/swift/true) is returned, then the cell at the specified index path is focusable, meaning none of its contents can be focused. Returning[false](https://developer.apple.com/documentation/swift/false) means the cell itself is not focusable, however this does not prevent any of its contents from being focused. If this method is not implemented, then the return value is assumed to be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing table view focus

- [tableView:shouldUpdateFocusInContext:](tableview%28__shouldupdatefocusin_%29.md): Asks the delegate whether the focus update specified by the context is allowed to occur.
- [tableView:didUpdateFocusInContext:withAnimationCoordinator:](tableview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update specified by the context has just occurred.
- [indexPathForPreferredFocusedViewInTableView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the table view’s index path for the preferred focused view.
- [tableView:selectionFollowsFocusForRowAtIndexPath:](tableview%28__selectionfollowsfocusforrowat_%29.md): Asks the delegate whether to relate selection and focus behavior for the row at the corresponding index path.
