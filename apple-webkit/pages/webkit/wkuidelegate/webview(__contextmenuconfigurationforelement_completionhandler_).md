> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:contextmenuconfigurationforelement:completionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:contextmenuconfigurationforelement:completionhandler:))

# webView(\_:contextMenuConfigurationForElement:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that a contextual menu interaction began.

## Declaration

```swift
optional func webView(_ webView: WKWebView, contextMenuConfigurationForElement elementInfo: WKContextMenuElementInfo, completionHandler: @escaping @MainActor @Sendable (UIContextMenuConfiguration?) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, contextMenuConfigurationFor elementInfo: WKContextMenuElementInfo) async -> UIContextMenuConfiguration?
```

## Parameters

- `webView`: The web view in which the interaction occurred.
- `elementInfo`: An object that contains information about the element involved in the interaction.
- `completionHandler`: The completion handler for you to call with information about how you want to handle the interaction. This handler block has no return value and takes the following parameter:

  - **configuration**: The [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration) object that contains the details of how you want to handle the interaction. Specify `nil` for this parameter if you don’t want to show a contextual menu.

## See Also

### Displaying a contextual menu

- [Adding context menus in your app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app): Provide quick access to useful actions by adding context menus to your iOS app.
- [webView(\_:contextMenuForElement:willCommitWithAnimator:)](webview%28__contextmenuforelement_willcommitwithanimator_%29.md): Provides the delegate with the animator object that the web view uses to display the contextual menu.
- [webView(\_:contextMenuWillPresentForElement:)](webview%28__contextmenuwillpresentforelement_%29.md): Tells the delegate that the web view is about to present the contextual menu for the specified element.
- [webView(\_:contextMenuDidEndForElement:)](webview%28__contextmenudidendforelement_%29.md): Tells the delegate that the web view dismissed the contextual menu for the specified element.
- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration): An object containing the configuration details for the contextual menu.

# webView:contextMenuConfigurationForElement:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that a contextual menu interaction began.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView contextMenuConfigurationForElement:(WKContextMenuElementInfo *) elementInfo completionHandler:(void (^)(UIContextMenuConfiguration *)) completionHandler;
```

## Parameters

- `webView`: The web view in which the interaction occurred.
- `elementInfo`: An object that contains information about the element involved in the interaction.
- `completionHandler`: The completion handler for you to call with information about how you want to handle the interaction. This handler block has no return value and takes the following parameter:

  - **configuration**: The [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration) object that contains the details of how you want to handle the interaction. Specify `nil` for this parameter if you don’t want to show a contextual menu.

## See Also

### Displaying a contextual menu

- [Adding context menus in your app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app): Provide quick access to useful actions by adding context menus to your iOS app.
- [webView:contextMenuForElement:willCommitWithAnimator:](webview%28__contextmenuforelement_willcommitwithanimator_%29.md): Provides the delegate with the animator object that the web view uses to display the contextual menu.
- [webView:contextMenuWillPresentForElement:](webview%28__contextmenuwillpresentforelement_%29.md): Tells the delegate that the web view is about to present the contextual menu for the specified element.
- [webView:contextMenuDidEndForElement:](webview%28__contextmenudidendforelement_%29.md): Tells the delegate that the web view dismissed the contextual menu for the specified element.
- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration): An object containing the configuration details for the contextual menu.
