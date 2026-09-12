> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/draw(_:at:from:)](https://developer.apple.com/documentation/coreimage/cicontext/draw(_:at:from:))

# draw(\_:at:from:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 5.0+ (deprecated in 6.0) · tvOS · visionOS 1.0+ (deprecated in 1.0)

Renders a region of an image to a point in the context destination.

> Instead use [draw(\_:in:from:)](draw%28__in_from_%29.md).

## Declaration

```swift
func draw(_ image: CIImage, at atPoint: CGPoint, from fromRect: CGRect)
```

## Parameters

- `image`: A Core Image image object.
- `atPoint`: The point in the context destination to draw to.
- `fromRect`: The region of the image to draw.

<a id="Discussion"></a>

## Discussion

This method because it is ambiguous as to the units of the dimensions and won’t work as expected in a high-resolution environment which is why you should use `drawImage:inRect:fromRect:` instead.

On iOS platforms, this method draws the image onto a render buffer for the OpenGL ES context. Use this method only if the [CIContext](../cicontext.md) object is created with `contextWithEAGLContext:`, and hence, you are rendering to a CAEAGLLayer.

## See Also

### Deprecated

- [init(cglContext:pixelFormat:colorSpace:options:)](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [init(eaglContext:)](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [init(eaglContext:options:)](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display.
- [init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display, with the specified options.
- [createCGLayer(with:info:)](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.

# drawImage:atPoint:fromRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.8) · tvOS · visionOS 1.0+ (deprecated in 1.0)

Renders a region of an image to a point in the context destination.

> Instead use [drawImage:inRect:fromRect:](draw%28__in_from_%29.md).

## Declaration

```objectivec
- (void) drawImage:(CIImage *) image atPoint:(CGPoint) atPoint fromRect:(CGRect) fromRect;
```

## Parameters

- `image`: A Core Image image object.
- `atPoint`: The point in the context destination to draw to.
- `fromRect`: The region of the image to draw.

<a id="Discussion"></a>

## Discussion

This method because it is ambiguous as to the units of the dimensions and won’t work as expected in a high-resolution environment which is why you should use `drawImage:inRect:fromRect:` instead.

On iOS platforms, this method draws the image onto a render buffer for the OpenGL ES context. Use this method only if the [CIContext](../cicontext.md) object is created with `contextWithEAGLContext:`, and hence, you are rendering to a CAEAGLLayer.

## See Also

### Deprecated

- [contextWithCGLContext:pixelFormat:colorSpace:options:](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [contextWithCGLContext:pixelFormat:options:](contextwithcglcontext_pixelformat_options_.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options and pixel format object.
- [contextWithEAGLContext:](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [contextWithEAGLContext:options:](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [createCGLayerWithSize:info:](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
