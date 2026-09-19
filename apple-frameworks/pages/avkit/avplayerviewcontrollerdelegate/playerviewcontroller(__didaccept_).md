> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didaccept:)

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

- [Presenting content proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

Implement this method to replace the player’s current player item with a player item for the proposed content.

## See Also

### Responding to content proposals

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

- [Presenting content proposals in tvOS](../presenting-content-proposals-in-tvos.md)

<a id="Discussion"></a>

## Discussion

Implement this method to replace the player’s current player item with a player item for the proposed content.

## See Also

### Responding to content proposals

- [playerViewController:shouldPresentContentProposal:](playerviewcontroller%28__shouldpresent_%29.md): Asks the delegate whether the player view controller presents a content proposal.
- [playerViewController:didRejectContentProposal:](playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.
