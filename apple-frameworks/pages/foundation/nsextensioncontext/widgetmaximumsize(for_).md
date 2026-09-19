> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsextensioncontext/widgetmaximumsize(for:)

# widgetMaximumSize(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0)

Returns the maximum size for the specified widget display mode.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func widgetMaximumSize(for displayMode: NCWidgetDisplayMode) -> CGSize
```

## Parameters

- `displayMode`: The active display mode of the widget. For possible values, see [NCWidgetDisplayMode](../../notificationcenter/ncwidgetdisplaymode.md).

## See Also

### Deprecated

- [completeRequest(withBroadcast:broadcastConfiguration:setupInfo:)](completerequest%28withbroadcast_broadcastconfiguration_setupinfo_%29.md): Deprecated. Tells the host app to complete the app extension request with the specified broadcast information.
- [widgetActiveDisplayMode](widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetLargestAvailableDisplayMode](widgetlargestavailabledisplaymode.md): Deprecated. The largest display mode the widget supports.

# widgetMaximumSizeForDisplayMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0)

Returns the maximum size for the specified widget display mode.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (CGSize) widgetMaximumSizeForDisplayMode:(NCWidgetDisplayMode) displayMode;
```

## Parameters

- `displayMode`: The active display mode of the widget. For possible values, see [NCWidgetDisplayMode](../../notificationcenter/ncwidgetdisplaymode.md).

## See Also

### Deprecated

- [completeRequestWithBroadcastURL:broadcastConfiguration:setupInfo:](completerequest%28withbroadcast_broadcastconfiguration_setupinfo_%29.md): Deprecated. Tells the host app to complete the app extension request with the specified broadcast information.
- [widgetActiveDisplayMode](widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetLargestAvailableDisplayMode](widgetlargestavailabledisplaymode.md): Deprecated. The largest display mode the widget supports.
