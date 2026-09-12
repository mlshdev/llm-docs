> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionextension](https://developer.apple.com/documentation/nowplaying/remotemediasessionextension)

# RemoteMediaSessionExtension

**Framework:** Now Playing  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An app extension that provides remote media sessions.

## Declaration

```swift
@MainActor protocol RemoteMediaSessionExtension<Attributes> : AppExtension
```

## Mentioned In

- [Publishing remote media sessions](publishing-remote-media-sessions.md)

<a id="overview"></a>

## Overview

Implement this protocol in your app extension to handle remote playback sessions.

For more information, see [Publishing remote media sessions](publishing-remote-media-sessions.md)

The following example shows a basic extension implementation:

```swift
@main
struct MyPlaybackExtension: RemoteMediaSessionExtension {
    var configuration: RemoteMediaSessionExtensionConfiguration<Self> {
        RemoteMediaSessionExtensionConfiguration(extension: self)
    }

    func session(_ attributes: MySessionAttributes) async throws -> MySession {
        return MySession(attributes: attributes)
    }
}
```

## Topics

### Associated Types

- [Attributes](remotemediasessionextension/attributes.md): The type that represents attributes for your remote sessions.
- [Session](remotemediasessionextension/session.md): The type of session this extension creates.

### Instance Methods

- [session(\_:)](remotemediasessionextension/session%28__%29.md): Creates a session configured with the specified attributes.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Remote sessions

- [Publishing remote media sessions](publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSession](remotemediasession.md): A session that manages remote media playback across devices.
- [RemoteMediaSessionExtensionConfiguration](remotemediasessionextensionconfiguration.md): The configuration object for a remote playback extension.
- [RemoteMediaSessionAttributes](remotemediasessionattributes.md): A type that represents attributes for remote sessions.
- [RemoteMediaSessionError](remotemediasessionerror.md): Errors that can occur during remote session operations.
- [MediaDevice](mediadevice.md): A device that plays media in a remote session.
