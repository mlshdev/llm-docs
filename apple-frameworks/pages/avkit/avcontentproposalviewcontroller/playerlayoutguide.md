> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposalviewcontroller/playerlayoutguide](https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller/playerlayoutguide)

# playerLayoutGuide (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A layout guide that tracks the size and location of the player view.

## Declaration

```swift
var playerLayoutGuide: UILayoutGuide { get }
```

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

The view controller can constrain its views using the anchors of the player layout guide, which has the same size and position as the player view. The layout guide is always relative to the current [preferredPlayerViewFrame](preferredplayerviewframe.md) property value.

## See Also

### Configuring the Proposal

- [contentProposal](contentproposal.md): A prosal of content to play.
- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [preferredPlayerViewFrame](preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.

# playerLayoutGuide (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A layout guide that tracks the size and location of the player view.

## Declaration

```objectivec
@property (nonatomic, readonly) UILayoutGuide * playerLayoutGuide;
```

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

The view controller can constrain its views using the anchors of the player layout guide, which has the same size and position as the player view. The layout guide is always relative to the current [preferredPlayerViewFrame](preferredplayerviewframe.md) property value.

## See Also

### Configuring the Proposal

- [contentProposal](contentproposal.md): A prosal of content to play.
- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [preferredPlayerViewFrame](preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.
