> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/ispresentinggamecenter](https://developer.apple.com/documentation/gamekit/gkaccesspoint/ispresentinggamecenter)

# isPresentingGameCenter (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the game is presenting the Game Center dashboard.

## Declaration

```swift
var isPresentingGameCenter: Bool { get }
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) when the player taps the access point control and [false](https://developer.apple.com/documentation/swift/false) when the player dismisses the Game Center dashboard. This is an observable property.

## See Also

### Displaying the access point

- [isActive](isactive.md): A Boolean value that determines whether to display the access point.
- [isVisible](isvisible.md): A Boolean value that indicates whether the access point is visible.
- [showHighlights](showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.

# isPresentingGameCenter (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the game is presenting the Game Center dashboard.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isPresentingGameCenter;
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) when the player taps the access point control and [false](https://developer.apple.com/documentation/swift/false) when the player dismisses the Game Center dashboard. This is an observable property.

## See Also

### Displaying the access point

- [active](isactive.md): A Boolean value that determines whether to display the access point.
- [visible](isvisible.md): A Boolean value that indicates whether the access point is visible.
- [showHighlights](showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.
