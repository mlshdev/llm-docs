> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewstatustext(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewstatustext(_:))

# webViewStatusText(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the current status message from a web view’s window.

## Declaration

```swift
optional func webViewStatusText(_ sender: WebView!) -> String!
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The status message displayed in the web view’s window if one has been set with the [webView(\_:setStatusText:)](webview%28__setstatustext_%29.md) method; otherwise, `nil`.

## See Also

### Displaying Status Messages

- [webView(\_:setStatusText:)](webview%28__setstatustext_%29.md): Deprecated. Sets the status message displayed by a web view’s window, if any, to the specified text.

# webViewStatusText: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the current status message from a web view’s window.

## Declaration

```objectivec
- (NSString *) webViewStatusText:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The status message displayed in the web view’s window if one has been set with the [webView:setStatusText:](webview%28__setstatustext_%29.md) method; otherwise, `nil`.

## See Also

### Displaying Status Messages

- [webView:setStatusText:](webview%28__setstatustext_%29.md): Deprecated. Sets the status message displayed by a web view’s window, if any, to the specified text.
