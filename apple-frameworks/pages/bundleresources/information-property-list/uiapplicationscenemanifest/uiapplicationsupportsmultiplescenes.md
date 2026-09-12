> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uiapplicationsupportsmultiplescenes](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uiapplicationsupportsmultiplescenes)

# UIApplicationSupportsMultipleScenes

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A Boolean value indicating whether the app supports two or more scenes simultaneously.

## Details

`UIApplicationSupportsMultipleScenes`

<a id="Discussion"></a>

## Discussion

If your app supports multiple scenes, set the value of this key to [true](https://developer.apple.com/documentation/swift/true). If you set the value to [false](https://developer.apple.com/documentation/swift/false), UIKit never creates more than one scene for your app.

Setting this key to [true](https://developer.apple.com/documentation/swift/true) has implications for your code. An app that supports multiple scenes must coordinate operations to prevent scenes from interfering with each other. For example, if two scenes access the same shared resource, you must synchronize access to that resource using a serial dispatch queue or some other mechanism. Failure to do so may lead to corrupted data or  unexpected behavior from your app.

## See Also

### Multiple windows

- [UIApplicationSupportsTabbedSceneCollection](uiapplicationsupportstabbedscenecollection.md): A Boolean value indicating whether an app built with Mac Catalyst supports automatic tabbing mode.
