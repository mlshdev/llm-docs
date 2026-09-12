> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownload/webview](https://developer.apple.com/documentation/webkit/wkdownload/webview)

# webView (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The web view where the download initiated.

## Declaration

```swift
weak var webView: WKWebView? { get }
```

## See Also

### Inspecting the download

- [originalRequest](originalrequest.md): An object that represents the request that initiated the download.

# webView (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The web view where the download initiated.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) WKWebView * webView;
```

## See Also

### Inspecting the download

- [originalRequest](originalrequest.md): An object that represents the request that initiated the download.
