> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondownloaddelegate](https://developer.apple.com/documentation/foundation/urlsessiondownloaddelegate)

# URLSessionDownloadDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.

## Declaration

```swift
protocol URLSessionDownloadDelegate : URLSessionTaskDelegate
```

## Mentioned In

- [Downloading files from websites](downloading-files-from-websites.md)
- [Downloading files in the background](downloading-files-in-the-background.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)

<a id="overview"></a>

## Overview

In addition to the methods in this protocol, be sure to implement the methods in the [URLSessionTaskDelegate](urlsessiontaskdelegate.md) and [URLSessionDelegate](urlsessiondelegate.md) protocols to handle events common to all task types and session-level events, respectively.

> **Note**

>  An [URLSession](urlsession.md) object need not have a delegate. If no delegate is assigned, a system-provided delegate is used, and you must provide a completion callback to obtain the data.

## Topics

### Handling download life cycle changes

- [urlSession(\_:downloadTask:didFinishDownloadingTo:)](urlsessiondownloaddelegate/urlsession%28__downloadtask_didfinishdownloadingto_%29.md): Tells the delegate that a download task has finished downloading.

### Resuming paused downloads

- [urlSession(\_:downloadTask:didResumeAtOffset:expectedTotalBytes:)](urlsessiondownloaddelegate/urlsession%28__downloadtask_didresumeatoffset_expectedtotalbytes_%29.md): Tells the delegate that the download task has resumed downloading.

### Receiving progress updates

- [urlSession(\_:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:)](urlsessiondownloaddelegate/urlsession%28__downloadtask_didwritedata_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Periodically informs the delegate about the download’s progress.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [URLSessionDelegate](urlsessiondelegate.md)
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding download tasks to a session

- [downloadTask(with:)](urlsession/downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTask(with:completionHandler:)](urlsession/downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTask(with:)](urlsession/downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTask(with:completionHandler:)](urlsession/downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTask(withResumeData:)](urlsession/downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTask(withResumeData:completionHandler:)](urlsession/downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [URLSessionDownloadTask](urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.

# NSURLSessionDownloadDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.

## Declaration

```objectivec
@protocol NSURLSessionDownloadDelegate <NSURLSessionTaskDelegate>
```

## Mentioned In

- [Downloading files from websites](downloading-files-from-websites.md)
- [Downloading files in the background](downloading-files-in-the-background.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)

<a id="overview"></a>

## Overview

In addition to the methods in this protocol, be sure to implement the methods in the [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md) and [NSURLSessionDelegate](urlsessiondelegate.md) protocols to handle events common to all task types and session-level events, respectively.

> **Note**

>  An [NSURLSession](urlsession.md) object need not have a delegate. If no delegate is assigned, a system-provided delegate is used, and you must provide a completion callback to obtain the data.

## Topics

### Handling download life cycle changes

- [URLSession:downloadTask:didFinishDownloadingToURL:](urlsessiondownloaddelegate/urlsession%28__downloadtask_didfinishdownloadingto_%29.md): Tells the delegate that a download task has finished downloading.

### Resuming paused downloads

- [URLSession:downloadTask:didResumeAtOffset:expectedTotalBytes:](urlsessiondownloaddelegate/urlsession%28__downloadtask_didresumeatoffset_expectedtotalbytes_%29.md): Tells the delegate that the download task has resumed downloading.

### Receiving progress updates

- [URLSession:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:](urlsessiondownloaddelegate/urlsession%28__downloadtask_didwritedata_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Periodically informs the delegate about the download’s progress.

## Relationships

### Inherits From

- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding download tasks to a session

- [downloadTaskWithURL:](urlsession/downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTaskWithURL:completionHandler:](urlsession/downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithRequest:](urlsession/downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTaskWithRequest:completionHandler:](urlsession/downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithResumeData:](urlsession/downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTaskWithResumeData:completionHandler:](urlsession/downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [NSURLSessionDownloadTask](urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
