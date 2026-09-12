> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:diddecoderestorablestatewith:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:diddecoderestorablestatewith:))

# application(\_:didDecodeRestorableStateWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your delegate to restore any high-level state information as part of the state restoration process.

## Declaration

```swift
optional func application(_ application: UIApplication, didDecodeRestorableStateWith coder: NSCoder)
```

## Parameters

- `application`: Your singleton app object.
- `coder`: The keyed archiver containing the app’s previously saved state information.

<a id="Discussion"></a>

## Discussion

The state restoration system calls this method as the final step in the state restoration process. By the time this method is called, all other restorable objects will have been restored and put back into their previous state. You can use this method to read any high-level app data you saved in the [application(\_:willEncodeRestorableStateWith:)](application%28__willencoderestorablestatewith_%29.md) method and apply it to your app.

## See Also

### Managing app state restoration

- [application(\_:shouldSaveSecureApplicationState:)](application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application(\_:shouldRestoreSecureApplicationState:)](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:viewControllerWithRestorationIdentifierPath:coder:)](application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application(\_:willEncodeRestorableStateWith:)](application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [stateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [stateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [stateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

# application:didDecodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your delegate to restore any high-level state information as part of the state restoration process.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didDecodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `application`: Your singleton app object.
- `coder`: The keyed archiver containing the app’s previously saved state information.

<a id="Discussion"></a>

## Discussion

The state restoration system calls this method as the final step in the state restoration process. By the time this method is called, all other restorable objects will have been restored and put back into their previous state. You can use this method to read any high-level app data you saved in the [application:willEncodeRestorableStateWithCoder:](application%28__willencoderestorablestatewith_%29.md) method and apply it to your app.

## See Also

### Managing app state restoration

- [application:shouldSaveSecureApplicationState:](application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application:shouldRestoreSecureApplicationState:](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:viewControllerWithRestorationIdentifierPath:coder:](application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application:willEncodeRestorableStateWithCoder:](application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [UIApplicationStateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [UIApplicationStateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [UIStateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.
