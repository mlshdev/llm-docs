> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:viewcontrollerwithrestorationidentifierpath:coder:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:viewcontrollerwithrestorationidentifierpath:coder:))

# application(\_:viewControllerWithRestorationIdentifierPath:coder:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the specified view controller.

## Declaration

```swift
optional func application(_ application: UIApplication, viewControllerWithRestorationIdentifierPath identifierComponents: [String], coder: NSCoder) -> UIViewController?
```

## Parameters

- `application`: Your singleton app object.
- `identifierComponents`: An array of [NSString](../../foundation/nsstring.md) objects corresponding to the restoration identifiers of the desired view controller and all of its ancestors in the view controller hierarchy. The last value in the array is the restoration identifier of the desired view controller. Earlier entries represent the restoration identifiers of its ancestors.
- `coder`: The keyed archiver containing the app’s saved state information.

<a id="return-value"></a>

## Return Value

The view controller object to use or `nil` if the app delegate does not supply this view controller. If this method returns `nil`, UIKit tries to find the view controller implicitly using the available restoration path and storyboard information.

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

During state restoration, when UIKit encounters a view controller without a restoration class, it calls this method to ask for the corresponding view controller object. Your implementation of this method should create (or find) the corresponding view controller object and return it. If your app delegate does not provide the view controller, return `nil`.

You use the strings in the `identifierComponents` parameter to identify the view controller being requested. The view controllers in your app form a hierarchy. At the root of this hierarchy is the window’s root view controller, which itself may present or embed other view controllers. Those presented or embedded view controllers may themselves present and embed other view controllers. The result is a hierarchy of view controller relationships, with each presented or embedded view controller becoming a child of the view controller that presented or embedded it. The strings in the `identifierComponents` array identify the path through this hierarchy from the root view controller to the desired view controller.

It is not always necessary to create a new view controller object in your implementation of this method. You can also return an existing view controller object that was created by another means. For example, you would always return the existing view controllers loaded from your app’s main storyboard file rather than create new objects.

Your implementation of this method may use any data in the provided `coder` to assist in the restoration process. However, you usually do not need to restore the entire state of the view controller at this point. During a later pass, view controllers that define a [decodeRestorableState(with:)](../uiviewcontroller/decoderestorablestate%28with_%29.md) method are normally given a chance to restore their state form the same coder object. Similarly, the app delegate itself has a [application(\_:didDecodeRestorableStateWith:)](application%28__diddecoderestorablestatewith_%29.md) method that you can use to restore app-level state information.

> **Note**

>  If you return an object whose class does not match the class of the originally preserved object, or whose class is not a direct subclass of the original, the restoration system does not call the [decodeRestorableState(with:)](../uiviewcontroller/decoderestorablestate%28with_%29.md) method of the view controller.

## See Also

### Managing app state restoration

- [application(\_:shouldSaveSecureApplicationState:)](application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application(\_:shouldRestoreSecureApplicationState:)](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:willEncodeRestorableStateWith:)](application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application(\_:didDecodeRestorableStateWith:)](application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [stateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [stateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [stateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

# application:viewControllerWithRestorationIdentifierPath:coder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the specified view controller.

## Declaration

```objectivec
- (UIViewController *) application:(UIApplication *) application viewControllerWithRestorationIdentifierPath:(NSArray<NSString *> *) identifierComponents coder:(NSCoder *) coder;
```

## Parameters

- `application`: Your singleton app object.
- `identifierComponents`: An array of [NSString](../../foundation/nsstring.md) objects corresponding to the restoration identifiers of the desired view controller and all of its ancestors in the view controller hierarchy. The last value in the array is the restoration identifier of the desired view controller. Earlier entries represent the restoration identifiers of its ancestors.
- `coder`: The keyed archiver containing the app’s saved state information.

<a id="return-value"></a>

## Return Value

The view controller object to use or `nil` if the app delegate does not supply this view controller. If this method returns `nil`, UIKit tries to find the view controller implicitly using the available restoration path and storyboard information.

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

During state restoration, when UIKit encounters a view controller without a restoration class, it calls this method to ask for the corresponding view controller object. Your implementation of this method should create (or find) the corresponding view controller object and return it. If your app delegate does not provide the view controller, return `nil`.

You use the strings in the `identifierComponents` parameter to identify the view controller being requested. The view controllers in your app form a hierarchy. At the root of this hierarchy is the window’s root view controller, which itself may present or embed other view controllers. Those presented or embedded view controllers may themselves present and embed other view controllers. The result is a hierarchy of view controller relationships, with each presented or embedded view controller becoming a child of the view controller that presented or embedded it. The strings in the `identifierComponents` array identify the path through this hierarchy from the root view controller to the desired view controller.

It is not always necessary to create a new view controller object in your implementation of this method. You can also return an existing view controller object that was created by another means. For example, you would always return the existing view controllers loaded from your app’s main storyboard file rather than create new objects.

Your implementation of this method may use any data in the provided `coder` to assist in the restoration process. However, you usually do not need to restore the entire state of the view controller at this point. During a later pass, view controllers that define a [decodeRestorableStateWithCoder:](../uiviewcontroller/decoderestorablestate%28with_%29.md) method are normally given a chance to restore their state form the same coder object. Similarly, the app delegate itself has a [application:didDecodeRestorableStateWithCoder:](application%28__diddecoderestorablestatewith_%29.md) method that you can use to restore app-level state information.

> **Note**

>  If you return an object whose class does not match the class of the originally preserved object, or whose class is not a direct subclass of the original, the restoration system does not call the [decodeRestorableStateWithCoder:](../uiviewcontroller/decoderestorablestate%28with_%29.md) method of the view controller.

## See Also

### Managing app state restoration

- [application:shouldSaveSecureApplicationState:](application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application:shouldRestoreSecureApplicationState:](application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:willEncodeRestorableStateWithCoder:](application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application:didDecodeRestorableStateWithCoder:](application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [UIApplicationStateRestorationBundleVersionKey](../uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [UIApplicationStateRestorationSystemVersionKey](../uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](../uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](../uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [UIStateRestorationViewControllerStoryboardKey](../uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.
