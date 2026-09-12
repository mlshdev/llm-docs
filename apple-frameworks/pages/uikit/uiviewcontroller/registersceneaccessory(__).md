> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/registersceneaccessory(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/registersceneaccessory(_:))

# registerSceneAccessory(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Registers a new scene accessory configuration associated with this view controller.

## Declaration

```swift
func registerSceneAccessory(_ accessory: UISceneAccessory) -> UISceneAccessoryRegistration
```

## Parameters

- `accessory`: A configuration which defines system functionality necessary to present the scene accessory.

<a id="return-value"></a>

## Return Value

A registration object which can be used to monitor changes for the scene accessory or unregister it.

<a id="discussion"></a>

## Discussion

The delegate type that the configuration defines will be called for all lifecycle events associated with the scene accessory.

## See Also

### Registering scene accessories

- [unregisterSceneAccessory(\_:)](unregistersceneaccessory%28__%29.md): Unregisters a scene accessory with the specified registration.

# registerSceneAccessory: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Registers a new scene accessory configuration associated with this view controller.

## Declaration

```objectivec
- (UISceneAccessoryRegistration *) registerSceneAccessory:(UISceneAccessory *) accessory;
```

## Parameters

- `accessory`: A configuration which defines system functionality necessary to present the scene accessory.

<a id="return-value"></a>

## Return Value

A registration object which can be used to monitor changes for the scene accessory or unregister it.

<a id="discussion"></a>

## Discussion

The delegate type that the configuration defines will be called for all lifecycle events associated with the scene accessory.

## See Also

### Registering scene accessories

- [unregisterSceneAccessory:](unregistersceneaccessory%28__%29.md): Unregisters a scene accessory with the specified registration.
