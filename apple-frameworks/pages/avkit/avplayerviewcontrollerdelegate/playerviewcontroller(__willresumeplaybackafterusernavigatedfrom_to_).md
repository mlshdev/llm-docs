> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willresumeplaybackafterusernavigatedfrom:to:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willresumeplaybackafterusernavigatedfrom:to:))

# playerViewController(\_:willResumePlaybackAfterUserNavigatedFrom:to:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Tells the delegate when the user navigates to a new time and playback is about to begin.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, willResumePlaybackAfterUserNavigatedFrom oldTime: CMTime, to targetTime: CMTime)
```

## Parameters

- `playerViewController`: The player view controller.
- `oldTime`: The current playback time before the user began navigating.
- `targetTime`: The new time where playback is about to resume.

<a id="Discussion"></a>

## Discussion

Unlike the [timeJumpedNotification](../../avfoundation/avplayeritem/timejumpednotification.md) notification, this method fires only for complete, user-initiated navigation events. For example, if the user begins scrubbing through the media timeline and pauses several times before resuming playback, the player view controller calls this method only once.

You can use this method to present interstitial content before resuming playback, however, it’s recommended to use [playerViewController(\_:timeToSeekAfterUserNavigatedFrom:to:)](playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md) for this purpose.

## See Also

### Responding to Navigation Events

- [playerViewController(\_:timeToSeekAfterUserNavigatedFrom:to:)](playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [skipToPreviousItem(for:)](skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItem(for:)](skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

# playerViewController:willResumePlaybackAfterUserNavigatedFromTime:toTime: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Tells the delegate when the user navigates to a new time and playback is about to begin.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController willResumePlaybackAfterUserNavigatedFromTime:(CMTime) oldTime toTime:(CMTime) targetTime;
```

## Parameters

- `playerViewController`: The player view controller.
- `oldTime`: The current playback time before the user began navigating.
- `targetTime`: The new time where playback is about to resume.

<a id="Discussion"></a>

## Discussion

Unlike the [AVPlayerItemTimeJumpedNotification](../../avfoundation/avplayeritem/timejumpednotification.md) notification, this method fires only for complete, user-initiated navigation events. For example, if the user begins scrubbing through the media timeline and pauses several times before resuming playback, the player view controller calls this method only once.

You can use this method to present interstitial content before resuming playback, however, it’s recommended to use [playerViewController:timeToSeekAfterUserNavigatedFromTime:toTime:](playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md) for this purpose.

## See Also

### Responding to Navigation Events

- [playerViewController:timeToSeekAfterUserNavigatedFromTime:toTime:](playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [skipToPreviousItemForPlayerViewController:](skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItemForPlayerViewController:](skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.
