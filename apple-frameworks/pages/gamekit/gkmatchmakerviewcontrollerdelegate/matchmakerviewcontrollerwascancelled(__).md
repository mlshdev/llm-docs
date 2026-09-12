> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontrollerwascancelled(_:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontrollerwascancelled(_:))

# matchmakerViewControllerWasCancelled(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when a player cancels a request to find players for a match.

## Declaration

```swift
func matchmakerViewControllerWasCancelled(_ viewController: GKMatchmakerViewController)
```

## Parameters

- `viewController`: The view controller that the player cancels.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling cancellations and errors

- [matchmakerViewController(\_:didFailWithError:)](matchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when a view controller encounters an error while finding players for a match.

# matchmakerViewControllerWasCancelled: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when a player cancels a request to find players for a match.

## Declaration

```objectivec
- (void) matchmakerViewControllerWasCancelled:(GKMatchmakerViewController *) viewController;
```

## Parameters

- `viewController`: The view controller that the player cancels.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

This method needs to dismiss the view controller.

## See Also

### Handling cancellations and errors

- [matchmakerViewController:didFailWithError:](matchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when a view controller encounters an error while finding players for a match.
