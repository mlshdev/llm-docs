> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/responsedisposition](https://developer.apple.com/documentation/foundation/urlsession/responsedisposition)

# URLSession.ResponseDisposition (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating how a data or upload session should proceed after receiving the initial headers.

## Declaration

```swift
enum ResponseDisposition
```

<a id="overview"></a>

## Overview

When a data or upload task first receives a response, it calls the  [urlSession(\_:dataTask:didReceive:completionHandler:)](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md) method of [URLSessionDataDelegate](../urlsessiondatadelegate.md). Implement this method to inspect the received [URLResponse](../urlresponse.md) and then call the provided completion handler. The first parameter to the completion handler is of this type, a disposition that tells the task how to proceed.

## Topics

### Task dispositions

- [URLSession.ResponseDisposition.cancel](responsedisposition/cancel.md): Cancel the load.
- [URLSession.ResponseDisposition.allow](responsedisposition/allow.md): Allow the load operation to continue.
- [URLSession.ResponseDisposition.becomeDownload](responsedisposition/becomedownload.md): Convert the response for this request to use a [URLSessionDownloadTask](../urlsessiondownloadtask.md).
- [URLSession.ResponseDisposition.becomeStream](responsedisposition/becomestream.md): Convert the response for this request to use a [URLSessionStreamTask](../urlsessionstreamtask.md).

### Initializers

- [init(rawValue:)](responsedisposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling task life cycle changes

- [urlSession(\_:dataTask:didReceive:completionHandler:)](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [urlSession(\_:dataTask:didBecome:)](../urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-60op5.md): Tells the delegate that the data task was changed to a download task.
- [urlSession(\_:dataTask:didBecome:)](../urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-7nqzu.md): Tells the delegate that the data task was changed to a stream task.

# NSURLSessionResponseDisposition (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating how a data or upload session should proceed after receiving the initial headers.

## Declaration

```objectivec
enum NSURLSessionResponseDisposition : NSInteger;
```

<a id="overview"></a>

## Overview

When a data or upload task first receives a response, it calls the  [URLSession:dataTask:didReceiveResponse:completionHandler:](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md) method of [NSURLSessionDataDelegate](../urlsessiondatadelegate.md). Implement this method to inspect the received [NSURLResponse](../urlresponse.md) and then call the provided completion handler. The first parameter to the completion handler is of this type, a disposition that tells the task how to proceed.

## Topics

### Task dispositions

- [NSURLSessionResponseCancel](responsedisposition/cancel.md): Cancel the load.
- [NSURLSessionResponseAllow](responsedisposition/allow.md): Allow the load operation to continue.
- [NSURLSessionResponseBecomeDownload](responsedisposition/becomedownload.md): Convert the response for this request to use a [NSURLSessionDownloadTask](../urlsessiondownloadtask.md).
- [NSURLSessionResponseBecomeStream](responsedisposition/becomestream.md): Convert the response for this request to use a [NSURLSessionStreamTask](../urlsessionstreamtask.md).

## See Also

### Handling task life cycle changes

- [URLSession:dataTask:didReceiveResponse:completionHandler:](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [URLSession:dataTask:didBecomeDownloadTask:](../urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-60op5.md): Tells the delegate that the data task was changed to a download task.
- [URLSession:dataTask:didBecomeStreamTask:](../urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-7nqzu.md): Tells the delegate that the data task was changed to a stream task.
