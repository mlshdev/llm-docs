> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/webview(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/webview(for:))

# webView(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the web view for the tab is needed.

## Declaration

```swift
optional func webView(for context: WKWebExtensionContext) -> WKWebView?
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

The web view’s [WKWebViewConfiguration](../wkwebviewconfiguration.md) must have its [webExtensionController](../wkwebviewconfiguration/webextensioncontroller.md) property set to match the controller of the given context; otherwise `nil` will be used. Defaults to `nil` if not implemented. If `nil`, some critical features will not be available for this tab, such as content injection or modification.

# webViewForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the web view for the tab is needed.

## Declaration

```objectivec
- (WKWebView *) webViewForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

The web view’s [WKWebViewConfiguration](../wkwebviewconfiguration.md) must have its [webExtensionController](../wkwebviewconfiguration/webextensioncontroller.md) property set to match the controller of the given context; otherwise `nil` will be used. Defaults to `nil` if not implemented. If `nil`, some critical features will not be available for this tab, such as content injection or modification.
