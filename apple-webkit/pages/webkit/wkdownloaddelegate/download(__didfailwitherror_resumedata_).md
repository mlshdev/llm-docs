> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/download(_:didfailwitherror:resumedata:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/download(_:didfailwitherror:resumedata:))

# download(\_:didFailWithError:resumeData:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Tells the delegate that the download failed, with error information and data you can use to restart the download.

## Declaration

```swift
optional func download(_ download: WKDownload, didFailWithError error: any Error, resumeData: Data?)
```

## Parameters

- `download`: The download that failed.
- `error`: An error describing what caused the download to fail.
- `resumeData`: A data object you use to restart the download.

<a id="Discussion"></a>

## Discussion

To restart a failed download, call [resumeDownload(fromResumeData:completionHandler:)](../wkwebview/resumedownload%28fromresumedata_completionhandler_%29.md) with `resumeData`.

## See Also

### Tracking Download Progress

- [download(\_:decideDestinationUsing:suggestedFilename:completionHandler:)](download%28__decidedestinationusing_suggestedfilename_completionhandler_%29.md): Asks the delegate to provide a file destination where the system should write the download data.
- [downloadDidFinish(\_:)](downloaddidfinish%28__%29.md): Tells the delegate that the download finished.

# download:didFailWithError:resumeData: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that the download failed, with error information and data you can use to restart the download.

## Declaration

```objectivec
- (void) download:(WKDownload *) download didFailWithError:(NSError *) error resumeData:(NSData *) resumeData;
```

## Parameters

- `download`: The download that failed.
- `error`: An error describing what caused the download to fail.
- `resumeData`: A data object you use to restart the download.

<a id="Discussion"></a>

## Discussion

To restart a failed download, call [resumeDownloadFromResumeData:completionHandler:](../wkwebview/resumedownload%28fromresumedata_completionhandler_%29.md) with `resumeData`.

## See Also

### Tracking Download Progress

- [download:decideDestinationUsingResponse:suggestedFilename:completionHandler:](download%28__decidedestinationusing_suggestedfilename_completionhandler_%29.md): Asks the delegate to provide a file destination where the system should write the download data.
- [downloadDidFinish:](downloaddidfinish%28__%29.md): Tells the delegate that the download finished.
