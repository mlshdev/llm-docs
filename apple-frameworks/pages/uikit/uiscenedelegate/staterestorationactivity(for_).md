> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/staterestorationactivity(for:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/staterestorationactivity(for:))

# stateRestorationActivity(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns a user activity object encapsulating the current state of the specified scene.

## Declaration

```swift
optional func stateRestorationActivity(for scene: UIScene) -> NSUserActivity?
```

## Parameters

- `scene`: The scene whose state information is needed.

<a id="Discussion"></a>

## Discussion

Use this method to return an [NSUserActivity](../../foundation/nsuseractivity.md) object with information about your scene’s current state. Save enough information to be able to restore that state again after UIKit disconnects and then reconnects the scene. User activity objects are a mechanism to record what the user is doing, so you don’t need to manually persist the state of your scene’s UI.

After calling this method, and before archiving the [NSUserActivity](../../foundation/nsuseractivity.md) object and saving it to disk, UIKit lets you add state information as follows:

- If you set a delegate for the [NSUserActivity](../../foundation/nsuseractivity.md) object in your app, UIKit calls the delegate’s [userActivityWillSave(\_:)](../../foundation/nsuseractivitydelegate/useractivitywillsave%28__%29.md) method.
- If you assign the [NSUserActivity](../../foundation/nsuseractivity.md) object to the [userActivity](../uiresponder/useractivity.md) property of any responders, UIKit calls each responder’s [updateUserActivityState(\_:)](../uiresponder/updateuseractivitystate%28__%29.md) method.

When reconnecting the scene and restoring state, the user activity provided by this method will be provided in the [stateRestorationActivity](../uiscenesession/staterestorationactivity.md) property of [UISceneSession](../uiscenesession.md).

## See Also

### Saving the state of the scene

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [scene(\_:restoreInteractionStateWith:)](scene%28__restoreinteractionstatewith_%29.md)
- [scene(\_:didUpdate:)](scene%28__didupdate_%29.md): Tells the delegate that the specified activity object was updated.

# stateRestorationActivityForScene: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns a user activity object encapsulating the current state of the specified scene.

## Declaration

```objectivec
- (NSUserActivity *) stateRestorationActivityForScene:(UIScene *) scene;
```

## Parameters

- `scene`: The scene whose state information is needed.

<a id="Discussion"></a>

## Discussion

Use this method to return an [NSUserActivity](../../foundation/nsuseractivity.md) object with information about your scene’s current state. Save enough information to be able to restore that state again after UIKit disconnects and then reconnects the scene. User activity objects are a mechanism to record what the user is doing, so you don’t need to manually persist the state of your scene’s UI.

After calling this method, and before archiving the [NSUserActivity](../../foundation/nsuseractivity.md) object and saving it to disk, UIKit lets you add state information as follows:

- If you set a delegate for the [NSUserActivity](../../foundation/nsuseractivity.md) object in your app, UIKit calls the delegate’s [userActivityWillSave:](../../foundation/nsuseractivitydelegate/useractivitywillsave%28__%29.md) method.
- If you assign the [NSUserActivity](../../foundation/nsuseractivity.md) object to the [userActivity](../uiresponder/useractivity.md) property of any responders, UIKit calls each responder’s [updateUserActivityState:](../uiresponder/updateuseractivitystate%28__%29.md) method.

When reconnecting the scene and restoring state, the user activity provided by this method will be provided in the [stateRestorationActivity](../uiscenesession/staterestorationactivity.md) property of [UISceneSession](../uiscenesession.md).

## See Also

### Saving the state of the scene

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [scene:restoreInteractionStateWithUserActivity:](scene%28__restoreinteractionstatewith_%29.md)
- [scene:didUpdateUserActivity:](scene%28__didupdate_%29.md): Tells the delegate that the specified activity object was updated.
