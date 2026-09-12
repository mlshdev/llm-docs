> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller(_:didfailwitherror:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller(_:didfailwitherror:))

# turnBasedMatchmakerViewController(\_:didFailWithError:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when an error occurs while the local player invites other players.

## Declaration

```swift
func turnBasedMatchmakerViewController(_ viewController: GKTurnBasedMatchmakerViewController, didFailWithError error: any Error)
```

## Parameters

- `viewController`: The view controller that encounters an error.
- `error`: The error that occurs.

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling Cancellation and Errors

- [turnBasedMatchmakerViewControllerWasCancelled(\_:)](turnbasedmatchmakerviewcontrollerwascancelled%28__%29.md): Handles when the player dismisses the view controller without inviting players.

# turnBasedMatchmakerViewController:didFailWithError: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when an error occurs while the local player invites other players.

## Declaration

```objectivec
- (void) turnBasedMatchmakerViewController:(GKTurnBasedMatchmakerViewController *) viewController didFailWithError:(NSError *) error;
```

## Parameters

- `viewController`: The view controller that encounters an error.
- `error`: The error that occurs.

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling Cancellation and Errors

- [turnBasedMatchmakerViewControllerWasCancelled:](turnbasedmatchmakerviewcontrollerwascancelled%28__%29.md): Handles when the player dismisses the view controller without inviting players.
