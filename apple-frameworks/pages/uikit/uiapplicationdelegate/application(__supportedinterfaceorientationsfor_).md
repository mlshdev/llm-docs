> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:supportedinterfaceorientationsfor:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:supportedinterfaceorientationsfor:))

# application(\_:supportedInterfaceOrientationsFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate for the interface orientations to use for the view controllers in the specified window.

> Use [supportedInterfaceOrientations(for:)](../uiwindowscenedelegate/supportedinterfaceorientations%28for_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask
```

## Parameters

- `application`: Your singleton app object.
- `window`: The window whose interface orientations you want to retrieve.

<a id="return-value"></a>

## Return Value

A bit mask of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants that indicate the orientations to use for the view controllers.

<a id="Discussion"></a>

## Discussion

This method returns the total set of interface orientations supported by the app. When determining whether to rotate a particular view controller, the orientations returned by this method are intersected with the orientations supported by the root view controller or topmost presented view controller. The app and view controller must agree before the rotation is allowed.

If you do not implement this method, the app uses the values in the `UIInterfaceOrientation` key of the app’s `Info.plist` as the default interface orientations.

## See Also

### Managing interface geometry

- [UIInterfaceOrientation](../uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
- [invalidInterfaceOrientationException](../uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

# application:supportedInterfaceOrientationsForWindow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate for the interface orientations to use for the view controllers in the specified window.

> Use [supportedInterfaceOrientationsForWindowScene:](../uiwindowscenedelegate/supportedinterfaceorientations%28for_%29.md) instead.

## Declaration

```objectivec
- (UIInterfaceOrientationMask) application:(UIApplication *) application supportedInterfaceOrientationsForWindow:(UIWindow *) window;
```

## Parameters

- `application`: Your singleton app object.
- `window`: The window whose interface orientations you want to retrieve.

<a id="return-value"></a>

## Return Value

A bit mask of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants that indicate the orientations to use for the view controllers.

<a id="Discussion"></a>

## Discussion

This method returns the total set of interface orientations supported by the app. When determining whether to rotate a particular view controller, the orientations returned by this method are intersected with the orientations supported by the root view controller or topmost presented view controller. The app and view controller must agree before the rotation is allowed.

If you do not implement this method, the app uses the values in the `UIInterfaceOrientation` key of the app’s `Info.plist` as the default interface orientations.

## See Also

### Managing interface geometry

- [UIInterfaceOrientation](../uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
- [UIApplicationInvalidInterfaceOrientationException](../uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.
