> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/applicationstate](https://developer.apple.com/documentation/uikit/uiapplication/applicationstate)

# applicationState (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The app’s current state, or that of its most active scene.

## Declaration

```swift
var applicationState: UIApplication.State { get }
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The behavior of this property depends on whether your app is scene-based.

In a scene-based app, this property takes the value of the most active scene, which it determines from each scene’s [activationState](../uiscene/activationstate-swift.property.md) property. A scene-based app launches in the background state, and transitions between its states as scenes connect, change their states, and disconnect. For scene-based apps, use [UISceneDelegate](../uiscenedelegate.md) to respond to changes in an individual scene’s life cycle.

In a sceneless app, the property’s value is always the app’s current state. The app is inactive at launch, and then is generally in either an active or background state. The app may become inactive for a short period — for example, when transitioning between active and background states, when the system presents an alert in front of it, or when the system displays the application switcher. For sceneless apps, use [UIApplicationDelegate](../uiapplicationdelegate.md) to respond to the app’s life cycle changes.

## See Also

### Getting the application state

- [UIApplication.State](state.md): Constants that indicate the running states of an app.

# applicationState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The app’s current state, or that of its most active scene.

## Declaration

```objectivec
@property (nonatomic, readonly) UIApplicationState applicationState;
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The behavior of this property depends on whether your app is scene-based.

In a scene-based app, this property takes the value of the most active scene, which it determines from each scene’s [activationState](../uiscene/activationstate-swift.property.md) property. A scene-based app launches in the background state, and transitions between its states as scenes connect, change their states, and disconnect. For scene-based apps, use [UISceneDelegate](../uiscenedelegate.md) to respond to changes in an individual scene’s life cycle.

In a sceneless app, the property’s value is always the app’s current state. The app is inactive at launch, and then is generally in either an active or background state. The app may become inactive for a short period — for example, when transitioning between active and background states, when the system presents an alert in front of it, or when the system displays the application switcher. For sceneless apps, use [UIApplicationDelegate](../uiapplicationdelegate.md) to respond to the app’s life cycle changes.

## See Also

### Getting the application state

- [UIApplicationState](state.md): Constants that indicate the running states of an app.
