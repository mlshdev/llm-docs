> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller/dateofautomaticacceptance

# dateOfAutomaticAcceptance (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The date that the system automatically accepts a proposal if the user doesn’t intervene.

## Declaration

```swift
var dateOfAutomaticAcceptance: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The system schedules the proposal when you present it, and may unschedule it if the user cancels automatic acceptance, manually accepts, or otherwise dismisses the proposal.

Set this property to `nil` to cancel automatic acceptance.

## See Also

### Configuring the proposal

- [contentProposal](contentproposal.md): A prosal of content to play.
- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [playerLayoutGuide](playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
- [preferredPlayerViewFrame](preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.

# dateOfAutomaticAcceptance (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The date that the system automatically accepts a proposal if the user doesn’t intervene.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDate * dateOfAutomaticAcceptance;
```

<a id="Discussion"></a>

## Discussion

The system schedules the proposal when you present it, and may unschedule it if the user cancels automatic acceptance, manually accepts, or otherwise dismisses the proposal.

Set this property to `nil` to cancel automatic acceptance.

## See Also

### Configuring the proposal

- [contentProposal](contentproposal.md): A prosal of content to play.
- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [playerLayoutGuide](playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
- [preferredPlayerViewFrame](preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.
