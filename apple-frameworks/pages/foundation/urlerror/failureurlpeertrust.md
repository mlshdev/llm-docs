> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/failureurlpeertrust](https://developer.apple.com/documentation/foundation/urlerror/failureurlpeertrust)

# failureURLPeerTrust

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The state of a failed SSL handshake.

## Declaration

```swift
var failureURLPeerTrust: SecTrust? { get }
```

## See Also

### Error details

- [failingURL](failingurl.md): The URL which caused a load to fail.
- [failureURLString](failureurlstring.md): Deprecated. The string for the URL which caused a load to fail.
- [downloadTaskResumeData](downloadtaskresumedata.md): An opaque data object used to resume a failed download task.
- [backgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.property.md): The reason for canceling a background task.
- [URLError.BackgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.enum.md): An enumeration of reasons used to explain the cancellation of a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.
