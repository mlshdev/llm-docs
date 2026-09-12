> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/matchmakerdelegate](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/matchmakerdelegate)

# matchmakerDelegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The object that handles matchmaker view controller changes.

## Declaration

```swift
weak var matchmakerDelegate: (any GKMatchmakerViewControllerDelegate)? { get set }
```

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

You must set the delegate for GameKit to notify you when players accept their invitations and you can start the game.

## See Also

### Setting the delegate

- [GKMatchmakerViewControllerDelegate](../gkmatchmakerviewcontrollerdelegate.md): An object that handles when the status of matchmaking changes.

# matchmakerDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The object that handles matchmaker view controller changes.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKMatchmakerViewControllerDelegate> matchmakerDelegate;
```

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

You must set the delegate for GameKit to notify you when players accept their invitations and you can start the game.

## See Also

### Setting the delegate

- [GKMatchmakerViewControllerDelegate](../gkmatchmakerviewcontrollerdelegate.md): An object that handles when the status of matchmaking changes.
