> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/showsaddbuttonwhenediting](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/showsaddbuttonwhenediting)

# showsAddButtonWhenEditing (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A Boolean value that indicates whether an Add (+) button is displayed while the list is in editing mode.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var showsAddButtonWhenEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If users click the Add (+) button while in editing mode, the button’s action send the [widgetListPerformAddAction(\_:)](../ncwidgetlistviewdelegate/widgetlistperformaddaction%28__%29.md) message to the [delegate](delegate.md).

## See Also

### Supporting Editing

- [editing](editing.md): Deprecated. A Boolean value that indicates whether the list is in editing mode.

# showsAddButtonWhenEditing (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A Boolean value that indicates whether an Add (+) button is displayed while the list is in editing mode.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (assign) BOOL showsAddButtonWhenEditing;
```

<a id="Discussion"></a>

## Discussion

If users click the Add (+) button while in editing mode, the button’s action send the [widgetListPerformAddAction:](../ncwidgetlistviewdelegate/widgetlistperformaddaction%28__%29.md) message to the [delegate](delegate.md).

## See Also

### Supporting Editing

- [editing](editing.md): Deprecated. A Boolean value that indicates whether the list is in editing mode.
