> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(cglcontext:pixelformat:colorspace:options:)-6rp6d](https://developer.apple.com/documentation/coreimage/cicontext/init(cglcontext:pixelformat:colorspace:options:)-6rp6d)

# init(cglContext:pixelFormat:colorSpace:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.

> Core Image OpenGL API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
init(cglContext cglctx: CGLContextObj, pixelFormat: CGLPixelFormatObj?, colorSpace: CGColorSpace?, options: [CIContextOption : Any]? = nil)
```

## Parameters

- `cglctx`: A CGL context obtained by calling the CGL function `CGLCreateContext(_:_:_:)`.
- `pixelFormat`: A CGL pixel format object either obtained from the system or created by calling a CGL function such as `CGLChoosePixelFormat(_:_:_:)`. This parameter must be the same pixel format object used to create the CGL context. The pixel format object must be valid for the lifetime of the Core Image context. Don’t release the pixel format object until after you release the Core Image context.
- `colorSpace`: A color space object encapsulating color space information that is used to specify how color values are interpreted.
- `options`: A dictionary that contains options for creating a [CIContext](../cicontext.md) object. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.

<a id="Discussion"></a>

## Discussion

After calling this method, Core Image draws content into the surface (drawable object) attached to the CGL context. A CGL context is a macOS OpenGL context. For more information, see [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

When you create a [CIContext](../cicontext.md) object using a CGL context, all OpenGL states set for the CGL context affect rendering to that context. That means that coordinate and viewport transformations set on the CGL context, as well as the vertex color, affect drawing to that context.

For best results, follow these guidelines when you use Core Image to render into an OpenGL context:

- Ensure that a single unit in the coordinate space of the OpenGL context represents a single pixel in the output device.
- The Core Image coordinate space has the origin in the bottom-left corner of the screen. You should configure the OpenGL context in the same way.
- The OpenGL context blending state is respected by Core Image. If the image you want to render contains translucent pixels, it’s best to enable blending using a blend function with the parameters `GL_ONE, GL_ONE_MINUS_SRC_ALPHA`, as shown in the following code example.

Core Image manages its own internal OpenGL context that shares resources with the OpenGL context you specify. To enable resource sharing, use the following code:

**Swift**

```swift
let attr = [
    NSOpenGLPFAAccelerated,
    NSOpenGLPFANoRecovery,
    NSOpenGLPFAColorSize, 32,
    0
    ].map {NSOpenGLPixelFormatAttribute($0)}
let pf = NSOpenGLPixelFormat(attributes: attr)!
let myCIContext = CIContext(CGLContext: CGLGetCurrentContext(),
                            pixelFormat: pf.CGLPixelFormatObj,
                            colorSpace: CGColorSpaceCreateDeviceRGB(),
                            options: [:])
```

**Objective-C**

```objc
const NSOpenGLPixelFormatAttribute attr[] = {
        NSOpenGLPFAAccelerated,
        NSOpenGLPFANoRecovery,
        NSOpenGLPFAColorSize, 32,
        0
    };
NSOpenGLPixelFormat *pf = [[NSOpenGLPixelFormat alloc] initWithAttributes:(void *)&attr];
CIContext *myCIContext = [CIContext contextWithCGLContext: CGLGetCurrentContext()
                                pixelFormat: [pf CGLPixelFormatObj]
                                colorSpace: CGColorSpaceCreateDeviceRGB()
                                options: nil];
```

## See Also

### Related Documentation

- [init(cgContext:options:)](init%28cgcontext_options_%29-6p78w.md): Creates a Core Image context from a Quartz context, using the specified options.

### Deprecated

- [init(eaglContext:)](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [init(eaglContext:options:)](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display.
- [init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display, with the specified options.
- [createCGLayer(with:info:)](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [draw(\_:at:from:)](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.

# contextWithCGLContext:pixelFormat:colorSpace:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.

> Core Image OpenGL API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (CIContext *) contextWithCGLContext:(CGLContextObj) cglctx pixelFormat:(CGLPixelFormatObj) pixelFormat colorSpace:(CGColorSpaceRef) colorSpace options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `cglctx`: A CGL context obtained by calling the CGL function `CGLCreateContext(_:_:_:)`.
- `pixelFormat`: A CGL pixel format object either obtained from the system or created by calling a CGL function such as `CGLChoosePixelFormat(_:_:_:)`. This parameter must be the same pixel format object used to create the CGL context. The pixel format object must be valid for the lifetime of the Core Image context. Don’t release the pixel format object until after you release the Core Image context.
- `colorSpace`: A color space object encapsulating color space information that is used to specify how color values are interpreted.
- `options`: A dictionary that contains options for creating a [CIContext](../cicontext.md) object. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.

<a id="Discussion"></a>

## Discussion

After calling this method, Core Image draws content into the surface (drawable object) attached to the CGL context. A CGL context is a macOS OpenGL context. For more information, see [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987).

When you create a [CIContext](../cicontext.md) object using a CGL context, all OpenGL states set for the CGL context affect rendering to that context. That means that coordinate and viewport transformations set on the CGL context, as well as the vertex color, affect drawing to that context.

For best results, follow these guidelines when you use Core Image to render into an OpenGL context:

- Ensure that a single unit in the coordinate space of the OpenGL context represents a single pixel in the output device.
- The Core Image coordinate space has the origin in the bottom-left corner of the screen. You should configure the OpenGL context in the same way.
- The OpenGL context blending state is respected by Core Image. If the image you want to render contains translucent pixels, it’s best to enable blending using a blend function with the parameters `GL_ONE, GL_ONE_MINUS_SRC_ALPHA`, as shown in the following code example.

Core Image manages its own internal OpenGL context that shares resources with the OpenGL context you specify. To enable resource sharing, use the following code:

**Swift**

```swift
let attr = [
    NSOpenGLPFAAccelerated,
    NSOpenGLPFANoRecovery,
    NSOpenGLPFAColorSize, 32,
    0
    ].map {NSOpenGLPixelFormatAttribute($0)}
let pf = NSOpenGLPixelFormat(attributes: attr)!
let myCIContext = CIContext(CGLContext: CGLGetCurrentContext(),
                            pixelFormat: pf.CGLPixelFormatObj,
                            colorSpace: CGColorSpaceCreateDeviceRGB(),
                            options: [:])
```

**Objective-C**

```objc
const NSOpenGLPixelFormatAttribute attr[] = {
        NSOpenGLPFAAccelerated,
        NSOpenGLPFANoRecovery,
        NSOpenGLPFAColorSize, 32,
        0
    };
NSOpenGLPixelFormat *pf = [[NSOpenGLPixelFormat alloc] initWithAttributes:(void *)&attr];
CIContext *myCIContext = [CIContext contextWithCGLContext: CGLGetCurrentContext()
                                pixelFormat: [pf CGLPixelFormatObj]
                                colorSpace: CGColorSpaceCreateDeviceRGB()
                                options: nil];
```

## See Also

### Related Documentation

- [contextWithCGContext:options:](init%28cgcontext_options_%29-6p78w.md): Creates a Core Image context from a Quartz context, using the specified options.

### Deprecated

- [contextWithCGLContext:pixelFormat:options:](contextwithcglcontext_pixelformat_options_.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options and pixel format object.
- [contextWithEAGLContext:](init%28eaglcontext_%29-8ajef.md): Deprecated. Creates a Core Image context from an EAGL context.
- [contextWithEAGLContext:options:](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [createCGLayerWithSize:info:](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [drawImage:atPoint:fromRect:](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.
