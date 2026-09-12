> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:shouldsavesecureapplicationstate:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:shouldsavesecureapplicationstate:))

# application(\_:shouldSaveSecureApplicationState:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · tvOS 13.2+ · visionOS 1.0+

Asks the delegate whether to securely preserve the app’s state.

## Declaration

```swift
optional func application(_ application: UIApplication, shouldSaveSecureApplicationState coder: NSCoder) -> Bool
```

## Parameters

- `application`: The singleton app object.
- `coder`: A keyed archiver where you can store high-level state information. The coder’s [requiresSecureCoding](../../foundation/nscoder/requiressecurecoding.md) property is set to [true](https://developer.apple.com/documentation/swift/true), and any objects you encode must adopt [NSSecureCoding](../../foundation/nssecurecoding.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to securely preserve the app’s state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Apps must implement both this method and [application(\_:shouldRestoreSecureApplicationState:)](application%28__shouldrestoresecureapplicationstate_%29.md) for state preservation to occur.

Your implementation of this method should return [true](https://developer.apple.com/documentation/swift/true) each time UIKit attempts to preserve the state of your app. You can temporarily disable state preservation by returning [false](https://developer.apple.com/documentation/swift/false), which you may want to do during testing, for example.

You can add version information or any other contextual data to the provided coder as necessary. During restoration, you can use that information to determine whether to proceed with restoring your app to its previous state. Any objects you add to the coder must adopt the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol.

This method supersedes [application(\_:shouldSaveApplicationState:)](application%28__shouldsaveapplicationstate_%29.md). If your delegate implements both methods, the system only calls this one.

## See Also

### Managing app state restoration

- [application(\_:shouldRestoreSecureApplicationState:)](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:viewControllerWithRestorationIdentifierPath:coder:)](application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application(\_:willEncodeRestorableStateWith:)](application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application(\_:didDecodeRestorableStateWith:)](application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [stateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [stateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [stateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

# application:shouldSaveSecureApplicationState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · tvOS 13.2+ · visionOS 1.0+

Asks the delegate whether to securely preserve the app’s state.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application shouldSaveSecureApplicationState:(NSCoder *) coder;
```

## Parameters

- `application`: The singleton app object.
- `coder`: A keyed archiver where you can store high-level state information. The coder’s [requiresSecureCoding](../../foundation/nscoder/requiressecurecoding.md) property is set to [true](https://developer.apple.com/documentation/swift/true), and any objects you encode must adopt [NSSecureCoding](../../foundation/nssecurecoding.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to securely preserve the app’s state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Apps must implement both this method and [application:shouldRestoreSecureApplicationState:](application%28__shouldrestoresecureapplicationstate_%29.md) for state preservation to occur.

Your implementation of this method should return [true](https://developer.apple.com/documentation/swift/true) each time UIKit attempts to preserve the state of your app. You can temporarily disable state preservation by returning [false](https://developer.apple.com/documentation/swift/false), which you may want to do during testing, for example.

You can add version information or any other contextual data to the provided coder as necessary. During restoration, you can use that information to determine whether to proceed with restoring your app to its previous state. Any objects you add to the coder must adopt the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol.

This method supersedes [application:shouldSaveApplicationState:](application%28__shouldsaveapplicationstate_%29.md). If your delegate implements both methods, the system only calls this one.

## See Also

### Managing app state restoration

- [application:shouldRestoreSecureApplicationState:](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:viewControllerWithRestorationIdentifierPath:coder:](application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application:willEncodeRestorableStateWithCoder:](application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application:didDecodeRestorableStateWithCoder:](application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [UIApplicationStateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [UIApplicationStateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [UIStateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.
