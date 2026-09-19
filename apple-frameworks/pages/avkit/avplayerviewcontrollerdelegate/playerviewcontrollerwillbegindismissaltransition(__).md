> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition(_:)

# playerViewControllerWillBeginDismissalTransition(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Tells the delegate when the player view controller is about to start its dismissal transition.

## Declaration

```swift
optional func playerViewControllerWillBeginDismissalTransition(_ playerViewController: AVPlayerViewController)
```

## Parameters

- `playerViewController`: The player view controller.

## See Also

### Dismissing the player view controller

- [playerViewControllerShouldDismiss(\_:)](playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerDidEndDismissalTransition(\_:)](playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.

# playerViewControllerWillBeginDismissalTransition: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Tells the delegate when the player view controller is about to start its dismissal transition.

## Declaration

```objectivec
- (void) playerViewControllerWillBeginDismissalTransition:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

## See Also

### Dismissing the player view controller

- [playerViewControllerShouldDismiss:](playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerDidEndDismissalTransition:](playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.
