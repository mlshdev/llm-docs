> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/supportedbufferpixelformats()](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/supportedbufferpixelformats())

# supportedBufferPixelFormats() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a list of pixel formats that are supported for rendering to a memory buffer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func supportedBufferPixelFormats() -> [Any]!
```

<a id="return-value"></a>

## Return Value

A list of pixel formats, in order of preference, that the image can be rendered to in memory, or `nil` if the image provider does not support rendering to the CPU.

## See Also

### Providing Information About the Rendering Destination

- [supportedRenderedTexturePixelFormats()](supportedrenderedtexturepixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.
- [canRender(withCGLContext:)](canrender%28withcglcontext_%29.md): Deprecated. Returns whether the image data can be rendered into the provided CGL context.

# supportedBufferPixelFormats (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a list of pixel formats that are supported for rendering to a memory buffer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSArray *) supportedBufferPixelFormats;
```

<a id="return-value"></a>

## Return Value

A list of pixel formats, in order of preference, that the image can be rendered to in memory, or `nil` if the image provider does not support rendering to the CPU.

## See Also

### Providing Information About the Rendering Destination

- [supportedRenderedTexturePixelFormats](supportedrenderedtexturepixelformats%28%29.md): Deprecated. Returns a list of pixel formats that are supported for rendering to an onscreen OpenGL context.
- [canRenderWithCGLContext:](canrender%28withcglcontext_%29.md): Deprecated. Returns whether the image data can be rendered into the provided CGL context.
