> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/drawablecolorformat](https://developer.apple.com/documentation/glkit/glkview/drawablecolorformat)

# drawableColorFormat (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The format of the color renderbuffer.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var drawableColorFormat: GLKViewDrawableColorFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKViewDrawableColorFormat.RGBA8888](../glkviewdrawablecolorformat/rgba8888.md).

After your application changes the value of this property, the view recreates its framebuffer object the next time the view is drawn.

## See Also

### Configuring the Framebuffer Object

- [drawableDepthFormat](drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableStencilFormat](drawablestencilformat.md): Deprecated. The format of the stencil renderbuffer.
- [drawableMultisample](drawablemultisample.md): Deprecated. The format of the multisampling buffer.

# drawableColorFormat (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The format of the color renderbuffer.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic) GLKViewDrawableColorFormat drawableColorFormat;
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKViewDrawableColorFormatRGBA8888](../glkviewdrawablecolorformat/rgba8888.md).

After your application changes the value of this property, the view recreates its framebuffer object the next time the view is drawn.

## See Also

### Configuring the Framebuffer Object

- [drawableDepthFormat](drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableStencilFormat](drawablestencilformat.md): Deprecated. The format of the stencil renderbuffer.
- [drawableMultisample](drawablemultisample.md): Deprecated. The format of the multisampling buffer.
