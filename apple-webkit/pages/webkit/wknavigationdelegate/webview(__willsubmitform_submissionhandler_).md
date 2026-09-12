> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:willsubmitform:submissionhandler:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:willsubmitform:submissionhandler:))

# webView(\_:willSubmitForm:submissionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func webView(_ webView: WKWebView, willSubmitForm formInfo: WKFormInfo, submissionHandler: @escaping @MainActor @Sendable () -> Void)
```

```swift
optional func webView(_ webView: WKWebView, willSubmitForm formInfo: WKFormInfo) async
```

# webView:willSubmitForm:submissionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView willSubmitForm:(WKFormInfo *) formInfo submissionHandler:(void (^)(void)) submissionHandler;
```
