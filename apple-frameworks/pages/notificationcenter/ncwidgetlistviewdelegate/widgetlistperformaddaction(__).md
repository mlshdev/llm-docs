> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlistperformaddaction(_:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlistperformaddaction(_:))

# widgetListPerformAddAction(\_:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to perform an action when the Add (+) button is clicked.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetListPerformAddAction(_ list: NCWidgetListViewController)
```

## Parameters

- `list`: The widget’s list view controller.

<a id="Discussion"></a>

## Discussion

When a widget’s list is in editing mode, the list view controller can display an Add (+) button. The button’s action calls `widgetListPerformAddAction:` in the delegate.

If you want to display the default search view in the add action, you can use the `presentViewControllerInWidget:` method of `NSViewController`  to present an [NCWidgetSearchViewController](../ncwidgetsearchviewcontroller.md) instance in the widget’s principal view controller.

## See Also

### Adding and Deleting Rows

- [widgetList(\_:didRemoveRow:)](widgetlist%28__didremoverow_%29.md): Deprecated. Tells the delegate that the specified row was removed from the list.
- [widgetList(\_:shouldRemoveRow:)](widgetlist%28__shouldremoverow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be removed from the list.

# widgetListPerformAddAction: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to perform an action when the Add (+) button is clicked.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetListPerformAddAction:(NCWidgetListViewController *) list;
```

## Parameters

- `list`: The widget’s list view controller.

<a id="Discussion"></a>

## Discussion

When a widget’s list is in editing mode, the list view controller can display an Add (+) button. The button’s action calls `widgetListPerformAddAction:` in the delegate.

If you want to display the default search view in the add action, you can use the `presentViewControllerInWidget:` method of `NSViewController`  to present an [NCWidgetSearchViewController](../ncwidgetsearchviewcontroller.md) instance in the widget’s principal view controller.

## See Also

### Adding and Deleting Rows

- [widgetList:didRemoveRow:](widgetlist%28__didremoverow_%29.md): Deprecated. Tells the delegate that the specified row was removed from the list.
- [widgetList:shouldRemoveRow:](widgetlist%28__shouldremoverow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be removed from the list.
