> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/context](https://developer.apple.com/documentation/glkit/glkview/context)

# context (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The OpenGL ES context used when drawing the view’s contents.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var context: EAGLContext { get set }
```

<a id="Discussion"></a>

## Discussion

The view uses this context as the place to create its underlying framebuffer object and it also sets the context before calling your drawing method. Never change the context from inside your drawing method.

## See Also

### Drawing Your View’s Contents

- [bindDrawable()](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display()](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.

# context (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The OpenGL ES context used when drawing the view’s contents.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, retain) EAGLContext * context;
```

<a id="Discussion"></a>

## Discussion

The view uses this context as the place to create its underlying framebuffer object and it also sets the context before calling your drawing method. Never change the context from inside your drawing method.

## See Also

### Drawing Your View’s Contents

- [bindDrawable](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.
