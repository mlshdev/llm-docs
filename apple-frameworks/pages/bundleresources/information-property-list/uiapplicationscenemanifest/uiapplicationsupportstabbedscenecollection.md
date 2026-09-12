> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uiapplicationsupportstabbedscenecollection](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uiapplicationsupportstabbedscenecollection)

# UIApplicationSupportsTabbedSceneCollection (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** Mac Catalyst 15.0+

A Boolean value indicating whether an app built with Mac Catalyst supports automatic tabbing mode.

## Details

`UIApplicationSupportsTabbedSceneCollection`

<a id="Discussion"></a>

## Discussion

By default, the tabbing mode for an app built with Mac Catalyst that support multiple scenes is [NSWindow.TabbingMode.automatic](https://developer.apple.com/documentation/appkit/nswindow/tabbingmode-swift.enum/automatic). Starting with macOS 12, you can disable this behavior by adding the [UIApplicationSupportsTabbedSceneCollection](uiapplicationsupportstabbedscenecollection.md) key with a value of [false](https://developer.apple.com/documentation/swift/false) to the [UIApplicationSceneManifest](../uiapplicationscenemanifest.md) key in your app’s `Info.plist` file.

## See Also

### Multiple windows

- [UIApplicationSupportsMultipleScenes](uiapplicationsupportsmultiplescenes.md): A Boolean value indicating whether the app supports two or more scenes simultaneously.

# UIApplicationSupportsTabbedSceneCollection (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** Mac Catalyst 15.0+

A Boolean value indicating whether an app built with Mac Catalyst supports automatic tabbing mode.

## Details

`UIApplicationSupportsTabbedSceneCollection`

<a id="Discussion"></a>

## Discussion

By default, the tabbing mode for an app built with Mac Catalyst that support multiple scenes is [NSWindowTabbingModeAutomatic](https://developer.apple.com/documentation/appkit/nswindow/tabbingmode-swift.enum/automatic). Starting with macOS 12, you can disable this behavior by adding the [UIApplicationSupportsTabbedSceneCollection](uiapplicationsupportstabbedscenecollection.md) key with a value of [false](https://developer.apple.com/documentation/swift/false) to the [UIApplicationSceneManifest](../uiapplicationscenemanifest.md) key in your app’s `Info.plist` file.

## See Also

### Multiple windows

- [UIApplicationSupportsMultipleScenes](uiapplicationsupportsmultiplescenes.md): A Boolean value indicating whether the app supports two or more scenes simultaneously.
