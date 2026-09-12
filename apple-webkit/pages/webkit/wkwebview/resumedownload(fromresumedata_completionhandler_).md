> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/resumedownload(fromresumedata:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/resumedownload(fromresumedata:completionhandler:))

# resumeDownload(fromResumeData:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Resumes a failed or canceled download.

## Declaration

```swift
func resumeDownload(fromResumeData resumeData: Data, completionHandler: @escaping @MainActor @Sendable (WKDownload) -> Void)
```

```swift
func resumeDownload(fromResumeData resumeData: Data) async -> WKDownload
```

## Parameters

- `resumeData`: An object with data that you use to resume a failed or canceled download.
- `completionHandler`: A closure the system executes when it has resumed a download.

<a id="Discussion"></a>

## Discussion

To receive progress updates, set the delegate of the download object in the completion handler.

## See Also

### Managing downloads

- [startDownload(using:completionHandler:)](startdownload%28using_completionhandler_%29.md): Starts to download the resource at the URL in the request.

# resumeDownloadFromResumeData:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Resumes a failed or canceled download.

## Declaration

```objectivec
- (void) resumeDownloadFromResumeData:(NSData *) resumeData completionHandler:(void (^)(WKDownload *)) completionHandler;
```

## Parameters

- `resumeData`: An object with data that you use to resume a failed or canceled download.
- `completionHandler`: A closure the system executes when it has resumed a download.

<a id="Discussion"></a>

## Discussion

To receive progress updates, set the delegate of the download object in the completion handler.

## See Also

### Managing downloads

- [startDownloadUsingRequest:completionHandler:](startdownload%28using_completionhandler_%29.md): Starts to download the resource at the URL in the request.
