> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname)

# UISceneClassName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.4+ · iPadOS 15.4+

The name of the scene class you want UIKit to instantiate.

## Details

`UISceneClassName`

## Possible Values

- `CPTemplateApplicationScene`:

<a id="Discussion"></a>

## Discussion

CarPlay doesn’t support custom classes. Omit this key or specify [CPTemplateApplicationInstrumentClusterScene](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscene) for scenes meant for a CarPlay Instrument Cluster.

## See Also

### Scene objects

- [UISceneDelegateClassName](uiscenedelegateclassname.md): The name of the app-specific class you want UIKit to instantiate and use as the scene delegate object.
