> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewdelegate](https://developer.apple.com/documentation/glkit/glkviewdelegate)

# GLKViewDelegate (Swift)

**Framework:** GLKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Drawing callback methods for use with a [GLKView](glkview.md) object.

## Declaration

```swift
protocol GLKViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An object that implements the [GLKViewDelegate](glkviewdelegate.md) protocol can be set as a [GLKView](glkview.md) object’s delegate. A delegate allows your application to provide a drawing method to a [GLKView](glkview.md) object without subclassing the [GLKView](glkview.md) class.

## Topics

### Drawing the View’s Contents

- [glkView(\_:drawIn:)](glkviewdelegate/glkview%28__drawin_%29.md): Draws the view’s contents.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GLKViewController](glkviewcontroller.md)

## See Also

### OpenGL ES View Rendering

- [GLKView](glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewController](glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
- [GLKViewControllerDelegate](glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.

# GLKViewDelegate (Objective-C)

**Framework:** GLKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Drawing callback methods for use with a [GLKView](glkview.md) object.

## Declaration

```objectivec
@protocol GLKViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

An object that implements the [GLKViewDelegate](glkviewdelegate.md) protocol can be set as a [GLKView](glkview.md) object’s delegate. A delegate allows your application to provide a drawing method to a [GLKView](glkview.md) object without subclassing the [GLKView](glkview.md) class.

## Topics

### Drawing the View’s Contents

- [glkView:drawInRect:](glkviewdelegate/glkview%28__drawin_%29.md): Draws the view’s contents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GLKViewController](glkviewcontroller.md)

## See Also

### OpenGL ES View Rendering

- [GLKView](glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewController](glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
- [GLKViewControllerDelegate](glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.
