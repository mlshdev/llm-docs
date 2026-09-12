> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionextensionconfiguration](https://developer.apple.com/documentation/nowplaying/remotemediasessionextensionconfiguration)

# RemoteMediaSessionExtensionConfiguration

**Framework:** Now Playing  
**Kind:** Class  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The configuration object for a remote playback extension.

## Declaration

```swift
@MainActor final class RemoteMediaSessionExtensionConfiguration<Extension> where Extension : RemoteMediaSessionExtension
```

## Mentioned In

- [Publishing remote media sessions](publishing-remote-media-sessions.md)

<a id="overview"></a>

## Overview

This class manages the lifecycle of remote sessions within your app extension. It handles XPC communication, session registration, attribute updates, and automatic observation of session state changes.

For more information, see [Publishing remote media sessions](publishing-remote-media-sessions.md)

Create an instance of this class in your extension’s `configuration` property:

```swift
@main
struct MyPlaybackExtension: RemoteMediaSessionExtension {
    var configuration: RemoteMediaSessionExtensionConfiguration<Self> {
        RemoteMediaSessionExtensionConfiguration(extension: self)
    }
}
```

## Topics

### Initializers

- [init(extension:)](remotemediasessionextensionconfiguration/init%28extension_%29.md): Creates a new configuration with the specified extension instance.

## Relationships

### Conforms To

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Remote sessions

- [Publishing remote media sessions](publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSession](remotemediasession.md): A session that manages remote media playback across devices.
- [RemoteMediaSessionExtension](remotemediasessionextension.md): An app extension that provides remote media sessions.
- [RemoteMediaSessionAttributes](remotemediasessionattributes.md): A type that represents attributes for remote sessions.
- [RemoteMediaSessionError](remotemediasessionerror.md): Errors that can occur during remote session operations.
- [MediaDevice](mediadevice.md): A device that plays media in a remote session.
