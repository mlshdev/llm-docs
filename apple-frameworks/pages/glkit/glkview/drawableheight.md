> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/drawableheight](https://developer.apple.com/documentation/glkit/glkview/drawableheight)

# drawableHeight (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The height, in pixels, of the underlying framebuffer object.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var drawableHeight: Int { get }
```

<a id="Discussion"></a>

## Discussion

The height and width of the underlying framebuffer object is calculated automatically by the view object based on its[bounds](../../uikit/uiview/bounds.md) and [contentScaleFactor](../../uikit/uiview/contentscalefactor.md) properties and change whenever either of those properties change. Your application never directly adjusts the size of the framebuffer object. Instead, your application should read the [drawableHeight](drawableheight.md) and [drawableWidth](drawablewidth.md) properties and use those to configure its OpenGL ES rendering code. For example, you might use the [drawableHeight](drawableheight.md) and [drawableWidth](drawablewidth.md) properties to set the OpenGL ES viewport, determining the size and complexity of the art assets to load, and so on.

## See Also

### Read-only Framebuffer Properties

- [drawableWidth](drawablewidth.md): Deprecated. The width, in pixels, of the underlying framebuffer object.

# drawableHeight (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The height, in pixels, of the underlying framebuffer object.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger drawableHeight;
```

<a id="Discussion"></a>

## Discussion

The height and width of the underlying framebuffer object is calculated automatically by the view object based on its[bounds](../../uikit/uiview/bounds.md) and [contentScaleFactor](../../uikit/uiview/contentscalefactor.md) properties and change whenever either of those properties change. Your application never directly adjusts the size of the framebuffer object. Instead, your application should read the [drawableHeight](drawableheight.md) and [drawableWidth](drawablewidth.md) properties and use those to configure its OpenGL ES rendering code. For example, you might use the [drawableHeight](drawableheight.md) and [drawableWidth](drawablewidth.md) properties to set the OpenGL ES viewport, determining the size and complexity of the art assets to load, and so on.

## See Also

### Read-only Framebuffer Properties

- [drawableWidth](drawablewidth.md): Deprecated. The width, in pixels, of the underlying framebuffer object.
