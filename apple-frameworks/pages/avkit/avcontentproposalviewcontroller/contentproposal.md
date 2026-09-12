> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposalviewcontroller/contentproposal](https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller/contentproposal)

# contentProposal (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A prosal of content to play.

## Declaration

```swift
var contentProposal: AVContentProposal? { get }
```

<a id="Discussion"></a>

## Discussion

The associated player view controller sets this property value.

## See Also

### Configuring the Proposal

- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [playerLayoutGuide](playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
- [preferredPlayerViewFrame](preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.

# contentProposal (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A prosal of content to play.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVContentProposal * contentProposal;
```

<a id="Discussion"></a>

## Discussion

The associated player view controller sets this property value.

## See Also

### Configuring the Proposal

- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [playerLayoutGuide](playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
- [preferredPlayerViewFrame](preferredplayerviewframe.md): The preferred presentation frame of the player view while the content proposal is active.
