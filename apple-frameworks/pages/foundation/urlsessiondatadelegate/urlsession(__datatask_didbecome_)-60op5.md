> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondatadelegate/urlsession(_:datatask:didbecome:)-60op5](https://developer.apple.com/documentation/foundation/urlsessiondatadelegate/urlsession(_:datatask:didbecome:)-60op5)

# urlSession(\_:dataTask:didBecome:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the data task was changed to a download task.

## Declaration

```swift
optional func urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didBecome downloadTask: URLSessionDownloadTask)
```

## Parameters

- `session`: The session containing the task that was replaced by a download task.
- `dataTask`: The data task that was replaced by a download task.
- `downloadTask`: The new download task that replaced the data task.

<a id="Discussion"></a>

## Discussion

When your [urlSession(\_:dataTask:didReceive:completionHandler:)](urlsession%28__datatask_didreceive_completionhandler_%29.md) delegate method uses the [URLSession.ResponseDisposition.becomeDownload](../urlsession/responsedisposition/becomedownload.md) disposition to convert the request to use a download, the session calls this delegate method to provide you with the new download task. After this call, the session delegate receives no further delegate method calls related to the original data task.

## See Also

### Handling task life cycle changes

- [urlSession(\_:dataTask:didReceive:completionHandler:)](urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [URLSession.ResponseDisposition](../urlsession/responsedisposition.md): Constants indicating how a data or upload session should proceed after receiving the initial headers.
- [urlSession(\_:dataTask:didBecome:)](urlsession%28__datatask_didbecome_%29-7nqzu.md): Tells the delegate that the data task was changed to a stream task.

# URLSession:dataTask:didBecomeDownloadTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the data task was changed to a download task.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session dataTask:(NSURLSessionDataTask *) dataTask didBecomeDownloadTask:(NSURLSessionDownloadTask *) downloadTask;
```

## Parameters

- `session`: The session containing the task that was replaced by a download task.
- `dataTask`: The data task that was replaced by a download task.
- `downloadTask`: The new download task that replaced the data task.

<a id="Discussion"></a>

## Discussion

When your [URLSession:dataTask:didReceiveResponse:completionHandler:](urlsession%28__datatask_didreceive_completionhandler_%29.md) delegate method uses the [NSURLSessionResponseBecomeDownload](../urlsession/responsedisposition/becomedownload.md) disposition to convert the request to use a download, the session calls this delegate method to provide you with the new download task. After this call, the session delegate receives no further delegate method calls related to the original data task.

## See Also

### Handling task life cycle changes

- [URLSession:dataTask:didReceiveResponse:completionHandler:](urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [NSURLSessionResponseDisposition](../urlsession/responsedisposition.md): Constants indicating how a data or upload session should proceed after receiving the initial headers.
- [URLSession:dataTask:didBecomeStreamTask:](urlsession%28__datatask_didbecome_%29-7nqzu.md): Tells the delegate that the data task was changed to a stream task.
