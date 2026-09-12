> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerdidenddismissaltransition(_:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerdidenddismissaltransition(_:))

# playerViewControllerDidEndDismissalTransition(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Tells the delegate when the player view controller ends its dismissal transition.

## Declaration

```swift
optional func playerViewControllerDidEndDismissalTransition(_ playerViewController: AVPlayerViewController)
```

## Parameters

- `playerViewController`: The player view controller.

## See Also

### Dismissing the Player View Controller

- [playerViewControllerShouldDismiss(\_:)](playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerWillBeginDismissalTransition(\_:)](playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.

# playerViewControllerDidEndDismissalTransition: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Tells the delegate when the player view controller ends its dismissal transition.

## Declaration

```objectivec
- (void) playerViewControllerDidEndDismissalTransition:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

## See Also

### Dismissing the Player View Controller

- [playerViewControllerShouldDismiss:](playerviewcontrollershoulddismiss%28__%29.md): Asks the delegate object whether the player view controller dismisses itself upon request.
- [playerViewControllerWillBeginDismissalTransition:](playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
