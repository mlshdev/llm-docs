> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didfailwitherror:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didfailwitherror:))

# matchmakerViewController(\_:didFailWithError:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when a view controller encounters an error while finding players for a match.

## Declaration

```swift
func matchmakerViewController(_ viewController: GKMatchmakerViewController, didFailWithError error: any Error)
```

## Parameters

- `viewController`: The view controller that encounters an error.
- `error`: The error that occurs.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling cancellations and errors

- [matchmakerViewControllerWasCancelled(\_:)](matchmakerviewcontrollerwascancelled%28__%29.md): Handles when a player cancels a request to find players for a match.

# matchmakerViewController:didFailWithError: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when a view controller encounters an error while finding players for a match.

## Declaration

```objectivec
- (void) matchmakerViewController:(GKMatchmakerViewController *) viewController didFailWithError:(NSError *) error;
```

## Parameters

- `viewController`: The view controller that encounters an error.
- `error`: The error that occurs.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling cancellations and errors

- [matchmakerViewControllerWasCancelled:](matchmakerviewcontrollerwascancelled%28__%29.md): Handles when a player cancels a request to find players for a match.
