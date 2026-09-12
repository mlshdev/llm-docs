> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownload/originalrequest](https://developer.apple.com/documentation/webkit/wkdownload/originalrequest)

# originalRequest (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An object that represents the request that initiated the download.

## Declaration

```swift
var originalRequest: URLRequest? { get }
```

## See Also

### Inspecting the download

- [webView](webview.md): The web view where the download initiated.

# originalRequest (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An object that represents the request that initiated the download.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURLRequest * originalRequest;
```

## See Also

### Inspecting the download

- [webView](webview.md): The web view where the download initiated.
