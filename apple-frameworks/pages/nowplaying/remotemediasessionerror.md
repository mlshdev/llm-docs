> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionerror](https://developer.apple.com/documentation/nowplaying/remotemediasessionerror)

# RemoteMediaSessionError

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Errors that can occur during remote session operations.

## Declaration

```swift
enum RemoteMediaSessionError
```

## Topics

### Enumeration Cases

- [RemoteMediaSessionError.internalFailure](remotemediasessionerror/internalfailure.md): An internal system error occurred.
- [RemoteMediaSessionError.invalidAttributes](remotemediasessionerror/invalidattributes.md): The given attributes argument does not match the current session.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Remote sessions

- [Publishing remote media sessions](publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSession](remotemediasession.md): A session that manages remote media playback across devices.
- [RemoteMediaSessionExtension](remotemediasessionextension.md): An app extension that provides remote media sessions.
- [RemoteMediaSessionExtensionConfiguration](remotemediasessionextensionconfiguration.md): The configuration object for a remote playback extension.
- [RemoteMediaSessionAttributes](remotemediasessionattributes.md): A type that represents attributes for remote sessions.
- [MediaDevice](mediadevice.md): A device that plays media in a remote session.
