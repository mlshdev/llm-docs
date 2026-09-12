> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didaccept:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didaccept:))

# playerViewController(\_:didAccept:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user accepts the proposed content.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, didAccept proposal: AVContentProposal)
```

## Parameters

- `playerViewController`: The player view controller.
- `proposal`: The content proposal.

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

Implement this method to replace the player’s current player item with a player item for the proposed content.

## See Also

### Responding to Content Proposals

- [playerViewController(\_:shouldPresent:)](playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController(\_:didReject:)](playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.

# playerViewController:didAcceptContentProposal: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Tells the delegate when the user accepts the proposed content.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController didAcceptContentProposal:(AVContentProposal *) proposal;
```

## Parameters

- `playerViewController`: The player view controller.
- `proposal`: The content proposal.

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

Implement this method to replace the player’s current player item with a player item for the proposed content.

## See Also

### Responding to Content Proposals

- [playerViewController:shouldPresentContentProposal:](playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController:didRejectContentProposal:](playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.
