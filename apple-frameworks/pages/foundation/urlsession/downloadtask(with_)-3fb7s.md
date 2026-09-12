> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/downloadtask(with:)-3fb7s](https://developer.apple.com/documentation/foundation/urlsession/downloadtask(with:)-3fb7s)

# downloadTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.

## Declaration

```swift
func downloadTask(with request: URLRequest) -> URLSessionDownloadTask
```

## Parameters

- `request`: A URL request object that provides the URL, cache policy, request type, body data or body stream, and so on.

<a id="return-value"></a>

## Return Value

The new session download task.

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)
- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

By creating a task based on a request object, you can tune various aspects of the task’s behavior, including the cache policy and timeout interval.

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method. The task calls methods on the session’s delegate to provide you with progress notifications, the location of the resulting temporary file, and so on.

## See Also

### Adding download tasks to a session

- [downloadTask(with:)](downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTask(with:completionHandler:)](downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTask(with:completionHandler:)](downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTask(withResumeData:)](downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTask(withResumeData:completionHandler:)](downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [URLSessionDownloadTask](../urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
- [URLSessionDownloadDelegate](../urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.

# downloadTaskWithRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.

## Declaration

```objectivec
- (NSURLSessionDownloadTask *) downloadTaskWithRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: A URL request object that provides the URL, cache policy, request type, body data or body stream, and so on.

<a id="return-value"></a>

## Return Value

The new session download task.

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)
- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

By creating a task based on a request object, you can tune various aspects of the task’s behavior, including the cache policy and timeout interval.

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method. The task calls methods on the session’s delegate to provide you with progress notifications, the location of the resulting temporary file, and so on.

## See Also

### Adding download tasks to a session

- [downloadTaskWithURL:](downloadtask%28with_%29-1onj.md): Creates a download task that retrieves the contents of the specified URL and saves the results to a file.
- [downloadTaskWithURL:completionHandler:](downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithRequest:completionHandler:](downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithResumeData:](downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTaskWithResumeData:completionHandler:](downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [NSURLSessionDownloadTask](../urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
- [NSURLSessionDownloadDelegate](../urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.
