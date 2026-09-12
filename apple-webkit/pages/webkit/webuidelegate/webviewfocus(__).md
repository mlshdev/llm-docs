> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewfocus(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewfocus(_:))

# webViewFocus(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Brings a web view’s window to the front and makes it the active window.

## Declaration

```swift
optional func webViewFocus(_ sender: WebView!)
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

By default, this method brings a web view’s window into focus. If you display multiple web views in a window then you might also want to focus the input on `sender`, using [webView(\_:makeFirstResponder:)](webview%28__makefirstresponder_%29.md).

## See Also

### Making Windows Key and Main

- [webViewUnfocus(\_:)](webviewunfocus%28__%29.md): Deprecated. Relinquishes focus on a web view’s window.

# webViewFocus: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Brings a web view’s window to the front and makes it the active window.

## Declaration

```objectivec
- (void) webViewFocus:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

By default, this method brings a web view’s window into focus. If you display multiple web views in a window then you might also want to focus the input on `sender`, using [webView:makeFirstResponder:](webview%28__makefirstresponder_%29.md).

## See Also

### Making Windows Key and Main

- [webViewUnfocus:](webviewunfocus%28__%29.md): Deprecated. Relinquishes focus on a web view’s window.
