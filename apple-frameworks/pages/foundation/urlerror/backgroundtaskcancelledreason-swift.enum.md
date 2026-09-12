> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/backgroundtaskcancelledreason-swift.enum](https://developer.apple.com/documentation/foundation/urlerror/backgroundtaskcancelledreason-swift.enum)

# URLError.BackgroundTaskCancelledReason

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of reasons used to explain the cancellation of a background task.

## Declaration

```swift
enum BackgroundTaskCancelledReason
```

## Topics

### Cancellation reasons

- [URLError.BackgroundTaskCancelledReason.backgroundUpdatesDisabled](backgroundtaskcancelledreason-swift.enum/backgroundupdatesdisabled.md): A reason that indicates the system canceled the background task because background tasks are disabled.
- [URLError.BackgroundTaskCancelledReason.insufficientSystemResources](backgroundtaskcancelledreason-swift.enum/insufficientsystemresources.md): A reason that indicates the system canceled the background task because it lacks sufficient resources to perform the task.
- [URLError.BackgroundTaskCancelledReason.userForceQuitApplication](backgroundtaskcancelledreason-swift.enum/userforcequitapplication.md): A reason that indicates the system canceled the background task because the user force-quit the application.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error details

- [failingURL](failingurl.md): The URL which caused a load to fail.
- [failureURLPeerTrust](failureurlpeertrust.md): The state of a failed SSL handshake.
- [failureURLString](failureurlstring.md): Deprecated. The string for the URL which caused a load to fail.
- [downloadTaskResumeData](downloadtaskresumedata.md): An opaque data object used to resume a failed download task.
- [backgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.property.md): The reason for canceling a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.
