> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:timetoseekafterusernavigatedfrom:to:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:timetoseekafterusernavigatedfrom:to:))

# playerViewController(\_:timeToSeekAfterUserNavigatedFrom:to:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, timeToSeekAfterUserNavigatedFrom oldTime: CMTime, to targetTime: CMTime) -> CMTime
```

## Parameters

- `playerViewController`: The player view controller.
- `oldTime`: The current playback time before the user began navigating.
- `targetTime`: The time to which the user navigated.

<a id="return-value"></a>

## Return Value

The time at which to begin playback.

## Mentioned In

- [Working with Interstitial Content](../working-with-interstitial-content.md)

<a id="Discussion"></a>

## Discussion

The framework calls this method prior to beginning playback after a user-initiated scrubbing request. You can return a time value other than the specified target time if needed to enforce certain business rules. For instance, you may want to return a different time to prevent users from skipping past ad breaks in your program.

## See Also

### Responding to Navigation Events

- [playerViewController(\_:willResumePlaybackAfterUserNavigatedFrom:to:)](playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToPreviousItem(for:)](skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItem(for:)](skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

# playerViewController:timeToSeekAfterUserNavigatedFromTime:toTime: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.

## Declaration

```objectivec
- (CMTime) playerViewController:(AVPlayerViewController *) playerViewController timeToSeekAfterUserNavigatedFromTime:(CMTime) oldTime toTime:(CMTime) targetTime;
```

## Parameters

- `playerViewController`: The player view controller.
- `oldTime`: The current playback time before the user began navigating.
- `targetTime`: The time to which the user navigated.

<a id="return-value"></a>

## Return Value

The time at which to begin playback.

## Mentioned In

- [Working with Interstitial Content](../working-with-interstitial-content.md)

<a id="Discussion"></a>

## Discussion

The framework calls this method prior to beginning playback after a user-initiated scrubbing request. You can return a time value other than the specified target time if needed to enforce certain business rules. For instance, you may want to return a different time to prevent users from skipping past ad breaks in your program.

## See Also

### Responding to Navigation Events

- [playerViewController:willResumePlaybackAfterUserNavigatedFromTime:toTime:](playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToPreviousItemForPlayerViewController:](skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItemForPlayerViewController:](skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.
