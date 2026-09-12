> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontroller](https://developer.apple.com/documentation/glkit/glkviewcontroller)

# GLKViewController (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A view controller that manages an OpenGL ES rendering loop.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKViewController
```

<a id="overview"></a>

## Overview

A [GLKViewController](glkviewcontroller.md) object works in conjunction with a [GLKView](glkview.md) object to display frames of animation in the view, and also provides standard view controller functionality.

To use this class, allocate and initialize a new [GLKViewController](glkviewcontroller.md) subclass and set its [view](../uikit/uiviewcontroller/view.md) property to point to a [GLKView](glkview.md) object. Then, configure the view controller’s [preferredFramesPerSecond](glkviewcontroller/preferredframespersecond.md) property to the desired frame rate your application requires. You can set a delegate or configure other properties on the view controller, such as whether the animation loop is automatically paused or resumed when the application moves into the background.

> **Note**

>  When you set the [view](../uikit/uiviewcontroller/view.md) property to point to a [GLKView](glkview.md) object, if the view does not already have a delegate, then the view controller is automatically set as the view’s delegate.

When active, rendering loop automatically updates the view’s contents each time a new frame must be displayed. Each frame is rendered by the view controller using these steps:

1. The view controller calls its delegate’s [glkViewControllerUpdate(\_:)](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method. Your delegate should update frame data that does not involve rendering the results to the screen.
2. The view controller calls its view’s [display()](glkview/display%28%29.md) method. Your view should redraw the frame.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Your application should subclass [GLKViewController](glkviewcontroller.md) and override the [viewDidLoad()](../uikit/uiviewcontroller/viewdidload%28%29.md) and [viewDidUnload](../uikit/uiviewcontroller/viewdidunload.md) methods. Your `viewDidLoad` method should set up your context and any drawable properties and can perform other resource allocation and initialization. Similarly, your class’s `viewDidUnload` method should delete the drawable object and free any unneeded resources.

As an alternative to implementing a [glkViewControllerUpdate(\_:)](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method in a delegate, your subclass can provide an update method instead. The method must have the following signature:

```objc
- (void)update;
```

## Topics

### Configuring the Frame rate

- [preferredFramesPerSecond](glkviewcontroller/preferredframespersecond.md): Deprecated. The rate you want the view controller to call the view to update the contents of the view.
- [framesPerSecond](glkviewcontroller/framespersecond.md): Deprecated. The actual rate that the view controller attempts to call the view to update its contents.

### Configuring the Delegate

- [delegate](glkviewcontroller/delegate.md): Deprecated. The view controller’s delegate.

### Controlling Frame Updates

- [isPaused](glkviewcontroller/ispaused.md): Deprecated. A Boolean value that indicates whether the rendering loop is paused.
- [pauseOnWillResignActive](glkviewcontroller/pauseonwillresignactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically pauses the rendering loop when the application resigns the active state.
- [resumeOnDidBecomeActive](glkviewcontroller/resumeondidbecomeactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically resumes the rendering loop when the application becomes active.

### Obtaining Information About View Updates

- [framesDisplayed](glkviewcontroller/framesdisplayed.md): Deprecated. The number of frame updates that have been sent by the view controller since it was created.
- [timeSinceFirstResume](glkviewcontroller/timesincefirstresume.md): Deprecated. The amount of time that has passed since first time the view controller resumed sending update events.
- [timeSinceLastResume](glkviewcontroller/timesincelastresume.md): Deprecated. The amount of time that has passed since the last time the view controller resumed sending update events.
- [timeSinceLastUpdate](glkviewcontroller/timesincelastupdate.md): Deprecated. The amount of time that has passed since the last time the view controller called the delegate’s [glkViewControllerUpdate(\_:)](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method.
- [timeSinceLastDraw](glkviewcontroller/timesincelastdraw.md): Deprecated. The amount of time that has passed since the last time the view controller called the view’s [display()](glkview/display%28%29.md) method.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GLKViewDelegate](glkviewdelegate.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### OpenGL ES View Rendering

- [GLKView](glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewDelegate](glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkview.md) object.
- [GLKViewControllerDelegate](glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.

# GLKViewController (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A view controller that manages an OpenGL ES rendering loop.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKViewController : UIViewController
```

<a id="overview"></a>

## Overview

A [GLKViewController](glkviewcontroller.md) object works in conjunction with a [GLKView](glkview.md) object to display frames of animation in the view, and also provides standard view controller functionality.

To use this class, allocate and initialize a new [GLKViewController](glkviewcontroller.md) subclass and set its [view](../uikit/uiviewcontroller/view.md) property to point to a [GLKView](glkview.md) object. Then, configure the view controller’s [preferredFramesPerSecond](glkviewcontroller/preferredframespersecond.md) property to the desired frame rate your application requires. You can set a delegate or configure other properties on the view controller, such as whether the animation loop is automatically paused or resumed when the application moves into the background.

> **Note**

>  When you set the [view](../uikit/uiviewcontroller/view.md) property to point to a [GLKView](glkview.md) object, if the view does not already have a delegate, then the view controller is automatically set as the view’s delegate.

When active, rendering loop automatically updates the view’s contents each time a new frame must be displayed. Each frame is rendered by the view controller using these steps:

1. The view controller calls its delegate’s [glkViewControllerUpdate:](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method. Your delegate should update frame data that does not involve rendering the results to the screen.
2. The view controller calls its view’s [display](glkview/display%28%29.md) method. Your view should redraw the frame.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Your application should subclass [GLKViewController](glkviewcontroller.md) and override the [viewDidLoad](../uikit/uiviewcontroller/viewdidload%28%29.md) and [viewDidUnload](../uikit/uiviewcontroller/viewdidunload.md) methods. Your `viewDidLoad` method should set up your context and any drawable properties and can perform other resource allocation and initialization. Similarly, your class’s `viewDidUnload` method should delete the drawable object and free any unneeded resources.

As an alternative to implementing a [glkViewControllerUpdate:](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method in a delegate, your subclass can provide an update method instead. The method must have the following signature:

```objc
- (void)update;
```

## Topics

### Configuring the Frame rate

- [preferredFramesPerSecond](glkviewcontroller/preferredframespersecond.md): Deprecated. The rate you want the view controller to call the view to update the contents of the view.
- [framesPerSecond](glkviewcontroller/framespersecond.md): Deprecated. The actual rate that the view controller attempts to call the view to update its contents.

### Configuring the Delegate

- [delegate](glkviewcontroller/delegate.md): Deprecated. The view controller’s delegate.

### Controlling Frame Updates

- [paused](glkviewcontroller/ispaused.md): Deprecated. A Boolean value that indicates whether the rendering loop is paused.
- [pauseOnWillResignActive](glkviewcontroller/pauseonwillresignactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically pauses the rendering loop when the application resigns the active state.
- [resumeOnDidBecomeActive](glkviewcontroller/resumeondidbecomeactive.md): Deprecated. A Boolean value that indicates whether the view controller automatically resumes the rendering loop when the application becomes active.

### Obtaining Information About View Updates

- [framesDisplayed](glkviewcontroller/framesdisplayed.md): Deprecated. The number of frame updates that have been sent by the view controller since it was created.
- [timeSinceFirstResume](glkviewcontroller/timesincefirstresume.md): Deprecated. The amount of time that has passed since first time the view controller resumed sending update events.
- [timeSinceLastResume](glkviewcontroller/timesincelastresume.md): Deprecated. The amount of time that has passed since the last time the view controller resumed sending update events.
- [timeSinceLastUpdate](glkviewcontroller/timesincelastupdate.md): Deprecated. The amount of time that has passed since the last time the view controller called the delegate’s [glkViewControllerUpdate:](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method.
- [timeSinceLastDraw](glkviewcontroller/timesincelastdraw.md): Deprecated. The amount of time that has passed since the last time the view controller called the view’s [display](glkview/display%28%29.md) method.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [GLKViewDelegate](glkviewdelegate.md)
- [NSCoding](../foundation/nscoding.md)

## See Also

### OpenGL ES View Rendering

- [GLKView](glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewDelegate](glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkview.md) object.
- [GLKViewControllerDelegate](glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.
