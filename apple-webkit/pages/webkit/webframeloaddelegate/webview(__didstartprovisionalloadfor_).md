> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didstartprovisionalloadfor:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didstartprovisionalloadfor:))

# webView(\_:didStartProvisionalLoadFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a page load is in progress in a given frame.

## Declaration

```swift
optional func webView(_ sender: WebView!, didStartProvisionalLoadFor frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is invoked when a new client request is made by `sender` to load a provisional data source for `frame`. This method may be invoked after sending [load(\_:)](../webframe/load%28__%29-47p2s.md) to a `WebFrame` object or as a consequence of the user clicking a link displayed in a web frame view. Delegates might implement this method to notify the user that a request is in progress. Additional information about the request can be obtained from the data source of `frame`.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# webView:didStartProvisionalLoadForFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a page load is in progress in a given frame.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didStartProvisionalLoadForFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is invoked when a new client request is made by `sender` to load a provisional data source for `frame`. This method may be invoked after sending [loadRequest:](../webframe/load%28__%29-47p2s.md) to a `WebFrame` object or as a consequence of the user clicking a link displayed in a web frame view. Delegates might implement this method to notify the user that a request is in progress. Additional information about the request can be obtained from the data source of `frame`.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
