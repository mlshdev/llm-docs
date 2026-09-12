> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/display()](https://developer.apple.com/documentation/glkit/glkview/display())

# display() (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Redraws the view’s contents immediately.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func display()
```

<a id="Discussion"></a>

## Discussion

This method causes your drawing method to be called immediately and then presents the rendered image to the screen. Your application typically calls this method inside of a rendering loop, such as the one provided by the [GLKViewController](../glkviewcontroller.md) class, in order to provide a continuous smooth animation.

Never call this method inside your drawing function.

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable()](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.

# display (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Redraws the view’s contents immediately.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) display;
```

<a id="Discussion"></a>

## Discussion

This method causes your drawing method to be called immediately and then presents the rendered image to the screen. Your application typically calls this method inside of a rendering loop, such as the one provided by the [GLKViewController](../glkviewcontroller.md) class, in order to provide a continuous smooth animation.

Never call this method inside your drawing function.

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.
