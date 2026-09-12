> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didreceiveicon:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didreceiveicon:for:))

# webView(\_:didReceiveIcon:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a page icon changes.

## Declaration

```swift
optional func webView(_ sender: WebView!, didReceiveIcon image: NSImage!, for frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `image`: The page icon for a data source.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method may be invoked multiple times before all resources for `frame` are completely loaded. Sometimes a page uses a default icon or stored image that changes when the actual images is loaded.

# webView:didReceiveIcon:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a page icon changes.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didReceiveIcon:(NSImage *) image forFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `image`: The page icon for a data source.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method may be invoked multiple times before all resources for `frame` are completely loaded. Sometimes a page uses a default icon or stored image that changes when the actual images is loaded.
