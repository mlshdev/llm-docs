> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cpscenesessionroleimmersivespaceapplication](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cpscenesessionroleimmersivespaceapplication)

# CPSceneSessionRoleImmersiveSpaceApplication

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** visionOS 1.0+

Configurations for scenes you use to display Compositor Services content in an immersive space.

## Details

`CPSceneSessionRoleImmersiveSpaceApplication`

<a id="Discussion"></a>

## Discussion

Use this key to specify scene configurations for a session role. Each scene corresponds to one you use for content you display on the device. Make the default scene the first entry in the array. Use [UIApplicationPreferredDefaultSceneSessionRole](../../uiapplicationpreferreddefaultscenesessionrole.md) to indicate a preferred initial scene session role.

> **Note**

>  Immersive space scenes don’t provide support for custom scene delegate classes or scene sub-classes, the system ignores [UISceneClassName](uiwindowscenesessionroleapplication/uisceneclassname.md), [UISceneStoryboardFile](uiwindowscenesessionroleapplication/uiscenestoryboardfile.md) and [UISceneDelegateClassName](uiwindowscenesessionroleapplication/uiscenedelegateclassname.md) keys your provide in a [CPSceneSessionRoleImmersiveSpaceApplication](cpscenesessionroleimmersivespaceapplication.md) dictionary.

## Topics

### Configuration name

- [UISceneConfigurationName](uiwindowscenesessionroleapplication/uisceneconfigurationname.md): The app-specific name you use to identify the scene.

## See Also

### Immersize space scene roles

- [UISceneSessionRoleImmersiveSpaceApplication](uiscenesessionroleimmersivespaceapplication.md): Configurations for scenes you use to display SwiftUI content in an immersive space.
