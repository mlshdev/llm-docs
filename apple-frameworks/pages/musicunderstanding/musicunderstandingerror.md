> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingerror](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingerror)

# MusicUnderstandingError

**Framework:** Music Understanding  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An error that occurs during a music understanding session.

## Declaration

```swift
enum MusicUnderstandingError
```

## Topics

### Types of error cases

- [MusicUnderstandingError.emptyAnalysisSet](musicunderstandingerror/emptyanalysisset.md): The error that occurs when someone requests and analysis of an empty analysis set.
- [MusicUnderstandingError.internalError](musicunderstandingerror/internalerror.md): The error that occurs when an unexpected internal failure prevents the session from completing.
- [MusicUnderstandingError.invalidAsset](musicunderstandingerror/invalidasset.md): The error that occurs when someone initializes a session with an invalid asset.
- [MusicUnderstandingError.sessionInProgress](musicunderstandingerror/sessioninprogress.md): The error that occurs when someone requests analysis while a session is already in progress.

### Enumeration Cases

- [MusicUnderstandingError.hasProtectedContent](musicunderstandingerror/hasprotectedcontent.md): The error that occurs when a session is initialized with an `AVAsset` whose content is protected by DRM and cannot be decoded for analysis.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
