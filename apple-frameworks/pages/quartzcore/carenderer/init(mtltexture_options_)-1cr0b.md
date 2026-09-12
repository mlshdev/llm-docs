> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer/init(mtltexture:options:)-1cr0b](https://developer.apple.com/documentation/quartzcore/carenderer/init(mtltexture:options:)-1cr0b)

# init(mtlTexture:options:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a layer renderer from a Metal texture.

## Declaration

```swift
init(mtlTexture tex: any MTLTexture, options dict: [AnyHashable : Any]? = nil)
```

## See Also

### Creating a Renderer

- [init(cglContext:options:)](init%28cglcontext_options_%29-1l3m2.md): Deprecated. Creates and returns a `CARenderer` instance with the render target specified by the Core OpenGL context.

# rendererWithMTLTexture:options: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a layer renderer from a Metal texture.

## Declaration

```objectivec
+ (CARenderer *) rendererWithMTLTexture:(id<MTLTexture>) tex options:(NSDictionary *) dict;
```

## See Also

### Creating a Renderer

- [rendererWithCGLContext:options:](init%28cglcontext_options_%29-1l3m2.md): Deprecated. Creates and returns a `CARenderer` instance with the render target specified by the Core OpenGL context.
