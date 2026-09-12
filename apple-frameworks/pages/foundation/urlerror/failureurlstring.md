> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/failureurlstring](https://developer.apple.com/documentation/foundation/urlerror/failureurlstring)

# failureURLString

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.4) · iPadOS 8.0+ (deprecated in 18.4) · Mac Catalyst 8.0+ (deprecated in 18.4) · macOS 10.10+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

The string for the URL which caused a load to fail.

> Use failingURL instead

## Declaration

```swift
var failureURLString: String? { get }
```

## See Also

### Error details

- [failingURL](failingurl.md): The URL which caused a load to fail.
- [failureURLPeerTrust](failureurlpeertrust.md): The state of a failed SSL handshake.
- [downloadTaskResumeData](downloadtaskresumedata.md): An opaque data object used to resume a failed download task.
- [backgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.property.md): The reason for canceling a background task.
- [URLError.BackgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.enum.md): An enumeration of reasons used to explain the cancellation of a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.
