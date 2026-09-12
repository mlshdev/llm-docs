> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:setstatustext:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:setstatustext:))

# webView(\_:setStatusText:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the status message displayed by a web view’s window, if any, to the specified text.

## Declaration

```swift
optional func webView(_ sender: WebView!, setStatusText text: String!)
```

## Parameters

- `sender`: The web view that sent the message.
- `text`: The status message to display.

<a id="Discussion"></a>

## Discussion

The delegate receives this message when a JavaScript function in the web view explicitly sets the status text. No action is taken if you do not implement this method.

## See Also

### Displaying Status Messages

- [webViewStatusText(\_:)](webviewstatustext%28__%29.md): Deprecated. Returns the current status message from a web view’s window.

# webView:setStatusText: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the status message displayed by a web view’s window, if any, to the specified text.

## Declaration

```objectivec
- (void) webView:(WebView *) sender setStatusText:(NSString *) text;
```

## Parameters

- `sender`: The web view that sent the message.
- `text`: The status message to display.

<a id="Discussion"></a>

## Discussion

The delegate receives this message when a JavaScript function in the web view explicitly sets the status text. No action is taken if you do not implement this method.

## See Also

### Displaying Status Messages

- [webViewStatusText:](webviewstatustext%28__%29.md): Deprecated. Returns the current status message from a web view’s window.
