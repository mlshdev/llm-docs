> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/endgeneratingplaybacknotifications()](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/endgeneratingplaybacknotifications())

# endGeneratingPlaybackNotifications() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Ends the generation of playback notifications.

## Declaration

```swift
func endGeneratingPlaybackNotifications()
```

## See Also

### Using music player notifications

- [beginGeneratingPlaybackNotifications()](begingeneratingplaybacknotifications%28%29.md): Starts the generation of playback notifications.

# endGeneratingPlaybackNotifications (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Ends the generation of playback notifications.

## Declaration

```objectivec
- (void) endGeneratingPlaybackNotifications;
```

## See Also

### Using music player notifications

- [beginGeneratingPlaybackNotifications](begingeneratingplaybacknotifications%28%29.md): Starts the generation of playback notifications.
- [MPMusicPlayerControllerPlaybackStateDidChangeNotification](../mpmusicplayercontrollerplaybackstatedidchangenotification.md): Posted when the playback state changes programmatically or by user action.
- [MPMusicPlayerControllerNowPlayingItemDidChangeNotification](../mpmusicplayercontrollernowplayingitemdidchangenotification.md): Posted when the currently playing media item has changed.
- [MPMusicPlayerControllerVolumeDidChangeNotification](../mpmusicplayercontrollervolumedidchangenotification.md): Posted when the audio playback volume for the music player has changed.
