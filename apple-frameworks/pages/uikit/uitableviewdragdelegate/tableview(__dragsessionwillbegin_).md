> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessionwillbegin:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessionwillbegin:))

# tableView(\_:dragSessionWillBegin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Signals the start of a drag operation involving content from the specified table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dragSessionWillBegin session: any UIDragSession)
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.

<a id="Discussion"></a>

## Discussion

This method is called after it has been determined that a drag will begin, after any lift animations have occurred, and before the position of the drag changes significantly. Use this method to perform any tasks related to the management of the drag session in your app.

Each call to this method is always balanced by a call to the [tableView(\_:dragSessionDidEnd:)](tableview%28__dragsessiondidend_%29.md) method.

## See Also

### Tracking the drag session

- [tableView(\_:dragSessionDidEnd:)](tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionIsRestrictedToDraggingApplication:)](tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
- [tableView(\_:dragSessionAllowsMoveOperation:)](tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

# tableView:dragSessionWillBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Signals the start of a drag operation involving content from the specified table view.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView dragSessionWillBegin:(id<UIDragSession>) session;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.

<a id="Discussion"></a>

## Discussion

This method is called after it has been determined that a drag will begin, after any lift animations have occurred, and before the position of the drag changes significantly. Use this method to perform any tasks related to the management of the drag session in your app.

Each call to this method is always balanced by a call to the [tableView:dragSessionDidEnd:](tableview%28__dragsessiondidend_%29.md) method.

## See Also

### Tracking the drag session

- [tableView:dragSessionDidEnd:](tableview%28__dragsessiondidend_%29.md): Signals the end of a drag operation involving content from the specified table view.
- [tableView:dragSessionIsRestrictedToDraggingApplication:](tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
- [tableView:dragSessionAllowsMoveOperation:](tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.
