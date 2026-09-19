> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/working-with-overlays-and-parental-controls-in-tvos

# Working with overlays and parental controls in tvOS

**Interface languages:** Swift, Objective-C

**Framework:** AVKit  
**Kind:** Sample Code  
**Availability:** tvOS 13.0+ · Xcode 15.3+

Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC 2019 session [503: Delivering Intuitive Media Playback with AVKit](https://developer.apple.com/videos/play/wwdc19/503/).

<a id="Configure-the-sample-code-project"></a>

## Configure the sample code project

Only navigation from live streaming supports channel flipping, so you need to replace the assets in this sample with your live content to demonstrate this behavior.

By default, the sample demonstrates automatic support for parental controls. Activate parental restrictions by following the steps below:

1. Go to Settings \> General \> Restrictions.
2. Turn on Restrictions.
3. Set a passcode (1111 for demonstration purposes; remember this passcode).
4. Scroll down to the Allowed Content section.
5. Select Movies and/or TV Shows.
6. Set a restriction level (for example, PG or PG-13 if you are in the United States).

The first demo video has a rating of PG, and the second has a rating of PG-13. You can find or edit these ratings in `MainViewController.swift`.

This sample also demonstrates explicit support for parental restrictions by directly calling [`playerItem.requestPlaybackRestrictionsAuthorization(_ completion)`](../avfoundation/avplayeritem/requestplaybackrestrictionsauthorization%28__%29.md). You can test explicit support by changing the value of `checkParentalControlsExplicitly` in the sample.

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.
