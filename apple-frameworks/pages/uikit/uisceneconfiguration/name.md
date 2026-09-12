> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/name](https://developer.apple.com/documentation/uikit/uisceneconfiguration/name)

# name (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The app-specific name assigned to the scene configuration.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

UIKit sets this property’s initial value using the [UISceneConfigurationName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uisceneconfigurationname.md) key from the appropriate scene in your app’s `Info.plist` file. You also specify this value when you create a new scene-configuration object.

## See Also

### Getting the configuration attributes

- [role](role.md): The role assigned to the scene configuration.
- [UISceneSession.Role](../uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.

# name (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The app-specific name assigned to the scene configuration.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

UIKit sets this property’s initial value using the [UISceneConfigurationName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uisceneconfigurationname.md) key from the appropriate scene in your app’s `Info.plist` file. You also specify this value when you create a new scene-configuration object.

## See Also

### Getting the configuration attributes

- [role](role.md): The role assigned to the scene configuration.
- [UISceneSessionRole](../uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.
