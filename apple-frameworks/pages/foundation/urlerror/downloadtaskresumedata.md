> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/downloadtaskresumedata](https://developer.apple.com/documentation/foundation/urlerror/downloadtaskresumedata)

# downloadTaskResumeData

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An opaque data object used to resume a failed download task.

## Declaration

```swift
var downloadTaskResumeData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

Pass this object to [downloadTask(withResumeData:)](../urlsession/downloadtask%28withresumedata_%29.md) or [downloadTask(withResumeData:completionHandler:)](../urlsession/downloadtask%28withresumedata_completionhandler_%29.md) to create a new download task that can attempt to resume the failed download.

## See Also

### Error details

- [failingURL](failingurl.md): The URL which caused a load to fail.
- [failureURLPeerTrust](failureurlpeertrust.md): The state of a failed SSL handshake.
- [failureURLString](failureurlstring.md): Deprecated. The string for the URL which caused a load to fail.
- [backgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.property.md): The reason for canceling a background task.
- [URLError.BackgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.enum.md): An enumeration of reasons used to explain the cancellation of a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.
