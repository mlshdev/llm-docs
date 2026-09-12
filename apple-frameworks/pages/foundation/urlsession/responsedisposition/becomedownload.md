> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/responsedisposition/becomedownload](https://developer.apple.com/documentation/foundation/urlsession/responsedisposition/becomedownload)

# URLSession.ResponseDisposition.becomeDownload (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Convert the response for this request to use a [URLSessionDownloadTask](../../urlsessiondownloadtask.md).

## Declaration

```swift
case becomeDownload
```

<a id="Discussion"></a>

## Discussion

When used with the completion handler from [urlSession(\_:dataTask:didReceive:completionHandler:)](../../urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md), this disposition converts the data task to a download task. This will result in your delegate’s [urlSession(\_:dataTask:didBecome:)](../../urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-60op5.md) being called to provide you with the new download task that supersedes the current task.

## See Also

### Task dispositions

- [URLSession.ResponseDisposition.cancel](cancel.md): Cancel the load.
- [URLSession.ResponseDisposition.allow](allow.md): Allow the load operation to continue.
- [URLSession.ResponseDisposition.becomeStream](becomestream.md): Convert the response for this request to use a [URLSessionStreamTask](../../urlsessionstreamtask.md).

# NSURLSessionResponseBecomeDownload (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Convert the response for this request to use a [NSURLSessionDownloadTask](../../urlsessiondownloadtask.md).

## Declaration

```objectivec
NSURLSessionResponseBecomeDownload
```

<a id="Discussion"></a>

## Discussion

When used with the completion handler from [URLSession:dataTask:didReceiveResponse:completionHandler:](../../urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md), this disposition converts the data task to a download task. This will result in your delegate’s [URLSession:dataTask:didBecomeDownloadTask:](../../urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-60op5.md) being called to provide you with the new download task that supersedes the current task.

## See Also

### Task dispositions

- [NSURLSessionResponseCancel](cancel.md): Cancel the load.
- [NSURLSessionResponseAllow](allow.md): Allow the load operation to continue.
- [NSURLSessionResponseBecomeStream](becomestream.md): Convert the response for this request to use a [NSURLSessionStreamTask](../../urlsessionstreamtask.md).
