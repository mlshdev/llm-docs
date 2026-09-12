> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:contextmenuwillpresentforelement:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:contextmenuwillpresentforelement:))

# webView(\_:contextMenuWillPresentForElement:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the web view is about to present the contextual menu for the specified element.

## Declaration

```swift
optional func webView(_ webView: WKWebView, contextMenuWillPresentForElement elementInfo: WKContextMenuElementInfo)
```

## Parameters

- `webView`: The web view in which the interaction occurred.
- `elementInfo`: An object that contains information about the element involved in the interaction.

## See Also

### Displaying a contextual menu

- [Adding context menus in your app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app): Provide quick access to useful actions by adding context menus to your iOS app.
- [webView(\_:contextMenuConfigurationForElement:completionHandler:)](webview%28__contextmenuconfigurationforelement_completionhandler_%29.md): Tells the delegate that a contextual menu interaction began.
- [webView(\_:contextMenuForElement:willCommitWithAnimator:)](webview%28__contextmenuforelement_willcommitwithanimator_%29.md): Provides the delegate with the animator object that the web view uses to display the contextual menu.
- [webView(\_:contextMenuDidEndForElement:)](webview%28__contextmenudidendforelement_%29.md): Tells the delegate that the web view dismissed the contextual menu for the specified element.
- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration): An object containing the configuration details for the contextual menu.

# webView:contextMenuWillPresentForElement: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the web view is about to present the contextual menu for the specified element.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView contextMenuWillPresentForElement:(WKContextMenuElementInfo *) elementInfo;
```

## Parameters

- `webView`: The web view in which the interaction occurred.
- `elementInfo`: An object that contains information about the element involved in the interaction.

## See Also

### Displaying a contextual menu

- [Adding context menus in your app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app): Provide quick access to useful actions by adding context menus to your iOS app.
- [webView:contextMenuConfigurationForElement:completionHandler:](webview%28__contextmenuconfigurationforelement_completionhandler_%29.md): Tells the delegate that a contextual menu interaction began.
- [webView:contextMenuForElement:willCommitWithAnimator:](webview%28__contextmenuforelement_willcommitwithanimator_%29.md): Provides the delegate with the animator object that the web view uses to display the contextual menu.
- [webView:contextMenuDidEndForElement:](webview%28__contextmenudidendforelement_%29.md): Tells the delegate that the web view dismissed the contextual menu for the specified element.
- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration): An object containing the configuration details for the contextual menu.
