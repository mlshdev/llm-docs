> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/isvisible](https://developer.apple.com/documentation/gamekit/gkaccesspoint/isvisible)

# isVisible (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the access point is visible.

## Declaration

```swift
var isVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

On Apple TV, you can set this property to [true](https://developer.apple.com/documentation/swift/true) to move the focus to the access point. This is an observable property.

## See Also

### Displaying the access point

- [isActive](isactive.md): A Boolean value that determines whether to display the access point.
- [isPresentingGameCenter](ispresentinggamecenter.md): A Boolean value that indicates whether the game is presenting the Game Center dashboard.
- [showHighlights](showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.

# visible (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the access point is visible.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

On Apple TV, you can set this property to [true](https://developer.apple.com/documentation/swift/true) to move the focus to the access point. This is an observable property.

## See Also

### Displaying the access point

- [active](isactive.md): A Boolean value that determines whether to display the access point.
- [isPresentingGameCenter](ispresentinggamecenter.md): A Boolean value that indicates whether the game is presenting the Game Center dashboard.
- [showHighlights](showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.
