> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskdelegate](https://developer.apple.com/documentation/foundation/urlsessiontaskdelegate)

# URLSessionTaskDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events.

## Declaration

```swift
protocol URLSessionTaskDelegate : URLSessionDelegate
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)
- [Downloading files from websites](downloading-files-from-websites.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Uploading data to a website](uploading-data-to-a-website.md)

<a id="overview"></a>

## Overview

You use this protocol in one of two ways, depending on how you use a [URLSession](urlsession.md):

- If you create tasks with Swift’s `async`-`await` syntax, using methods like [bytes(for:delegate:)](urlsession/bytes%28for_delegate_%29.md) and [data(for:delegate:)](urlsession/data%28for_delegate_%29.md), you pass a `delegate` argument of this type. The delegate receives callbacks for things like task progress, while the call point awaits the completion of the task.
- If you add tasks to the session with methods like [dataTask(with:)](urlsession/datatask%28with_%29-10dy7.md) and [downloadTask(with:)](urlsession/downloadtask%28with_%29-1onj.md), then you implement this protocol’s methods in a [delegate](urlsession/delegate.md) you set on the session. This session delegate may also implement other protocols as appropriate, like [URLSessionDownloadDelegate](urlsessiondownloaddelegate.md) and [URLSessionDataDelegate](urlsessiondatadelegate.md). You can also assign a delegate of this type directly to the task to intercept callbacks before the task delivers them to the session’s delegate.

> **Note**

>  Your [URLSession](urlsession.md) object doesn’t need to have a delegate. If you don’t assign a delegate, the session uses a system-provided delegate. In this case, you must provide a completion callback or use the Swift `async`-`await` methods to obtain the data.

## Topics

### Handling task life cycle changes

- [urlSession(\_:task:didCompleteWithError:)](urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md): Tells the delegate that the task finished transferring data.

### Handling redirects

- [urlSession(\_:task:willPerformHTTPRedirection:newRequest:completionHandler:)](urlsessiontaskdelegate/urlsession%28__task_willperformhttpredirection_newrequest_completionhandler_%29.md): Tells the delegate that the remote server requested an HTTP redirect.

### Working with upload tasks

- [urlSession(\_:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:)](urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md): Periodically informs the delegate of the progress of sending body content to the server.
- [urlSession(\_:task:needNewBodyStream:)](urlsessiontaskdelegate/urlsession%28__task_neednewbodystream_%29.md): Tells the delegate when a task requires a new request body stream to send to the remote server.

### Handling authentication challenges

- [urlSession(\_:task:didReceive:completionHandler:)](urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md): Requests credentials from the delegate in response to an authentication request from the remote server.
- [URLSession.AuthChallengeDisposition](urlsession/authchallengedisposition.md): Constants passed by session or task delegates to the provided continuation block in response to an authentication challenge.

### Handling delayed and waiting tasks

- [urlSession(\_:task:willBeginDelayedRequest:completionHandler:)](urlsessiontaskdelegate/urlsession%28__task_willbegindelayedrequest_completionhandler_%29.md): Tells the delegate that a delayed URL session task will now begin loading.
- [URLSession.DelayedRequestDisposition](urlsession/delayedrequestdisposition.md): The action to take on a delayed URL session task.
- [urlSession(\_:taskIsWaitingForConnectivity:)](urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md): Tells the delegate that the task is waiting until suitable connectivity is available before beginning the network load.

### Collecting task metrics

- [urlSession(\_:task:didFinishCollecting:)](urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md): Tells the delegate that the session finished collecting metrics for the task.
- [URLSessionTaskMetrics](urlsessiontaskmetrics.md): An object encapsulating the metrics for a session task.

### Instance Methods

- [urlSession(\_:didCreateTask:)](urlsessiontaskdelegate/urlsession%28__didcreatetask_%29.md)
- [urlSession(\_:task:didReceiveInformationalResponse:)](urlsessiontaskdelegate/urlsession%28__task_didreceiveinformationalresponse_%29.md)
- [urlSession(\_:task:needNewBodyStreamFrom:completionHandler:)](urlsessiontaskdelegate/urlsession%28__task_neednewbodystreamfrom_completionhandler_%29.md): Tells the delegate if a task requires a new body stream starting from the given offset. This may be necessary when resuming a failed upload task.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [URLSessionDelegate](urlsessiondelegate.md)

### Inherited By

- [URLSessionDataDelegate](urlsessiondatadelegate.md)
- [URLSessionDownloadDelegate](urlsessiondownloaddelegate.md)
- [URLSessionStreamDelegate](urlsessionstreamdelegate.md)
- [URLSessionWebSocketDelegate](urlsessionwebsocketdelegate.md)

## See Also

### Working with a delegate

- [delegate](urlsession/delegate.md): The delegate assigned when this object was created.
- [URLSessionDelegate](urlsessiondelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
- [delegateQueue](urlsession/delegatequeue.md): The operation queue provided when this object was created.

# NSURLSessionTaskDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events.

## Declaration

```objectivec
@protocol NSURLSessionTaskDelegate <NSURLSessionDelegate>
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)
- [Downloading files from websites](downloading-files-from-websites.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Uploading data to a website](uploading-data-to-a-website.md)

<a id="overview"></a>

## Overview

You use this protocol in one of two ways, depending on how you use a [NSURLSession](urlsession.md):

- If you create tasks with Swift’s `async`-`await` syntax, using methods like [bytes(for:delegate:)](urlsession/bytes%28for_delegate_%29.md) and [data(for:delegate:)](urlsession/data%28for_delegate_%29.md), you pass a `delegate` argument of this type. The delegate receives callbacks for things like task progress, while the call point awaits the completion of the task.
- If you add tasks to the session with methods like [dataTaskWithURL:](urlsession/datatask%28with_%29-10dy7.md) and [downloadTaskWithURL:](urlsession/downloadtask%28with_%29-1onj.md), then you implement this protocol’s methods in a [delegate](urlsession/delegate.md) you set on the session. This session delegate may also implement other protocols as appropriate, like [NSURLSessionDownloadDelegate](urlsessiondownloaddelegate.md) and [NSURLSessionDataDelegate](urlsessiondatadelegate.md). You can also assign a delegate of this type directly to the task to intercept callbacks before the task delivers them to the session’s delegate.

> **Note**

>  Your [NSURLSession](urlsession.md) object doesn’t need to have a delegate. If you don’t assign a delegate, the session uses a system-provided delegate. In this case, you must provide a completion callback or use the Swift `async`-`await` methods to obtain the data.

## Topics

### Handling task life cycle changes

- [URLSession:task:didCompleteWithError:](urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md): Tells the delegate that the task finished transferring data.

### Handling redirects

- [URLSession:task:willPerformHTTPRedirection:newRequest:completionHandler:](urlsessiontaskdelegate/urlsession%28__task_willperformhttpredirection_newrequest_completionhandler_%29.md): Tells the delegate that the remote server requested an HTTP redirect.

### Working with upload tasks

- [URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:](urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md): Periodically informs the delegate of the progress of sending body content to the server.
- [URLSession:task:needNewBodyStream:](urlsessiontaskdelegate/urlsession%28__task_neednewbodystream_%29.md): Tells the delegate when a task requires a new request body stream to send to the remote server.

### Handling authentication challenges

- [URLSession:task:didReceiveChallenge:completionHandler:](urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md): Requests credentials from the delegate in response to an authentication request from the remote server.
- [NSURLSessionAuthChallengeDisposition](urlsession/authchallengedisposition.md): Constants passed by session or task delegates to the provided continuation block in response to an authentication challenge.

### Handling delayed and waiting tasks

- [URLSession:task:willBeginDelayedRequest:completionHandler:](urlsessiontaskdelegate/urlsession%28__task_willbegindelayedrequest_completionhandler_%29.md): Tells the delegate that a delayed URL session task will now begin loading.
- [NSURLSessionDelayedRequestDisposition](urlsession/delayedrequestdisposition.md): The action to take on a delayed URL session task.
- [URLSession:taskIsWaitingForConnectivity:](urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md): Tells the delegate that the task is waiting until suitable connectivity is available before beginning the network load.

### Collecting task metrics

- [URLSession:task:didFinishCollectingMetrics:](urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md): Tells the delegate that the session finished collecting metrics for the task.
- [NSURLSessionTaskMetrics](urlsessiontaskmetrics.md): An object encapsulating the metrics for a session task.

### Instance Methods

- [URLSession:didCreateTask:](urlsessiontaskdelegate/urlsession%28__didcreatetask_%29.md)
- [URLSession:task:didReceiveInformationalResponse:](urlsessiontaskdelegate/urlsession%28__task_didreceiveinformationalresponse_%29.md)
- [URLSession:task:needNewBodyStreamFromOffset:completionHandler:](urlsessiontaskdelegate/urlsession%28__task_neednewbodystreamfrom_completionhandler_%29.md): Tells the delegate if a task requires a new body stream starting from the given offset. This may be necessary when resuming a failed upload task.

## Relationships

### Inherits From

- [NSURLSessionDelegate](urlsessiondelegate.md)

### Inherited By

- [NSURLSessionDataDelegate](urlsessiondatadelegate.md)
- [NSURLSessionDownloadDelegate](urlsessiondownloaddelegate.md)
- [NSURLSessionStreamDelegate](urlsessionstreamdelegate.md)
- [NSURLSessionWebSocketDelegate](urlsessionwebsocketdelegate.md)

## See Also

### Working with a delegate

- [delegate](urlsession/delegate.md): The delegate assigned when this object was created.
- [NSURLSessionDelegate](urlsessiondelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
- [delegateQueue](urlsession/delegatequeue.md): The operation queue provided when this object was created.
