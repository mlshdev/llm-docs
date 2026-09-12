> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:makefirstresponder:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:makefirstresponder:))

# webView(\_:makeFirstResponder:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the first responder of a web view’s window to the specified view.

## Declaration

```swift
optional func webView(_ sender: WebView!, makeFirstResponder responder: NSResponder!)
```

## Parameters

- `sender`: The web view that sent the message.
- `responder`: A view in the web view’s hierarchy.

<a id="Discussion"></a>

## Discussion

You can ignore this message if `sender` is not yet attached to a window.

## See Also

### Working with the Responder Chain

- [webViewFirstResponder(\_:)](webviewfirstresponder%28__%29.md): Deprecated. Returns the first responder of the web view’s window.

# webView:makeFirstResponder: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the first responder of a web view’s window to the specified view.

## Declaration

```objectivec
- (void) webView:(WebView *) sender makeFirstResponder:(NSResponder *) responder;
```

## Parameters

- `sender`: The web view that sent the message.
- `responder`: A view in the web view’s hierarchy.

<a id="Discussion"></a>

## Discussion

You can ignore this message if `sender` is not yet attached to a window.

## See Also

### Working with the Responder Chain

- [webViewFirstResponder:](webviewfirstresponder%28__%29.md): Deprecated. Returns the first responder of the web view’s window.
