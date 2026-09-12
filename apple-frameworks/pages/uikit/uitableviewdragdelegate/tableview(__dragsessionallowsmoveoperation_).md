> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessionallowsmoveoperation:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessionallowsmoveoperation:))

# tableView(\_:dragSessionAllowsMoveOperation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dragSessionAllowsMoveOperation session: any UIDragSession) -> Bool
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object containing information about the drag operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your app allows content to be moved instead of copied, or [false](https://developer.apple.com/documentation/swift/false) if moves are not supported.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to prevent the dragged content from being moved. If your delegate returns [false](https://developer.apple.com/documentation/swift/false) and the drop operation type is [UIDropOperation.move](../uidropoperation/move.md), the system cancels the drop.

If you don’t implement this method, the table view behaves as if the method returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Tracking the drag session

- [tableView(\_:dragSessionWillBegin:)](tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionDidEnd:)](tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionIsRestrictedToDraggingApplication:)](tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.

# tableView:dragSessionAllowsMoveOperation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView dragSessionAllowsMoveOperation:(id<UIDragSession>) session;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object containing information about the drag operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your app allows content to be moved instead of copied, or [false](https://developer.apple.com/documentation/swift/false) if moves are not supported.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to prevent the dragged content from being moved. If your delegate returns [false](https://developer.apple.com/documentation/swift/false) and the drop operation type is [UIDropOperationMove](../uidropoperation/move.md), the system cancels the drop.

If you don’t implement this method, the table view behaves as if the method returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Tracking the drag session

- [tableView:dragSessionWillBegin:](tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView:dragSessionDidEnd:](tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView:dragSessionIsRestrictedToDraggingApplication:](tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
