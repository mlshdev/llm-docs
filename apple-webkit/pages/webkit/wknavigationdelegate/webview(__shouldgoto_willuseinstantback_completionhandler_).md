> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:shouldgoto:willuseinstantback:completionhandler:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:shouldgoto:willuseinstantback:completionhandler:))

# webView(\_:shouldGoTo:willUseInstantBack:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
optional func webView(_ webView: WKWebView, shouldGoTo backForwardListItem: WKBackForwardListItem, willUseInstantBack: Bool, completionHandler: @escaping (Bool) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, shouldGoTo backForwardListItem: WKBackForwardListItem, willUseInstantBack: Bool) async -> Bool
```

# webView:shouldGoToBackForwardListItem:willUseInstantBack:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView shouldGoToBackForwardListItem:(WKBackForwardListItem *) backForwardListItem willUseInstantBack:(BOOL) willUseInstantBack completionHandler:(void (^)(BOOL shouldGoToItem)) completionHandler;
```
