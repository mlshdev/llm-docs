> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:shouldremoverow:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:shouldremoverow:))

# widgetList(\_:shouldRemoveRow:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to allow or prohibit the specified row to be removed from the list.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetList(_ list: NCWidgetListViewController, shouldRemoveRow row: Int) -> Bool
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that should be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified row can be removed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

List item deletion is not enabled unless the delegate implements this method and [widgetList(\_:didRemoveRow:)](widgetlist%28__didremoverow_%29.md). Returning [false](https://developer.apple.com/documentation/swift/false) prohibits `row` from being deleted. Returning YES allows `row` to be deleted, and the delegate will be called again when the item that `row` represents is deleted from the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array.

## See Also

### Adding and Deleting Rows

- [widgetList(\_:didRemoveRow:)](widgetlist%28__didremoverow_%29.md): Deprecated. Tells the delegate that the specified row was removed from the list.
- [widgetListPerformAddAction(\_:)](widgetlistperformaddaction%28__%29.md): Deprecated. Asks the delegate to perform an action when the Add (+) button is clicked.

# widgetList:shouldRemoveRow: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to allow or prohibit the specified row to be removed from the list.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (BOOL) widgetList:(NCWidgetListViewController *) list shouldRemoveRow:(NSUInteger) row;
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that should be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified row can be removed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

List item deletion is not enabled unless the delegate implements this method and [widgetList:didRemoveRow:](widgetlist%28__didremoverow_%29.md). Returning [false](https://developer.apple.com/documentation/swift/false) prohibits `row` from being deleted. Returning YES allows `row` to be deleted, and the delegate will be called again when the item that `row` represents is deleted from the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array.

## See Also

### Adding and Deleting Rows

- [widgetList:didRemoveRow:](widgetlist%28__didremoverow_%29.md): Deprecated. Tells the delegate that the specified row was removed from the list.
- [widgetListPerformAddAction:](widgetlistperformaddaction%28__%29.md): Deprecated. Asks the delegate to perform an action when the Add (+) button is clicked.
