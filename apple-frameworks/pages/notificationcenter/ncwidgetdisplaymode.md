> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetdisplaymode](https://developer.apple.com/documentation/notificationcenter/ncwidgetdisplaymode)

# NCWidgetDisplayMode (Swift)

**Framework:** Notification Center  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0)

The modes that can be toggled between when the user activates the More button for a widget running in iOS.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
enum NCWidgetDisplayMode
```

## Topics

### Constants

- [NCWidgetDisplayMode.compact](ncwidgetdisplaymode/compact.md): Deprecated. The current height of the widget is compact.
- [NCWidgetDisplayMode.expanded](ncwidgetdisplaymode/expanded.md): Deprecated. The current height of the widget is expanded.

### Initializers

- [init(rawValue:)](ncwidgetdisplaymode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the Display

- [widgetMarginInsets(forProposedMarginInsets:)](ncwidgetproviding/widgetmargininsets%28forproposedmargininsets_%29.md): Deprecated. Called to let a widget accept the default margin inset values or return custom values to use instead.
- [widgetActiveDisplayModeDidChange(\_:withMaximumSize:)](ncwidgetproviding/widgetactivedisplaymodedidchange%28__withmaximumsize_%29.md): Deprecated. Called when the active display mode changes.

# NCWidgetDisplayMode (Objective-C)

**Framework:** Notification Center  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0)

The modes that can be toggled between when the user activates the More button for a widget running in iOS.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
enum NCWidgetDisplayMode : NSInteger;
```

## Topics

### Constants

- [NCWidgetDisplayModeCompact](ncwidgetdisplaymode/compact.md): Deprecated. The current height of the widget is compact.
- [NCWidgetDisplayModeExpanded](ncwidgetdisplaymode/expanded.md): Deprecated. The current height of the widget is expanded.

## See Also

### Customizing the Display

- [widgetMarginInsetsForProposedMarginInsets:](ncwidgetproviding/widgetmargininsets%28forproposedmargininsets_%29.md): Deprecated. Called to let a widget accept the default margin inset values or return custom values to use instead.
- [widgetActiveDisplayModeDidChange:withMaximumSize:](ncwidgetproviding/widgetactivedisplaymodedidchange%28__withmaximumsize_%29.md): Deprecated. Called when the active display mode changes.
