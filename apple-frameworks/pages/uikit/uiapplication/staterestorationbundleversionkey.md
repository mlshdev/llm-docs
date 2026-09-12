> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/staterestorationbundleversionkey](https://developer.apple.com/documentation/uikit/uiapplication/staterestorationbundleversionkey)

# stateRestorationBundleVersionKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The version of your app responsible for creating the restoration archive.

## Declaration

```swift
class let stateRestorationBundleVersionKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../foundation/nsstring.md) object that identifies the version of your app (as obtained from the `CFBundleVersion` key of your app’s `Info.plist` file) that was present when the state information was saved. You can use the value of this key to help make choices about how to proceed during state restoration. For example, if the key indicates that the state is associated with an older version of your app, you might want to avoid restoring the previous state altogether or modify the restoration process more significantly.

## See Also

### Managing app state restoration

- [application(\_:shouldSaveSecureApplicationState:)](../uiapplicationdelegate/application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application(\_:shouldRestoreSecureApplicationState:)](../uiapplicationdelegate/application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:viewControllerWithRestorationIdentifierPath:coder:)](../uiapplicationdelegate/application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application(\_:willEncodeRestorableStateWith:)](../uiapplicationdelegate/application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application(\_:didDecodeRestorableStateWith:)](../uiapplicationdelegate/application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [stateRestorationSystemVersionKey](staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [stateRestorationViewControllerStoryboardKey](staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

# UIApplicationStateRestorationBundleVersionKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The version of your app responsible for creating the restoration archive.

## Declaration

```objectivec
extern NSString * const UIApplicationStateRestorationBundleVersionKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../foundation/nsstring.md) object that identifies the version of your app (as obtained from the `CFBundleVersion` key of your app’s `Info.plist` file) that was present when the state information was saved. You can use the value of this key to help make choices about how to proceed during state restoration. For example, if the key indicates that the state is associated with an older version of your app, you might want to avoid restoring the previous state altogether or modify the restoration process more significantly.

## See Also

### Managing app state restoration

- [application:shouldSaveSecureApplicationState:](../uiapplicationdelegate/application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application:shouldRestoreSecureApplicationState:](../uiapplicationdelegate/application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:viewControllerWithRestorationIdentifierPath:coder:](../uiapplicationdelegate/application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application:willEncodeRestorableStateWithCoder:](../uiapplicationdelegate/application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application:didDecodeRestorableStateWithCoder:](../uiapplicationdelegate/application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [UIApplicationStateRestorationSystemVersionKey](staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [UIStateRestorationViewControllerStoryboardKey](staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.
