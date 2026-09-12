> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownload/state-swift.enum](https://developer.apple.com/documentation/backgroundassets/badownload/state-swift.enum)

# BADownload.State (Swift)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate the state of a download.

## Declaration

```swift
enum State
```

## Topics

### Download states

- [BADownload.State.created](state-swift.enum/created.md): A state that indicates a created download.
- [BADownload.State.waiting](state-swift.enum/waiting.md): A state that indicates a download is waiting to execute.
- [BADownload.State.downloading](state-swift.enum/downloading.md): A state that indicates a download is in progress.
- [BADownload.State.finished](state-swift.enum/finished.md): A state that indicates a finished download.
- [BADownload.State.failed](state-swift.enum/failed.md): A state that indicates a failed download.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the current state

- [state](state-swift.property.md): The current state of the download.

# BADownloadState (Objective-C)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate the state of a download.

## Declaration

```objectivec
enum BADownloadState : NSInteger;
```

## Topics

### Download states

- [BADownloadStateCreated](state-swift.enum/created.md): A state that indicates a created download.
- [BADownloadStateWaiting](state-swift.enum/waiting.md): A state that indicates a download is waiting to execute.
- [BADownloadStateDownloading](state-swift.enum/downloading.md): A state that indicates a download is in progress.
- [BADownloadStateFinished](state-swift.enum/finished.md): A state that indicates a finished download.
- [BADownloadStateFailed](state-swift.enum/failed.md): A state that indicates a failed download.

## See Also

### Getting the current state

- [state](state-swift.property.md): The current state of the download.
