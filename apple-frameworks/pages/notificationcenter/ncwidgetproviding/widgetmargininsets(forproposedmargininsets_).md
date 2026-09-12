> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding/widgetmargininsets(forproposedmargininsets:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding/widgetmargininsets(forproposedmargininsets:))

# widgetMarginInsets(forProposedMarginInsets:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 8.0+ (deprecated in 10.0) · macOS 10.10+ (deprecated in 11.0)

Called to let a widget accept the default margin inset values or return custom values to use instead.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetMarginInsets(forProposedMarginInsets defaultMarginInsets: UIEdgeInsets) -> UIEdgeInsets
```

```swift
optional func widgetMarginInsets(forProposedMarginInsets defaultMarginInset: NSEdgeInsets) -> NSEdgeInsets
```

## Parameters

- `defaultMarginInsets`: The default margin insets that are available to the widget.

<a id="return-value"></a>

## Return Value

A value of type [UIEdgeInsets](../../uikit/uiedgeinsets.md) that contains the custom margin insets a widget is using instead of the default values.

<a id="Discussion"></a>

## Discussion

A widget can implement this method to return custom margin inset values to use instead of the default values specified in `defaultMarginInsets`. (If the widget doesn’t need to use custom values, it should return the unchanged default values in its implementation.) If a widget doesn’t implement this method, it automatically receives the default margin inset values.

## See Also

### Customizing the Display

- [widgetActiveDisplayModeDidChange(\_:withMaximumSize:)](widgetactivedisplaymodedidchange%28__withmaximumsize_%29.md): Deprecated. Called when the active display mode changes.
- [NCWidgetDisplayMode](../ncwidgetdisplaymode.md): Deprecated. The modes that can be toggled between when the user activates the More button for a widget running in iOS.

# widgetMarginInsetsForProposedMarginInsets: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 10.0+ (deprecated in 10.0) · macOS 10.10+ (deprecated in 11.0)

Called to let a widget accept the default margin inset values or return custom values to use instead.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (UIEdgeInsets) widgetMarginInsetsForProposedMarginInsets:(UIEdgeInsets) defaultMarginInsets;
```

```objectivec
- (NSEdgeInsets) widgetMarginInsetsForProposedMarginInsets:(NSEdgeInsets) defaultMarginInset;
```

## Parameters

- `defaultMarginInsets`: The default margin insets that are available to the widget.

<a id="return-value"></a>

## Return Value

A value of type [UIEdgeInsets](../../uikit/uiedgeinsets.md) that contains the custom margin insets a widget is using instead of the default values.

<a id="Discussion"></a>

## Discussion

A widget can implement this method to return custom margin inset values to use instead of the default values specified in `defaultMarginInsets`. (If the widget doesn’t need to use custom values, it should return the unchanged default values in its implementation.) If a widget doesn’t implement this method, it automatically receives the default margin inset values.

## See Also

### Customizing the Display

- [widgetActiveDisplayModeDidChange:withMaximumSize:](widgetactivedisplaymodedidchange%28__withmaximumsize_%29.md): Deprecated. Called when the active display mode changes.
- [NCWidgetDisplayMode](../ncwidgetdisplaymode.md): Deprecated. The modes that can be toggled between when the user activates the More button for a widget running in iOS.
