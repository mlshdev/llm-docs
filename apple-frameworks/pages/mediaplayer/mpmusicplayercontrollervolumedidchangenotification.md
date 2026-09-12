> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontrollervolumedidchangenotification](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontrollervolumedidchangenotification)

# MPMusicPlayerControllerVolumeDidChangeNotification

**Interface language:** Objective-C

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Posted when the audio playback volume for the music player has changed.

## Declaration

```objectivec
extern NSNotificationName const MPMusicPlayerControllerVolumeDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The object associated with the notification is the music player whose playback volume changed. The notification has no `userInfo` dictionary.

## See Also

### Using music player notifications

- [beginGeneratingPlaybackNotifications](mpmusicplayercontroller/begingeneratingplaybacknotifications%28%29.md): Starts the generation of playback notifications.
- [endGeneratingPlaybackNotifications](mpmusicplayercontroller/endgeneratingplaybacknotifications%28%29.md): Ends the generation of playback notifications.
- [MPMusicPlayerControllerPlaybackStateDidChangeNotification](mpmusicplayercontrollerplaybackstatedidchangenotification.md): Posted when the playback state changes programmatically or by user action.
- [MPMusicPlayerControllerNowPlayingItemDidChangeNotification](mpmusicplayercontrollernowplayingitemdidchangenotification.md): Posted when the currently playing media item has changed.
