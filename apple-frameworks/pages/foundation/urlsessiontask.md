> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask](https://developer.apple.com/documentation/foundation/urlsessiontask)

# URLSessionTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A task, like downloading a specific resource, performed in a URL session.

## Declaration

```swift
class URLSessionTask
```

## Mentioned In

- [Uploading data to a website](uploading-data-to-a-website.md)
- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

The [URLSessionTask](urlsessiontask.md) class is the base class for tasks in a URL session. Tasks are always part of a session; you create a task by calling one of the task creation methods on a [URLSession](urlsession.md) instance. The method you call determines the type of task.

- Use [URLSession](urlsession.md)‘s [dataTask(with:)](urlsession/datatask%28with_%29-10dy7.md) and related methods to create [URLSessionDataTask](urlsessiondatatask.md) instances. Data tasks request a resource, returning the server’s response as one or more `NSData` objects in memory. They are supported in default, ephemeral, and shared sessions, but are not supported in background sessions.
- Use [URLSession](urlsession.md)‘s [uploadTask(with:from:)](urlsession/uploadtask%28with_from_%29.md) and related methods to create [URLSessionUploadTask](urlsessionuploadtask.md) instances. Upload tasks are like data tasks, except that they make it easier to provide a request body so you can upload data before retrieving the server’s response. Additionally, upload tasks are supported in background sessions.
- Use [URLSession](urlsession.md)’s [downloadTask(with:)](urlsession/downloadtask%28with_%29-1onj.md) and related methods to create [URLSessionDownloadTask](urlsessiondownloadtask.md) instances. Download tasks download a resource directly to a file on disk. Download tasks are supported in any type of session.
- Use [URLSession](urlsession.md)’s [streamTask(withHostName:port:)](urlsession/streamtask%28withhostname_port_%29.md) or [streamTask(with:)](urlsession/streamtask%28with_%29.md) to create [URLSessionStreamTask](urlsessionstreamtask.md) instances. Stream tasks establish a TCP/IP connection from a host name and port or a net service object.

After you create a task, you start it by calling its [resume()](urlsessiontask/resume%28%29.md) method. The session then maintains a strong reference to the task until the request finishes or fails; you don’t need to maintain a reference to the task unless it’s useful for your app’s internal bookkeeping.

> **Note**

>  All task properties support key-value observing.

## Topics

### Controlling the task state

- [cancel()](urlsessiontask/cancel%28%29.md): Cancels the task.
- [resume()](urlsessiontask/resume%28%29.md): Resumes the task, if it is suspended.
- [suspend()](urlsessiontask/suspend%28%29.md): Temporarily suspends a task.
- [state](urlsessiontask/state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [URLSessionTask.State](urlsessiontask/state-swift.enum.md): Constants for determining the current state of a task.
- [priority](urlsessiontask/priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](urlsessiontask/priority.md) property.

### Obtaining task progress

- [progress](urlsessiontask/progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](urlsessiontask/countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesReceived](urlsessiontask/countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesExpectedToSend](urlsessiontask/countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [countOfBytesSent](urlsessiontask/countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

### Obtaining general task information

- [currentRequest](urlsessiontask/currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](urlsessiontask/originalrequest.md): The original request object passed when the task was created.
- [response](urlsessiontask/response.md): The server’s response to the currently active request.
- [taskDescription](urlsessiontask/taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](urlsessiontask/taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](urlsessiontask/error.md): An error object that indicates why the task failed.

### Determining task behavior

- [prefersIncrementalDelivery](urlsessiontask/prefersincrementaldelivery.md): A Boolean value that determines whether to deliver a partial response body in increments.

### Using a task-specific delegate

- [delegate](urlsessiontask/delegate.md): A delegate specific to the task.
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.

### Scheduling tasks

- [countOfBytesClientExpectsToReceive](urlsessiontask/countofbytesclientexpectstoreceive.md): A best-guess upper bound on the number of bytes the client expects to receive.
- [countOfBytesClientExpectsToSend](urlsessiontask/countofbytesclientexpectstosend.md): A best-guess upper bound on the number of bytes the client expects to send.
- [NSURLSessionTransferSizeUnknown](nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
- [earliestBeginDate](urlsessiontask/earliestbegindate.md): The earliest date at which the network load should begin.

### Deprecated

- [init()](urlsessiontask/init%28%29.md): Deprecated. Initializes an empty URL sesson task.
- [new()](urlsessiontask/new%28%29.md): Deprecated. Creates a new URL session task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [URLSessionDataTask](urlsessiondatatask.md)
- [URLSessionDownloadTask](urlsessiondownloadtask.md)
- [URLSessionStreamTask](urlsessionstreamtask.md)
- [URLSessionWebSocketTask](urlsessionwebsockettask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](progressreporting.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Fetching website data into memory](fetching-website-data-into-memory.md): Receive data directly into memory by creating a data task from a URL session.
- [Analyzing HTTP traffic with Instruments](analyzing-http-traffic-with-instruments.md): Measure HTTP-based network performance and usage of your apps.
- [URLSession](urlsession.md): An object that coordinates a group of related, network data transfer tasks.

# NSURLSessionTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A task, like downloading a specific resource, performed in a URL session.

## Declaration

```objectivec
@interface NSURLSessionTask : NSObject
```

## Mentioned In

- [Uploading data to a website](uploading-data-to-a-website.md)
- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

The [NSURLSessionTask](urlsessiontask.md) class is the base class for tasks in a URL session. Tasks are always part of a session; you create a task by calling one of the task creation methods on a [NSURLSession](urlsession.md) instance. The method you call determines the type of task.

- Use [NSURLSession](urlsession.md)‘s [dataTaskWithURL:](urlsession/datatask%28with_%29-10dy7.md) and related methods to create [NSURLSessionDataTask](urlsessiondatatask.md) instances. Data tasks request a resource, returning the server’s response as one or more `NSData` objects in memory. They are supported in default, ephemeral, and shared sessions, but are not supported in background sessions.
- Use [NSURLSession](urlsession.md)‘s [uploadTaskWithRequest:fromData:](urlsession/uploadtask%28with_from_%29.md) and related methods to create [NSURLSessionUploadTask](urlsessionuploadtask.md) instances. Upload tasks are like data tasks, except that they make it easier to provide a request body so you can upload data before retrieving the server’s response. Additionally, upload tasks are supported in background sessions.
- Use [NSURLSession](urlsession.md)’s [downloadTaskWithURL:](urlsession/downloadtask%28with_%29-1onj.md) and related methods to create [NSURLSessionDownloadTask](urlsessiondownloadtask.md) instances. Download tasks download a resource directly to a file on disk. Download tasks are supported in any type of session.
- Use [NSURLSession](urlsession.md)’s [streamTaskWithHostName:port:](urlsession/streamtask%28withhostname_port_%29.md) or [streamTaskWithNetService:](urlsession/streamtask%28with_%29.md) to create [NSURLSessionStreamTask](urlsessionstreamtask.md) instances. Stream tasks establish a TCP/IP connection from a host name and port or a net service object.

After you create a task, you start it by calling its [resume](urlsessiontask/resume%28%29.md) method. The session then maintains a strong reference to the task until the request finishes or fails; you don’t need to maintain a reference to the task unless it’s useful for your app’s internal bookkeeping.

> **Note**

>  All task properties support key-value observing.

## Topics

### Controlling the task state

- [cancel](urlsessiontask/cancel%28%29.md): Cancels the task.
- [resume](urlsessiontask/resume%28%29.md): Resumes the task, if it is suspended.
- [suspend](urlsessiontask/suspend%28%29.md): Temporarily suspends a task.
- [state](urlsessiontask/state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [NSURLSessionTaskState](urlsessiontask/state-swift.enum.md): Constants for determining the current state of a task.
- [priority](urlsessiontask/priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](urlsessiontask/priority.md) property.

### Obtaining task progress

- [progress](urlsessiontask/progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](urlsessiontask/countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesReceived](urlsessiontask/countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesExpectedToSend](urlsessiontask/countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [countOfBytesSent](urlsessiontask/countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

### Obtaining general task information

- [currentRequest](urlsessiontask/currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](urlsessiontask/originalrequest.md): The original request object passed when the task was created.
- [response](urlsessiontask/response.md): The server’s response to the currently active request.
- [taskDescription](urlsessiontask/taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](urlsessiontask/taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](urlsessiontask/error.md): An error object that indicates why the task failed.

### Determining task behavior

- [prefersIncrementalDelivery](urlsessiontask/prefersincrementaldelivery.md): A Boolean value that determines whether to deliver a partial response body in increments.

### Using a task-specific delegate

- [delegate](urlsessiontask/delegate.md): A delegate specific to the task.
- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.

### Scheduling tasks

- [countOfBytesClientExpectsToReceive](urlsessiontask/countofbytesclientexpectstoreceive.md): A best-guess upper bound on the number of bytes the client expects to receive.
- [countOfBytesClientExpectsToSend](urlsessiontask/countofbytesclientexpectstosend.md): A best-guess upper bound on the number of bytes the client expects to send.
- [NSURLSessionTransferSizeUnknown](nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
- [earliestBeginDate](urlsessiontask/earliestbegindate.md): The earliest date at which the network load should begin.

### Deprecated

- [init](urlsessiontask/init%28%29.md): Deprecated. Initializes an empty URL sesson task.
- [new](urlsessiontask/new%28%29.md): Deprecated. Creates a new URL session task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSURLSessionDataTask](urlsessiondatatask.md)
- [NSURLSessionDownloadTask](urlsessiondownloadtask.md)
- [NSURLSessionStreamTask](urlsessionstreamtask.md)
- [NSURLSessionWebSocketTask](urlsessionwebsockettask.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSProgressReporting](progressreporting.md)

## See Also

### Essentials

- [Fetching website data into memory](fetching-website-data-into-memory.md): Receive data directly into memory by creating a data task from a URL session.
- [Analyzing HTTP traffic with Instruments](analyzing-http-traffic-with-instruments.md): Measure HTTP-based network performance and usage of your apps.
- [NSURLSession](urlsession.md): An object that coordinates a group of related, network data transfer tasks.
