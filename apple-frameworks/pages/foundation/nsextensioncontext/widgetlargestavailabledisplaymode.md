> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/widgetlargestavailabledisplaymode](https://developer.apple.com/documentation/foundation/nsextensioncontext/widgetlargestavailabledisplaymode)

# widgetLargestAvailableDisplayMode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0)

The largest display mode the widget supports.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var widgetLargestAvailableDisplayMode: NCWidgetDisplayMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NCWidgetDisplayMode.compact](../../notificationcenter/ncwidgetdisplaymode/compact.md). At any time, you can change the largest display mode your widget supports by changing the value of this property. For example, you can update the property value as more or less content is available to display in your widget.

## See Also

### Deprecated

- [completeRequest(withBroadcast:broadcastConfiguration:setupInfo:)](completerequest%28withbroadcast_broadcastconfiguration_setupinfo_%29.md): Deprecated. Tells the host app to complete the app extension request with the specified broadcast information.
- [widgetActiveDisplayMode](widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetMaximumSize(for:)](widgetmaximumsize%28for_%29.md): Deprecated. Returns the maximum size for the specified widget display mode.

# widgetLargestAvailableDisplayMode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0)

The largest display mode the widget supports.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) NCWidgetDisplayMode widgetLargestAvailableDisplayMode;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NCWidgetDisplayModeCompact](../../notificationcenter/ncwidgetdisplaymode/compact.md). At any time, you can change the largest display mode your widget supports by changing the value of this property. For example, you can update the property value as more or less content is available to display in your widget.

## See Also

### Deprecated

- [completeRequestWithBroadcastURL:broadcastConfiguration:setupInfo:](completerequest%28withbroadcast_broadcastconfiguration_setupinfo_%29.md): Deprecated. Tells the host app to complete the app extension request with the specified broadcast information.
- [widgetActiveDisplayMode](widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetMaximumSizeForDisplayMode:](widgetmaximumsize%28for_%29.md): Deprecated. Returns the maximum size for the specified widget display mode.
