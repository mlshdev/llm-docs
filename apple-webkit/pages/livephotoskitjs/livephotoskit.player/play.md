> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/livephotoskitjs/livephotoskit.player/play](https://developer.apple.com/documentation/livephotoskitjs/livephotoskit.player/play)

# play

**Interface language:** Data

**Framework:** LivePhotosKit JS  
**Kind:** Instance Method  
**Availability:** LivePhotosKit JS 1.0+

Starts playback if the player is ready, or resumes playback if the player is paused.

## Declaration

```
Boolean play();
```

<a id="return-value"></a>

## Return Value

`true` if the player starts or resumes playback; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If the playback completes, this method fires the `ended` event. If the playback is paused (and not resumed) or stopped, the `ended` event is not fired.

## See Also

### Instance Methods

- [beginFinishingPlaybackEarly](beginfinishingplaybackearly.md): Clips the duration of the renderer early so that the animation begins to fade back to the photo component earlier than it would ordinarily.
- [pause](pause.md): Pauses playback at the current time.
- [stop](stop.md): Stops playback and rewinds to the current time of zero.
- [toggle](toggle.md): Starts playing the video component of Live Photo if the video is paused, or pauses the video if it is playing.
- [updateSize](updatesize.md): Updates the size of the player.
