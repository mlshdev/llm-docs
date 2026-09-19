> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationscenesessionroleapplication/uisceneclassname

# UISceneClassName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The name of the scene class you want UIKit to instantiate.

## Details

`UISceneClassName`

## Possible Values

- `CPTemplateApplicationScene`:

<a id="Discussion"></a>

## Discussion

CarPlay doesn’t support custom classes. Omit this key or specify [CPTemplateApplicationScene](https://developer.apple.com/documentation/carplay/cptemplateapplicationscene) for scenes meant for a CarPlay-enabled vehicle screen.

## See Also

### Scene objects

- [UISceneDelegateClassName](uiscenedelegateclassname.md): The name of the app-specific class you want UIKit to instantiate and use as the scene delegate object.
