> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicauthorization/status](https://developer.apple.com/documentation/musickit/musicauthorization/status)

# MusicAuthorization.Status

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A value that indicates the authorization status the user sets for the current app to access their Apple Music data.

## Declaration

```swift
enum Status
```

## Topics

### Enumeration Cases

- [MusicAuthorization.Status.authorized](status/authorized.md): The user granted permission for the current app to use MusicKit.
- [MusicAuthorization.Status.denied](status/denied.md): The user denied permission for the current app to use MusicKit.
- [MusicAuthorization.Status.notDetermined](status/notdetermined.md): The user has yet to decide whether to authorize the current app to use MusicKit.
- [MusicAuthorization.Status.restricted](status/restricted.md): Apps on this device can’t access MusicKit in a way that the user can’t change.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
