> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediasessionerror](https://developer.apple.com/documentation/nowplaying/mediasessionerror)

# MediaSessionError

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Errors that can occur during local session operations.

## Declaration

```swift
enum MediaSessionError
```

## Topics

### Enumeration Cases

- [MediaSessionError.internalFailure](mediasessionerror/internalfailure.md): An internal system error occurred.
- [MediaSessionError.invalidState](mediasessionerror/invalidstate.md): The operation is not supported in the current state.
- [MediaSessionError.sessionInvalidated](mediasessionerror/sessioninvalidated.md): The session is already invalidated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Local sessions

- [Publishing media sessions](publishing-media-sessions.md): Show your app’s media on the Lock Screen and Control Center.
- [MediaSessionRepresentable](mediasessionrepresentable.md): A protocol that provides content metadata, playback state, and commands for a Now Playing session.
- [MediaSession](mediasession.md): A local Now Playing session that publishes metadata and commands to the system.
