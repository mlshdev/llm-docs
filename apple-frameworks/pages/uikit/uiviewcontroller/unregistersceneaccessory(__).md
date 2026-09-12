> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/unregistersceneaccessory(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/unregistersceneaccessory(_:))

# unregisterSceneAccessory(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Unregisters a scene accessory with the specified registration.

## Declaration

```swift
func unregisterSceneAccessory(_ registration: UISceneAccessoryRegistration)
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

If the scene accessory associated to this registration is currently being presented, it will be dismissed.

## See Also

### Registering scene accessories

- [registerSceneAccessory(\_:)](registersceneaccessory%28__%29.md): Registers a new scene accessory configuration associated with this view controller.

# unregisterSceneAccessory: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Unregisters a scene accessory with the specified registration.

## Declaration

```objectivec
- (void) unregisterSceneAccessory:(UISceneAccessoryRegistration *) registration;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

If the scene accessory associated to this registration is currently being presented, it will be dismissed.

## See Also

### Registering scene accessories

- [registerSceneAccessory:](registersceneaccessory%28__%29.md): Registers a new scene accessory configuration associated with this view controller.
