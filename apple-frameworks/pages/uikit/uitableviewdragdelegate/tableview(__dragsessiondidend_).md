> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessiondidend:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:dragsessiondidend:))

# tableView(\_:dragSessionDidEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Signals the end of a drag operation involving content from the specified table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dragSessionDidEnd session: any UIDragSession)
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.

<a id="Discussion"></a>

## Discussion

This method is called after the drag session ended, usually because the content was dropped but possibly because the drag was terminated. Use this method to close out any tasks related to the management of the drag session in your app.

Each call to this method is always preceded by a call to the [tableView(\_:dragSessionWillBegin:)](tableview%28__dragsessionwillbegin_%29.md) method.

## See Also

### Tracking the drag session

- [tableView(\_:dragSessionWillBegin:)](tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView(\_:dragSessionIsRestrictedToDraggingApplication:)](tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
- [tableView(\_:dragSessionAllowsMoveOperation:)](tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.

# tableView:dragSessionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Signals the end of a drag operation involving content from the specified table view.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView dragSessionDidEnd:(id<UIDragSession>) session;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.

<a id="Discussion"></a>

## Discussion

This method is called after the drag session ended, usually because the content was dropped but possibly because the drag was terminated. Use this method to close out any tasks related to the management of the drag session in your app.

Each call to this method is always preceded by a call to the [tableView:dragSessionWillBegin:](tableview%28__dragsessionwillbegin_%29.md) method.

## See Also

### Tracking the drag session

- [tableView:dragSessionWillBegin:](tableview%28__dragsessionwillbegin_%29.md): Signals the start of a drag operation involving content from the specified table view.
- [tableView:dragSessionIsRestrictedToDraggingApplication:](tableview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value indicating whether the dragged content must be dropped in the same app.
- [tableView:dragSessionAllowsMoveOperation:](tableview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value indicating whether your app supports a move operation for the dragged content.
