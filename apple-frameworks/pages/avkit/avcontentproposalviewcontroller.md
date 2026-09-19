> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller

# AVContentProposalViewController (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 10.0+

A view controller that proposes content to watch next.

## Declaration

```swift
@MainActor class AVContentProposalViewController
```

## Mentioned In

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md)

<a id="overview"></a>

## Overview

Subclass this class to define the user interface for your content proposal.

## Topics

### Configuring the proposal

- [contentProposal](avcontentproposalviewcontroller/contentproposal.md): A prosal of content to play.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](avcontentproposalviewcontroller/dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [playerLayoutGuide](avcontentproposalviewcontroller/playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
- [preferredPlayerViewFrame](avcontentproposalviewcontroller/preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.

### Dismissing the proposal

- [dismissContentProposal(for:animated:completion:)](avcontentproposalviewcontroller/dismisscontentproposal%28for_animated_completion_%29.md): Dismisses the current content proposal.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.

### Accessing the player view controller

- [playerViewController](avcontentproposalviewcontroller/playerviewcontroller.md): The player view controller that presents a content proposal.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with overlays and parental controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.

# AVContentProposalViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 10.0+

A view controller that proposes content to watch next.

## Declaration

```objectivec
@interface AVContentProposalViewController : UIViewController
```

## Mentioned In

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md)

<a id="overview"></a>

## Overview

Subclass this class to define the user interface for your content proposal.

## Topics

### Configuring the proposal

- [contentProposal](avcontentproposalviewcontroller/contentproposal.md): A prosal of content to play.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](avcontentproposalviewcontroller/dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [playerLayoutGuide](avcontentproposalviewcontroller/playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
- [preferredPlayerViewFrame](avcontentproposalviewcontroller/preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.

### Dismissing the proposal

- [dismissContentProposalForAction:animated:completion:](avcontentproposalviewcontroller/dismisscontentproposal%28for_animated_completion_%29.md): Dismisses the current content proposal.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.

### Accessing the player view controller

- [playerViewController](avcontentproposalviewcontroller/playerviewcontroller.md): The player view controller that presents a content proposal.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with overlays and parental controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.
