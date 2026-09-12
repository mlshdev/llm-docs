> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scene(_:restoreinteractionstatewith:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scene(_:restoreinteractionstatewith:))

# scene(\_:restoreInteractionStateWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
optional func scene(_ scene: UIScene, restoreInteractionStateWith stateRestorationActivity: NSUserActivity)
```

## See Also

### Saving the state of the scene

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [stateRestorationActivity(for:)](staterestorationactivity%28for_%29.md): Returns a user activity object encapsulating the current state of the specified scene.
- [scene(\_:didUpdate:)](scene%28__didupdate_%29.md): Tells the delegate that the specified activity object was updated.

# scene:restoreInteractionStateWithUserActivity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) scene:(UIScene *) scene restoreInteractionStateWithUserActivity:(NSUserActivity *) stateRestorationActivity;
```

## See Also

### Saving the state of the scene

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [stateRestorationActivityForScene:](staterestorationactivity%28for_%29.md): Returns a user activity object encapsulating the current state of the specified scene.
- [scene:didUpdateUserActivity:](scene%28__didupdate_%29.md): Tells the delegate that the specified activity object was updated.
