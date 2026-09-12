> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/snapshot](https://developer.apple.com/documentation/glkit/glkview/snapshot)

# snapshot (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Draws the contents of the view and returns them as a new image object.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var snapshot: UIImage { get }
```

<a id="return-value"></a>

## Return Value

An image object.

<a id="Discussion"></a>

## Discussion

When this method is called, the view sets up a drawing environment and calls your drawing method. However, instead of presenting the view’s contents on screen, they are returned to your application as an image instead. This method should be called whenever your application explicitly needs the contents of the view; never attempt to directly read the contents of the underlying framebuffer using OpenGL ES functions.

Never call this method inside your drawing function.

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable()](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display()](display%28%29.md): Deprecated. Redraws the view’s contents immediately.

# snapshot (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Draws the contents of the view and returns them as a new image object.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (strong, readonly) UIImage * snapshot;
```

<a id="return-value"></a>

## Return Value

An image object.

<a id="Discussion"></a>

## Discussion

When this method is called, the view sets up a drawing environment and calls your drawing method. However, instead of presenting the view’s contents on screen, they are returned to your application as an image instead. This method should be called whenever your application explicitly needs the contents of the view; never attempt to directly read the contents of the underlying framebuffer using OpenGL ES functions.

Never call this method inside your drawing function.

## See Also

### Drawing Your View’s Contents

- [context](context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable](binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display](display%28%29.md): Deprecated. Redraws the view’s contents immediately.
