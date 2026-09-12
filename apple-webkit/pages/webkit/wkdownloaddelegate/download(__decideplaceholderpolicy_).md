> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/download(_:decideplaceholderpolicy:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/download(_:decideplaceholderpolicy:))

# download(\_:decidePlaceholderPolicy:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 11.3+ · visionOS 2.2+

## Declaration

```swift
optional func download(_ download: WKDownload, decidePlaceholderPolicy completionHandler: @escaping @MainActor @Sendable (WKDownload.PlaceholderPolicy, URL?) -> Void)
```

```swift
optional func placeholderPolicy(forDownload download: WKDownload) async -> (WKDownload.PlaceholderPolicy, URL?)
```

# download:decidePlaceholderPolicy: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS · visionOS 2.2+

## Declaration

```objectivec
- (void) download:(WKDownload *) download decidePlaceholderPolicy:(void (^)(enum WKDownloadPlaceholderPolicy, NSURL *)) completionHandler;
```
