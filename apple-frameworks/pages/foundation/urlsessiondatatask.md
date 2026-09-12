> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondatatask](https://developer.apple.com/documentation/foundation/urlsessiondatatask)

# URLSessionDataTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that returns downloaded data directly to the app in memory.

## Declaration

```swift
class URLSessionDataTask
```

## Mentioned In

- [Fetching website data into memory](fetching-website-data-into-memory.md)

<a id="overview"></a>

## Overview

A [URLSessionDataTask](urlsessiondatatask.md) is a concrete subclass of [URLSessionTask](urlsessiontask.md). The methods in the [URLSessionDataTask](urlsessiondatatask.md) class are documented in [URLSessionTask](urlsessiontask.md).

A data task returns data directly to the app (in memory) as one or more `NSData` objects. When you use a data task:

- During upload of the body data (if your app provides any), the session periodically calls its delegate’s [urlSession(\_:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:)](urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md) method with status information.
- After receiving an initial response, the session calls its delegate’s [urlSession(\_:dataTask:didReceive:completionHandler:)](urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md) method to let you examine the status code and headers, and optionally convert the data task into a download task.
- During the transfer, the session calls its delegate’s [urlSession(\_:dataTask:didReceive:)](urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) method to provide your app with the content as it arrives.
- Upon completion, the session calls its delegate’s [urlSession(\_:dataTask:willCacheResponse:completionHandler:)](urlsessiondatadelegate/urlsession%28__datatask_willcacheresponse_completionhandler_%29.md) method to let you determine whether the response should be cached.

For examples of using data tasks for fetching and uploading data, see [Fetching website data into memory](fetching-website-data-into-memory.md) and [Uploading data to a website](uploading-data-to-a-website.md).

## Topics

### Initializers

- [init()](urlsessiondatatask/init%28%29.md): Deprecated.

### Type Methods

- [new()](urlsessiondatatask/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [URLSessionTask](urlsessiontask.md)

### Inherited By

- [URLSessionUploadTask](urlsessionuploadtask.md)

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

### Adding data tasks to a session

- [dataTask(with:)](urlsession/datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTask(with:completionHandler:)](urlsession/datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTask(with:)](urlsession/datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTask(with:completionHandler:)](urlsession/datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [URLSessionDataDelegate](urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# NSURLSessionDataTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that returns downloaded data directly to the app in memory.

## Declaration

```objectivec
@interface NSURLSessionDataTask : NSURLSessionTask
```

## Mentioned In

- [Fetching website data into memory](fetching-website-data-into-memory.md)

<a id="overview"></a>

## Overview

A [NSURLSessionDataTask](urlsessiondatatask.md) is a concrete subclass of [NSURLSessionTask](urlsessiontask.md). The methods in the [NSURLSessionDataTask](urlsessiondatatask.md) class are documented in [NSURLSessionTask](urlsessiontask.md).

A data task returns data directly to the app (in memory) as one or more `NSData` objects. When you use a data task:

- During upload of the body data (if your app provides any), the session periodically calls its delegate’s [URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:](urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md) method with status information.
- After receiving an initial response, the session calls its delegate’s [URLSession:dataTask:didReceiveResponse:completionHandler:](urlsessiondatadelegate/urlsession%28__datatask_didreceive_completionhandler_%29.md) method to let you examine the status code and headers, and optionally convert the data task into a download task.
- During the transfer, the session calls its delegate’s [URLSession:dataTask:didReceiveData:](urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) method to provide your app with the content as it arrives.
- Upon completion, the session calls its delegate’s [URLSession:dataTask:willCacheResponse:completionHandler:](urlsessiondatadelegate/urlsession%28__datatask_willcacheresponse_completionhandler_%29.md) method to let you determine whether the response should be cached.

For examples of using data tasks for fetching and uploading data, see [Fetching website data into memory](fetching-website-data-into-memory.md) and [Uploading data to a website](uploading-data-to-a-website.md).

## Topics

### Instance Methods

- [init](urlsessiondatatask/init%28%29.md): Deprecated.

### Type Methods

- [new](urlsessiondatatask/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSURLSessionTask](urlsessiontask.md)

### Inherited By

- [NSURLSessionUploadTask](urlsessionuploadtask.md)

## See Also

### Adding data tasks to a session

- [dataTaskWithURL:](urlsession/datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTaskWithURL:completionHandler:](urlsession/datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTaskWithRequest:](urlsession/datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTaskWithRequest:completionHandler:](urlsession/datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [NSURLSessionDataDelegate](urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
