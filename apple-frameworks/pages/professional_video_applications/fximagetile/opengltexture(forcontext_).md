> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetile/opengltexture(forcontext:)](https://developer.apple.com/documentation/professional_video_applications/fximagetile/opengltexture(forcontext:))

# openGLTexture(forContext:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+ (deprecated in 4.3.3)

Retrieve an OpenGL texture from the [ioSurface](iosurface.md) for rendering with the passed-in context. You are responsible for deleting this texture.

> Call `CGLTexImageIOSurface2D()` to convert from IOSurface to OpenGL Texture manually.

## Declaration

```swift
func openGLTexture(forContext openGLContext: CGLContextObj!) -> GLuint
```

## See Also

### Instance Methods

- [metalTexture(for:)](metaltexture%28for_%29.md): Retrieve a Metal texture from the IOSurface for rendering on the passed-in device. The returned texture is autoreleased.

# openGLTextureForContext: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Retrieve an OpenGL texture from the [ioSurface](iosurface.md) for rendering with the passed-in context. You are responsible for deleting this texture.

> Call `CGLTexImageIOSurface2D()` to convert from IOSurface to OpenGL Texture manually.

## Declaration

```objectivec
- (GLuint) openGLTextureForContext:(CGLContextObj) openGLContext;
```

## See Also

### Instance Methods

- [metalTextureForDevice:](metaltexture%28for_%29.md): Retrieve a Metal texture from the IOSurface for rendering on the passed-in device. The returned texture is autoreleased.
