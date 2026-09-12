> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/enablesetneedsdisplay](https://developer.apple.com/documentation/glkit/glkview/enablesetneedsdisplay)

# enableSetNeedsDisplay (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var enableSetNeedsDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a `GLKView` object respects the standard view drawing cycle for a [UIView](../../uikit/uiview.md) object. However, many OpenGL ES applications need to update their contents explicitly in an animation rendering loop. When updating your contents in a rendering loop, the normal on-demand mechanism for view updates can be disabled by setting the value of this property to [false](https://developer.apple.com/documentation/swift/false). If your application uses a [GLKViewController](../glkviewcontroller.md) object to drive the rendering loop, the view controller automatically sets this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable()](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [display()](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.

# enableSetNeedsDisplay (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic) BOOL enableSetNeedsDisplay;
```

<a id="Discussion"></a>

## Discussion

By default, a `GLKView` object respects the standard view drawing cycle for a [UIView](../../uikit/uiview.md) object. However, many OpenGL ES applications need to update their contents explicitly in an animation rendering loop. When updating your contents in a rendering loop, the normal on-demand mechanism for view updates can be disabled by setting the value of this property to [false](https://developer.apple.com/documentation/swift/false). If your application uses a [GLKViewController](../glkviewcontroller.md) object to drive the rendering loop, the view controller automatically sets this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [display](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.
