> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate/downloaddidfinish(_:)](https://developer.apple.com/documentation/webkit/wkdownloaddelegate/downloaddidfinish(_:))

# downloadDidFinish(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Tells the delegate that the download finished.

## Declaration

```swift
optional func downloadDidFinish(_ download: WKDownload)
```

## Parameters

- `download`: The download that finished.

## See Also

### Tracking Download Progress

- [download(\_:decideDestinationUsing:suggestedFilename:completionHandler:)](download%28__decidedestinationusing_suggestedfilename_completionhandler_%29.md): Asks the delegate to provide a file destination where the system should write the download data.
- [download(\_:didFailWithError:resumeData:)](download%28__didfailwitherror_resumedata_%29.md): Tells the delegate that the download failed, with error information and data you can use to restart the download.

# downloadDidFinish: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that the download finished.

## Declaration

```objectivec
- (void) downloadDidFinish:(WKDownload *) download;
```

## Parameters

- `download`: The download that finished.

## See Also

### Tracking Download Progress

- [download:decideDestinationUsingResponse:suggestedFilename:completionHandler:](download%28__decidedestinationusing_suggestedfilename_completionhandler_%29.md): Asks the delegate to provide a file destination where the system should write the download data.
- [download:didFailWithError:resumeData:](download%28__didfailwitherror_resumedata_%29.md): Tells the delegate that the download failed, with error information and data you can use to restart the download.
