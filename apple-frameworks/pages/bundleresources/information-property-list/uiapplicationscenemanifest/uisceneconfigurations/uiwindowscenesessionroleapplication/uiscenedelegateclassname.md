> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenedelegateclassname](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenedelegateclassname)

# UISceneDelegateClassName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

The name of the app-specific class that you want UIKit to instantiate and use as the scene delegate object.

## Details

`UISceneDelegateClassName`

<a id="Discussion"></a>

## Discussion

The class you specify for this key must adopt the [UISceneDelegate](../../../../../uikit/uiscenedelegate.md) protocol. If the class you specify for the [UISceneClassName](uisceneclassname.md) key is [UIWindowScene](../../../../../uikit/uiwindowscene.md), your class must adopt the [UIWindowSceneDelegate](../../../../../uikit/uiwindowscenedelegate.md) protocol.

## See Also

### Scene objects

- [UISceneClassName](uisceneclassname.md): The name of the scene class you want UIKit to instantiate.
