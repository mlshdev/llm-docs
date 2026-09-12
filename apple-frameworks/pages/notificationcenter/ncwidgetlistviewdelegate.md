> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate)

# NCWidgetListViewDelegate (Swift)

**Framework:** Notification Center  
**Kind:** Protocol  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The interface for handling content display and editing in the list view of a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
protocol NCWidgetListViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The `NCWidgetListViewDelegate` protocol defines methods that handle content display and editing in the list view of a Today widget. The [delegate](ncwidgetlistviewcontroller/delegate.md) of an [NCWidgetListViewController](ncwidgetlistviewcontroller.md) must adopt the `NCWidgetListViewDelegate` protocol.

The single required method in the protocol, [widgetList(\_:viewControllerForRow:)](ncwidgetlistviewdelegate/widgetlist%28__viewcontrollerforrow_%29.md), creates a view controller for the contents of one row in the widget’s list view. Optional methods in the `NCWidgetListViewDelegate` protocol support editing actions, such as adding a new list item and reordering or deleting list rows.

## Topics

### Creating a Content View Controller

- [widgetList(\_:viewControllerForRow:)](ncwidgetlistviewdelegate/widgetlist%28__viewcontrollerforrow_%29.md): Deprecated. Asks the delegate for a content view controller for the specified row.

### Adding and Deleting Rows

- [widgetList(\_:didRemoveRow:)](ncwidgetlistviewdelegate/widgetlist%28__didremoverow_%29.md): Deprecated. Tells the delegate that the specified row was removed from the list.
- [widgetList(\_:shouldRemoveRow:)](ncwidgetlistviewdelegate/widgetlist%28__shouldremoverow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be removed from the list.
- [widgetListPerformAddAction(\_:)](ncwidgetlistviewdelegate/widgetlistperformaddaction%28__%29.md): Deprecated. Asks the delegate to perform an action when the Add (+) button is clicked.

### Reordering List Rows

- [widgetList(\_:didReorderRow:toRow:)](ncwidgetlistviewdelegate/widgetlist%28__didreorderrow_torow_%29.md): Deprecated. Tells the delegate that the specified row was moved to a new location.
- [widgetList(\_:shouldReorderRow:)](ncwidgetlistviewdelegate/widgetlist%28__shouldreorderrow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be moved to a new location in the list.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Displaying and Editing List Content

- [delegate](ncwidgetlistviewcontroller/delegate.md): Deprecated. The list view controller’s delegate or `nil` if the receiver doesn’t have a delegate.

# NCWidgetListViewDelegate (Objective-C)

**Framework:** Notification Center  
**Kind:** Protocol  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The interface for handling content display and editing in the list view of a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
@protocol NCWidgetListViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The `NCWidgetListViewDelegate` protocol defines methods that handle content display and editing in the list view of a Today widget. The [delegate](ncwidgetlistviewcontroller/delegate.md) of an [NCWidgetListViewController](ncwidgetlistviewcontroller.md) must adopt the `NCWidgetListViewDelegate` protocol.

The single required method in the protocol, [widgetList:viewControllerForRow:](ncwidgetlistviewdelegate/widgetlist%28__viewcontrollerforrow_%29.md), creates a view controller for the contents of one row in the widget’s list view. Optional methods in the `NCWidgetListViewDelegate` protocol support editing actions, such as adding a new list item and reordering or deleting list rows.

## Topics

### Creating a Content View Controller

- [widgetList:viewControllerForRow:](ncwidgetlistviewdelegate/widgetlist%28__viewcontrollerforrow_%29.md): Deprecated. Asks the delegate for a content view controller for the specified row.

### Adding and Deleting Rows

- [widgetList:didRemoveRow:](ncwidgetlistviewdelegate/widgetlist%28__didremoverow_%29.md): Deprecated. Tells the delegate that the specified row was removed from the list.
- [widgetList:shouldRemoveRow:](ncwidgetlistviewdelegate/widgetlist%28__shouldremoverow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be removed from the list.
- [widgetListPerformAddAction:](ncwidgetlistviewdelegate/widgetlistperformaddaction%28__%29.md): Deprecated. Asks the delegate to perform an action when the Add (+) button is clicked.

### Reordering List Rows

- [widgetList:didReorderRow:toRow:](ncwidgetlistviewdelegate/widgetlist%28__didreorderrow_torow_%29.md): Deprecated. Tells the delegate that the specified row was moved to a new location.
- [widgetList:shouldReorderRow:](ncwidgetlistviewdelegate/widgetlist%28__shouldreorderrow_%29.md): Deprecated. Asks the delegate to allow or prohibit the specified row to be moved to a new location in the list.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Displaying and Editing List Content

- [delegate](ncwidgetlistviewcontroller/delegate.md): Deprecated. The list view controller’s delegate or `nil` if the receiver doesn’t have a delegate.
