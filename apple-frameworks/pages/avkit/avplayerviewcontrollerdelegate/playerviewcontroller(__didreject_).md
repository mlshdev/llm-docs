> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didreject:)

# playerViewController(\_:didReject:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user rejects the proposed content.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, didReject proposal: AVContentProposal)
```

## Parameters

- `playerViewController`: The player view controller.
- `proposal`: The content proposal.

## Mentioned In

- [Presenting content proposals in tvOS](../presenting-content-proposals-in-tvos.md)

## See Also

### Responding to content proposals

- [playerViewController(\_:shouldPresent:)](playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController(\_:didAccept:)](playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.

# playerViewController:didRejectContentProposal: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user rejects the proposed content.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController didRejectContentProposal:(AVContentProposal *) proposal;
```

## Parameters

- `playerViewController`: The player view controller.
- `proposal`: The content proposal.

## Mentioned In

- [Presenting content proposals in tvOS](../presenting-content-proposals-in-tvos.md)

## See Also

### Responding to content proposals

- [playerViewController:shouldPresentContentProposal:](playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController:didAcceptContentProposal:](playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
