> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayernowplayingmoviedidchangenotification](https://developer.apple.com/documentation/mediaplayer/mpmovieplayernowplayingmoviedidchangenotification)

# MPMoviePlayerNowPlayingMovieDidChangeNotification

**Interface language:** Objective-C

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Posted when the currently playing movie has changed. There is no `userInfo` dictionary.

## Declaration

```objectivec
extern NSString * const MPMoviePlayerNowPlayingMovieDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

To retrieve the URL for currently playing movie, access the movie player’s [contentURL](mpmovieplayercontroller/contenturl.md) property. The movie player whose state has changed is available as the object associated with the notification.

## See Also

### Notifications

- [MPMoviePlayerDidEnterFullscreenNotification](mpmovieplayerdidenterfullscreennotification.md): Deprecated. Posted when a movie player has entered full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerDidExitFullscreenNotification](mpmovieplayerdidexitfullscreennotification.md): Deprecated. Posted when a movie player has exited full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerIsAirPlayVideoActiveDidChangeNotification](mpmovieplayerisairplayvideoactivedidchangenotification.md): Deprecated. Posted when a movie player has started or ended playing a movie via AirPlay. There is no `userInfo` dictionary.
- [MPMoviePlayerLoadStateDidChangeNotification](mpmovieplayerloadstatedidchangenotification.md): Deprecated. Posted when a movie player’s network buffering state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerPlaybackDidFinishNotification](mpmovieplayerplaybackdidfinishnotification.md): Deprecated. Posted when a movie has finished playing. The `userInfo` dictionary of this notification contains the [MPMoviePlayerPlaybackDidFinishReasonUserInfoKey](mpmovieplayerplaybackdidfinishreasonuserinfokey.md) key, which indicates the reason that playback finished. This notification is also sent when playback fails because of an error.
- [MPMoviePlayerPlaybackStateDidChangeNotification](mpmovieplayerplaybackstatedidchangenotification.md): Deprecated. Posted when a movie player’s playback state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerReadyForDisplayDidChangeNotification](mpmovieplayerreadyfordisplaydidchangenotification.md): Deprecated. Posted when the ready for display state changes.
- [MPMoviePlayerScalingModeDidChangeNotification](mpmovieplayerscalingmodedidchangenotification.md): Deprecated. Posted when the scaling mode of a movie player has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerThumbnailImageRequestDidFinishNotification](mpmovieplayerthumbnailimagerequestdidfinishnotification.md): Deprecated. Posted when a request to capture a thumbnail from a movie has finished whether the request succeeded or failed. Upon successful capture of a thumbnail, the `userInfo` dictionary contains values for the following keys:
- [MPMoviePlayerTimedMetadataUpdatedNotification](mpmovieplayertimedmetadataupdatednotification.md): Deprecated. Posted when new timed metadata arrives.
- [MPMoviePlayerWillEnterFullscreenNotification](mpmovieplayerwillenterfullscreennotification.md): Deprecated. Posted when a movie player is about to enter full-screen mode.
- [MPMoviePlayerWillExitFullscreenNotification](mpmovieplayerwillexitfullscreennotification.md): Deprecated. Posted when a movie player is about to exit full-screen mode.
- [MPMovieDurationAvailableNotification](mpmoviedurationavailablenotification.md): Deprecated. Posted when the duration of a movie has been determined. There is no `userInfo` dictionary.
- [MPMovieMediaTypesAvailableNotification](mpmoviemediatypesavailablenotification.md): Deprecated. Posted when the available media types in a movie are determined. There is no `userInfo` dictionary.
- [MPMovieNaturalSizeAvailableNotification](mpmovienaturalsizeavailablenotification.md): Deprecated. Posted when the natural frame size of a movie is first determined or subsequently changes. There is no `userInfo` dictionary.
