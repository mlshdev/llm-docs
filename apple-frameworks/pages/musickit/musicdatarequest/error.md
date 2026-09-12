> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicdatarequest/error](https://developer.apple.com/documentation/musickit/musicdatarequest/error)

# MusicDataRequest.Error

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that the Apple Music API returns.

## Declaration

```swift
struct Error
```

## Topics

### Instance Properties

- [code](error/code.md): The specific code for the underlying cause of the error.
- [detailText](error/detailtext.md): Additional detailed information about the cause of the error.
- [id](error/id.md): The identifier for the error.
- [originalResponse](error/originalresponse.md): The original response that contains the error.
- [source](error/source-swift.property.md): The source of the error.
- [status](error/status.md): The HTTP status code for the error.
- [title](error/title.md): A developer-friendly title for the error.

### Enumerations

- [MusicDataRequest.Error.Source](error/source-swift.enum.md): A representation of the source of an error from Apple Music API.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
