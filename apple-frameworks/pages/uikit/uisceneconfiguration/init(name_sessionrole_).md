> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/init(name:sessionrole:)](https://developer.apple.com/documentation/uikit/uisceneconfiguration/init(name:sessionrole:))

# init(name:sessionRole:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a scene-configuration object with the specified role and app-specific name.

## Declaration

```swift
init(name: String?, sessionRole: UISceneSession.Role)
```

## Parameters

- `name`: The app-specific name you want to assign to the scene. For scenes you specify in your Info.plist file, this value corresponds to the string assigned to the [UISceneConfigurationName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uisceneconfigurationname.md) key.
- `sessionRole`: The role of the scene. For a list of possible roles, see [UISceneSession.Role](../uiscenesession/role-swift.struct.md).

<a id="return-value"></a>

## Return Value

A new scene-configuration object.

<a id="Discussion"></a>

## Discussion

After creating a scene-configuration object, supply values for the [sceneClass](sceneclass.md), [delegateClass](delegateclass.md), and [storyboard](storyboard.md) properties.

## See Also

### Creating a configuration object

- [init(name:)](init%28name_%29.md): Creates a scene-configuration object with the specified name.
- [init()](init%28%29.md): Creates a scene-configuration object.

# initWithName:sessionRole: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a scene-configuration object with the specified role and app-specific name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name sessionRole:(UISceneSessionRole) sessionRole;
```

## Parameters

- `name`: The app-specific name you want to assign to the scene. For scenes you specify in your Info.plist file, this value corresponds to the string assigned to the [UISceneConfigurationName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uisceneconfigurationname.md) key.
- `sessionRole`: The role of the scene. For a list of possible roles, see [UISceneSessionRole](../uiscenesession/role-swift.struct.md).

<a id="return-value"></a>

## Return Value

A new scene-configuration object.

<a id="Discussion"></a>

## Discussion

After creating a scene-configuration object, supply values for the [sceneClass](sceneclass.md), [delegateClass](delegateclass.md), and [storyboard](storyboard.md) properties.

## See Also

### Creating a configuration object

- [configurationWithName:sessionRole:](configurationwithname_sessionrole_.md): Returns a scene-configuration object with the specified role and app-specific name.
- [initWithName:](init%28name_%29.md): Creates a scene-configuration object with the specified name.
- [init](init%28%29.md): Creates a scene-configuration object.
