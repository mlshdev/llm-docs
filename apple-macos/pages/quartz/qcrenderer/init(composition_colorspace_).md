> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcrenderer/init(composition:colorspace:)](https://developer.apple.com/documentation/quartz/qcrenderer/init(composition:colorspace:))

# init(composition:colorSpace:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates a  renderer object  with a composition object and a color space.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(composition: QCComposition!, colorSpace: CGColorSpace!)
```

## Parameters

- `composition`: A [QCComposition](../qccomposition.md) object. The composition must  not contain any consumer patches. That is, the composition can receive data, process it, and produce output values, but it cannot perform any rendering.
- `colorSpace`: A Quartz color space object. This must be an RGB color space. Pass `NULL` to use the default RGB color space. The color space is used only for the images produced by the  output image ports of the composition. For more information on Quartz color spaces, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

<a id="return-value"></a>

## Return Value

The initialized `QCRenderer` object or `nil` if initialization is not successful.

<a id="Discussion"></a>

## Discussion

Note that [snapshotImage()](snapshotimage%28%29.md) and [createSnapshotImage(ofType:)](createsnapshotimage%28oftype_%29.md) always returns `nil` on such `QCRenderer` instances.

## See Also

### Creating and Initializing a Renderer

- [init(openGLContext:pixelFormat:file:)](init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [init(cglContext:pixelFormat:colorSpace:composition:)](init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
- [init(offScreenWith:colorSpace:composition:)](init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.

# initWithComposition:colorSpace: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates a  renderer object  with a composition object and a color space.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initWithComposition:(QCComposition *) composition colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `composition`: A [QCComposition](../qccomposition.md) object. The composition must  not contain any consumer patches. That is, the composition can receive data, process it, and produce output values, but it cannot perform any rendering.
- `colorSpace`: A Quartz color space object. This must be an RGB color space. Pass `NULL` to use the default RGB color space. The color space is used only for the images produced by the  output image ports of the composition. For more information on Quartz color spaces, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

<a id="return-value"></a>

## Return Value

The initialized `QCRenderer` object or `nil` if initialization is not successful.

<a id="Discussion"></a>

## Discussion

Note that [snapshotImage](snapshotimage%28%29.md) and [createSnapshotImageOfType:](createsnapshotimage%28oftype_%29.md) always returns `nil` on such `QCRenderer` instances.

## See Also

### Creating and Initializing a Renderer

- [initWithOpenGLContext:pixelFormat:file:](init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [initWithCGLContext:pixelFormat:colorSpace:composition:](init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
- [initOffScreenWithSize:colorSpace:composition:](init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.
