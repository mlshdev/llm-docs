> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenedelegate/windowscene(_:didupdate:interfaceorientation:traitcollection:)](https://developer.apple.com/documentation/uikit/uiwindowscenedelegate/windowscene(_:didupdate:interfaceorientation:traitcollection:))

# windowScene(\_:didUpdate:interfaceOrientation:traitCollection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Notifies you when the size, orientation, or traits of a scene change.

> Use windowScene(\_: didUpdateEffectiveGeometry:) to be notified of the scene's geometry changes, or use traits whose values are inherited from the scene via the traitCollection of views and view controllers instead.

## Declaration

```swift
optional func windowScene(_ windowScene: UIWindowScene, didUpdate previousCoordinateSpace: any UICoordinateSpace, interfaceOrientation previousInterfaceOrientation: UIInterfaceOrientation, traitCollection previousTraitCollection: UITraitCollection)
```

## Parameters

- `windowScene`: The window scene object whose environment changed.
- `previousCoordinateSpace`: The previous coordinate space of the scene. Get the current coordinate space from the [coordinateSpace](../uiwindowscene/coordinatespace.md) property of the `windowScene` object.
- `previousInterfaceOrientation`: The previous interface orientation for your content. Get the current interface orientation from the [interfaceOrientation](../uiwindowscene/interfaceorientation.md) property of the `windowScene` object.
- `previousTraitCollection`: The previous traits for the window. Get the current window traits from the [traitCollection](../uiwindowscene/traitcollection.md) property of the `windowScene` object.

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

The window scene environment typically changes in response to user actions. For example, the interface orientation changes in response to device orientation changes or screen mode in response to moving to another screen. Similarly, the user may resize scenes on iPad, which causes UIKit to report a change to the scene’s coordinate space. Use these changes to make any needed changes to your scene’s content or interface.

## See Also

### Related Documentation

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md): Fill connected displays with additional content from your app.

# windowScene:didUpdateCoordinateSpace:interfaceOrientation:traitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Notifies you when the size, orientation, or traits of a scene change.

> Use windowScene(\_: didUpdateEffectiveGeometry:) to be notified of the scene's geometry changes, or use traits whose values are inherited from the scene via the traitCollection of views and view controllers instead.

## Declaration

```objectivec
- (void) windowScene:(UIWindowScene *) windowScene didUpdateCoordinateSpace:(id<UICoordinateSpace>) previousCoordinateSpace interfaceOrientation:(UIInterfaceOrientation) previousInterfaceOrientation traitCollection:(UITraitCollection *) previousTraitCollection;
```

## Parameters

- `windowScene`: The window scene object whose environment changed.
- `previousCoordinateSpace`: The previous coordinate space of the scene. Get the current coordinate space from the [coordinateSpace](../uiwindowscene/coordinatespace.md) property of the `windowScene` object.
- `previousInterfaceOrientation`: The previous interface orientation for your content. Get the current interface orientation from the [interfaceOrientation](../uiwindowscene/interfaceorientation.md) property of the `windowScene` object.
- `previousTraitCollection`: The previous traits for the window. Get the current window traits from the [traitCollection](../uiwindowscene/traitcollection.md) property of the `windowScene` object.

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

The window scene environment typically changes in response to user actions. For example, the interface orientation changes in response to device orientation changes or screen mode in response to moving to another screen. Similarly, the user may resize scenes on iPad, which causes UIKit to report a change to the scene’s coordinate space. Use these changes to make any needed changes to your scene’s content or interface.

## See Also

### Related Documentation

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md): Fill connected displays with additional content from your app.
