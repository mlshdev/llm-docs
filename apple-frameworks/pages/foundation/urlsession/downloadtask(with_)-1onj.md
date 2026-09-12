> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/downloadtask(with:)-1onj](https://developer.apple.com/documentation/foundation/urlsession/downloadtask(with:)-1onj)

# downloadTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a download task that retrieves the contents of the specified URL and saves the results to a file.

## Declaration

```swift
func downloadTask(with url: URL) -> URLSessionDownloadTask
```

## Parameters

- `url`: The URL to download.

<a id="return-value"></a>

## Return Value

The new session download task.

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)
- [Downloading files from websites](../downloading-files-from-websites.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding download tasks to a session

- [downloadTask(with:completionHandler:)](downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTask(with:)](downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTask(with:completionHandler:)](downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTask(withResumeData:)](downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTask(withResumeData:completionHandler:)](downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [URLSessionDownloadTask](../urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
- [URLSessionDownloadDelegate](../urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.

# downloadTaskWithURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a download task that retrieves the contents of the specified URL and saves the results to a file.

## Declaration

```objectivec
- (NSURLSessionDownloadTask *) downloadTaskWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to download.

<a id="return-value"></a>

## Return Value

The new session download task.

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)
- [Downloading files from websites](../downloading-files-from-websites.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding download tasks to a session

- [downloadTaskWithURL:completionHandler:](downloadtask%28with_completionhandler_%29-7cuje.md): Creates a download task that retrieves the contents of the specified URL, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithRequest:](downloadtask%28with_%29-3fb7s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object and saves the results to a file.
- [downloadTaskWithRequest:completionHandler:](downloadtask%28with_completionhandler_%29-4a84s.md): Creates a download task that retrieves the contents of a URL based on the specified URL request object, saves the results to a file, and calls a handler upon completion.
- [downloadTaskWithResumeData:](downloadtask%28withresumedata_%29.md): Creates a download task to resume a previously canceled or failed download.
- [downloadTaskWithResumeData:completionHandler:](downloadtask%28withresumedata_completionhandler_%29.md): Creates a download task to resume a previously canceled or failed download and calls a handler upon completion.
- [NSURLSessionDownloadTask](../urlsessiondownloadtask.md): A URL session task that stores downloaded data to a file.
- [NSURLSessionDownloadDelegate](../urlsessiondownloaddelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.
