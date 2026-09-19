> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/begingeneratingplaybacknotifications()

# beginGeneratingPlaybackNotifications() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Starts the generation of playback notifications.

## Declaration

```swift
func beginGeneratingPlaybackNotifications()
```

## See Also

### Using music player notifications

- [endGeneratingPlaybackNotifications()](endgeneratingplaybacknotifications%28%29.md): Ends the generation of playback notifications.

# beginGeneratingPlaybackNotifications (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Starts the generation of playback notifications.

## Declaration

```objectivec
- (void) beginGeneratingPlaybackNotifications;
```

## See Also

### Using music player notifications

- [endGeneratingPlaybackNotifications](endgeneratingplaybacknotifications%28%29.md): Ends the generation of playback notifications.
- [MPMusicPlayerControllerPlaybackStateDidChangeNotification](../mpmusicplayercontrollerplaybackstatedidchangenotification.md): Posted when the playback state changes programmatically or by user action.
- [MPMusicPlayerControllerNowPlayingItemDidChangeNotification](../mpmusicplayercontrollernowplayingitemdidchangenotification.md): Posted when the currently playing media item has changed.
- [MPMusicPlayerControllerVolumeDidChangeNotification](../mpmusicplayercontrollervolumedidchangenotification.md): Posted when the audio playback volume for the music player has changed.
