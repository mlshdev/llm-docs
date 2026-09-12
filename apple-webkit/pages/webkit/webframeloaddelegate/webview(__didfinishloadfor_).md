> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didfinishloadfor:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didfinishloadfor:))

# webView(\_:didFinishLoadFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a page load completes.

## Declaration

```swift
optional func webView(_ sender: WebView!, didFinishLoadFor frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is invoked when a location request for `frame` has completed; that is, when all the resources are done loading. Additional information about the request can be obtained from the data source of `frame`.

## See Also

### Related Documentation

- [webView(\_:didStartProvisionalLoadFor:)](webview%28__didstartprovisionalloadfor_%29.md): Deprecated. Called when a page load is in progress in a given frame.

# webView:didFinishLoadForFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a page load completes.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didFinishLoadForFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is invoked when a location request for `frame` has completed; that is, when all the resources are done loading. Additional information about the request can be obtained from the data source of `frame`.

## See Also

### Related Documentation

- [webView:didStartProvisionalLoadForFrame:](webview%28__didstartprovisionalloadfor_%29.md): Deprecated. Called when a page load is in progress in a given frame.
