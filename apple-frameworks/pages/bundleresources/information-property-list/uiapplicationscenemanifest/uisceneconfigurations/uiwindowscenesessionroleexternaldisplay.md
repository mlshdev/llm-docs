> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleexternaldisplay](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleexternaldisplay)

# UIWindowSceneSessionRoleExternalDisplay

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.0+ (deprecated in 16.0)

Configurations for scenes you use to display noninteractive content on an externally connected display.

> Use [UIWindowSceneSessionRoleExternalDisplayNonInteractive](uiwindowscenesessionroleexternaldisplaynoninteractive.md) for a scene that displays noninteractive windows on an externally connected screen. A scene that displays interactive windows uses [UIWindowSceneSessionRoleApplication](uiwindowscenesessionroleapplication.md), even if the windows display on an externally connected screen.

## Details

`UIWindowSceneSessionRoleExternalDisplay`

<a id="Discussion"></a>

## Discussion

Use this key to specify scene configurations for a session role. Each scene configuration corresponds to one you use for content you display on the device. The first item in the array represents the default scene configuration for this role.

## Topics

### Configuration name

- [UISceneConfigurationName](uiwindowscenesessionroleapplication/uisceneconfigurationname.md): The app-specific name you use to identify the scene.

### Scene objects

- [UISceneClassName](uiwindowscenesessionroleapplication/uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
- [UISceneDelegateClassName](uiwindowscenesessionroleapplication/uiscenedelegateclassname.md): The name of the app-specific class that you want UIKit to instantiate and use as the scene delegate object.

### Storyboard

- [UISceneStoryboardFile](uiwindowscenesessionroleapplication/uiscenestoryboardfile.md): The name of the storyboard file containing the scene’s initial user interface.

## See Also

### Window scene roles

- [UIWindowSceneSessionRoleApplication](uiwindowscenesessionroleapplication.md): Configurations for scenes you use to display content on the device’s main screen and respond to user interactions.
- [UIWindowSceneSessionRoleExternalDisplayNonInteractive](uiwindowscenesessionroleexternaldisplaynoninteractive.md): Configurations for scenes you use to display noninteractive content on an externally connected display.
