> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:shouldreorderrow:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:shouldreorderrow:))

# widgetList(\_:shouldReorderRow:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to allow or prohibit the specified row to be moved to a new location in the list.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetList(_ list: NCWidgetListViewController, shouldReorderRow row: Int) -> Bool
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that should be moved.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if specified row can be moved, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

List item reordering is not enabled unless the delegate implements this method and [widgetList(\_:didReorderRow:toRow:)](widgetlist%28__didreorderrow_torow_%29.md). Returning [false](https://developer.apple.com/documentation/swift/false) prohibits `row` from being moved. Returning YES allows `row` to be moved, and the delegate will be called again when the item that `row` represents is relocated in the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array.

## See Also

### Reordering List Rows

- [widgetList(\_:didReorderRow:toRow:)](widgetlist%28__didreorderrow_torow_%29.md): Deprecated. Tells the delegate that the specified row was moved to a new location.

# widgetList:shouldReorderRow: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to allow or prohibit the specified row to be moved to a new location in the list.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (BOOL) widgetList:(NCWidgetListViewController *) list shouldReorderRow:(NSUInteger) row;
```

## Parameters

- `list`: The widget’s list view controller.
- `row`: The row that should be moved.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if specified row can be moved, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

List item reordering is not enabled unless the delegate implements this method and [widgetList:didReorderRow:toRow:](widgetlist%28__didreorderrow_torow_%29.md). Returning [false](https://developer.apple.com/documentation/swift/false) prohibits `row` from being moved. Returning YES allows `row` to be moved, and the delegate will be called again when the item that `row` represents is relocated in the list view controller’s [contents](../ncwidgetlistviewcontroller/contents.md) array.

## See Also

### Reordering List Rows

- [widgetList:didReorderRow:toRow:](widgetlist%28__didreorderrow_torow_%29.md): Deprecated. Tells the delegate that the specified row was moved to a new location.
