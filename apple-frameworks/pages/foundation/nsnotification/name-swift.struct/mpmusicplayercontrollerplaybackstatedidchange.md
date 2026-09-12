> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/mpmusicplayercontrollerplaybackstatedidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/mpmusicplayercontrollerplaybackstatedidchange)

# MPMusicPlayerControllerPlaybackStateDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Posted when the playback state changes programmatically or by user action.

## Declaration

```swift
static let MPMusicPlayerControllerPlaybackStateDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object associated with the notification is the music player whose playback state changed. The notification has no `userInfo` dictionary.

## See Also

### MediaPlayer

- [MPMusicPlayerControllerQueueDidChange](mpmusicplayercontrollerqueuedidchange.md): Indicates the music player’s queue changed.
- [MPMediaLibraryDidChange](mpmedialibrarydidchange.md): Indicates the media library has changed.
- [MPMediaPlaybackIsPreparedToPlayDidChange](mpmediaplaybackispreparedtoplaydidchange.md): Deprecated. Indicates that the prepared to play status of the media player has changed.
- [MPMusicPlayerControllerNowPlayingItemDidChange](mpmusicplayercontrollernowplayingitemdidchange.md): Posted when the currently playing media item has changed.
- [MPMusicPlayerControllerVolumeDidChange](mpmusicplayercontrollervolumedidchange.md): Posted when the audio playback volume for the music player has changed.
- [MPMovieDurationAvailable](mpmoviedurationavailable.md): Deprecated. Posted when the duration of a movie has been determined. There is no `userInfo` dictionary.
- [MPMovieMediaTypesAvailable](mpmoviemediatypesavailable.md): Deprecated. Posted when the available media types in a movie are determined. There is no `userInfo` dictionary.
- [MPMovieNaturalSizeAvailable](mpmovienaturalsizeavailable.md): Deprecated. Posted when the natural frame size of a movie is first determined or subsequently changes. There is no `userInfo` dictionary.
- [MPMoviePlayerDidEnterFullscreen](mpmovieplayerdidenterfullscreen.md): Deprecated. Posted when a movie player has entered full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerDidExitFullscreen](mpmovieplayerdidexitfullscreen.md): Deprecated. Posted when a movie player has exited full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerIsAirPlayVideoActiveDidChange](mpmovieplayerisairplayvideoactivedidchange.md): Deprecated. Posted when a movie player has started or ended playing a movie via AirPlay. There is no `userInfo` dictionary.
- [MPMoviePlayerLoadStateDidChange](mpmovieplayerloadstatedidchange.md): Deprecated. Posted when a movie player’s network buffering state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerNowPlayingMovieDidChange](mpmovieplayernowplayingmoviedidchange.md): Deprecated. Posted when the currently playing movie has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerPlaybackDidFinish](mpmovieplayerplaybackdidfinish.md): Deprecated. Posted when a movie has finished playing.
- [MPMoviePlayerPlaybackStateDidChange](mpmovieplayerplaybackstatedidchange.md): Deprecated. Posted when a movie player’s playback state has changed. There is no `userInfo` dictionary.
