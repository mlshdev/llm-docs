> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:willclose:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:willclose:))

# webView(\_:willClose:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a frame will be closed.

## Declaration

```swift
optional func webView(_ sender: WebView!, willClose frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

Called right before WebKit is done with `frame` and the objects it owns.

## See Also

### Related Documentation

- [webView(\_:willPerformClientRedirectTo:delay:fire:for:)](webview%28__willperformclientredirectto_delay_fire_for_%29.md): Deprecated. Called when a frame receives a client redirect and before it is fired.

# webView:willCloseFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a frame will be closed.

## Declaration

```objectivec
- (void) webView:(WebView *) sender willCloseFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

Called right before WebKit is done with `frame` and the objects it owns.

## See Also

### Related Documentation

- [webView:willPerformClientRedirectToURL:delay:fireDate:forFrame:](webview%28__willperformclientredirectto_delay_fire_for_%29.md): Deprecated. Called when a frame receives a client redirect and before it is fired.
