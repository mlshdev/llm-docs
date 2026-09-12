> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondownloadtask](https://developer.apple.com/documentation/foundation/urlsessiondownloadtask)

# URLSessionDownloadTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that stores downloaded data to a file.

## Declaration

```swift
class URLSessionDownloadTask
```

## Mentioned In

- [Downloading files from websites](downloading-files-from-websites.md)
- [Pausing and resuming downloads](pausing-and-resuming-downloads.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)

<a id="overview"></a>

## Overview

An [URLSessionDownloadTask](urlsessiondownloadtask.md) is a concrete subclass of [URLSessionTask](urlsessiontask.md), which provides most of the methods for this class.

Download tasks directly write the server’s response data to a temporary file, providing your app with progress updates as data arrives from the server. When you use download tasks in background sessions, these downloads continue even when your app is in the suspended state or otherwise not running.

You can pause (cancel) download tasks and resume them later (assuming the server supports doing so). You can also resume downloads that failed because of network connectivity problems.

<a id="Download-delegate-behavior"></a>

### Download delegate behavior

When you use a download task, your delegate receives several callbacks unique to download scenarios.

- During download, the session periodically calls the delegate’s [urlSession(\_:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:)](urlsessiondownloaddelegate/urlsession%28__downloadtask_didwritedata_totalbyteswritten_totalbytesexpectedtowrite_%29.md) method with status information.
- Upon successful completion, the session calls the delegate’s [urlSession(\_:downloadTask:didFinishDownloadingTo:)](urlsessiondownloaddelegate/urlsession%28__downloadtask_didfinishdownloadingto_%29.md) method or completion handler. In that method, you must either open the file for reading or move it to a permanent location in your app’s sandbox container directory.
- Upon unsuccessful completion, the session calls the delegate’s [urlSession(\_:task:didCompleteWithError:)](urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md) method or completion handler. The only errors your delegate receives through the `error` parameter are client-side errors, such as being unable to resolve the hostname or connect to the host. To check for server-side errors, inspect the [response](urlsessiontask/response.md) property of the `task` parameter received by this callback.

## Topics

### Canceling a download

- [cancel(byProducingResumeData:)](urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md): Cancels a download and calls a callback with resume data for later use.

### Creating download tasks

- [init()](urlsessiondownloadtask/init%28%29.md): Deprecated. Initializes a download task.
- [new()](urlsessiondownloadtask/new%28%29.md): Deprecated. Creates and initializes a download task.

## Relationships

### Inherits From

- [URLSessionTask](urlsessiontask.md)

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

### Adding download tasks to a session

- [downloadTask(with:)](urlsession/downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTask(with:completionHandler:)](urlsession/downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTask(with:)](urlsession/downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTask(with:completionHandler:)](urlsession/downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTask(withResumeData:)](urlsession/downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTask(withResumeData:completionHandler:)](urlsession/downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [URLSessionDownloadDelegate](urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.

# NSURLSessionDownloadTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that stores downloaded data to a file.

## Declaration

```objectivec
@interface NSURLSessionDownloadTask : NSURLSessionTask
```

## Mentioned In

- [Downloading files from websites](downloading-files-from-websites.md)
- [Pausing and resuming downloads](pausing-and-resuming-downloads.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)

<a id="overview"></a>

## Overview

An [NSURLSessionDownloadTask](urlsessiondownloadtask.md) is a concrete subclass of [NSURLSessionTask](urlsessiontask.md), which provides most of the methods for this class.

Download tasks directly write the server’s response data to a temporary file, providing your app with progress updates as data arrives from the server. When you use download tasks in background sessions, these downloads continue even when your app is in the suspended state or otherwise not running.

You can pause (cancel) download tasks and resume them later (assuming the server supports doing so). You can also resume downloads that failed because of network connectivity problems.

<a id="Download-delegate-behavior"></a>

### Download delegate behavior

When you use a download task, your delegate receives several callbacks unique to download scenarios.

- During download, the session periodically calls the delegate’s [URLSession:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:](urlsessiondownloaddelegate/urlsession%28__downloadtask_didwritedata_totalbyteswritten_totalbytesexpectedtowrite_%29.md) method with status information.
- Upon successful completion, the session calls the delegate’s [URLSession:downloadTask:didFinishDownloadingToURL:](urlsessiondownloaddelegate/urlsession%28__downloadtask_didfinishdownloadingto_%29.md) method or completion handler. In that method, you must either open the file for reading or move it to a permanent location in your app’s sandbox container directory.
- Upon unsuccessful completion, the session calls the delegate’s [URLSession:task:didCompleteWithError:](urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md) method or completion handler. The only errors your delegate receives through the `error` parameter are client-side errors, such as being unable to resolve the hostname or connect to the host. To check for server-side errors, inspect the [response](urlsessiontask/response.md) property of the `task` parameter received by this callback.

## Topics

### Canceling a download

- [cancelByProducingResumeData:](urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md): Cancels a download and calls a callback with resume data for later use.

### Creating download tasks

- [init](urlsessiondownloadtask/init%28%29.md): Deprecated. Initializes a download task.
- [new](urlsessiondownloadtask/new%28%29.md): Deprecated. Creates and initializes a download task.

## Relationships

### Inherits From

- [NSURLSessionTask](urlsessiontask.md)

## See Also

### Adding download tasks to a session

- [downloadTaskWithURL:](urlsession/downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTaskWithURL:completionHandler:](urlsession/downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithRequest:](urlsession/downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTaskWithRequest:completionHandler:](urlsession/downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithResumeData:](urlsession/downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTaskWithResumeData:completionHandler:](urlsession/downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [NSURLSessionDownloadDelegate](urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.
