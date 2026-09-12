> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/gamecenterdelegate](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/gamecenterdelegate)

# gameCenterDelegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The view controller’s delegate.

## Declaration

```swift
weak var gameCenterDelegate: (any GKGameCenterControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Before presenting the view controller, your game must set a delegate.

## See Also

### Setting the view controller delegate

- [GKGameCenterControllerDelegate](../gkgamecentercontrollerdelegate.md): Deprecated. The delegate that GameKit calls when the player dismisses the dashboard.

# gameCenterDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKGameCenterControllerDelegate> gameCenterDelegate;
```

```objectivec
@property (atomic, weak, nullable) id<GKGameCenterControllerDelegate> gameCenterDelegate;
```

<a id="Discussion"></a>

## Discussion

Before presenting the view controller, your game must set a delegate.

## See Also

### Setting the view controller delegate

- [GKGameCenterControllerDelegate](../gkgamecentercontrollerdelegate.md): Deprecated. The delegate that GameKit calls when the player dismisses the dashboard.
