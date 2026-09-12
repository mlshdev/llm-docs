> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessionisrestrictedtodraggingapplication:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessionisrestrictedtodraggingapplication:))

# tableView(\_:dragSessionIsRestrictedToDraggingApplication:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether the dragged content must be dropped in the same app.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dragSessionIsRestrictedToDraggingApplication session: any UIDragSession) -> Bool
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object containing information about the drag operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the dragged content must be dropped in the same app that originated the drag, or [false](https://developer.apple.com/documentation/swift/false) if the content may be dragged to other apps.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to allow the user to drag content within your app, but prevent them from dragging that same content to other apps. If you don’t implement this method, the table view behaves as if the method returned [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking the drag session

- [tableView(\_:dragSessionWillBegin:)](tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionDidEnd:)](tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionAllowsMoveOperation:)](tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

# tableView:dragSessionIsRestrictedToDraggingApplication: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether the dragged content must be dropped in the same app.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView dragSessionIsRestrictedToDraggingApplication:(id<UIDragSession>) session;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object containing information about the drag operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the dragged content must be dropped in the same app that originated the drag, or [false](https://developer.apple.com/documentation/swift/false) if the content may be dragged to other apps.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to allow the user to drag content within your app, but prevent them from dragging that same content to other apps. If you don’t implement this method, the table view behaves as if the method returned [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking the drag session

- [tableView:dragSessionWillBegin:](tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView:dragSessionDidEnd:](tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView:dragSessionAllowsMoveOperation:](tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.
