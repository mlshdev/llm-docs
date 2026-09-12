> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scenedidbecomeactive(_:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scenedidbecomeactive(_:))

# sceneDidBecomeActive(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that the scene became active and is now responding to user events.

## Declaration

```swift
optional func sceneDidBecomeActive(_ scene: UIScene)
```

## Parameters

- `scene`: The scene that became active and is now responding to user events.

## Mentioned In

- [About the app launch sequence](../about-the-app-launch-sequence.md)
- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

To use this method, you must implement the [UISceneDelegate](../uiscenedelegate.md) protocol and configure scenes for your app (see [Specifying the scenes your app supports](../specifying-the-scenes-your-app-supports.md)).

Use this method to prepare your scene to be onscreen. UIKit calls this method after loading the interface for your scene, but before that interface appears onscreen. Use it to refresh the contents of views, start timers, or increase frame rates for your UI.

In addition to calling this method, UIKit posts a [didActivateNotification](../uiscene/didactivatenotification.md) and a [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md).

For more information on what to do when your app becomes active, see [Preparing your UI to run in the foreground](../preparing-your-ui-to-run-in-the-foreground.md).

> **Note**

>  When you implement this method and enable scenes, UIKit calls this method but does not call the [applicationDidBecomeActive(\_:)](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md) method on [UIApplicationDelegate](../uiapplicationdelegate.md).

## See Also

### Transitioning to the foreground

- [sceneWillEnterForeground(\_:)](scenewillenterforeground%28__%29.md): Tells the delegate that the scene is about to begin running in the foreground and become visible to the user.

# sceneDidBecomeActive: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that the scene became active and is now responding to user events.

## Declaration

```objectivec
- (void) sceneDidBecomeActive:(UIScene *) scene;
```

## Parameters

- `scene`: The scene that became active and is now responding to user events.

## Mentioned In

- [About the app launch sequence](../about-the-app-launch-sequence.md)
- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

To use this method, you must implement the [UISceneDelegate](../uiscenedelegate.md) protocol and configure scenes for your app (see [Specifying the scenes your app supports](../specifying-the-scenes-your-app-supports.md)).

Use this method to prepare your scene to be onscreen. UIKit calls this method after loading the interface for your scene, but before that interface appears onscreen. Use it to refresh the contents of views, start timers, or increase frame rates for your UI.

In addition to calling this method, UIKit posts a [UISceneDidActivateNotification](../uiscene/didactivatenotification.md) and a [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md).

For more information on what to do when your app becomes active, see [Preparing your UI to run in the foreground](../preparing-your-ui-to-run-in-the-foreground.md).

> **Note**

>  When you implement this method and enable scenes, UIKit calls this method but does not call the [applicationDidBecomeActive:](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md) method on [UIApplicationDelegate](../uiapplicationdelegate.md).

## See Also

### Transitioning to the foreground

- [sceneWillEnterForeground:](scenewillenterforeground%28__%29.md): Tells the delegate that the scene is about to begin running in the foreground and become visible to the user.
