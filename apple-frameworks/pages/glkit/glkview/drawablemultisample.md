> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/drawablemultisample](https://developer.apple.com/documentation/glkit/glkview/drawablemultisample)

# drawableMultisample (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The format of the multisampling buffer.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var drawableMultisample: GLKViewDrawableMultisample { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKViewDrawableMultisample.multisampleNone](../glkviewdrawablemultisample/multisamplenone.md).

After your application changes the value of this property, the view recreates its framebuffer object the next time the view is drawn.

## See Also

### Configuring the Framebuffer Object

- [drawableColorFormat](drawablecolorformat.md): Deprecated. The format of the color renderbuffer.
- [drawableDepthFormat](drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableStencilFormat](drawablestencilformat.md): Deprecated. The format of the stencil renderbuffer.

# drawableMultisample (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The format of the multisampling buffer.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic) GLKViewDrawableMultisample drawableMultisample;
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKViewDrawableMultisampleNone](../glkviewdrawablemultisample/multisamplenone.md).

After your application changes the value of this property, the view recreates its framebuffer object the next time the view is drawn.

## See Also

### Configuring the Framebuffer Object

- [drawableColorFormat](drawablecolorformat.md): Deprecated. The format of the color renderbuffer.
- [drawableDepthFormat](drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableStencilFormat](drawablestencilformat.md): Deprecated. The format of the stencil renderbuffer.
