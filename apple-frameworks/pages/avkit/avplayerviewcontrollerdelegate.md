> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate)

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

- [Adopting Picture in Picture in a Standard Player](adopting-picture-in-picture-in-a-standard-player.md)
- [Presenting Content Proposals in tvOS](presenting-content-proposals-in-tvos.md)
- [Working with Interstitial Content](working-with-interstitial-content.md)

## Topics

### Dismissing the Player View Controller

- [playerViewControllerShouldDismiss(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerWillBeginDismissalTransition(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
- [playerViewControllerDidEndDismissalTransition(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController(\_:failedToStartPictureInPictureWithError:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture(\_:)](avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

### Responding to Navigation Events

- [playerViewController(\_:timeToSeekAfterUserNavigatedFrom:to:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [playerViewController(\_:willResumePlaybackAfterUserNavigatedFrom:to:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToPreviousItem(for:)](avplayerviewcontrollerdelegate/skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItem(for:)](avplayerviewcontrollerdelegate/skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

### Responding to Interstitial Content Playback Events

- [playerViewController(\_:willPresent:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willpresent_%29.md): Tells the delegate when the player view controller is about to start playing a range of interstitial content.
- [playerViewController(\_:didPresent:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didpresent_%29.md): Tells the delegate when the player view controller finishes playing a range of interstitial content.

### Responding to Content Proposals

- [playerViewController(\_:shouldPresent:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController(\_:didAccept:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
- [playerViewController(\_:didReject:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.

### Responding to Media Selection

- [playerViewController(\_:didSelect:in:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__didselect_in_%29.md): Tells the delegate when the user selects a media option from a media selection group.

### Responding to Transport Bar Changes

- [playerViewController(\_:willTransitionToVisibilityOfTransportBar:with:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willtransitiontovisibilityoftransportbar_with_%29.md): Tells the delegate when the transport bar’s visibility is about to change.
- [AVPlayerViewControllerAnimationCoordinator](avplayerviewcontrolleranimationcoordinator.md): A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

### Responding to Channel Changes

- [playerViewController(\_:skipToNextChannel:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController(\_:skipToPreviousChannel:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [nextChannelInterstitialViewController(for:)](avplayerviewcontrollerdelegate/nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
- [previousChannelInterstitialViewController(for:)](avplayerviewcontrollerdelegate/previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

### Responding to Full-Screen Presentations

- [playerViewController(\_:willBeginFullScreenPresentationWithAnimationCoordinator:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController(\_:willEndFullScreenPresentationWithAnimationCoordinator:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
- [playerViewController(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### iOS playback and capture

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

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

- [Adopting Picture in Picture in a Standard Player](adopting-picture-in-picture-in-a-standard-player.md)
- [Presenting Content Proposals in tvOS](presenting-content-proposals-in-tvos.md)
- [Working with Interstitial Content](working-with-interstitial-content.md)

## Topics

### Dismissing the Player View Controller

- [playerViewControllerShouldDismiss:](avplayerviewcontrollerdelegate/playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerWillBeginDismissalTransition:](avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
- [playerViewControllerDidEndDismissalTransition:](avplayerviewcontrollerdelegate/playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:](avplayerviewcontrollerdelegate/playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController:failedToStartPictureInPictureWithError:](avplayerviewcontrollerdelegate/playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture:](avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

### Responding to Navigation Events

- [playerViewController:timeToSeekAfterUserNavigatedFromTime:toTime:](avplayerviewcontrollerdelegate/playerviewcontroller%28__timetoseekafterusernavigatedfrom_to_%29.md): Tells the delegate when the user skips, scrubs, or otherwise navigates to a new time and wants to resume playback at the target time.
- [playerViewController:willResumePlaybackAfterUserNavigatedFromTime:toTime:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willresumeplaybackafterusernavigatedfrom_to_%29.md): Tells the delegate when the user navigates to a new time and playback is about to begin.
- [skipToPreviousItemForPlayerViewController:](avplayerviewcontrollerdelegate/skiptopreviousitem%28for_%29.md): Tells the delegate when the user requests skipping to the previous item in the timeline.
- [skipToNextItemForPlayerViewController:](avplayerviewcontrollerdelegate/skiptonextitem%28for_%29.md): Tells the delegate when the user requests skipping to the next item in the timeline.

### Responding to Interstitial Content Playback Events

- [playerViewController:willPresentInterstitialTimeRange:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willpresent_%29.md): Tells the delegate when the player view controller is about to start playing a range of interstitial content.
- [playerViewController:didPresentInterstitialTimeRange:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didpresent_%29.md): Tells the delegate when the player view controller finishes playing a range of interstitial content.

### Responding to Content Proposals

- [playerViewController:shouldPresentContentProposal:](avplayerviewcontrollerdelegate/playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController:didAcceptContentProposal:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
- [playerViewController:didRejectContentProposal:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.

### Responding to Media Selection

- [playerViewController:didSelectMediaSelectionOption:inMediaSelectionGroup:](avplayerviewcontrollerdelegate/playerviewcontroller%28__didselect_in_%29.md): Tells the delegate when the user selects a media option from a media selection group.
- [playerViewController:didSelectExternalSubtitleOptionLanguage:](avplayerviewcontrollerdelegate/playerviewcontroller_didselectexternalsubtitleoptionlanguage_.md): Tells the delegate when the user selects a specific subtitle option.

### Responding to Transport Bar Changes

- [playerViewController:willTransitionToVisibilityOfTransportBar:withAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willtransitiontovisibilityoftransportbar_with_%29.md): Tells the delegate when the transport bar’s visibility is about to change.
- [AVPlayerViewControllerAnimationCoordinator](avplayerviewcontrolleranimationcoordinator.md): A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

### Responding to Channel Changes

- [playerViewController:skipToNextChannel:](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController:skipToPreviousChannel:](avplayerviewcontrollerdelegate/playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [nextChannelInterstitialViewControllerForPlayerViewController:](avplayerviewcontrollerdelegate/nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
- [previousChannelInterstitialViewControllerForPlayerViewController:](avplayerviewcontrollerdelegate/previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

### Responding to Full-Screen Presentations

- [playerViewController:willBeginFullScreenPresentationWithAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController:willEndFullScreenPresentationWithAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
- [playerViewController:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](avplayerviewcontrollerdelegate/playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### iOS playback and capture

- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
