> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying](https://developer.apple.com/documentation/nowplaying)

# Now Playing

**Framework:** Now Playing  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Make your app’s media playback controls available on the Lock Screen, Control Center, and connected accessories.

<a id="Overview"></a>

## Overview

The Now Playing framework makes it easy for people to quickly access your app’s media controls across Apple platforms. The Now Playing interface integrates the controls on the Lock Screen, in Control Center, on Apple Watch, and in CarPlay. Use it to publish playback for music, audiobooks, podcasts, movies, TV shows, and other content. You describe your media content and supported commands with an [Observable](https://developer.apple.com/documentation/observation/observable) model, and the framework updates the system whenever your model changes.

![An illustration of a Now Playing media control card showing track and artist information with play, pause, and skip buttons, surrounded by icons representing iPhone, headphones, a car, a speaker, and Apple Vision Pro.](https://developer.apple.com/images/com.apple.nowplaying/now-playing-hero@2x.png)

Now Playing supports two kinds of sessions:

- **Local sessions:** Publish playback that happens on the current device. Create a type that conforms to [MediaSessionRepresentable](nowplaying/mediasessionrepresentable.md) and use [MediaSession](nowplaying/mediasession.md) to register it with the system. The framework observes your [Observable](https://developer.apple.com/documentation/observation/observable) model and publishes changes to the system as they happen.
- **Remote sessions:** Publish playback that happens on external devices, such as speakers, streaming sticks, or smart TVs. Create an app extension that conforms to [RemoteMediaSessionExtension](nowplaying/remotemediasessionextension.md) and provide sessions conforming to [RemoteMediaSessionRepresentable](nowplaying/remotemediasessionrepresentable.md). Start remote sessions from your app using [RemoteMediaSession](nowplaying/remotemediasession.md), or from your server using push notifications when your app isn’t running.

> **Important**

> Don’t mix the Now Playing framework with the [MPNowPlayingInfoCenter](mediaplayer/mpnowplayinginfocenter.md) and [MPRemoteCommandCenter](mediaplayer/mpremotecommandcenter.md) APIs from the [Media Player](mediaplayer.md) framework for local playback. Doing so results in undefined behavior.

## Topics

### Local sessions

- [Publishing media sessions](nowplaying/publishing-media-sessions.md): Show your app’s media on the Lock Screen and Control Center.
- [MediaSessionRepresentable](nowplaying/mediasessionrepresentable.md): A protocol that provides content metadata, playback state, and commands for a Now Playing session.
- [MediaSession](nowplaying/mediasession.md): A local Now Playing session that publishes metadata and commands to the system.
- [MediaSessionError](nowplaying/mediasessionerror.md): Errors that can occur during local session operations.

### Remote sessions

- [Publishing remote media sessions](nowplaying/publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](nowplaying/remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSession](nowplaying/remotemediasession.md): A session that manages remote media playback across devices.
- [RemoteMediaSessionExtension](nowplaying/remotemediasessionextension.md): An app extension that provides remote media sessions.
- [RemoteMediaSessionExtensionConfiguration](nowplaying/remotemediasessionextensionconfiguration.md): The configuration object for a remote playback extension.
- [RemoteMediaSessionAttributes](nowplaying/remotemediasessionattributes.md): A type that represents attributes for remote sessions.
- [RemoteMediaSessionError](nowplaying/remotemediasessionerror.md): Errors that can occur during remote session operations.
- [MediaDevice](nowplaying/mediadevice.md): A device that plays media in a remote session.

### Playback

- [MediaPlaybackSnapshot](nowplaying/mediaplaybacksnapshot.md): A snapshot of playback state and timing for a Now Playing session.
- [Content types and metadata](nowplaying/content-types-and-metadata.md): Describe the media your app is playing.
- [Playback commands](nowplaying/playback-commands.md): Declare the playback controls your app supports.
