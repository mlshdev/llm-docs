> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/staterestorationviewcontrollerstoryboardkey](https://developer.apple.com/documentation/uikit/uiapplication/staterestorationviewcontrollerstoryboardkey)

# stateRestorationViewControllerStoryboardKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A reference to the storyboard that contains the view controller.

## Declaration

```swift
class let stateRestorationViewControllerStoryboardKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [UIStoryboard](../uistoryboard.md) object representing the storyboard from which a view controller was initially obtained. You don’t need to write this key to the coder yourself. Each [UIViewController](../uiviewcontroller.md) class automatically writes this key to the coder during the state preservation process.

## See Also

### Managing app state restoration

- [application(\_:shouldSaveSecureApplicationState:)](../uiapplicationdelegate/application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application(\_:shouldRestoreSecureApplicationState:)](../uiapplicationdelegate/application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:viewControllerWithRestorationIdentifierPath:coder:)](../uiapplicationdelegate/application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application(\_:willEncodeRestorableStateWith:)](../uiapplicationdelegate/application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application(\_:didDecodeRestorableStateWith:)](../uiapplicationdelegate/application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [stateRestorationBundleVersionKey](staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [stateRestorationSystemVersionKey](staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.

# UIStateRestorationViewControllerStoryboardKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A reference to the storyboard that contains the view controller.

## Declaration

```objectivec
extern NSString * const UIStateRestorationViewControllerStoryboardKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [UIStoryboard](../uistoryboard.md) object representing the storyboard from which a view controller was initially obtained. You don’t need to write this key to the coder yourself. Each [UIViewController](../uiviewcontroller.md) class automatically writes this key to the coder during the state preservation process.

## See Also

### Managing app state restoration

- [application:shouldSaveSecureApplicationState:](../uiapplicationdelegate/application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application:shouldRestoreSecureApplicationState:](../uiapplicationdelegate/application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:viewControllerWithRestorationIdentifierPath:coder:](../uiapplicationdelegate/application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application:willEncodeRestorableStateWithCoder:](../uiapplicationdelegate/application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application:didDecodeRestorableStateWithCoder:](../uiapplicationdelegate/application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [UIApplicationStateRestorationBundleVersionKey](staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [UIApplicationStateRestorationSystemVersionKey](staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
