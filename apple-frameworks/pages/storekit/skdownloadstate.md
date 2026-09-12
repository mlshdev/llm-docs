> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownloadstate](https://developer.apple.com/documentation/storekit/skdownloadstate)

# SKDownloadState (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The states that a download operation can be in.

> Hosted content is no longer supported.

## Declaration

```swift
@frozen enum SKDownloadState
```

## Topics

### Constants

- [SKDownloadState.waiting](skdownloadstate/waiting.md): Deprecated. Indicates that the download has not started yet.
- [SKDownloadState.active](skdownloadstate/active.md): Deprecated. Indicates that the content is currently being downloaded.
- [SKDownloadState.paused](skdownloadstate/paused.md): Deprecated. Indicates that your app paused the download.
- [SKDownloadState.finished](skdownloadstate/finished.md): Deprecated. Indicates that the content was successfully downloaded.
- [SKDownloadState.failed](skdownloadstate/failed.md): Deprecated. Indicates that an error occurred while the file was being downloaded.
- [SKDownloadState.cancelled](skdownloadstate/cancelled.md): Deprecated. Indicates that your app canceled the download.

### Initializers

- [init(rawValue:)](skdownloadstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting State Information

- [state](skdownload/state.md): Deprecated. The current state of the download object.
- [progress](skdownload/progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](skdownload/timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [downloadState](skdownload/downloadstate.md): Deprecated. The current state of the download object.

# SKDownloadState (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The states that a download operation can be in.

> Hosted content is no longer supported.

## Declaration

```objectivec
enum SKDownloadState : NSInteger;
```

## Topics

### Constants

- [SKDownloadStateWaiting](skdownloadstate/waiting.md): Deprecated. Indicates that the download has not started yet.
- [SKDownloadStateActive](skdownloadstate/active.md): Deprecated. Indicates that the content is currently being downloaded.
- [SKDownloadStatePaused](skdownloadstate/paused.md): Deprecated. Indicates that your app paused the download.
- [SKDownloadStateFinished](skdownloadstate/finished.md): Deprecated. Indicates that the content was successfully downloaded.
- [SKDownloadStateFailed](skdownloadstate/failed.md): Deprecated. Indicates that an error occurred while the file was being downloaded.
- [SKDownloadStateCancelled](skdownloadstate/cancelled.md): Deprecated. Indicates that your app canceled the download.

## See Also

### Getting State Information

- [state](skdownload/state.md): Deprecated. The current state of the download object.
- [progress](skdownload/progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](skdownload/timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [downloadState](skdownload/downloadstate.md): Deprecated. The current state of the download object.
