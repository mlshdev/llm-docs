> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter)

# MPRemoteCommandCenter (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to remote control events sent by external accessories and system controls.

## Declaration

```swift
class MPRemoteCommandCenter
```

## Mentioned In

- [Handling external player events notifications](handling-external-player-events-notifications.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. Instead, use the [shared()](mpremotecommandcenter/shared%28%29.md) method to retrieve the shared command center object. The properties of the shared command center object contain [MPRemoteCommand](mpremotecommand.md) objects that respond to the various kinds of remote control events. You configure these objects to respond to the events you’re interested to handle in your app.

## Topics

### Retrieving the shared instance

- [shared()](mpremotecommandcenter/shared%28%29.md): Returns the shared object you use to access the system’s remote command objects.

### Playback commands

- [pauseCommand](mpremotecommandcenter/pausecommand.md): The command object for pausing playback of the current item.
- [playCommand](mpremotecommandcenter/playcommand.md): The command object for starting playback of the current item.
- [stopCommand](mpremotecommandcenter/stopcommand.md): The command object for stopping playback of the current item.
- [togglePlayPauseCommand](mpremotecommandcenter/toggleplaypausecommand.md): The command object for toggling between playing and pausing the current item.

### Navigating between tracks

- [nextTrackCommand](mpremotecommandcenter/nexttrackcommand.md): The command object for selecting the next track.
- [previousTrackCommand](mpremotecommandcenter/previoustrackcommand.md): The command object for selecting the previous track.
- [changeRepeatModeCommand](mpremotecommandcenter/changerepeatmodecommand.md): The command object for changing the repeat mode.
- [changeShuffleModeCommand](mpremotecommandcenter/changeshufflemodecommand.md): The command object for changing the shuffle mode.

### Navigating a track’s contents

- [changePlaybackRateCommand](mpremotecommandcenter/changeplaybackratecommand.md): The command object for changing the playback rate of the current media item.
- [seekBackwardCommand](mpremotecommandcenter/seekbackwardcommand.md): The command object for seeking backward through a single media item.
- [seekForwardCommand](mpremotecommandcenter/seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipBackwardCommand](mpremotecommandcenter/skipbackwardcommand.md): The command object for playing a previous point in a media item.
- [skipForwardCommand](mpremotecommandcenter/skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](mpremotecommandcenter/changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

### Rating a media item

- [ratingCommand](mpremotecommandcenter/ratingcommand.md): The command object for rating a media item.
- [likeCommand](mpremotecommandcenter/likecommand.md): The command object for indicating that a user likes what is currently playing.
- [dislikeCommand](mpremotecommandcenter/dislikecommand.md): The command object for indicating that a user dislikes what is currently playing.

### Bookmarking a media item

- [bookmarkCommand](mpremotecommandcenter/bookmarkcommand.md): The command object for indicating that a user wants to remember a media item.

### Enabling language options

- [enableLanguageOptionCommand](mpremotecommandcenter/enablelanguageoptioncommand.md): The command object for enabling a language option.
- [disableLanguageOptionCommand](mpremotecommandcenter/disablelanguageoptioncommand.md): The command object for disabling a language option

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting up the remote event handler

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPRemoteCommand](mpremotecommand.md): An object that responds to remote command events.
- [MPRemoteCommandEvent](mpremotecommandevent.md): A description of a command sent by an external media player.

# MPRemoteCommandCenter (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to remote control events sent by external accessories and system controls.

## Declaration

```objectivec
@interface MPRemoteCommandCenter : NSObject
```

## Mentioned In

- [Handling external player events notifications](handling-external-player-events-notifications.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. Instead, use the [sharedCommandCenter](mpremotecommandcenter/shared%28%29.md) method to retrieve the shared command center object. The properties of the shared command center object contain [MPRemoteCommand](mpremotecommand.md) objects that respond to the various kinds of remote control events. You configure these objects to respond to the events you’re interested to handle in your app.

## Topics

### Retrieving the shared instance

- [sharedCommandCenter](mpremotecommandcenter/shared%28%29.md): Returns the shared object you use to access the system’s remote command objects.

### Playback commands

- [pauseCommand](mpremotecommandcenter/pausecommand.md): The command object for pausing playback of the current item.
- [playCommand](mpremotecommandcenter/playcommand.md): The command object for starting playback of the current item.
- [stopCommand](mpremotecommandcenter/stopcommand.md): The command object for stopping playback of the current item.
- [togglePlayPauseCommand](mpremotecommandcenter/toggleplaypausecommand.md): The command object for toggling between playing and pausing the current item.

### Navigating between tracks

- [nextTrackCommand](mpremotecommandcenter/nexttrackcommand.md): The command object for selecting the next track.
- [previousTrackCommand](mpremotecommandcenter/previoustrackcommand.md): The command object for selecting the previous track.
- [changeRepeatModeCommand](mpremotecommandcenter/changerepeatmodecommand.md): The command object for changing the repeat mode.
- [changeShuffleModeCommand](mpremotecommandcenter/changeshufflemodecommand.md): The command object for changing the shuffle mode.

### Navigating a track’s contents

- [changePlaybackRateCommand](mpremotecommandcenter/changeplaybackratecommand.md): The command object for changing the playback rate of the current media item.
- [seekBackwardCommand](mpremotecommandcenter/seekbackwardcommand.md): The command object for seeking backward through a single media item.
- [seekForwardCommand](mpremotecommandcenter/seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipBackwardCommand](mpremotecommandcenter/skipbackwardcommand.md): The command object for playing a previous point in a media item.
- [skipForwardCommand](mpremotecommandcenter/skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](mpremotecommandcenter/changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

### Rating a media item

- [ratingCommand](mpremotecommandcenter/ratingcommand.md): The command object for rating a media item.
- [likeCommand](mpremotecommandcenter/likecommand.md): The command object for indicating that a user likes what is currently playing.
- [dislikeCommand](mpremotecommandcenter/dislikecommand.md): The command object for indicating that a user dislikes what is currently playing.

### Bookmarking a media item

- [bookmarkCommand](mpremotecommandcenter/bookmarkcommand.md): The command object for indicating that a user wants to remember a media item.

### Enabling language options

- [enableLanguageOptionCommand](mpremotecommandcenter/enablelanguageoptioncommand.md): The command object for enabling a language option.
- [disableLanguageOptionCommand](mpremotecommandcenter/disablelanguageoptioncommand.md): The command object for disabling a language option

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Setting up the remote event handler

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPRemoteCommand](mpremotecommand.md): An object that responds to remote command events.
- [MPRemoteCommandEvent](mpremotecommandevent.md): A description of a command sent by an external media player.
