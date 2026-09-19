> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontentproposalaction

# AVContentProposalAction (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+

Constant that indicate the action a user takes when dismissing a content proposal.

## Declaration

```swift
enum AVContentProposalAction
```

## Topics

### Creating an action

- [init(rawValue:)](avcontentproposalaction/init%28rawvalue_%29.md)

### Actions

- [AVContentProposalAction.accept](avcontentproposalaction/accept.md): The user accepted the content proposal.
- [AVContentProposalAction.reject](avcontentproposalaction/reject.md): The user rejected the content proposal.
- [AVContentProposalAction.defer](avcontentproposalaction/defer.md): The user deferred the content proposal.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with overlays and parental controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.

# AVContentProposalAction (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+

Constant that indicate the action a user takes when dismissing a content proposal.

## Declaration

```objectivec
enum AVContentProposalAction : NSInteger;
```

## Topics

### Actions

- [AVContentProposalActionAccept](avcontentproposalaction/accept.md): The user accepted the content proposal.
- [AVContentProposalActionReject](avcontentproposalaction/reject.md): The user rejected the content proposal.
- [AVContentProposalActionDefer](avcontentproposalaction/defer.md): The user deferred the content proposal.

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with overlays and parental controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [AVContentProposal](avcontentproposal.md): An object that describes the content to propose playing after the current item finishes.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.
