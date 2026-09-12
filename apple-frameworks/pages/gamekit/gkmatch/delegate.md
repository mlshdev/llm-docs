> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/delegate](https://developer.apple.com/documentation/gamekit/gkmatch/delegate)

# delegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The delegate that handles communication between players in a match.

## Declaration

```swift
weak var delegate: (any GKMatchDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

To receive voice or data from other players, you must set the delegate.

## See Also

### Setting the delegate

- [GKMatchDelegate](../gkmatchdelegate.md): An object that receives connection status and data transmitted in a multiplayer game.

# delegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The delegate that handles communication between players in a match.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKMatchDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

To receive voice or data from other players, you must set the delegate.

## See Also

### Setting the delegate

- [GKMatchDelegate](../gkmatchdelegate.md): An object that receives connection status and data transmitted in a multiplayer game.
