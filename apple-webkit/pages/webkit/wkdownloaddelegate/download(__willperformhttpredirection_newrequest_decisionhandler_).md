> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/download(_:willperformhttpredirection:newrequest:decisionhandler:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/download(_:willperformhttpredirection:newrequest:decisionhandler:))

# download(\_:willPerformHTTPRedirection:newRequest:decisionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Asks the delegate to respond to the download’s redirect response.

## Declaration

```swift
optional func download(_ download: WKDownload, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest, decisionHandler: @escaping @MainActor @Sendable (WKDownload.RedirectPolicy) -> Void)
```

```swift
optional func download(_ download: WKDownload, decidedPolicyForHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest) async -> WKDownload.RedirectPolicy
```

## Parameters

- `download`: The download that receives the redirect response.
- `response`: The redirect response.
- `request`: The new request the web view sends as a result of the redirect response.
- `decisionHandler`: A closure you must invoke, providing a download redirect policy that indicates whether to proceed with the redirect.

<a id="Discussion"></a>

## Discussion

Determine whether to proceed with the redirect. Then invoke the decisionHandler closure, providing a download redirect policy that indicates whether to proceed with the redirect.

If you don’t implement this method, the web view proceeds with all redirects.

## See Also

### Responding to Redirects

- [WKDownload.RedirectPolicy](../wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

# download:willPerformHTTPRedirection:newRequest:decisionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Asks the delegate to respond to the download’s redirect response.

## Declaration

```objectivec
- (void) download:(WKDownload *) download willPerformHTTPRedirection:(NSHTTPURLResponse *) response newRequest:(NSURLRequest *) request decisionHandler:(void (^)(enum WKDownloadRedirectPolicy)) decisionHandler;
```

## Parameters

- `download`: The download that receives the redirect response.
- `response`: The redirect response.
- `request`: The new request the web view sends as a result of the redirect response.
- `decisionHandler`: A closure you must invoke, providing a download redirect policy that indicates whether to proceed with the redirect.

<a id="Discussion"></a>

## Discussion

Determine whether to proceed with the redirect. Then invoke the decisionHandler closure, providing a download redirect policy that indicates whether to proceed with the redirect.

If you don’t implement this method, the web view proceeds with all redirects.

## See Also

### Responding to Redirects

- [WKDownloadRedirectPolicy](../wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.
