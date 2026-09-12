> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/contextwithcglcontext:pixelformat:options:](https://developer.apple.com/documentation/coreimage/cicontext/contextwithcglcontext:pixelformat:options:)

# contextWithCGLContext:pixelFormat:options:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.6)

Creates a Core Image context from a CGL context, using the specified options and pixel format object.

> Instead use [contextWithCGLContext:pixelFormat:colorSpace:options:](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md).

## Declaration

```objectivec
+ (CIContext *) contextWithCGLContext:(CGLContextObj) cglctx pixelFormat:(CGLPixelFormatObj) pixelFormat options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `cglctx`: A CGL context (`CGLContextObj` object) obtain by calling the CGL function `CGLCreateContext`.
- `pixelFormat`: A CGL pixel format object (`CGLPixelFormatObj` object) created by calling the CGL function `CGLChoosePixelFormat`. This argument must be the same pixel format object used to create the CGL context. The pixel format object must be valid for the lifetime of the Core Image context. Don’t release the pixel format object until after you release the Core Image context.
- `options`: A dictionary that contains color space information. You can provide the keys [kCIContextOutputColorSpace](../cicontextoption/outputcolorspace.md) or [kCIContextWorkingColorSpace](../cicontextoption/workingcolorspace.md) along with a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) object for each color space.

## See Also

### Related Documentation

- [contextWithCGContext:options:](init%28cgcontext_options_%29-6p78w.md): Creates a Core Image context from a Quartz context, using the specified options.

### Deprecated

- [contextWithCGLContext:pixelFormat:colorSpace:options:](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [contextWithEAGLContext:](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [contextWithEAGLContext:options:](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [createCGLayerWithSize:info:](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [drawImage:atPoint:fromRect:](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.
