> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/backgroundtaskcancelledreason-swift.property](https://developer.apple.com/documentation/foundation/urlerror/backgroundtaskcancelledreason-swift.property)

# backgroundTaskCancelledReason

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The reason for canceling a background task.

## Declaration

```swift
var backgroundTaskCancelledReason: URLError.BackgroundTaskCancelledReason? { get }
```

<a id="Discussion"></a>

## Discussion

If the error doesn’t involve cancellation of a background task, this property is `nil`.

## See Also

### Error details

- [failingURL](failingurl.md): The URL which caused a load to fail.
- [failureURLPeerTrust](failureurlpeertrust.md): The state of a failed SSL handshake.
- [failureURLString](failureurlstring.md): Deprecated. The string for the URL which caused a load to fail.
- [downloadTaskResumeData](downloadtaskresumedata.md): An opaque data object used to resume a failed download task.
- [URLError.BackgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.enum.md): An enumeration of reasons used to explain the cancellation of a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.
