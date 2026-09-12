> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondownloaddelegate/urlsession(_:downloadtask:didfinishdownloadingto:)](https://developer.apple.com/documentation/foundation/urlsessiondownloaddelegate/urlsession(_:downloadtask:didfinishdownloadingto:))

# urlSession(\_:downloadTask:didFinishDownloadingTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a download task has finished downloading.

## Declaration

```swift
func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask, didFinishDownloadingTo location: URL)
```

## Parameters

- `session`: The session containing the download task that finished.
- `downloadTask`: The download task that finished.
- `location`: A file URL for the temporary file. Because the file is temporary, you must either open the file for reading or move it to a permanent location in your app’s sandbox container directory before returning from this delegate method.

  If you choose to open the file for reading, you should do the actual reading in another thread to avoid blocking the delegate queue.

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)
- [Downloading files in the background](../downloading-files-in-the-background.md)

# URLSession:downloadTask:didFinishDownloadingToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a download task has finished downloading.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session downloadTask:(NSURLSessionDownloadTask *) downloadTask didFinishDownloadingToURL:(NSURL *) location;
```

## Parameters

- `session`: The session containing the download task that finished.
- `downloadTask`: The download task that finished.
- `location`: A file URL for the temporary file. Because the file is temporary, you must either open the file for reading or move it to a permanent location in your app’s sandbox container directory before returning from this delegate method.

  If you choose to open the file for reading, you should do the actual reading in another thread to avoid blocking the delegate queue.

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)
- [Downloading files in the background](../downloading-files-in-the-background.md)
