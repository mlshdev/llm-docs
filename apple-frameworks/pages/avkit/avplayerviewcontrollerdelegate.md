> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate

# AVPlayerViewControllerDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A protocol that defines the methods to implement to respond to player view controller events.

## Declaration

```swift
protocol AVPlayerViewControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Adopting Picture in Picture in a standard player](adopting-picture-in-picture-in-a-standard-player.md)
- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md)
- [Working with interstitial content](working-with-interstitial-content.md)

## Topics

### Dismissing the player view controller

- [playerViewControllerShouldDismiss(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerWillBeginDismissalTransition(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
- [playerViewControllerDidEndDismissalTransition(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.

### Responding to Picture in Picture life cycle events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController(\_:failedToStartPictureInPictureWithError:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

### Responding to navigation events

- [playerViewController(\_:timeToSeekAfterUserNavigatedFrom:to:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [playerViewController(\_:willResumePlaybackAfterUserNavigatedFrom:to:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToPreviousItem(for:)](avplayerviewcontrollerdelegate/skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItem(for:)](avplayerviewcontrollerdelegate/skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

### Responding to interstitial content playback events

- [playerViewController(\_:willPresent:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willpresent_%29.md): Tells the delegate when the player view controller is about to start playing a range of interstitial content.
- [playerViewController(\_:didPresent:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didpresent_%29.md): Tells the delegate when the player view controller finishes playing a range of interstitial content.

### Responding to content proposals

- [playerViewController(\_:shouldPresent:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController(\_:didAccept:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
- [playerViewController(\_:didReject:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.

### Responding to media selection

- [playerViewController(\_:didSelect:in:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didselect_in_%29.md): Tells the delegate when the user selects a media option from a media selection group.

### Responding to transport bar changes

- [playerViewController(\_:willTransitionToVisibilityOfTransportBar:with:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willtransitiontovisibilityoftransportbar_with_%29.md): Tells the delegate when the transport bar’s visibility is about to change.
- [AVPlayerViewControllerAnimationCoordinator](avplayerviewcontrolleranimationcoordinator.md): A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

### Responding to channel changes

- [playerViewController(\_:skipToNextChannel:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController(\_:skipToPreviousChannel:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [nextChannelInterstitialViewController(for:)](avplayerviewcontrollerdelegate/nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
- [previousChannelInterstitialViewController(for:)](avplayerviewcontrollerdelegate/previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

### Responding to full-screen presentations

- [playerViewController(\_:willBeginFullScreenPresentationWithAnimationCoordinator:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController(\_:willEndFullScreenPresentationWithAnimationCoordinator:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
- [playerViewController(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Standard player interfaces

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [Customizing the tvOS playback experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerView](avplayerview.md): A view that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewDelegate](avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.
- [VideoPlayer](videoplayer.md): A view that displays content from a player and a native user interface to control playback.

# AVPlayerViewControllerDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A protocol that defines the methods to implement to respond to player view controller events.

## Declaration

```objectivec
@protocol AVPlayerViewControllerDelegate <NSObject>
```

## Mentioned In

- [Adopting Picture in Picture in a standard player](adopting-picture-in-picture-in-a-standard-player.md)
- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md)
- [Working with interstitial content](working-with-interstitial-content.md)

## Topics

### Dismissing the player view controller

- [playerViewControllerShouldDismiss:](avplayerviewcontrollerdelegate/playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerWillBeginDismissalTransition:](avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
- [playerViewControllerDidEndDismissalTransition:](avplayerviewcontrollerdelegate/playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.

### Responding to Picture in Picture life cycle events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:](avplayerviewcontrollerdelegate/playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController:failedToStartPictureInPictureWithError:](avplayerviewcontrollerdelegate/playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

### Responding to navigation events

- [playerViewController:timeToSeekAfterUserNavigatedFromTime:toTime:](avplayerviewcontrollerdelegate/playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [playerViewController:willResumePlaybackAfterUserNavigatedFromTime:toTime:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToPreviousItemForPlayerViewController:](avplayerviewcontrollerdelegate/skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItemForPlayerViewController:](avplayerviewcontrollerdelegate/skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

### Responding to interstitial content playback events

- [playerViewController:willPresentInterstitialTimeRange:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willpresent_%29.md): Tells the delegate when the player view controller is about to start playing a range of interstitial content.
- [playerViewController:didPresentInterstitialTimeRange:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didpresent_%29.md): Tells the delegate when the player view controller finishes playing a range of interstitial content.

### Responding to content proposals

- [playerViewController:shouldPresentContentProposal:](avplayerviewcontrollerdelegate/playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController:didAcceptContentProposal:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
- [playerViewController:didRejectContentProposal:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.

### Responding to media selection

- [playerViewController:didSelectMediaSelectionOption:inMediaSelectionGroup:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didselect_in_%29.md): Tells the delegate when the user selects a media option from a media selection group.
- [playerViewController:didSelectExternalSubtitleOptionLanguage:](avplayerviewcontrollerdelegate/playerviewcontroller_didselectexternalsubtitleoptionlanguage_.md): Tells the delegate when the user selects a specific subtitle option.

### Responding to transport bar changes

- [playerViewController:willTransitionToVisibilityOfTransportBar:withAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willtransitiontovisibilityoftransportbar_with_%29.md): Tells the delegate when the transport bar’s visibility is about to change.
- [AVPlayerViewControllerAnimationCoordinator](avplayerviewcontrolleranimationcoordinator.md): A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

### Responding to channel changes

- [playerViewController:skipToNextChannel:](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController:skipToPreviousChannel:](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [nextChannelInterstitialViewControllerForPlayerViewController:](avplayerviewcontrollerdelegate/nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
- [previousChannelInterstitialViewControllerForPlayerViewController:](avplayerviewcontrollerdelegate/previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

### Responding to full-screen presentations

- [playerViewController:willBeginFullScreenPresentationWithAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController:willEndFullScreenPresentationWithAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
- [playerViewController:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Standard player interfaces

- [Customizing the tvOS playback experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerView](avplayerview.md): A view that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewDelegate](avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.
