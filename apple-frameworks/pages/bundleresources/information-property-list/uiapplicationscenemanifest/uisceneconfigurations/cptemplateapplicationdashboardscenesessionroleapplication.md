> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationdashboardscenesessionroleapplication](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationdashboardscenesessionroleapplication)

# CPTemplateApplicationDashboardSceneSessionRoleApplication

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Configurations for scenes that you use to display navigation content on a CarPlay Dashboard.

## Details

`CPTemplateApplicationDashboardSceneSessionRoleApplication`

<a id="Discussion"></a>

## Discussion

After setting [CPSupportsDashboardNavigationScene](../cpsupportsdashboardnavigationscene.md) to `YES`, use this key to specify the scene configuration when displaying navigation content in the CarPlay Dashboard.

For more information, see [Displaying Content in CarPlay](https://developer.apple.com/documentation/carplay/displaying-content-in-carplay).

## Topics

### Configuration name

- [UISceneConfigurationName](cptemplateapplicationdashboardscenesessionroleapplication/uisceneconfigurationname.md): The app-specific name you use to identify the scene.

### Scene objects

- [UISceneClassName](cptemplateapplicationdashboardscenesessionroleapplication/uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
- [UISceneDelegateClassName](cptemplateapplicationdashboardscenesessionroleapplication/uiscenedelegateclassname.md): The name of the app-specific class you want UIKit to instantiate and use as the scene delegate object.

## See Also

### CarPlay scene roles

- [CPTemplateApplicationSceneSessionRoleApplication](cptemplateapplicationscenesessionroleapplication.md): Configurations for scenes that you use to display template content on a CarPlay-enabled vehicle screen.
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](cptemplateapplicationinstrumentclusterscenesessionroleapplication.md): Configurations for scenes you use to display navigation content on a CarPlay Instrument Cluster.
