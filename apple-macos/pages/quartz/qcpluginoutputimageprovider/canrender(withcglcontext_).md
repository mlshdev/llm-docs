> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/canrender(withcglcontext:)](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/canrender(withcglcontext:))

# canRender(withCGLContext:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns whether the image data can be rendered into the provided CGL context.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func canRender(withCGLContext cgl_ctx: CGLContextObj!) -> Bool
```

## Parameters

- `cgl_ctx`: The CGL context that your image will be rendered to.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image can be rendered into this CGL context; otherwise [false](https://developer.apple.com/documentation/swift/false), in which case [render(toBuffer:withBytesPerRow:pixelFormat:forBounds:)](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md) is called.

<a id="Discussion"></a>

## Discussion

If your image can render using any OpenGL context, simply return [true](https://developer.apple.com/documentation/swift/true). If your code requires special extensions, you’ll need to check for them and then provide the appropriate return value. For more information on checking for OpenGL capabilities supported by the hardware, see [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

## See Also

### Providing Information About the Rendering Destination

- [supportedBufferPixelFormats()](supportedbufferpixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to a memory buffer.
- [supportedRenderedTexturePixelFormats()](supportedrenderedtexturepixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.

# canRenderWithCGLContext: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns whether the image data can be rendered into the provided CGL context.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) canRenderWithCGLContext:(CGLContextObj) cgl_ctx;
```

## Parameters

- `cgl_ctx`: The CGL context that your image will be rendered to.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image can be rendered into this CGL context; otherwise [false](https://developer.apple.com/documentation/swift/false), in which case [renderToBuffer:withBytesPerRow:pixelFormat:forBounds:](render%28tobuffer_withbytesperrow_pixelformat_forbounds_%29.md) is called.

<a id="Discussion"></a>

## Discussion

If your image can render using any OpenGL context, simply return [true](https://developer.apple.com/documentation/swift/true). If your code requires special extensions, you’ll need to check for them and then provide the appropriate return value. For more information on checking for OpenGL capabilities supported by the hardware, see [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

## See Also

### Providing Information About the Rendering Destination

- [supportedBufferPixelFormats](supportedbufferpixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to a memory buffer.
- [supportedRenderedTexturePixelFormats](supportedrenderedtexturepixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.
