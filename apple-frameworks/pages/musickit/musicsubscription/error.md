> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicsubscription/error](https://developer.apple.com/documentation/musickit/musicsubscription/error)

# MusicSubscription.Error

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that MusicKit can throw upon requesting the current music subscription of the user.

## Declaration

```swift
enum Error
```

## Topics

### Enumeration Cases

- [MusicSubscription.Error.permissionDenied](error/permissiondenied.md): An error indicating that the user doesn’t consent for your app to access their Apple Music data.
- [MusicSubscription.Error.privacyAcknowledgementRequired](error/privacyacknowledgementrequired.md): An error indicating that the user needs to acknowledge the most-recent privacy policy for Apple Music.
- [MusicSubscription.Error.unknown](error/unknown.md): An error indicating the ocurrence of an unknown or unexpected error.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
