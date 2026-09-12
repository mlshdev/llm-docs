> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/invalidinterfaceorientationexception](https://developer.apple.com/documentation/uikit/uiapplication/invalidinterfaceorientationexception)

# invalidInterfaceOrientationException (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

## Declaration

```swift
class let invalidInterfaceOrientationException: NSExceptionName
```

<a id="Discussion"></a>

## Discussion

This exception is thrown if a view controller or the app returns `0` instead of a valid set of supported interface orientation values. It is also thrown if the orientation returned by a view controller’s [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md) method does not match one of the view controller’s supported orientations.

## See Also

### Managing interface geometry

- [application(\_:supportedInterfaceOrientationsFor:)](../uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientation](../uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.

# UIApplicationInvalidInterfaceOrientationException (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

## Declaration

```objectivec
extern NSExceptionName const UIApplicationInvalidInterfaceOrientationException;
```

<a id="Discussion"></a>

## Discussion

This exception is thrown if a view controller or the app returns `0` instead of a valid set of supported interface orientation values. It is also thrown if the orientation returned by a view controller’s [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md) method does not match one of the view controller’s supported orientations.

## See Also

### Managing interface geometry

- [application:supportedInterfaceOrientationsForWindow:](../uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientation](../uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
