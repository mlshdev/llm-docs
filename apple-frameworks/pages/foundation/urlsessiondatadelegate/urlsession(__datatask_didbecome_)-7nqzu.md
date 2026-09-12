> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondatadelegate/urlsession(_:datatask:didbecome:)-7nqzu](https://developer.apple.com/documentation/foundation/urlsessiondatadelegate/urlsession(_:datatask:didbecome:)-7nqzu)

# urlSession(\_:dataTask:didBecome:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the data task was changed to a stream task.

## Declaration

```swift
optional func urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didBecome streamTask: URLSessionStreamTask)
```

## Parameters

- `session`: The session containing the task that was replaced by a stream task.
- `dataTask`: The data task that was replaced by a stream task.
- `streamTask`: The new stream task that replaced the data task.

<a id="Discussion"></a>

## Discussion

When your [urlSession(\_:dataTask:didReceive:completionHandler:)](urlsession%28__datatask_didreceive_completionhandler_%29.md) delegate method uses the [URLSession.ResponseDisposition.becomeStream](../urlsession/responsedisposition/becomestream.md) disposition to convert the request to use a stream, the session calls this delegate method to provide you with the new stream task. After this call, the session delegate receives no further delegate method calls related to the original data task.

For requests that were pipelined, the stream task allows only reading, and the object  immediately sends the delegate message [urlSession(\_:writeClosedFor:)](../urlsessionstreamdelegate/urlsession%28__writeclosedfor_%29.md). You can disable pipelining for all requests in a session by setting the [httpShouldUsePipelining](../urlsessionconfiguration/httpshouldusepipelining.md) property on its [URLSessionConfiguration](../urlsessionconfiguration.md) object, or for individual requests  by setting the [httpShouldUsePipelining](../nsurlrequest/httpshouldusepipelining.md) property on an [NSURLRequest](../nsurlrequest.md) object.

## See Also

### Handling task life cycle changes

- [urlSession(\_:dataTask:didReceive:completionHandler:)](urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [URLSession.ResponseDisposition](../urlsession/responsedisposition.md): Constants indicating how a data or upload session should proceed after receiving the initial headers.
- [urlSession(\_:dataTask:didBecome:)](urlsession%28__datatask_didbecome_%29-60op5.md): Tells the delegate that the data task was changed to a download task.

# URLSession:dataTask:didBecomeStreamTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the data task was changed to a stream task.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session dataTask:(NSURLSessionDataTask *) dataTask didBecomeStreamTask:(NSURLSessionStreamTask *) streamTask;
```

## Parameters

- `session`: The session containing the task that was replaced by a stream task.
- `dataTask`: The data task that was replaced by a stream task.
- `streamTask`: The new stream task that replaced the data task.

<a id="Discussion"></a>

## Discussion

When your [URLSession:dataTask:didReceiveResponse:completionHandler:](urlsession%28__datatask_didreceive_completionhandler_%29.md) delegate method uses the [NSURLSessionResponseBecomeStream](../urlsession/responsedisposition/becomestream.md) disposition to convert the request to use a stream, the session calls this delegate method to provide you with the new stream task. After this call, the session delegate receives no further delegate method calls related to the original data task.

For requests that were pipelined, the stream task allows only reading, and the object  immediately sends the delegate message [URLSession:writeClosedForStreamTask:](../urlsessionstreamdelegate/urlsession%28__writeclosedfor_%29.md). You can disable pipelining for all requests in a session by setting the [HTTPShouldUsePipelining](../urlsessionconfiguration/httpshouldusepipelining.md) property on its [NSURLSessionConfiguration](../urlsessionconfiguration.md) object, or for individual requests  by setting the [HTTPShouldUsePipelining](../nsurlrequest/httpshouldusepipelining.md) property on an [NSURLRequest](../nsurlrequest.md) object.

## See Also

### Handling task life cycle changes

- [URLSession:dataTask:didReceiveResponse:completionHandler:](urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [NSURLSessionResponseDisposition](../urlsession/responsedisposition.md): Constants indicating how a data or upload session should proceed after receiving the initial headers.
- [URLSession:dataTask:didBecomeDownloadTask:](urlsession%28__datatask_didbecome_%29-60op5.md): Tells the delegate that the data task was changed to a download task.
