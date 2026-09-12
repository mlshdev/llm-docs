> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewfirstresponder(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewfirstresponder(_:))

# webViewFirstResponder(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the first responder of the web view’s window.

## Declaration

```swift
optional func webViewFirstResponder(_ sender: WebView!) -> NSResponder!
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The view or subview that currently has the input focus. It can return `nil` or the default first responder if the sender is not attached to a window or if another view (not in the window) has the focus.

## See Also

### Working with the Responder Chain

- [webView(\_:makeFirstResponder:)](webview%28__makefirstresponder_%29.md): Deprecated. Sets the first responder of a web view’s window to the specified view.

# webViewFirstResponder: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the first responder of the web view’s window.

## Declaration

```objectivec
- (NSResponder *) webViewFirstResponder:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The view or subview that currently has the input focus. It can return `nil` or the default first responder if the sender is not attached to a window or if another view (not in the window) has the focus.

## See Also

### Working with the Responder Chain

- [webView:makeFirstResponder:](webview%28__makefirstresponder_%29.md): Deprecated. Sets the first responder of a web view’s window to the specified view.
