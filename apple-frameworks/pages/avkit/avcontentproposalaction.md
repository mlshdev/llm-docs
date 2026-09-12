> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposalaction](https://developer.apple.com/documentation/avkit/avcontentproposalaction)

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

### Dismissing the Proposal

- [dismissContentProposal(for:animated:completion:)](avcontentproposalviewcontroller/dismisscontentproposal%28for_animated_completion_%29.md): Dismisses the current content proposal.

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

### Dismissing the Proposal

- [dismissContentProposalForAction:animated:completion:](avcontentproposalviewcontroller/dismisscontentproposal%28for_animated_completion_%29.md): Dismisses the current content proposal.
