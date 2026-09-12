> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didreject:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didreject:))

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

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

## See Also

### Responding to Content Proposals

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

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

## See Also

### Responding to Content Proposals

- [playerViewController:shouldPresentContentProposal:](playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController:didAcceptContentProposal:](playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
