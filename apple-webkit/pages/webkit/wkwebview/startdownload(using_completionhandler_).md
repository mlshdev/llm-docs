> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/startdownload(using:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/startdownload(using:completionhandler:))

# startDownload(using:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Starts to download the resource at the URL in the request.

## Declaration

```swift
func startDownload(using request: URLRequest, completionHandler: @escaping @MainActor @Sendable (WKDownload) -> Void)
```

```swift
func startDownload(using request: URLRequest) async -> WKDownload
```

## Parameters

- `request`: An object that encapsulates a URL and other parameters that you need to download a resource from a webpage.
- `completionHandler`: A closure the system executes when it has started to download the resource.

<a id="Discussion"></a>

## Discussion

To receive progress updates, set the delegate of the download object in the completion handler.

## See Also

### Managing downloads

- [resumeDownload(fromResumeData:completionHandler:)](resumedownload%28fromresumedata_completionhandler_%29.md): Resumes a failed or canceled download.

# startDownloadUsingRequest:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Starts to download the resource at the URL in the request.

## Declaration

```objectivec
- (void) startDownloadUsingRequest:(NSURLRequest *) request completionHandler:(void (^)(WKDownload *)) completionHandler;
```

## Parameters

- `request`: An object that encapsulates a URL and other parameters that you need to download a resource from a webpage.
- `completionHandler`: A closure the system executes when it has started to download the resource.

<a id="Discussion"></a>

## Discussion

To receive progress updates, set the delegate of the download object in the completion handler.

## See Also

### Managing downloads

- [resumeDownloadFromResumeData:completionHandler:](resumedownload%28fromresumedata_completionhandler_%29.md): Resumes a failed or canceled download.
