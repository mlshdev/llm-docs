> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/skiptopreviousitem(for:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/skiptopreviousitem(for:))

# skipToPreviousItem(for:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user requests skipping to the previous item in the timeline.

## Declaration

```swift
optional func skipToPreviousItem(for playerViewController: AVPlayerViewController)
```

## Parameters

- `playerViewController`: The player view controller.

<a id="Discussion"></a>

## Discussion

The framework calls this method when you set the player view controller’s skipping behavior to [AVPlayerViewControllerSkippingBehavior.skipItem](../avplayerviewcontrollerskippingbehavior/skipitem.md) and a user performs a backward skip gesture (by pressing the left side of the Siri Remote’s Touch surface). Implement this method to update the player view controller’s [player](../avplayerviewcontroller/player.md) to play the previous player item.

## See Also

### Responding to Navigation Events

- [playerViewController(\_:timeToSeekAfterUserNavigatedFrom:to:)](playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [playerViewController(\_:willResumePlaybackAfterUserNavigatedFrom:to:)](playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToNextItem(for:)](skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

# skipToPreviousItemForPlayerViewController: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user requests skipping to the previous item in the timeline.

## Declaration

```objectivec
- (void) skipToPreviousItemForPlayerViewController:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

<a id="Discussion"></a>

## Discussion

The framework calls this method when you set the player view controller’s skipping behavior to [AVPlayerViewControllerSkippingBehaviorSkipItem](../avplayerviewcontrollerskippingbehavior/skipitem.md) and a user performs a backward skip gesture (by pressing the left side of the Siri Remote’s Touch surface). Implement this method to update the player view controller’s [player](../avplayerviewcontroller/player.md) to play the previous player item.

## See Also

### Responding to Navigation Events

- [playerViewController:timeToSeekAfterUserNavigatedFromTime:toTime:](playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [playerViewController:willResumePlaybackAfterUserNavigatedFromTime:toTime:](playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToNextItemForPlayerViewController:](skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.
