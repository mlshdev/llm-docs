> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication)

# CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.4+ · iPadOS 15.4+

Configurations for scenes you use to display navigation content on a CarPlay Instrument Cluster.

## Details

`CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication`

<a id="Discussion"></a>

## Discussion

After setting [CPSupportsInstrumentClusterNavigationScene](../cpsupportsinstrumentclusternavigationscene.md) to `YES`, use this key to specify a scene configuration when displaying navigation content in the CarPlay Instrument Cluster.

For more information, see [Displaying Content in CarPlay](https://developer.apple.com/documentation/carplay/displaying-content-in-carplay).

## Topics

### Configuration name

- [UISceneConfigurationName](cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneconfigurationname.md): The app-specific name you use to identify the scene.

### Scene objects

- [UISceneClassName](cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
- [UISceneDelegateClassName](cptemplateapplicationinstrumentclusterscenesessionroleapplication/uiscenedelegateclassname.md): The name of the app-specific class you want UIKit to instantiate and use as the scene delegate object.

## See Also

### CarPlay scene roles

- [CPTemplateApplicationSceneSessionRoleApplication](cptemplateapplicationscenesessionroleapplication.md): Configurations for scenes that you use to display template content on a CarPlay-enabled vehicle screen.
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](cptemplateapplicationdashboardscenesessionroleapplication.md): Configurations for scenes that you use to display navigation content on a CarPlay Dashboard.
