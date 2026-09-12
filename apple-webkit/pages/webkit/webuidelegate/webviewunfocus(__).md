> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewunfocus(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewunfocus(_:))

# webViewUnfocus(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Relinquishes focus on a web view’s window.

## Declaration

```swift
optional func webViewUnfocus(_ sender: WebView!)
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

This method releases focus for the entire window. If you display multiple web views in a window, you might instead want to change the input focus to another view, using the [webView(\_:makeFirstResponder:)](webview%28__makefirstresponder_%29.md) method.

## See Also

### Making Windows Key and Main

- [webViewFocus(\_:)](webviewfocus%28__%29.md): Deprecated. Brings a web view’s window to the front and makes it the active window.

# webViewUnfocus: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Relinquishes focus on a web view’s window.

## Declaration

```objectivec
- (void) webViewUnfocus:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

This method releases focus for the entire window. If you display multiple web views in a window, you might instead want to change the input focus to another view, using the [webView:makeFirstResponder:](webview%28__makefirstresponder_%29.md) method.

## See Also

### Making Windows Key and Main

- [webViewFocus:](webviewfocus%28__%29.md): Deprecated. Brings a web view’s window to the front and makes it the active window.
