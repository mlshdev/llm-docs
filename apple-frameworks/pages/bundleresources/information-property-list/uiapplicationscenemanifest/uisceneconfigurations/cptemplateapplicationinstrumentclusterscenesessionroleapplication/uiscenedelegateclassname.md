> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uiscenedelegateclassname

# UISceneDelegateClassName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.4+ · iPadOS 15.4+

The name of the app-specific class you want UIKit to instantiate and use as the delegate for your app’s instrument cluster scene.

## Details

`UISceneDelegateClassName`

<a id="Discussion"></a>

## Discussion

Include this key in the one of the dictionaries you specify for the value of the [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](../cptemplateapplicationinstrumentclusterscenesessionroleapplication.md) key.

This key tells the system where to find the delegate class for your app’s main CarPlay scene. The value of this key is a string with the format `<app-name>.<class-name>`, in which `<app-name>` is the name of your iOS app and `<class-name>` is the name of a class that adopts the [CPTemplateApplicationInstrumentClusterSceneDelegate](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenedelegate) protocol.

## See Also

### Scene objects

- [UISceneClassName](uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
