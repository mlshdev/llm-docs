> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/supportedrenderedtexturepixelformats()](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/supportedrenderedtexturepixelformats())

# supportedRenderedTexturePixelFormats() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func supportedRenderedTexturePixelFormats() -> [Any]!
```

<a id="return-value"></a>

## Return Value

Returns the list of texture pixel formats supported by [copyRenderedTexture(forCGLContext:pixelFormat:bounds:isFlipped:)](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md) or `nil` if not supported.

<a id="Discussion"></a>

## Discussion

If this method returns nil, then Quartz Composer calls [canRender(withCGLContext:)](canrender%28withcglcontext_%29.md) /[render(withCGLContext:forBounds:)](render%28withcglcontext_forbounds_%29.md).

## See Also

### Providing Information About the Rendering Destination

- [supportedBufferPixelFormats()](supportedbufferpixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to a memory buffer.
- [canRender(withCGLContext:)](canrender%28withcglcontext_%29.md): Deprecated. Returns whether the image data can be rendered into the provided CGL context.

# supportedRenderedTexturePixelFormats (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSArray *) supportedRenderedTexturePixelFormats;
```

<a id="return-value"></a>

## Return Value

Returns the list of texture pixel formats supported by [copyRenderedTextureForCGLContext:pixelFormat:bounds:isFlipped:](copyrenderedtexture%28forcglcontext_pixelformat_bounds_isflipped_%29.md) or `nil` if not supported.

<a id="Discussion"></a>

## Discussion

If this method returns nil, then Quartz Composer calls [canRenderWithCGLContext:](canrender%28withcglcontext_%29.md) /[renderWithCGLContext:forBounds:](render%28withcglcontext_forbounds_%29.md).

## See Also

### Providing Information About the Rendering Destination

- [supportedBufferPixelFormats](supportedbufferpixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to a memory buffer.
- [canRenderWithCGLContext:](canrender%28withcglcontext_%29.md): Deprecated. Returns whether the image data can be rendered into the provided CGL context.
