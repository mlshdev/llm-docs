> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/download(_:didreceiveplaceholderurl:completionhandler:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/download(_:didreceiveplaceholderurl:completionhandler:))

# download(\_:didReceivePlaceholderURL:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 11.3+ · visionOS 2.2+

## Declaration

```swift
optional func download(_ download: WKDownload, didReceivePlaceholderURL url: URL, completionHandler: @escaping @MainActor @Sendable () -> Void)
```

```swift
optional func download(_ download: WKDownload, didReceivePlaceholderURL url: URL) async
```

# download:didReceivePlaceholderURL:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS · visionOS 2.2+

## Declaration

```objectivec
- (void) download:(WKDownload *) download didReceivePlaceholderURL:(NSURL *) url completionHandler:(void (^)(void)) completionHandler;
```
