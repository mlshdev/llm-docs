> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposalviewcontroller/preferredplayerviewframe](https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller/preferredplayerviewframe)

# preferredPlayerViewFrame (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The preferred presentation frame of the player view while the content proposal is active.

## Declaration

```swift
var preferredPlayerViewFrame: CGRect { get }
```

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

This value defaults to a rectangle that represents the entire screen bounds, but custom view controllers may return a smaller rectangle, or [zero](../../corefoundation/cgrect/zero.md) to hide the player view completely. If you return a rectangle smaller that the full-screen bounds, the player view animates its frame to its new size and position.

## See Also

### Configuring the Proposal

- [contentProposal](contentproposal.md): A prosal of content to play.
- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [playerLayoutGuide](playerlayoutguide.md): A layout guide that tracks the size and location of the player view.

# preferredPlayerViewFrame (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The preferred presentation frame of the player view while the content proposal is active.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect preferredPlayerViewFrame;
```

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

This value defaults to a rectangle that represents the entire screen bounds, but custom view controllers may return a smaller rectangle, or [zero](../../corefoundation/cgrect/zero.md) to hide the player view completely. If you return a rectangle smaller that the full-screen bounds, the player view animates its frame to its new size and position.

## See Also

### Configuring the Proposal

- [contentProposal](contentproposal.md): A prosal of content to play.
- [AVContentProposal](../avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [dateOfAutomaticAcceptance](dateofautomaticacceptance.md): The date that the system automatically accepts a proposal if the user doesn’t intervene.
- [playerLayoutGuide](playerlayoutguide.md): A layout guide that tracks the size and location of the player view.
