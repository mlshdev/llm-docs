> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/activationstate-swift.enum/foregroundinactive](https://developer.apple.com/documentation/uikit/uiscene/activationstate-swift.enum/foregroundinactive)

# UIScene.ActivationState.foregroundInactive (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A state that indicates that the scene is running in the foreground but is not receiving events.

## Declaration

```swift
case foregroundInactive
```

<a id="Discussion"></a>

## Discussion

A scene transits through the foreground-inactive state on its way to or from another state.

## See Also

### Scene States

- [UIScene.ActivationState.unattached](unattached.md): A state that indicates that the scene is not currently connected to your app.
- [UIScene.ActivationState.foregroundActive](foregroundactive.md): A state that indicates that the scene is running in the foreground and is currently receiving events.
- [UIScene.ActivationState.background](background.md): A state that indicates that the scene is running in the background and is not onscreen.

# UISceneActivationStateForegroundInactive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A state that indicates that the scene is running in the foreground but is not receiving events.

## Declaration

```objectivec
UISceneActivationStateForegroundInactive
```

<a id="Discussion"></a>

## Discussion

A scene transits through the foreground-inactive state on its way to or from another state.

## See Also

### Scene States

- [UISceneActivationStateUnattached](unattached.md): A state that indicates that the scene is not currently connected to your app.
- [UISceneActivationStateForegroundActive](foregroundactive.md): A state that indicates that the scene is running in the foreground and is currently receiving events.
- [UISceneActivationStateBackground](background.md): A state that indicates that the scene is running in the background and is not onscreen.
