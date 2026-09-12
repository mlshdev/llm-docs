> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/failingurl](https://developer.apple.com/documentation/foundation/urlerror/failingurl)

# failingURL

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL which caused a load to fail.

## Declaration

```swift
var failingURL: URL? { get }
```

## See Also

### Error details

- [failureURLPeerTrust](failureurlpeertrust.md): The state of a failed SSL handshake.
- [failureURLString](failureurlstring.md): Deprecated. The string for the URL which caused a load to fail.
- [downloadTaskResumeData](downloadtaskresumedata.md): An opaque data object used to resume a failed download task.
- [backgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.property.md): The reason for canceling a background task.
- [URLError.BackgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.enum.md): An enumeration of reasons used to explain the cancellation of a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.
