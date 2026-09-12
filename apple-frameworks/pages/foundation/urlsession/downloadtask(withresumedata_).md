> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/downloadtask(withresumedata:)](https://developer.apple.com/documentation/foundation/urlsession/downloadtask(withresumedata:))

# downloadTask(withResumeData:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a download task to resume a previously canceled or failed download.

## Declaration

```swift
func downloadTask(withResumeData resumeData: Data) -> URLSessionDownloadTask
```

## Parameters

- `resumeData`: A data object that provides the data necessary to resume a download.

<a id="return-value"></a>

## Return Value

The new session download task.

## Mentioned In

- [Pausing and resuming downloads](../pausing-and-resuming-downloads.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

This method is equivalent to the [downloadTask(withResumeData:completionHandler:)](downloadtask%28withresumedata_completionhandler_%29.md) with a `nil` completion handler. For detailed usage information, including ways to obtain a resume data object, see that method.

## See Also

### Adding download tasks to a session

- [downloadTask(with:)](downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTask(with:completionHandler:)](downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTask(with:)](downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTask(with:completionHandler:)](downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTask(withResumeData:completionHandler:)](downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [URLSessionDownloadTask](../urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
- [URLSessionDownloadDelegate](../urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.

# downloadTaskWithResumeData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a download task to resume a previously canceled or failed download.

## Declaration

```objectivec
- (NSURLSessionDownloadTask *) downloadTaskWithResumeData:(NSData *) resumeData;
```

## Parameters

- `resumeData`: A data object that provides the data necessary to resume a download.

<a id="return-value"></a>

## Return Value

The new session download task.

## Mentioned In

- [Pausing and resuming downloads](../pausing-and-resuming-downloads.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

This method is equivalent to the [downloadTaskWithResumeData:completionHandler:](downloadtask%28withresumedata_completionhandler_%29.md) with a `nil` completion handler. For detailed usage information, including ways to obtain a resume data object, see that method.

## See Also

### Adding download tasks to a session

- [downloadTaskWithURL:](downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTaskWithURL:completionHandler:](downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithRequest:](downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTaskWithRequest:completionHandler:](downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithResumeData:completionHandler:](downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [NSURLSessionDownloadTask](../urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
- [NSURLSessionDownloadDelegate](../urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.
