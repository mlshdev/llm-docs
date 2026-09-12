> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:willencoderestorablestatewith:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:willencoderestorablestatewith:))

# application(\_:willEncodeRestorableStateWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your delegate to save any high-level state information at the beginning of the state preservation process.

## Declaration

```swift
optional func application(_ application: UIApplication, willEncodeRestorableStateWith coder: NSCoder)
```

## Parameters

- `application`: Your singleton app object.
- `coder`: The keyed archiver in which to write any state information.

## Mentioned In

- [About the UI preservation process](../about-the-ui-preservation-process.md)

<a id="Discussion"></a>

## Discussion

The state preservation system calls this method at the beginning of the preservation process. This is your opportunity to add any app-level information to state information. For example, you might use this method to write version information or the high-level configuration of your app.

> **Important**

>  This method is not a substitute for saving your app’s data structures persistently to disk. You should continue to save your app’s actual data to iCloud or the local file system using existing techniques. This method is intended only for saving configuration state or other information related to your app’s user interface. You should consider the data in the coder as purgeable and be prepared for it to be unavailable during subsequent launches.

Your implementation of this method can encode restorable view and view controller objects that it needs to reference. Encoding a restorable view or view controller writes that object’s restoration identifier to the coder. (That identifier is used during the decode process to locate the new version of the object.) If the view or view controller defines a [encodeRestorableState(with:)](../uiviewcontroller/encoderestorablestate%28with_%29.md) method, that method is also called at some point so that the object can encode its own state.

Apart from views and view controllers, other objects follow the normal serialization process and must adopt the [NSCoding](../../foundation/nscoding.md) protocol before they can be encoded. Encoding such objects embeds the object’s contents in the archive directly. During the decode process, a new object is created and initialized with the data from the archive.

## See Also

### Managing app state restoration

- [application(\_:shouldSaveSecureApplicationState:)](application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application(\_:shouldRestoreSecureApplicationState:)](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:viewControllerWithRestorationIdentifierPath:coder:)](application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application(\_:didDecodeRestorableStateWith:)](application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [stateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [stateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [stateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

# application:willEncodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your delegate to save any high-level state information at the beginning of the state preservation process.

## Declaration

```objectivec
- (void) application:(UIApplication *) application willEncodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `application`: Your singleton app object.
- `coder`: The keyed archiver in which to write any state information.

## Mentioned In

- [About the UI preservation process](../about-the-ui-preservation-process.md)

<a id="Discussion"></a>

## Discussion

The state preservation system calls this method at the beginning of the preservation process. This is your opportunity to add any app-level information to state information. For example, you might use this method to write version information or the high-level configuration of your app.

> **Important**

>  This method is not a substitute for saving your app’s data structures persistently to disk. You should continue to save your app’s actual data to iCloud or the local file system using existing techniques. This method is intended only for saving configuration state or other information related to your app’s user interface. You should consider the data in the coder as purgeable and be prepared for it to be unavailable during subsequent launches.

Your implementation of this method can encode restorable view and view controller objects that it needs to reference. Encoding a restorable view or view controller writes that object’s restoration identifier to the coder. (That identifier is used during the decode process to locate the new version of the object.) If the view or view controller defines a [encodeRestorableStateWithCoder:](../uiviewcontroller/encoderestorablestate%28with_%29.md) method, that method is also called at some point so that the object can encode its own state.

Apart from views and view controllers, other objects follow the normal serialization process and must adopt the [NSCoding](../../foundation/nscoding.md) protocol before they can be encoded. Encoding such objects embeds the object’s contents in the archive directly. During the decode process, a new object is created and initialized with the data from the archive.

## See Also

### Managing app state restoration

- [application:shouldSaveSecureApplicationState:](application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application:shouldRestoreSecureApplicationState:](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:viewControllerWithRestorationIdentifierPath:coder:](application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application:didDecodeRestorableStateWithCoder:](application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [UIApplicationStateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [UIApplicationStateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [UIStateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.
