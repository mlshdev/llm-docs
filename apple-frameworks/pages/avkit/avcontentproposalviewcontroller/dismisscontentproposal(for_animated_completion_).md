> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller/dismisscontentproposal(for:animated:completion:)

# dismissContentProposal(for:animated:completion:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Dismisses the current content proposal.

## Declaration

```swift
func dismissContentProposal(for action: AVContentProposalAction, animated: Bool, completion block: (() -> Void)? = nil)
```

```swift
func dismissContentProposal(for action: AVContentProposalAction, animated: Bool) async
```

## Parameters

- `action`: A content proposal action that indicates whether the user accepted, rejected, or deferred the content proposal.
- `animated`: A Boolean value that indicates whether the content proposal dismisses in an animated manner.
- `block`: An optional callback that the system calls when its hidden the conten proposal.

## Mentioned In

- [Presenting content proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

Call this method to indicate the user action when leaving this proposal.

## See Also

### Dismissing the proposal

- [AVContentProposalAction](../avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.

# dismissContentProposalForAction:animated:completion: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Dismisses the current content proposal.

## Declaration

```objectivec
- (void) dismissContentProposalForAction:(AVContentProposalAction) action animated:(BOOL) animated completion:(void (^)()) block;
```

## Parameters

- `action`: A content proposal action that indicates whether the user accepted, rejected, or deferred the content proposal.
- `animated`: A Boolean value that indicates whether the content proposal dismisses in an animated manner.
- `block`: An optional callback that the system calls when its hidden the conten proposal.

## Mentioned In

- [Presenting content proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

Call this method to indicate the user action when leaving this proposal.

## See Also

### Dismissing the proposal

- [AVContentProposalAction](../avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.
