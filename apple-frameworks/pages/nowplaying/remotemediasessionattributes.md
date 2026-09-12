> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionattributes](https://developer.apple.com/documentation/nowplaying/remotemediasessionattributes)

# RemoteMediaSessionAttributes

**Framework:** Now Playing  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that represents attributes for remote sessions.

## Declaration

```swift
protocol RemoteMediaSessionAttributes : Decodable, Encodable
```

## Mentioned In

- [Publishing remote media sessions](publishing-remote-media-sessions.md)

<a id="overview"></a>

## Overview

Conform to this protocol to define the data that configures your remote sessions. Attributes identify sessions and communicate session state between your app and extension. The attributes must be encodable for transmission and uniquely identifiable.

Your host app’s [RemoteMediaSession](remotemediasession.md) and your [RemoteMediaSessionExtension](remotemediasessionextension.md) share the same attributes type: the host encodes it when starting or updating a session, and the extension decodes it to create or refresh a session.

For more information, see [Publishing remote media sessions](publishing-remote-media-sessions.md)

## Topics

### Instance Properties

- [id](remotemediasessionattributes/id.md): A stable, unique identifier for the session these attributes describe.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Remote sessions

- [Publishing remote media sessions](publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSession](remotemediasession.md): A session that manages remote media playback across devices.
- [RemoteMediaSessionExtension](remotemediasessionextension.md): An app extension that provides remote media sessions.
- [RemoteMediaSessionExtensionConfiguration](remotemediasessionextensionconfiguration.md): The configuration object for a remote playback extension.
- [RemoteMediaSessionError](remotemediasessionerror.md): Errors that can occur during remote session operations.
- [MediaDevice](mediadevice.md): A device that plays media in a remote session.
