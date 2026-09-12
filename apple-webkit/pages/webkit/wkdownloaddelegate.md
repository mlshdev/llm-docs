> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownloaddelegate](https://developer.apple.com/documentation/webkit/wkdownloaddelegate)

# WKDownloadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A protocol you implement to track download progress and handle redirects, authentication challenges, and failures.

## Declaration

```swift
@MainActor protocol WKDownloadDelegate : NSObjectProtocol
```

## Topics

### Tracking Download Progress

- [download(\_:decideDestinationUsing:suggestedFilename:completionHandler:)](wkdownloaddelegate/download%28__decidedestinationusing_suggestedfilename_completionhandler_%29.md): Asks the delegate to provide a file destination where the system should write the download data.
- [downloadDidFinish(\_:)](wkdownloaddelegate/downloaddidfinish%28__%29.md): Tells the delegate that the download finished.
- [download(\_:didFailWithError:resumeData:)](wkdownloaddelegate/download%28__didfailwitherror_resumedata_%29.md): Tells the delegate that the download failed, with error information and data you can use to restart the download.

### Responding to Authorization Challenges

- [download(\_:didReceive:completionHandler:)](wkdownloaddelegate/download%28__didreceive_completionhandler_%29.md): Asks the delegate to respond to an authentication challenge.
- [WKDownload.RedirectPolicy](wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

### Responding to Redirects

- [download(\_:willPerformHTTPRedirection:newRequest:decisionHandler:)](wkdownloaddelegate/download%28__willperformhttpredirection_newrequest_decisionhandler_%29.md): Asks the delegate to respond to the download’s redirect response.
- [WKDownload.RedirectPolicy](wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

### Instance Methods

- [download(\_:decidePlaceholderPolicy:)](wkdownloaddelegate/download%28__decideplaceholderpolicy_%29.md)
- [download(\_:didReceiveFinalURL:)](wkdownloaddelegate/download%28__didreceivefinalurl_%29.md)
- [download(\_:didReceivePlaceholderURL:completionHandler:)](wkdownloaddelegate/download%28__didreceiveplaceholderurl_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Downloads

- [WKDownload](wkdownload.md): An object that represents the download of a web resource.
- [WKDownload.PlaceholderPolicy](wkdownload/placeholderpolicy.md)

# WKDownloadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A protocol you implement to track download progress and handle redirects, authentication challenges, and failures.

## Declaration

```objectivec
@protocol WKDownloadDelegate <NSObject>
```

## Topics

### Tracking Download Progress

- [download:decideDestinationUsingResponse:suggestedFilename:completionHandler:](wkdownloaddelegate/download%28__decidedestinationusing_suggestedfilename_completionhandler_%29.md): Asks the delegate to provide a file destination where the system should write the download data.
- [downloadDidFinish:](wkdownloaddelegate/downloaddidfinish%28__%29.md): Tells the delegate that the download finished.
- [download:didFailWithError:resumeData:](wkdownloaddelegate/download%28__didfailwitherror_resumedata_%29.md): Tells the delegate that the download failed, with error information and data you can use to restart the download.

### Responding to Authorization Challenges

- [download:didReceiveAuthenticationChallenge:completionHandler:](wkdownloaddelegate/download%28__didreceive_completionhandler_%29.md): Asks the delegate to respond to an authentication challenge.
- [WKDownloadRedirectPolicy](wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

### Responding to Redirects

- [download:willPerformHTTPRedirection:newRequest:decisionHandler:](wkdownloaddelegate/download%28__willperformhttpredirection_newrequest_decisionhandler_%29.md): Asks the delegate to respond to the download’s redirect response.
- [WKDownloadRedirectPolicy](wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

### Instance Methods

- [download:decidePlaceholderPolicy:](wkdownloaddelegate/download%28__decideplaceholderpolicy_%29.md)
- [download:didReceiveFinalURL:](wkdownloaddelegate/download%28__didreceivefinalurl_%29.md)
- [download:didReceivePlaceholderURL:completionHandler:](wkdownloaddelegate/download%28__didreceiveplaceholderurl_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Downloads

- [WKDownload](wkdownload.md): An object that represents the download of a web resource.
- [WKDownloadPlaceholderPolicy](wkdownload/placeholderpolicy.md)
