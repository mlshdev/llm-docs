> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller)

# MPMusicPlayerController (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An object that plays audio media items from the device’s Music app library.

## Declaration

```swift
class MPMusicPlayerController
```

## Mentioned In

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md)

<a id="overview"></a>

## Overview

Create an instance of a music player to play media items in your app. There are two types of music players:

- An *application music player* plays music locally within your app. It isn’t aware of the Music app’s Now Playing item, nor does it affect the Music app’s state. There are two application music players: [applicationMusicPlayer](mpmusicplayercontroller/applicationmusicplayer.md) and [applicationQueuePlayer](mpmusicplayercontroller/applicationqueueplayer.md). The application queue player provides greater control over the contents of the queue and is the preferred player.
- The *system music player* employs the built-in Music app on your behalf. On instantiation, it takes on the current Music app state, such as the identification of the Now Playing item. If a user switches away from your app while music is playing, that music continues to play. The Music app then has your music player’s most recently-set repeat mode, shuffle mode, playback state, and Now Playing item.

Creating a new instance of `MPMusicPlayerController` and not specifying the player type returns a system music player.

> **Important**

>  Only use a music player on the app’s main thread.

<a id="Accessing-limited-playback-information-while-using-Home-Sharing"></a>

### Accessing limited playback information while using Home Sharing

The built-in Music and Videos apps can play media from shared libraries using Home Sharing. However, third-party apps using the Media Player framework only have access to the device music library. This means that your app can’t display the title of a home-shared song in your user interface. Specifically, if the Music app is playing a home-shared song, and you’re using a system music player, the value of the [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md) property of your music player is [nil](../objectivec/nil-227m0.md). However, other playback information is available when playing shared media. For example, the framework updates the value of the [playbackState](mpmusicplayercontroller/playbackstate.md) property when the system music player plays a home-shared item.

<a id="Choosing-how-the-system-handles-remote-control-events"></a>

### Choosing how the system handles remote control events

Users can initiate audio playback commands through an external headset or accessory.

- If you use an *application music player*, the system sends these commands as remote control events to your app, but you don’t provide code to handle them. The framework receives and handles the remote control events.
- If you use the *system music player*, your app uses the Music app to play audio, which means that the Music app is the Now Playing app. The Music app receives and handles the remote control events. For example, if your app plays audio using the system music player, and the user switches from your app to the iOS device’s Now Playing controls, the controls work as expected. That is, they can play or pause audio, or skip to the next and previous items.

## Topics

### Getting a music player

- [applicationMusicPlayer](mpmusicplayercontroller/applicationmusicplayer.md): Returns the application music player.
- [applicationQueuePlayer](mpmusicplayercontroller/applicationqueueplayer.md): Returns the application queue music player.
- [systemMusicPlayer](mpmusicplayercontroller/systemmusicplayer.md): Returns the system music player, which controls the Music app’s state.

### Setting up a playback queue

Before a music player can produce sound, it needs a playback queue. You provide the music player with its playback queue, which specifies the media items to play.

- [setQueue(with:)](mpmusicplayercontroller/setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueue(with:)](mpmusicplayercontroller/setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueue(with:)](mpmusicplayercontroller/setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
- [setQueue(with:)](mpmusicplayercontroller/setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.

### Playing a media item

- [prepareToPlay(completionHandler:)](mpmusicplayercontroller/preparetoplay%28completionhandler_%29.md): Prepares a music player for playback.

### Managing playback mode and state

- [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](mpmusicplayercontroller/indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](mpmusicplayercontroller/playbackstate.md): The current playback state of the music player.
- [repeatMode](mpmusicplayercontroller/repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](mpmusicplayercontroller/shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

### Controlling playback

- [skipToNextItem()](mpmusicplayercontroller/skiptonextitem%28%29.md): Starts playback of the next media item in the playback queue, or if the music player isn’t playing, designates the next media item as the next item to play.
- [skipToBeginning()](mpmusicplayercontroller/skiptobeginning%28%29.md): Restarts playback at the beginning of the currently playing media item.
- [skipToPreviousItem()](mpmusicplayercontroller/skiptopreviousitem%28%29.md): Starts playback of the previous media item in the playback queue, or if the music player isn’t playing, designates the previous media item as the next to play.
- [append(\_:)](mpmusicplayercontroller/append%28__%29.md): Inserts the media items defined by the queue descriptor after the last media item in the current queue.
- [prepend(\_:)](mpmusicplayercontroller/prepend%28__%29.md): Inserts the media items defined by the queue descriptor into the current queue immediately after the currently playing media item.

### Using music player notifications

These methods control the posting of playback notifications. You can nest calls to start or end these notifications.

- [beginGeneratingPlaybackNotifications()](mpmusicplayercontroller/begingeneratingplaybacknotifications%28%29.md): Starts the generation of playback notifications.
- [endGeneratingPlaybackNotifications()](mpmusicplayercontroller/endgeneratingplaybacknotifications%28%29.md): Ends the generation of playback notifications.

### Type Properties

- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPMediaPlayback](mpmediaplayback.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Built-in music playback

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md): Create a media player inside your app to play audio from the user’s media library.
- [MPMediaPlayback](mpmediaplayback.md): A protocol that defines the interface for controlling audio media playback.
- [MPSystemMusicPlayerController](mpsystemmusicplayercontroller.md): A protocol for playing videos in the Music app.

# MPMusicPlayerController (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An object that plays audio media items from the device’s Music app library.

## Declaration

```objectivec
@interface MPMusicPlayerController : NSObject
```

## Mentioned In

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md)

<a id="overview"></a>

## Overview

Create an instance of a music player to play media items in your app. There are two types of music players:

- An *application music player* plays music locally within your app. It isn’t aware of the Music app’s Now Playing item, nor does it affect the Music app’s state. There are two application music players: [applicationMusicPlayer](mpmusicplayercontroller/applicationmusicplayer.md) and [applicationQueuePlayer](mpmusicplayercontroller/applicationqueueplayer.md). The application queue player provides greater control over the contents of the queue and is the preferred player.
- The *system music player* employs the built-in Music app on your behalf. On instantiation, it takes on the current Music app state, such as the identification of the Now Playing item. If a user switches away from your app while music is playing, that music continues to play. The Music app then has your music player’s most recently-set repeat mode, shuffle mode, playback state, and Now Playing item.

Creating a new instance of `MPMusicPlayerController` and not specifying the player type returns a system music player.

> **Important**

>  Only use a music player on the app’s main thread.

<a id="Accessing-limited-playback-information-while-using-Home-Sharing"></a>

### Accessing limited playback information while using Home Sharing

The built-in Music and Videos apps can play media from shared libraries using Home Sharing. However, third-party apps using the Media Player framework only have access to the device music library. This means that your app can’t display the title of a home-shared song in your user interface. Specifically, if the Music app is playing a home-shared song, and you’re using a system music player, the value of the [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md) property of your music player is [nil](../objectivec/nil-227m0.md). However, other playback information is available when playing shared media. For example, the framework updates the value of the [playbackState](mpmusicplayercontroller/playbackstate.md) property when the system music player plays a home-shared item.

<a id="Choosing-how-the-system-handles-remote-control-events"></a>

### Choosing how the system handles remote control events

Users can initiate audio playback commands through an external headset or accessory.

- If you use an *application music player*, the system sends these commands as remote control events to your app, but you don’t provide code to handle them. The framework receives and handles the remote control events.
- If you use the *system music player*, your app uses the Music app to play audio, which means that the Music app is the Now Playing app. The Music app receives and handles the remote control events. For example, if your app plays audio using the system music player, and the user switches from your app to the iOS device’s Now Playing controls, the controls work as expected. That is, they can play or pause audio, or skip to the next and previous items.

## Topics

### Getting a music player

- [applicationMusicPlayer](mpmusicplayercontroller/applicationmusicplayer.md): Returns the application music player.
- [applicationQueuePlayer](mpmusicplayercontroller/applicationqueueplayer.md): Returns the application queue music player.
- [systemMusicPlayer](mpmusicplayercontroller/systemmusicplayer.md): Returns the system music player, which controls the Music app’s state.

### Setting up a playback queue

Before a music player can produce sound, it needs a playback queue. You provide the music player with its playback queue, which specifies the media items to play.

- [setQueueWithQuery:](mpmusicplayercontroller/setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueueWithItemCollection:](mpmusicplayercontroller/setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueueWithStoreIDs:](mpmusicplayercontroller/setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
- [setQueueWithDescriptor:](mpmusicplayercontroller/setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.

### Playing a media item

- [prepareToPlayWithCompletionHandler:](mpmusicplayercontroller/preparetoplay%28completionhandler_%29.md): Prepares a music player for playback.

### Managing playback mode and state

- [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](mpmusicplayercontroller/indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](mpmusicplayercontroller/playbackstate.md): The current playback state of the music player.
- [repeatMode](mpmusicplayercontroller/repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](mpmusicplayercontroller/shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

### Controlling playback

- [skipToNextItem](mpmusicplayercontroller/skiptonextitem%28%29.md): Starts playback of the next media item in the playback queue, or if the music player isn’t playing, designates the next media item as the next item to play.
- [skipToBeginning](mpmusicplayercontroller/skiptobeginning%28%29.md): Restarts playback at the beginning of the currently playing media item.
- [skipToPreviousItem](mpmusicplayercontroller/skiptopreviousitem%28%29.md): Starts playback of the previous media item in the playback queue, or if the music player isn’t playing, designates the previous media item as the next to play.
- [appendQueueDescriptor:](mpmusicplayercontroller/append%28__%29.md): Inserts the media items defined by the queue descriptor after the last media item in the current queue.
- [prependQueueDescriptor:](mpmusicplayercontroller/prepend%28__%29.md): Inserts the media items defined by the queue descriptor into the current queue immediately after the currently playing media item.

### Using music player notifications

These methods control the posting of playback notifications. You can nest calls to start or end these notifications.

- [beginGeneratingPlaybackNotifications](mpmusicplayercontroller/begingeneratingplaybacknotifications%28%29.md): Starts the generation of playback notifications.
- [endGeneratingPlaybackNotifications](mpmusicplayercontroller/endgeneratingplaybacknotifications%28%29.md): Ends the generation of playback notifications.
- [MPMusicPlayerControllerPlaybackStateDidChangeNotification](mpmusicplayercontrollerplaybackstatedidchangenotification.md): Posted when the playback state changes programmatically or by user action.
- [MPMusicPlayerControllerNowPlayingItemDidChangeNotification](mpmusicplayercontrollernowplayingitemdidchangenotification.md): Posted when the currently playing media item has changed.
- [MPMusicPlayerControllerVolumeDidChangeNotification](mpmusicplayercontrollervolumedidchangenotification.md): Posted when the audio playback volume for the music player has changed.

### Type Properties

- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md)

### Conforms To

- [MPMediaPlayback](mpmediaplayback.md)

## See Also

### Built-in music playback

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md): Create a media player inside your app to play audio from the user’s media library.
- [MPMediaPlayback](mpmediaplayback.md): A protocol that defines the interface for controlling audio media playback.
- [MPSystemMusicPlayerController](mpsystemmusicplayercontroller.md): A protocol for playing videos in the Music app.
