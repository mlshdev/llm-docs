> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlsessiondownloadtaskresumedata](https://developer.apple.com/documentation/foundation/nsurlsessiondownloadtaskresumedata)

# NSURLSessionDownloadTaskResumeData (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key in the error dictionary that provides resume data.

## Declaration

```swift
let NSURLSessionDownloadTaskResumeData: String
```

## Mentioned In

- [Pausing and resuming downloads](pausing-and-resuming-downloads.md)

<a id="Discussion"></a>

## Discussion

When a transfer error occurs or when you call the [cancel(byProducingResumeData:)](urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md) method, the delegate object or completion handler gets an [NSError](nserror.md) object. If the transfer is resumable, that error object’s `userInfo` dictionary contains a value for this key. To resume the transfer, your app can pass that value to the [downloadTask(withResumeData:)](urlsession/downloadtask%28withresumedata_%29.md) or [downloadTask(withResumeData:completionHandler:)](urlsession/downloadtask%28withresumedata_completionhandler_%29.md) method.

## See Also

### User info dictionary keys

- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.

# NSURLSessionDownloadTaskResumeData (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key in the error dictionary that provides resume data.

## Declaration

```objectivec
extern NSString * const NSURLSessionDownloadTaskResumeData;
```

## Mentioned In

- [Pausing and resuming downloads](pausing-and-resuming-downloads.md)

<a id="Discussion"></a>

## Discussion

When a transfer error occurs or when you call the [cancelByProducingResumeData:](urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md) method, the delegate object or completion handler gets an [NSError](nserror.md) object. If the transfer is resumable, that error object’s `userInfo` dictionary contains a value for this key. To resume the transfer, your app can pass that value to the [downloadTaskWithResumeData:](urlsession/downloadtask%28withresumedata_%29.md) or [downloadTaskWithResumeData:completionHandler:](urlsession/downloadtask%28withresumedata_completionhandler_%29.md) method.

## See Also

### User info dictionary keys

- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
