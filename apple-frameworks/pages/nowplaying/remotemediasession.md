> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession](https://developer.apple.com/documentation/nowplaying/remotemediasession)

# RemoteMediaSession

**Framework:** Now Playing  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A session that manages remote media playback across devices.

## Declaration

```swift
@MainActor class RemoteMediaSession<Attributes> where Attributes : RemoteMediaSessionAttributes
```

## Mentioned In

- [Publishing remote media sessions](publishing-remote-media-sessions.md)

<a id="overview"></a>

## Overview

Use a remote session to represent media playback sessions happening outside of this device, but that your app wants to donate to the system so they may appear in the system’s Now Playing interface.

Use this API when your app has information about the remote session and wants to signal to the system that playback has started (using [start(attributes:)](remotemediasession/start%28attributes_%29.md)) or something about the session has changed (using [update(\_:)](remotemediasession/update%28__%29.md)).

You can also donate remote sessions to the system through push notifications, for example when playback starts while your app isn’t running.

In that case, use APNs to send a push notification to the user’s device that informs the system of a `start`, `update`, or `end` event.

For more information, see [Publishing remote media sessions](publishing-remote-media-sessions.md)

The following example shows how to start a session:

```swift
struct MySessionAttributes: RemoteMediaSessionAttributes {
    let id: String
    let trackID: String
}

let attributes = MySessionAttributes(id: "session-123", trackID: "track-123")
let session = try await RemoteMediaSession.start(attributes: attributes)
```

After starting a session, update its attributes or end it:

```swift
// Update the session attributes
try await session.update(newAttributes)

// End the session when playback completes
try await session.end()
```

## Topics

### Instance Properties

- [id](remotemediasession/id.md): The unique identifier for this session.
- [isSystemPrimary](remotemediasession/issystemprimary.md): A Boolean value that indicates whether this is currently the primary system session.

### Instance Methods

- [end()](remotemediasession/end%28%29.md): Ends the session and removes it from the Now Playing interface.
- [requestToBecomeSystemPrimary()](remotemediasession/requesttobecomesystemprimary%28%29.md): Requests to make this session the system primary media session.
- [update(\_:)](remotemediasession/update%28__%29.md): Updates the session with new attributes.

### Type Properties

- [pushToStartToken](remotemediasession/pushtostarttoken.md): Conforms when `Attributes` conforms to `RemoteMediaSessionAttributes`. The token you use to start a [RemoteMediaSession](remotemediasession.md) through a push notification.
- [pushToStartTokenUpdates](remotemediasession/pushtostarttokenupdates.md): Conforms when `Attributes` conforms to `RemoteMediaSessionAttributes`. An asynchronous sequence that delivers updated tokens for starting a [RemoteMediaSession](remotemediasession.md) through a push notification.

### Type Methods

- [sessions()](remotemediasession/sessions%28%29.md): Returns all registered remote sessions.
- [start(attributes:)](remotemediasession/start%28attributes_%29.md): Starts a new remote session with the specified attributes.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Remote sessions

- [Publishing remote media sessions](publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSessionExtension](remotemediasessionextension.md): An app extension that provides remote media sessions.
- [RemoteMediaSessionExtensionConfiguration](remotemediasessionextensionconfiguration.md): The configuration object for a remote playback extension.
- [RemoteMediaSessionAttributes](remotemediasessionattributes.md): A type that represents attributes for remote sessions.
- [RemoteMediaSessionError](remotemediasessionerror.md): Errors that can occur during remote session operations.
- [MediaDevice](mediadevice.md): A device that plays media in a remote session.
