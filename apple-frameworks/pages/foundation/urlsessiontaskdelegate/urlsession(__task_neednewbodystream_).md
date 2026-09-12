> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:neednewbodystream:)](https://developer.apple.com/documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:neednewbodystream:))

# urlSession(\_:task:needNewBodyStream:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate when a task requires a new request body stream to send to the remote server.

## Declaration

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, needNewBodyStream completionHandler: @escaping @Sendable (InputStream?) -> Void)
```

```swift
optional func urlSession(_ session: URLSession, needNewBodyStreamForTask task: URLSessionTask) async -> InputStream?
```

## Parameters

- `session`: The session containing the task that needs a new body stream.
- `task`: The task that needs a new body stream.
- `completionHandler`: A completion handler that your delegate method should call with the new body stream.

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

<a id="Discussion"></a>

## Discussion

The task calls this delegate method under two circumstances:

- To provide the initial request body stream if the task was created with [uploadTask(withStreamedRequest:)](../urlsession/uploadtask%28withstreamedrequest_%29.md)
- To provide a replacement request body stream if the task needs to resend a request that has a body stream because of an authentication challenge or other recoverable server error.

> **Note**

>  You don’t need to implement this method if your code provides the request body using a file URL or a data object.

## See Also

### Working with upload tasks

- [urlSession(\_:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:)](urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md): Periodically informs the delegate of the progress of sending body content to the server.

# URLSession:task:needNewBodyStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate when a task requires a new request body stream to send to the remote server.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session task:(NSURLSessionTask *) task needNewBodyStream:(void (^)(NSInputStream *bodyStream)) completionHandler;
```

## Parameters

- `session`: The session containing the task that needs a new body stream.
- `task`: The task that needs a new body stream.
- `completionHandler`: A completion handler that your delegate method should call with the new body stream.

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

<a id="Discussion"></a>

## Discussion

The task calls this delegate method under two circumstances:

- To provide the initial request body stream if the task was created with [uploadTaskWithStreamedRequest:](../urlsession/uploadtask%28withstreamedrequest_%29.md)
- To provide a replacement request body stream if the task needs to resend a request that has a body stream because of an authentication challenge or other recoverable server error.

> **Note**

>  You don’t need to implement this method if your code provides the request body using a file URL or a data object.

## See Also

### Working with upload tasks

- [URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:](urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md): Periodically informs the delegate of the progress of sending body content to the server.
