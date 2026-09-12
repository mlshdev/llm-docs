> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:shouldpresent:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:shouldpresent:))

# playerViewController(\_:shouldPresent:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Asks the delegate whether the player view controller presents a content proposal.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, shouldPresent proposal: AVContentProposal) -> Bool
```

## Parameters

- `playerViewController`: The player view controller.
- `proposal`: The content proposal to present.

<a id="return-value"></a>

## Return Value

`true` if the player view controller should propose the content; otherwise `false`.

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

## See Also

### Responding to Content Proposals

- [playerViewController(\_:didAccept:)](playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
- [playerViewController(\_:didReject:)](playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.

# playerViewController:shouldPresentContentProposal: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Asks the delegate whether the player view controller presents a content proposal.

## Declaration

```objectivec
- (BOOL) playerViewController:(AVPlayerViewController *) playerViewController shouldPresentContentProposal:(AVContentProposal *) proposal;
```

## Parameters

- `playerViewController`: The player view controller.
- `proposal`: The content proposal to present.

<a id="return-value"></a>

## Return Value

`true` if the player view controller should propose the content; otherwise `false`.

## Mentioned In

- [Presenting Content Proposals in tvOS](../presenting-content-proposals-in-tvos.md)

## See Also

### Responding to Content Proposals

- [playerViewController:didAcceptContentProposal:](playerviewcontroller%28__didaccept_%29.md): Tells the delegate when the user accepts the proposed content.
- [playerViewController:didRejectContentProposal:](playerviewcontroller%28__didreject_%29.md): Tells the delegate when the user rejects the proposed content.
