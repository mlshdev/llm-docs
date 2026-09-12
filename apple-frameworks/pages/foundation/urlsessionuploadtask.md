> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionuploadtask](https://developer.apple.com/documentation/foundation/urlsessionuploadtask)

# URLSessionUploadTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that uploads data to the network in a request body.

## Declaration

```swift
class URLSessionUploadTask
```

## Mentioned In

- [Pausing and resuming uploads](pausing-and-resuming-uploads.md)
- [Uploading data to a website](uploading-data-to-a-website.md)
- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

The [URLSessionUploadTask](urlsessionuploadtask.md) class is a subclass of [URLSessionDataTask](urlsessiondatatask.md), which in turn is a concrete subclass of [URLSessionTask](urlsessiontask.md). The methods associated with the [URLSessionUploadTask](urlsessionuploadtask.md) class are documented in [URLSessionTask](urlsessiontask.md).

Upload tasks are used for making HTTP requests that require a request body (such as `POST` or `PUT`). They behave similarly to data tasks, but you create them by calling different methods on the session that are designed to make it easier to provide the content to upload. As with data tasks, if the server provides a response, upload tasks return that response as one or more `NSData` objects in memory.

> **Note**

>  Unlike data tasks, you can use upload tasks to upload content in the background.

When you create an upload task, you provide a [URLRequest](urlrequest.md) instance that contains any additional headers that you might need to send alongside the upload, such as the content type, content disposition, and so on. In iOS, when you create an upload task for a file in a background session, the system copies that file to a temporary location and streams data from there.

While the upload is in progress, the task calls the session delegate’s [urlSession(\_:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:)](urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md) method periodically to provide you with status information.

When the upload phase of the request finishes, the task behaves like a data task, calling methods on the session delegate to provide you with the server’s response—headers, status code, content data, and so on.

## Topics

### Initializers

- [init()](urlsessionuploadtask/init%28%29.md): Deprecated.

### Instance Methods

- [cancel(byProducingResumeData:)](urlsessionuploadtask/cancel%28byproducingresumedata_%29.md): Cancels an upload and calls the completion handler with resume data for later use. resumeData will be nil if the server does not support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/

### Type Methods

- [new()](urlsessionuploadtask/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [URLSessionDataTask](urlsessiondatatask.md)

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

### Adding upload tasks to a session

- [Building a resumable upload server with SwiftNIO](building-a-resumable-upload-server-with-swiftnio.md): Support HTTP resumable upload protocol in SwiftNIO by translating resumable uploads to regular uploads.
- [uploadTask(with:from:)](urlsession/uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTask(with:from:completionHandler:)](urlsession/uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTask(with:fromFile:)](urlsession/uploadtask%28with_fromfile_%29.md): Creates a task that performs an HTTP request for uploading the specified file.
- [uploadTask(with:fromFile:completionHandler:)](urlsession/uploadtask%28with_fromfile_completionhandler_%29.md): Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.
- [uploadTask(withStreamedRequest:)](urlsession/uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTask(withResumeData:)](urlsession/uploadtask%28withresumedata_%29.md): Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.
- [uploadTask(withResumeData:completionHandler:)](urlsession/uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [URLSessionDataDelegate](urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# NSURLSessionUploadTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that uploads data to the network in a request body.

## Declaration

```objectivec
@interface NSURLSessionUploadTask : NSURLSessionDataTask
```

## Mentioned In

- [Pausing and resuming uploads](pausing-and-resuming-uploads.md)
- [Uploading data to a website](uploading-data-to-a-website.md)
- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

The [NSURLSessionUploadTask](urlsessionuploadtask.md) class is a subclass of [NSURLSessionDataTask](urlsessiondatatask.md), which in turn is a concrete subclass of [NSURLSessionTask](urlsessiontask.md). The methods associated with the [NSURLSessionUploadTask](urlsessionuploadtask.md) class are documented in [NSURLSessionTask](urlsessiontask.md).

Upload tasks are used for making HTTP requests that require a request body (such as `POST` or `PUT`). They behave similarly to data tasks, but you create them by calling different methods on the session that are designed to make it easier to provide the content to upload. As with data tasks, if the server provides a response, upload tasks return that response as one or more `NSData` objects in memory.

> **Note**

>  Unlike data tasks, you can use upload tasks to upload content in the background.

When you create an upload task, you provide a [URLRequest](urlrequest.md) instance that contains any additional headers that you might need to send alongside the upload, such as the content type, content disposition, and so on. In iOS, when you create an upload task for a file in a background session, the system copies that file to a temporary location and streams data from there.

While the upload is in progress, the task calls the session delegate’s [URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:](urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md) method periodically to provide you with status information.

When the upload phase of the request finishes, the task behaves like a data task, calling methods on the session delegate to provide you with the server’s response—headers, status code, content data, and so on.

## Topics

### Instance Methods

- [cancelByProducingResumeData:](urlsessionuploadtask/cancel%28byproducingresumedata_%29.md): Cancels an upload and calls the completion handler with resume data for later use. resumeData will be nil if the server does not support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/
- [init](urlsessionuploadtask/init%28%29.md): Deprecated.

### Type Methods

- [new](urlsessionuploadtask/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSURLSessionDataTask](urlsessiondatatask.md)

## See Also

### Adding upload tasks to a session

- [uploadTaskWithRequest:fromData:](urlsession/uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTaskWithRequest:fromData:completionHandler:](urlsession/uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTaskWithRequest:fromFile:](urlsession/uploadtask%28with_fromfile_%29.md): Creates a task that performs an HTTP request for uploading the specified file.
- [uploadTaskWithRequest:fromFile:completionHandler:](urlsession/uploadtask%28with_fromfile_completionhandler_%29.md): Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.
- [uploadTaskWithStreamedRequest:](urlsession/uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTaskWithResumeData:](urlsession/uploadtask%28withresumedata_%29.md): Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.
- [uploadTaskWithResumeData:completionHandler:](urlsession/uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [NSURLSessionDataDelegate](urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
