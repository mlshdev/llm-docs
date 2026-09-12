> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondatadelegate](https://developer.apple.com/documentation/foundation/urlsessiondatadelegate)

# URLSessionDataDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

## Declaration

```swift
protocol URLSessionDataDelegate : URLSessionTaskDelegate
```

## Mentioned In

- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Accessing cached data](accessing-cached-data.md)

<a id="overview"></a>

## Overview

Your session delegate should also implement the methods in the [URLSessionTaskDelegate](urlsessiontaskdelegate.md) protocol to handle task-level events that are common to all task types, and methods in the [URLSessionDelegate](urlsessiondelegate.md) protocol to handle session-level events.

> **Note**

>  A [URLSession](urlsession.md) object need not have a delegate. If no delegate is assigned, when you create tasks in that session, you must provide a completion handler block to obtain the data.
>
> Completion handler blocks are primarily intended as an alternative to using a custom delegate. If you create a task using a method that takes a completion handler block, the delegate methods for response and data delivery are not called.

## Topics

### Handling task life cycle changes

- [urlSession(\_:dataTask:didReceive:completionHandler:)](urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [URLSession.ResponseDisposition](urlsession/responsedisposition.md): Constants indicating how a data or upload session should proceed after receiving the initial headers.
- [urlSession(\_:dataTask:didBecome:)](urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-60op5.md): Tells the delegate that the data task was changed to a download task.
- [urlSession(\_:dataTask:didBecome:)](urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-7nqzu.md): Tells the delegate that the data task was changed to a stream task.

### Receiving data

- [urlSession(\_:dataTask:didReceive:)](urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md): Tells the delegate that the data task has received some of the expected data.

### Handling caching

- [urlSession(\_:dataTask:willCacheResponse:completionHandler:)](urlsessiondatadelegate/urlsession%28__datatask_willcacheresponse_completionhandler_%29.md): Asks the delegate whether the data (or upload) task should store the response in the cache.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [URLSessionDelegate](urlsessiondelegate.md)
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding data tasks to a session

- [dataTask(with:)](urlsession/datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTask(with:completionHandler:)](urlsession/datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTask(with:)](urlsession/datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTask(with:completionHandler:)](urlsession/datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [URLSessionDataTask](urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.

# NSURLSessionDataDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

## Declaration

```objectivec
@protocol NSURLSessionDataDelegate <NSURLSessionTaskDelegate>
```

## Mentioned In

- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Accessing cached data](accessing-cached-data.md)

<a id="overview"></a>

## Overview

Your session delegate should also implement the methods in the [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md) protocol to handle task-level events that are common to all task types, and methods in the [NSURLSessionDelegate](urlsessiondelegate.md) protocol to handle session-level events.

> **Note**

>  A [NSURLSession](urlsession.md) object need not have a delegate. If no delegate is assigned, when you create tasks in that session, you must provide a completion handler block to obtain the data.
>
> Completion handler blocks are primarily intended as an alternative to using a custom delegate. If you create a task using a method that takes a completion handler block, the delegate methods for response and data delivery are not called.

## Topics

### Handling task life cycle changes

- [URLSession:dataTask:didReceiveResponse:completionHandler:](urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md): Tells the delegate that the data task received the initial reply (headers) from the server.
- [NSURLSessionResponseDisposition](urlsession/responsedisposition.md): Constants indicating how a data or upload session should proceed after receiving the initial headers.
- [URLSession:dataTask:didBecomeDownloadTask:](urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-60op5.md): Tells the delegate that the data task was changed to a download task.
- [URLSession:dataTask:didBecomeStreamTask:](urlsessiondatadelegate/urlsession%28__datatask_didbecome_%29-7nqzu.md): Tells the delegate that the data task was changed to a stream task.

### Receiving data

- [URLSession:dataTask:didReceiveData:](urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md): Tells the delegate that the data task has received some of the expected data.

### Handling caching

- [URLSession:dataTask:willCacheResponse:completionHandler:](urlsessiondatadelegate/urlsession%28__datatask_willcacheresponse_completionhandler_%29.md): Asks the delegate whether the data (or upload) task should store the response in the cache.

## Relationships

### Inherits From

- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding data tasks to a session

- [dataTaskWithURL:](urlsession/datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTaskWithURL:completionHandler:](urlsession/datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTaskWithRequest:](urlsession/datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTaskWithRequest:completionHandler:](urlsession/datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [NSURLSessionDataTask](urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
