> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding/widgetactivedisplaymodedidchange(_:withmaximumsize:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding/widgetactivedisplaymodedidchange(_:withmaximumsize:))

# widgetActiveDisplayModeDidChange(\_:withMaximumSize:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0)

Called when the active display mode changes.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetActiveDisplayModeDidChange(_ activeDisplayMode: NCWidgetDisplayMode, withMaximumSize maxSize: CGSize)
```

## Parameters

- `activeDisplayMode`: The new active display mode. See [NCWidgetDisplayMode](../ncwidgetdisplaymode.md) for possible values.
- `maxSize`: A [CGSize](../../corefoundation/cgsize.md) object that represents the new maximum size this widget can have.

<a id="Discussion"></a>

## Discussion

You might implement this method if your widget should change its [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) value to better accommodate the new display mode.

Widgets displayed as [NCWidgetDisplayMode.compact](../ncwidgetdisplaymode/compact.md) have a fixed size passed in the `maxSize` parameter.

## See Also

### Customizing the Display

- [widgetMarginInsets(forProposedMarginInsets:)](widgetmargininsets%28forproposedmargininsets_%29.md): Deprecated. Called to let a widget accept the default margin inset values or return custom values to use instead.
- [NCWidgetDisplayMode](../ncwidgetdisplaymode.md): Deprecated. The modes that can be toggled between when the user activates the More button for a widget running in iOS.

# widgetActiveDisplayModeDidChange:withMaximumSize: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0)

Called when the active display mode changes.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetActiveDisplayModeDidChange:(NCWidgetDisplayMode) activeDisplayMode withMaximumSize:(CGSize) maxSize;
```

## Parameters

- `activeDisplayMode`: The new active display mode. See [NCWidgetDisplayMode](../ncwidgetdisplaymode.md) for possible values.
- `maxSize`: A [CGSize](../../corefoundation/cgsize.md) object that represents the new maximum size this widget can have.

<a id="Discussion"></a>

## Discussion

You might implement this method if your widget should change its [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) value to better accommodate the new display mode.

Widgets displayed as [NCWidgetDisplayModeCompact](../ncwidgetdisplaymode/compact.md) have a fixed size passed in the `maxSize` parameter.

## See Also

### Customizing the Display

- [widgetMarginInsetsForProposedMarginInsets:](widgetmargininsets%28forproposedmargininsets_%29.md): Deprecated. Called to let a widget accept the default margin inset values or return custom values to use instead.
- [NCWidgetDisplayMode](../ncwidgetdisplaymode.md): Deprecated. The modes that can be toggled between when the user activates the More button for a widget running in iOS.
