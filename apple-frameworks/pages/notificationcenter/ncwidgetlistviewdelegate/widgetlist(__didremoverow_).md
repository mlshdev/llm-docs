> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:didremoverow:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:didremoverow:))

# widgetList(\_:didRemoveRow:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that the specified row was removed from the list.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetList(_ list: NCWidgetListViewController, didRemoveRow row: Int)
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that was removed.

<a id="Discussion"></a>

## Discussion

List item deletion is not enabled unless the delegate implements this method and [widgetList(\_:shouldRemoveRow:)](widgetlist%28__shouldremoverow_%29.md). The item represented by `row` is removed from the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array before this method is called.

## See Also

### Adding and Deleting Rows

- [widgetList(\_:shouldRemoveRow:)](widgetlist%28__shouldremoverow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be removed from the list.
- [widgetListPerformAddAction(\_:)](widgetlistperformaddaction%28__%29.md): Deprecated. Asks the delegate to perform an action when the Add (+) button is clicked.

# widgetList:didRemoveRow: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that the specified row was removed from the list.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetList:(NCWidgetListViewController *) list didRemoveRow:(NSUInteger) row;
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that was removed.

<a id="Discussion"></a>

## Discussion

List item deletion is not enabled unless the delegate implements this method and [widgetList:shouldRemoveRow:](widgetlist%28__shouldremoverow_%29.md). The item represented by `row` is removed from the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array before this method is called.

## See Also

### Adding and Deleting Rows

- [widgetList:shouldRemoveRow:](widgetlist%28__shouldremoverow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be removed from the list.
- [widgetListPerformAddAction:](widgetlistperformaddaction%28__%29.md): Deprecated. Asks the delegate to perform an action when the Add (+) button is clicked.
