> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/binddrawable()](https://developer.apple.com/documentation/glkit/glkview/binddrawable())

# bindDrawable() (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Binds the underlying framebuffer object to OpenGL ES.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func bindDrawable()
```

<a id="Discussion"></a>

## Discussion

Before calling your drawing method, the view binds the underlying framebuffer object to the context so that rendering commands are automatically drawn into it. However, some rendering strategies require you to change the target of your rendering commands to another framebuffer object, such as when you need to render to a texture first. If your application changed the framebuffer object bound to OpenGL ES, it calls this method to rebind the view’s framebuffer object to OpenGL ES.

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display()](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.

# bindDrawable (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Binds the underlying framebuffer object to OpenGL ES.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) bindDrawable;
```

<a id="Discussion"></a>

## Discussion

Before calling your drawing method, the view binds the underlying framebuffer object to the context so that rendering commands are automatically drawn into it. However, some rendering strategies require you to change the target of your rendering commands to another framebuffer object, such as when you need to render to a texture first. If your application changed the framebuffer object bound to OpenGL ES, it calls this method to rebind the view’s framebuffer object to OpenGL ES.

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.
