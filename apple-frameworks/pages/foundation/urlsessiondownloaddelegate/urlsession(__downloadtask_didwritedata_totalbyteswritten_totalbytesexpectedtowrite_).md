> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondownloaddelegate/urlsession(_:downloadtask:didwritedata:totalbyteswritten:totalbytesexpectedtowrite:)](https://developer.apple.com/documentation/foundation/urlsessiondownloaddelegate/urlsession(_:downloadtask:didwritedata:totalbyteswritten:totalbytesexpectedtowrite:))

# urlSession(\_:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Periodically informs the delegate about the download’s progress.

## Declaration

```swift
optional func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask, didWriteData bytesWritten: Int64, totalBytesWritten: Int64, totalBytesExpectedToWrite: Int64)
```

## Parameters

- `session`: The session containing the download task.
- `downloadTask`: The download task.
- `bytesWritten`: The number of bytes transferred since the last time this delegate method was called.
- `totalBytesWritten`: The total number of bytes transferred so far.
- `totalBytesExpectedToWrite`: The expected length of the file, as provided by the `Content-Length` header. If this header was not provided, the value is [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md).

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)

# URLSession:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Periodically informs the delegate about the download’s progress.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session downloadTask:(NSURLSessionDownloadTask *) downloadTask didWriteData:(int64_t) bytesWritten totalBytesWritten:(int64_t) totalBytesWritten totalBytesExpectedToWrite:(int64_t) totalBytesExpectedToWrite;
```

## Parameters

- `session`: The session containing the download task.
- `downloadTask`: The download task.
- `bytesWritten`: The number of bytes transferred since the last time this delegate method was called.
- `totalBytesWritten`: The total number of bytes transferred so far.
- `totalBytesExpectedToWrite`: The expected length of the file, as provided by the `Content-Length` header. If this header was not provided, the value is [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md).

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)
