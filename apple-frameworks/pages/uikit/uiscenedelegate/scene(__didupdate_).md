> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scene(_:didupdate:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scene(_:didupdate:))

# scene(\_:didUpdate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that the specified activity object was updated.

## Declaration

```swift
optional func scene(_ scene: UIScene, didUpdate userActivity: NSUserActivity)
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivity`: The user activity object containing the updated data.

<a id="Discussion"></a>

## Discussion

Use this method to add any final data to the specified user activity object. UIKit calls this method on your app’s main thread after calling your [stateRestorationActivity(for:)](staterestorationactivity%28for_%29.md) method and after giving other parts of your app an opportunity to update the activity object returned by that method.

## See Also

### Saving the state of the scene

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [stateRestorationActivity(for:)](staterestorationactivity%28for_%29.md): Returns a user activity object encapsulating the current state of the specified scene.
- [scene(\_:restoreInteractionStateWith:)](scene%28__restoreinteractionstatewith_%29.md)

# scene:didUpdateUserActivity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that the specified activity object was updated.

## Declaration

```objectivec
- (void) scene:(UIScene *) scene didUpdateUserActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivity`: The user activity object containing the updated data.

<a id="Discussion"></a>

## Discussion

Use this method to add any final data to the specified user activity object. UIKit calls this method on your app’s main thread after calling your [stateRestorationActivityForScene:](staterestorationactivity%28for_%29.md) method and after giving other parts of your app an opportunity to update the activity object returned by that method.

## See Also

### Saving the state of the scene

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [stateRestorationActivityForScene:](staterestorationactivity%28for_%29.md): Returns a user activity object encapsulating the current state of the specified scene.
- [scene:restoreInteractionStateWithUserActivity:](scene%28__restoreinteractionstatewith_%29.md)
