> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer/init(cglcontext:options:)-1l3m2](https://developer.apple.com/documentation/quartzcore/carenderer/init(cglcontext:options:)-1l3m2)

# init(cglContext:options:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Creates and returns a `CARenderer` instance with the render target specified by the Core OpenGL context.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init(cglContext ctx: UnsafeMutableRawPointer, options dict: [AnyHashable : Any]? = nil)
```

## Parameters

- `ctx`: A Core OpenGL render context that is used as the render target.
- `dict`: A dictionary of optional parameters.

<a id="return-value"></a>

## Return Value

A new instance of `CARenderer` that will use `ctx` as the render target.

## See Also

### Creating a Renderer

- [init(mtlTexture:options:)](init%28mtltexture_options_%29-1cr0b.md): Creates a layer renderer from a Metal texture.

# rendererWithCGLContext:options: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Creates and returns a `CARenderer` instance with the render target specified by the Core OpenGL context.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (CARenderer *) rendererWithCGLContext:(void *) ctx options:(NSDictionary *) dict;
```

## Parameters

- `ctx`: A Core OpenGL render context that is used as the render target.
- `dict`: A dictionary of optional parameters.

<a id="return-value"></a>

## Return Value

A new instance of `CARenderer` that will use `ctx` as the render target.

## See Also

### Creating a Renderer

- [rendererWithMTLTexture:options:](init%28mtltexture_options_%29-1cr0b.md): Creates a layer renderer from a Metal texture.
