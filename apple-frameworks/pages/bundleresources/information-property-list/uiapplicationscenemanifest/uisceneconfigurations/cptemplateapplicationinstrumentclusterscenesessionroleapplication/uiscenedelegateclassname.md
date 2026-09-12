> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uiscenedelegateclassname](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uiscenedelegateclassname)

# UISceneDelegateClassName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.4+ · iPadOS 15.4+

The name of the app-specific class you want UIKit to instantiate and use as the scene delegate object.

## Details

`UISceneDelegateClassName`

<a id="Discussion"></a>

## Discussion

The delegate class you specify for [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](../cptemplateapplicationinstrumentclusterscenesessionroleapplication.md) must adopt the [CPTemplateApplicationInstrumentClusterSceneDelegate](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenedelegate) protocol.

## See Also

### Scene objects

- [UISceneClassName](uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
