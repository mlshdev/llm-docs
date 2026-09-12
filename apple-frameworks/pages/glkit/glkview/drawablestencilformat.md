> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/drawablestencilformat](https://developer.apple.com/documentation/glkit/glkview/drawablestencilformat)

# drawableStencilFormat (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The format of the stencil renderbuffer.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var drawableStencilFormat: GLKViewDrawableStencilFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKViewDrawableStencilFormat.formatNone](../glkviewdrawablestencilformat/formatnone.md).

After your application changes the value of this property, the view recreates its framebuffer object the next time the view is drawn.

## See Also

### Configuring the Framebuffer Object

- [drawableColorFormat](drawablecolorformat.md): Deprecated. The format of the color renderbuffer.
- [drawableDepthFormat](drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableMultisample](drawablemultisample.md): Deprecated. The format of the multisampling buffer.

# drawableStencilFormat (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The format of the stencil renderbuffer.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic) GLKViewDrawableStencilFormat drawableStencilFormat;
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKViewDrawableStencilFormatNone](../glkviewdrawablestencilformat/formatnone.md).

After your application changes the value of this property, the view recreates its framebuffer object the next time the view is drawn.

## See Also

### Configuring the Framebuffer Object

- [drawableColorFormat](drawablecolorformat.md): Deprecated. The format of the color renderbuffer.
- [drawableDepthFormat](drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableMultisample](drawablemultisample.md): Deprecated. The format of the multisampling buffer.
