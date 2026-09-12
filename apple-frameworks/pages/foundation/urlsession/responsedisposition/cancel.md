> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/responsedisposition/cancel](https://developer.apple.com/documentation/foundation/urlsession/responsedisposition/cancel)

# URLSession.ResponseDisposition.cancel (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancel the load.

## Declaration

```swift
case cancel
```

<a id="Discussion"></a>

## Discussion

Using this disposition is equivalent to calling [cancel()](../../urlsessiontask/cancel%28%29.md) on the task.

## See Also

### Task dispositions

- [URLSession.ResponseDisposition.allow](allow.md): Allow the load operation to continue.
- [URLSession.ResponseDisposition.becomeDownload](becomedownload.md): Convert the response for this request to use a [URLSessionDownloadTask](../../urlsessiondownloadtask.md).
- [URLSession.ResponseDisposition.becomeStream](becomestream.md): Convert the response for this request to use a [URLSessionStreamTask](../../urlsessionstreamtask.md).

# NSURLSessionResponseCancel (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancel the load.

## Declaration

```objectivec
NSURLSessionResponseCancel
```

<a id="Discussion"></a>

## Discussion

Using this disposition is equivalent to calling [cancel](../../urlsessiontask/cancel%28%29.md) on the task.

## See Also

### Task dispositions

- [NSURLSessionResponseAllow](allow.md): Allow the load operation to continue.
- [NSURLSessionResponseBecomeDownload](becomedownload.md): Convert the response for this request to use a [NSURLSessionDownloadTask](../../urlsessiondownloadtask.md).
- [NSURLSessionResponseBecomeStream](becomestream.md): Convert the response for this request to use a [NSURLSessionStreamTask](../../urlsessionstreamtask.md).
