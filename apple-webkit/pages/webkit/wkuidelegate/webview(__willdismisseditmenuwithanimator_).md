> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:willdismisseditmenuwithanimator:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:willdismisseditmenuwithanimator:))

# webView(\_:willDismissEditMenuWithAnimator:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Tells the delegate that the web view is about to dismiss an edit menu.

## Declaration

```swift
optional func webView(_ webView: WKWebView, willDismissEditMenuWithAnimator animator: any UIEditMenuInteractionAnimating)
```

## See Also

### Displaying an edit menu

- [webView(\_:willPresentEditMenuWithAnimator:)](webview%28__willpresenteditmenuwithanimator_%29.md): Tells the delegate that the web view is about to present an edit menu.

# webView:willDismissEditMenuWithAnimator: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Tells the delegate that the web view is about to dismiss an edit menu.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView willDismissEditMenuWithAnimator:(id<UIEditMenuInteractionAnimating>) animator;
```

## See Also

### Displaying an edit menu

- [webView:willPresentEditMenuWithAnimator:](webview%28__willpresenteditmenuwithanimator_%29.md): Tells the delegate that the web view is about to present an edit menu.
