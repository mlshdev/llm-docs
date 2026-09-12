> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/delegate](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/delegate)

# delegate (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The list view controller’s delegate or `nil` if the receiver doesn’t have a delegate.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
@IBOutlet weak var delegate: (any NCWidgetListViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A list view controller’s delegate provides a custom view controller for each object in [contents](contents.md). The delegate also performs editing-related functions, such as responding to interaction with an Add (+) button and reordering and removing rows.

To learn about the methods the delegate can implement, see [NCWidgetListViewDelegate](../ncwidgetlistviewdelegate.md).

## See Also

### Displaying and Editing List Content

- [NCWidgetListViewDelegate](../ncwidgetlistviewdelegate.md): Deprecated. The interface for handling content display and editing in the list view of a macOS Today widget.

# delegate (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The list view controller’s delegate or `nil` if the receiver doesn’t have a delegate.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (weak, nullable) id<NCWidgetListViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A list view controller’s delegate provides a custom view controller for each object in [contents](contents.md). The delegate also performs editing-related functions, such as responding to interaction with an Add (+) button and reordering and removing rows.

To learn about the methods the delegate can implement, see [NCWidgetListViewDelegate](../ncwidgetlistviewdelegate.md).

## See Also

### Displaying and Editing List Content

- [NCWidgetListViewDelegate](../ncwidgetlistviewdelegate.md): Deprecated. The interface for handling content display and editing in the list view of a macOS Today widget.
