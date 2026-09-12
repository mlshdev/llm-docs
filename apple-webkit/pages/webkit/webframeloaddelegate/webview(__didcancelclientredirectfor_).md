> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didcancelclientredirectfor:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didcancelclientredirectfor:))

# webView(\_:didCancelClientRedirectFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a client redirect is cancelled.

## Declaration

```swift
optional func webView(_ sender: WebView!, didCancelClientRedirectFor frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This might happen if a frame changes locations before a pending client redirect is fired. The client redirect occurred in `frame`.

# webView:didCancelClientRedirectForFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a client redirect is cancelled.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didCancelClientRedirectForFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This might happen if a frame changes locations before a pending client redirect is fired. The client redirect occurred in `frame`.
