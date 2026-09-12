> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/download(_:decidedestinationusing:suggestedfilename:completionhandler:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/download(_:decidedestinationusing:suggestedfilename:completionhandler:))

# download(\_:decideDestinationUsing:suggestedFilename:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Asks the delegate to provide a file destination where the system should write the download data.

## Declaration

```swift
func download(_ download: WKDownload, decideDestinationUsing response: URLResponse, suggestedFilename: String, completionHandler: @escaping @MainActor @Sendable (URL?) -> Void)
```

```swift
func download(_ download: WKDownload, decideDestinationUsing response: URLResponse, suggestedFilename: String) async -> URL?
```

## Parameters

- `download`: The download that needs a file destination where the systems should write the download data.
- `response`: A response from the server for an HTTP request, or a synthesized response for a blob download.
- `suggestedFilename`: A string with a filename suggestion to use in creating the file destination.
- `completionHandler`: A closure you invoke with a destination file URL to begin the download, or `nil` to cancel the download.

<a id="Discussion"></a>

## Discussion

The suggested filename can come from the response or from the web content.

The destination file URL must meet the following requirements:

- It’s a file that doesn’t exist.
- It’s in a directory that exists.
- It’s in a directory that WebKit can write to.

## See Also

### Tracking Download Progress

- [downloadDidFinish(\_:)](downloaddidfinish%28__%29.md): Tells the delegate that the download finished.
- [download(\_:didFailWithError:resumeData:)](download%28__didfailwitherror_resumedata_%29.md): Tells the delegate that the download failed, with error information and data you can use to restart the download.

# download:decideDestinationUsingResponse:suggestedFilename:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Asks the delegate to provide a file destination where the system should write the download data.

## Declaration

```objectivec
- (void) download:(WKDownload *) download decideDestinationUsingResponse:(NSURLResponse *) response suggestedFilename:(NSString *) suggestedFilename completionHandler:(void (^)(NSURL *)) completionHandler;
```

## Parameters

- `download`: The download that needs a file destination where the systems should write the download data.
- `response`: A response from the server for an HTTP request, or a synthesized response for a blob download.
- `suggestedFilename`: A string with a filename suggestion to use in creating the file destination.
- `completionHandler`: A closure you invoke with a destination file URL to begin the download, or `nil` to cancel the download.

<a id="Discussion"></a>

## Discussion

The suggested filename can come from the response or from the web content.

The destination file URL must meet the following requirements:

- It’s a file that doesn’t exist.
- It’s in a directory that exists.
- It’s in a directory that WebKit can write to.

## See Also

### Tracking Download Progress

- [downloadDidFinish:](downloaddidfinish%28__%29.md): Tells the delegate that the download finished.
- [download:didFailWithError:resumeData:](download%28__didfailwitherror_resumedata_%29.md): Tells the delegate that the download failed, with error information and data you can use to restart the download.
