> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondownloadtask/cancel(byproducingresumedata:)](https://developer.apple.com/documentation/foundation/urlsessiondownloadtask/cancel(byproducingresumedata:))

# cancel(byProducingResumeData:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels a download and calls a callback with resume data for later use.

## Declaration

```swift
func cancel(byProducingResumeData completionHandler: @escaping @Sendable (Data?) -> Void)
```

```swift
func cancelByProducingResumeData() async -> Data?
```

## Parameters

- `completionHandler`: A completion handler that is called when the download has been successfully canceled.

  If the download is resumable, the completion handler is provided with a `resumeData` object. Your app can later pass this object to a session’s [downloadTask(withResumeData:)](../urlsession/downloadtask%28withresumedata_%29.md) or [downloadTask(withResumeData:completionHandler:)](../urlsession/downloadtask%28withresumedata_completionhandler_%29.md) method to create a new task that resumes the download where it left off.

  This block is not guaranteed to execute in a particular thread context. As such, you may want specify an appropriate dispatch queue in which to perform any work.

## Mentioned In

- [Pausing and resuming downloads](../pausing-and-resuming-downloads.md)
- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

<a id="Discussion"></a>

## Discussion

A download can be resumed only if the following conditions are met:

- The resource has not changed since you first requested it
- The task is an HTTP or HTTPS `GET` request
- The server provides either the `ETag` or `Last-Modified` header (or both) in its response
- The server supports byte-range requests
- The temporary file hasn’t been deleted by the system in response to disk space pressure

# cancelByProducingResumeData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels a download and calls a callback with resume data for later use.

## Declaration

```objectivec
- (void) cancelByProducingResumeData:(void (^)(NSData *resumeData)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler that is called when the download has been successfully canceled.

  If the download is resumable, the completion handler is provided with a `resumeData` object. Your app can later pass this object to a session’s [downloadTaskWithResumeData:](../urlsession/downloadtask%28withresumedata_%29.md) or [downloadTaskWithResumeData:completionHandler:](../urlsession/downloadtask%28withresumedata_completionhandler_%29.md) method to create a new task that resumes the download where it left off.

  This block is not guaranteed to execute in a particular thread context. As such, you may want specify an appropriate dispatch queue in which to perform any work.

## Mentioned In

- [Pausing and resuming downloads](../pausing-and-resuming-downloads.md)
- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

<a id="Discussion"></a>

## Discussion

A download can be resumed only if the following conditions are met:

- The resource has not changed since you first requested it
- The task is an HTTP or HTTPS `GET` request
- The server provides either the `ETag` or `Last-Modified` header (or both) in its response
- The server supports byte-range requests
- The temporary file hasn’t been deleted by the system in response to disk space pressure
