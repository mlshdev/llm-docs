> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/isactive](https://developer.apple.com/documentation/gamekit/gkaccesspoint/isactive)

# isActive (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether to display the access point.

## Declaration

```swift
var isActive: Bool { get set }
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the access point appears after you initialize the local player or appears immediately if you’ve already initialized the player.

## See Also

### Displaying the access point

- [isPresentingGameCenter](ispresentinggamecenter.md): A Boolean value that indicates whether the game is presenting the Game Center dashboard.
- [isVisible](isvisible.md): A Boolean value that indicates whether the access point is visible.
- [showHighlights](showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.

# active (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether to display the access point.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isActive) BOOL active;
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the access point appears after you initialize the local player or appears immediately if you’ve already initialized the player.

## See Also

### Displaying the access point

- [isPresentingGameCenter](ispresentinggamecenter.md): A Boolean value that indicates whether the game is presenting the Game Center dashboard.
- [visible](isvisible.md): A Boolean value that indicates whether the access point is visible.
- [showHighlights](showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.
