> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/completerequest(withbroadcast:broadcastconfiguration:setupinfo:)](https://developer.apple.com/documentation/foundation/nsextensioncontext/completerequest(withbroadcast:broadcastconfiguration:setupinfo:))

# completeRequest(withBroadcast:broadcastConfiguration:setupInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the host app to complete the app extension request with the specified broadcast information.

> Use [completeRequest(withBroadcast:setupInfo:)](completerequest%28withbroadcast_setupinfo_%29.md) instead.

## Declaration

```swift
func completeRequest(withBroadcast broadcastURL: URL, broadcastConfiguration: RPBroadcastConfiguration, setupInfo: [String : any NSCoding & NSObjectProtocol]?)
```

## See Also

### Deprecated

- [widgetActiveDisplayMode](widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetLargestAvailableDisplayMode](widgetlargestavailabledisplaymode.md): Deprecated. The largest display mode the widget supports.
- [widgetMaximumSize(for:)](widgetmaximumsize%28for_%29.md): Deprecated. Returns the maximum size for the specified widget display mode.

# completeRequestWithBroadcastURL:broadcastConfiguration:setupInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the host app to complete the app extension request with the specified broadcast information.

> Use [completeRequestWithBroadcastURL:setupInfo:](completerequest%28withbroadcast_setupinfo_%29.md) instead.

## Declaration

```objectivec
- (void) completeRequestWithBroadcastURL:(NSURL *) broadcastURL broadcastConfiguration:(RPBroadcastConfiguration *) broadcastConfiguration setupInfo:(NSDictionary<NSString *,NSObject<NSCoding> *> *) setupInfo;
```

## See Also

### Deprecated

- [widgetActiveDisplayMode](widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetLargestAvailableDisplayMode](widgetlargestavailabledisplaymode.md): Deprecated. The largest display mode the widget supports.
- [widgetMaximumSizeForDisplayMode:](widgetmaximumsize%28for_%29.md): Deprecated. Returns the maximum size for the specified widget display mode.
