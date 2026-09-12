> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:didreorderrow:torow:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:didreorderrow:torow:))

# widgetList(\_:didReorderRow:toRow:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that the specified row was moved to a new location.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetList(_ list: NCWidgetListViewController, didReorderRow row: Int, toRow newIndex: Int)
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that was moved.
- `newIndex`: The new location of `row`.

<a id="Discussion"></a>

## Discussion

List item reordering is not enabled unless the delegate implements this method and [widgetList(\_:shouldReorderRow:)](widgetlist%28__shouldreorderrow_%29.md). The item represented by `row` is moved to its new location in the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array before this method is called.

## See Also

### Reordering List Rows

- [widgetList(\_:shouldReorderRow:)](widgetlist%28__shouldreorderrow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be moved to a new location in the list.

# widgetList:didReorderRow:toRow: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that the specified row was moved to a new location.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetList:(NCWidgetListViewController *) list didReorderRow:(NSUInteger) row toRow:(NSUInteger) newIndex;
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that was moved.
- `newIndex`: The new location of `row`.

<a id="Discussion"></a>

## Discussion

List item reordering is not enabled unless the delegate implements this method and [widgetList:shouldReorderRow:](widgetlist%28__shouldreorderrow_%29.md). The item represented by `row` is moved to its new location in the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array before this method is called.

## See Also

### Reordering List Rows

- [widgetList:shouldReorderRow:](widgetlist%28__shouldreorderrow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be moved to a new location in the list.
