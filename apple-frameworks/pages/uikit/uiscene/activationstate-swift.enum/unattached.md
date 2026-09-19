> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiscene/activationstate-swift.enum/unattached

# UIScene.ActivationState.unattached (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A state that indicates that the scene is not currently connected to your app.

## Declaration

```swift
case unattached
```

<a id="Discussion"></a>

## Discussion

A scene starts in the unattached state and remains in that state until the system sends a connection notification to it. A scene reenters the attached state when the user dismisses the interface from the app switcher or to reclaim its resources.

## See Also

### Scene States

- [UIScene.ActivationState.foregroundInactive](foregroundinactive.md): A state that indicates that the scene is running in the foreground but is not receiving events.
- [UIScene.ActivationState.foregroundActive](foregroundactive.md): A state that indicates that the scene is running in the foreground and is currently receiving events.
- [UIScene.ActivationState.background](background.md): A state that indicates that the scene is running in the background and is not onscreen.

# UISceneActivationStateUnattached (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A state that indicates that the scene is not currently connected to your app.

## Declaration

```objectivec
UISceneActivationStateUnattached
```

<a id="Discussion"></a>

## Discussion

A scene starts in the unattached state and remains in that state until the system sends a connection notification to it. A scene reenters the attached state when the user dismisses the interface from the app switcher or to reclaim its resources.

## See Also

### Scene States

- [UISceneActivationStateForegroundInactive](foregroundinactive.md): A state that indicates that the scene is running in the foreground but is not receiving events.
- [UISceneActivationStateForegroundActive](foregroundactive.md): A state that indicates that the scene is running in the foreground and is currently receiving events.
- [UISceneActivationStateBackground](background.md): A state that indicates that the scene is running in the background and is not onscreen.
