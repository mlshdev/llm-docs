> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontrollerdelegate](https://developer.apple.com/documentation/glkit/glkviewcontrollerdelegate)

# GLKViewControllerDelegate (Swift)

**Framework:** GLKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.

## Declaration

```swift
protocol GLKViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A delegate is called each time the controller is about to display a new frame of animation. It is also called before the view controller’s rendering loop pauses or resumes sending updates.

## Topics

### Handling an Update Event

- [glkViewControllerUpdate(\_:)](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md): Called before each frame is displayed.

### Pause and Resume Notifications

- [glkViewController(\_:willPause:)](glkviewcontrollerdelegate/glkviewcontroller%28__willpause_%29.md): Called before the rendering loop is paused or resumed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### OpenGL ES View Rendering

- [GLKView](glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewDelegate](glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkview.md) object.
- [GLKViewController](glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.

# GLKViewControllerDelegate (Objective-C)

**Framework:** GLKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.

## Declaration

```objectivec
@protocol GLKViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

A delegate is called each time the controller is about to display a new frame of animation. It is also called before the view controller’s rendering loop pauses or resumes sending updates.

## Topics

### Handling an Update Event

- [glkViewControllerUpdate:](glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md): Called before each frame is displayed.

### Pause and Resume Notifications

- [glkViewController:willPause:](glkviewcontrollerdelegate/glkviewcontroller%28__willpause_%29.md): Called before the rendering loop is paused or resumed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### OpenGL ES View Rendering

- [GLKView](glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewDelegate](glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkview.md) object.
- [GLKViewController](glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
