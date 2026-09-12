> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontrollerwascancelled(_:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontrollerwascancelled(_:))

# turnBasedMatchmakerViewControllerWasCancelled(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when the player dismisses the view controller without inviting players.

## Declaration

```swift
func turnBasedMatchmakerViewControllerWasCancelled(_ viewController: GKTurnBasedMatchmakerViewController)
```

## Parameters

- `viewController`: The view controller that the player dismisses.

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling Cancellation and Errors

- [turnBasedMatchmakerViewController(\_:didFailWithError:)](turnbasedmatchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when an error occurs while the local player invites other players.

# turnBasedMatchmakerViewControllerWasCancelled: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when the player dismisses the view controller without inviting players.

## Declaration

```objectivec
- (void) turnBasedMatchmakerViewControllerWasCancelled:(GKTurnBasedMatchmakerViewController *) viewController;
```

## Parameters

- `viewController`: The view controller that the player dismisses.

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling Cancellation and Errors

- [turnBasedMatchmakerViewController:didFailWithError:](turnbasedmatchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when an error occurs while the local player invites other players.
