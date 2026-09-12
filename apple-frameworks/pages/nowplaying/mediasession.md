> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediasession](https://developer.apple.com/documentation/nowplaying/mediasession)

# MediaSession

**Framework:** Now Playing  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A local Now Playing session that publishes metadata and commands to the system.

## Declaration

```swift
@MainActor class MediaSession<Representable> where Representable : MediaSessionRepresentable
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use a session to represent media playback happening on the current device. The session automatically observes your [MediaSessionRepresentable](mediasessionrepresentable.md) model and syncs changes to the system’s Now Playing interface.

For more information, see [Publishing media sessions](publishing-media-sessions.md)

Create a session by providing a session representable:

```swift
let session = MediaSession(myModel)
```

Call [requestToBecomeApplicationPrimary()](mediasession/requesttobecomeapplicationprimary%28%29.md) to make this your app’s primary Now Playing session when you want to display playback controls:

```swift
try await session.requestToBecomeApplicationPrimary()
```

## Topics

### Initializers

- [init(\_:)](mediasession/init%28__%29.md): Creates a new local Now Playing session.

### Instance Properties

- [canBecomeApplicationPrimary](mediasession/canbecomeapplicationprimary.md): A Boolean value that indicates whether this session can become the app’s primary session.
- [id](mediasession/id.md): The unique identifier for this session.
- [isApplicationPrimary](mediasession/isapplicationprimary.md): A Boolean value that indicates whether this is currently the primary application session.
- [isSystemPrimary](mediasession/issystemprimary.md): A Boolean value that indicates whether this is currently the primary system session.

### Instance Methods

- [requestToBecomeApplicationPrimary()](mediasession/requesttobecomeapplicationprimary%28%29.md): Attempts to make this session your app’s primary media session.
- [requestToBecomeSystemPrimary()](mediasession/requesttobecomesystemprimary%28%29.md): Requests to make this session the primary system media session.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Local sessions

- [Publishing media sessions](publishing-media-sessions.md): Show your app’s media on the Lock Screen and Control Center.
- [MediaSessionRepresentable](mediasessionrepresentable.md): A protocol that provides content metadata, playback state, and commands for a Now Playing session.
- [MediaSessionError](mediasessionerror.md): Errors that can occur during local session operations.
