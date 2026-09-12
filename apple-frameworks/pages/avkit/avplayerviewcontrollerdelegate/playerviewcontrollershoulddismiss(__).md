> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollershoulddismiss(_:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollershoulddismiss(_:))

# playerViewControllerShouldDismiss(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Asks the delegate object whether the player view controller dismisses itself upon request.

## Declaration

```swift
optional func playerViewControllerShouldDismiss(_ playerViewController: AVPlayerViewController) -> Bool
```

## Parameters

- `playerViewController`: The player view controller.

<a id="return-value"></a>

## Return Value

`true` if the player view controller should dismiss itself; otherwise `false`.

<a id="Discussion"></a>

## Discussion

If allowed, the player view controller dismisses itself with animation. If you’ve embedded the player view controller in another view, the delegate may need to manually dismiss the view controller.

## See Also

### Dismissing the Player View Controller

- [playerViewControllerWillBeginDismissalTransition(\_:)](playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
- [playerViewControllerDidEndDismissalTransition(\_:)](playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.

# playerViewControllerShouldDismiss: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Asks the delegate object whether the player view controller dismisses itself upon request.

## Declaration

```objectivec
- (BOOL) playerViewControllerShouldDismiss:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

<a id="return-value"></a>

## Return Value

`true` if the player view controller should dismiss itself; otherwise `false`.

<a id="Discussion"></a>

## Discussion

If allowed, the player view controller dismisses itself with animation. If you’ve embedded the player view controller in another view, the delegate may need to manually dismiss the view controller.

## See Also

### Dismissing the Player View Controller

- [playerViewControllerWillBeginDismissalTransition:](playerviewcontrollerwillbegindismissaltransition%28__%29.md): Tells the delegate when the player view controller is about to start its dismissal transition.
- [playerViewControllerDidEndDismissalTransition:](playerviewcontrollerdidenddismissaltransition%28__%29.md): Tells the delegate when the player view controller ends its dismissal transition.
