> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationscenesessionroleapplication](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationscenesessionroleapplication)

# CPTemplateApplicationSceneSessionRoleApplication

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Configurations for scenes that you use to display template content on a CarPlay-enabled vehicle screen.

## Details

`CPTemplateApplicationSceneSessionRoleApplication`

<a id="Discussion"></a>

## Discussion

Use this key to specify the scene configuration you use when displaying content on a CarPlay-enabled vehicle screen.

For more information, see [Displaying Content in CarPlay](https://developer.apple.com/documentation/carplay/displaying-content-in-carplay).

## Topics

### Configuration name

- [UISceneConfigurationName](cptemplateapplicationscenesessionroleapplication/uisceneconfigurationname.md): The app-specific name you use to identify the scene.

### Scene objects

- [UISceneClassName](cptemplateapplicationscenesessionroleapplication/uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
- [UISceneDelegateClassName](cptemplateapplicationscenesessionroleapplication/uiscenedelegateclassname.md): The name of the app-specific class you want UIKit to instantiate and use as the scene delegate object.

## See Also

### CarPlay scene roles

- [CPTemplateApplicationDashboardSceneSessionRoleApplication](cptemplateapplicationdashboardscenesessionroleapplication.md): Configurations for scenes that you use to display navigation content on a CarPlay Dashboard.
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](cptemplateapplicationinstrumentclusterscenesessionroleapplication.md): Configurations for scenes you use to display navigation content on a CarPlay Instrument Cluster.
